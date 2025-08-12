import React, { useState, useEffect } from 'react';
import ModeSelector from './components/ModeSelector';
import QuestionCard from './components/QuestionCard';
import ResultsScreen from './components/ResultScreen';
import { MODES } from './utils/constants';
import { unmaskAnswer } from './utils/answerMasking';
import { hungarianCultureQuestions } from './utils/testData'; // Используем новые венгерские вопросы
import { Mode, Question, QuizResult } from './types';

interface QuizSettings {
  mode: Mode;
  questionCount: number;
  shuffle: boolean;
}

// Функция для перемешивания массива (алгоритм Фишера-Йетса)
const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const HungarianQuizApp: React.FC = () => {
  const [currentSettings, setCurrentSettings] = useState<QuizSettings | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<QuizResult[]>([]);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [quizComplete, setQuizComplete] = useState<boolean>(false);
  const [questions, setQuestions] = useState<Question[]>([]);

  // Инициализация вопросов в зависимости от настроек
  useEffect(() => {
    if (currentSettings) {
      let selectedQuestions = [...hungarianCultureQuestions];

      // Перемешиваем, если включено
      if (currentSettings.shuffle) {
        selectedQuestions = shuffleArray(selectedQuestions);
      }

      // Ограничиваем количество вопросов
      if (currentSettings.questionCount < selectedQuestions.length) {
        selectedQuestions = selectedQuestions.slice(0, currentSettings.questionCount);
      }

      setQuestions(selectedQuestions);
      setCurrentQuestionIndex(0);
      setUserAnswers([]);
      setShowAnswer(false);
      setQuizComplete(false);

      // Устанавливаем таймер для режима тренировки
      if (currentSettings.mode === MODES.PRACTICE) {
        setTimeLeft(60);
      } else {
        setTimeLeft(null);
      }
    }
  }, [currentSettings]);

  // Таймер для режима тренировки
  useEffect(() => {
    if (timeLeft !== null && timeLeft > 0 && !showAnswer && !quizComplete) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      handleTimeUp();
    }
  }, [timeLeft, showAnswer, quizComplete]);

  const handleTimeUp = (): void => {
    if (currentSettings?.mode === MODES.PRACTICE) {
      handleAnswer(null);
    }
  };

  const handleAnswer = (answer: number | string | null): void => {
    const currentQuestion = questions[currentQuestionIndex];
    const correctAnswer = unmaskAnswer(currentQuestion.correctAnswer);

    let isCorrect = false;
    if (currentQuestion.type === 'multiple_choice') {
      isCorrect = answer === correctAnswer;
    } else {
      if (Array.isArray(correctAnswer) && typeof answer === 'string') {
        isCorrect = correctAnswer.some((correct: string) =>
          correct.toLowerCase() === answer.toLowerCase()
        );
      }
    }

    const result: QuizResult = {
      questionId: currentQuestion.id,
      userAnswer: answer,
      correct: isCorrect,
      timeSpent: currentSettings?.mode === MODES.PRACTICE ? (timeLeft ? 60 - timeLeft : null) : null
    };

    setUserAnswers([...userAnswers, result]);

    if (currentSettings?.mode === MODES.STUDY) {
      setShowAnswer(true);
    } else {
      setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          if (currentSettings?.mode === MODES.PRACTICE) {
            setTimeLeft(60);
          }
        } else {
          setQuizComplete(true);
        }
      }, 1000);
    }
  };

  const handleNextQuestion = (): void => {
    setShowAnswer(false);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizComplete(true);
    }
  };

  const resetQuiz = (): void => {
    setCurrentSettings(null);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setShowAnswer(false);
    setTimeLeft(null);
    setQuizComplete(false);
    setQuestions([]);
  };

  const restartCurrentMode = (): void => {
    const settings = currentSettings;
    setCurrentSettings(null);
    setTimeout(() => setCurrentSettings(settings), 100);
  };

  if (!currentSettings) {
    return (
      <ModeSelector
        onSelect={setCurrentSettings}
        totalQuestions={hungarianCultureQuestions.length}
      />
    );
  }

  if (quizComplete) {
    return (
      <ResultsScreen
        results={userAnswers}
        questions={questions}
        onRestart={restartCurrentMode}
        onBackToMenu={resetQuiz}
        mode={currentSettings.mode}
      />
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      {/* Прогресс бар и информация */}
      <div className="max-w-2xl mx-auto mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">
            Вопрос {currentQuestionIndex + 1} из {questions.length}
          </span>
          <div className="flex items-center space-x-4">
            {currentSettings.mode === MODES.PRACTICE && timeLeft !== null && (
              <span className={`text-sm font-mono ${timeLeft <= 10 ? 'text-red-500' : 'text-gray-600'}`}>
                ⏰ {timeLeft}с
              </span>
            )}
            <button
              onClick={resetQuiz}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Выйти
            </button>
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
          />
        </div>

        {/* Информация о режиме */}
        <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
          <span>
            Режим: {currentSettings.mode === MODES.STUDY ? 'Изучение' : 'Тренировка'}
          </span>
          <span>
            {currentSettings.shuffle ? 'Перемешано' : 'По порядку'}
          </span>
        </div>
      </div>

      <QuestionCard
        question={currentQuestion}
        onAnswer={handleAnswer}
        showAnswer={showAnswer}
        userAnswer={userAnswers[currentQuestionIndex]?.userAnswer}
        mode={currentSettings.mode}
        timeLeft={timeLeft}
      />

      {showAnswer && currentSettings.mode === MODES.STUDY && (
        <div className="max-w-2xl mx-auto mt-6">
          <button
            onClick={handleNextQuestion}
            className="w-full bg-green-500 text-white py-4 rounded-xl font-semibold text-lg hover:bg-green-600 transition-colors"
          >
            {currentQuestionIndex < questions.length - 1 ? 'Следующий вопрос' : 'Завершить'}
          </button>
        </div>
      )}
    </div>
  );
};

export default HungarianQuizApp;