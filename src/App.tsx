import React, { useState, useEffect } from 'react';
import ModeSelector from './components/ModeSelector';
import QuestionCard from './components/QuestionCard';
import ResultsScreen from './components/ResultScreen';
import { MODES } from './utils/constants';
import { unmaskAnswer } from './utils/answerMasking';
import { testQuestions } from './utils/testData';
import { Mode, Question, QuizResult } from './types';

const HungarianQuizApp: React.FC = () => {
  const [currentMode, setCurrentMode] = useState<Mode | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<QuizResult[]>([]);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [quizComplete, setQuizComplete] = useState<boolean>(false);
  const [questions, setQuestions] = useState<Question[]>([]);

  // Инициализация вопросов в зависимости от режима
  useEffect(() => {
    if (currentMode) {
      let selectedQuestions = [...testQuestions];

      if (currentMode === MODES.PRACTICE || currentMode === MODES.EXAM) {
        selectedQuestions = selectedQuestions.sort(() => Math.random() - 0.5);
      }

      if (currentMode === MODES.REVIEW) {
        selectedQuestions = selectedQuestions.filter(q => q.difficulty >= 2);
      }

      setQuestions(selectedQuestions);
      setCurrentQuestionIndex(0);
      setUserAnswers([]);
      setShowAnswer(false);
      setQuizComplete(false);

      if (currentMode === MODES.PRACTICE) {
        setTimeLeft(60);
      } else if (currentMode === MODES.EXAM) {
        setTimeLeft(selectedQuestions.length * 90);
      } else {
        setTimeLeft(null);
      }
    }
  }, [currentMode]);

  // Таймер
  useEffect(() => {
    if (timeLeft !== null && timeLeft > 0 && !showAnswer && !quizComplete) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      handleTimeUp();
    }
  }, [timeLeft, showAnswer, quizComplete]);

  const handleTimeUp = (): void => {
    if (currentMode === MODES.PRACTICE) {
      handleAnswer(null);
    } else if (currentMode === MODES.EXAM) {
      setQuizComplete(true);
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
      timeSpent: currentMode === MODES.PRACTICE ? (timeLeft ? 60 - timeLeft : null) : null
    };

    setUserAnswers([...userAnswers, result]);

    if (currentMode === MODES.STUDY) {
      setShowAnswer(true);
    } else {
      setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          if (currentMode === MODES.PRACTICE) {
            setTimeLeft(60);
          }
        } else {
          setQuizComplete(true);
        }
      }, currentMode === MODES.STUDY ? 0 : 1000);
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
    setCurrentMode(null);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setShowAnswer(false);
    setTimeLeft(null);
    setQuizComplete(false);
    setQuestions([]);
  };

  const restartCurrentMode = (): void => {
    const mode = currentMode;
    setCurrentMode(null);
    setTimeout(() => setCurrentMode(mode), 100);
  };

  if (!currentMode) {
    return <ModeSelector onSelect={setCurrentMode} />;
  }

  if (quizComplete) {
    return (
      <ResultsScreen
        results={userAnswers}
        onRestart={restartCurrentMode}
        onBackToMenu={resetQuiz}
      />
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">
            Вопрос {currentQuestionIndex + 1} из {questions.length}
          </span>
          <button
            onClick={resetQuiz}
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            Выйти
          </button>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <QuestionCard
        question={currentQuestion}
        onAnswer={handleAnswer}
        showAnswer={showAnswer}
        userAnswer={userAnswers[currentQuestionIndex]?.userAnswer}
        mode={currentMode}
        timeLeft={timeLeft}
      />

      {showAnswer && currentMode === MODES.STUDY && (
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