import React, { useState } from 'react';
import { Clock, CheckCircle, XCircle } from 'lucide-react';
import { unmaskAnswer } from '../utils/answerMasking';
import { MODES } from '../utils/constants';
import { Question, Mode } from '../types';

interface QuestionCardProps {
    question: Question;
    onAnswer: (answer: number | string) => void;
    showAnswer: boolean;
    userAnswer?: number | string | null;
    mode: Mode;
    timeLeft: number | null;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
    question,
    onAnswer,
    showAnswer,
    userAnswer,
    mode,
    timeLeft
}) => {
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [textInput, setTextInput] = useState<string>('');

    const correctAnswer = unmaskAnswer(question.correctAnswer);

    const handleSubmit = (): void => {
        if (question.type === 'multiple_choice') {
            if (selectedOption !== null) {
                onAnswer(selectedOption);
            }
        } else {
            onAnswer(textInput.toLowerCase().trim());
        }
    };

    const isCorrect = (): boolean => {
        if (question.type === 'multiple_choice') {
            return userAnswer === correctAnswer;
        } else {
            if (Array.isArray(correctAnswer) && typeof userAnswer === 'string') {
                return correctAnswer.some((answer: string) =>
                    answer.toLowerCase() === userAnswer.toLowerCase()
                );
            }
            return false;
        }
    };

    return (
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">
            {/* Заголовок с таймером */}
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center space-x-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        {question.category}
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-sm">
                        Сложность: {question.difficulty}/3
                    </span>
                </div>
                {timeLeft !== null && (
                    <div className="flex items-center text-red-500">
                        <Clock className="w-4 h-4 mr-1" />
                        <span className="font-mono">
                            {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
                        </span>
                    </div>
                )}
            </div>

            {/* Вопрос */}
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">
                {question.question}
            </h2>

            {/* Варианты ответов или поле ввода */}
            {question.type === 'multiple_choice' && question.options ? (
                <div className="space-y-3 mb-8">
                    {question.options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedOption(index)}
                            disabled={showAnswer}
                            className={`w-full text-left p-4 rounded-xl border-2 transition-all ${showAnswer
                                    ? index === correctAnswer
                                        ? 'border-green-500 bg-green-50'
                                        : index === userAnswer && index !== correctAnswer
                                            ? 'border-red-500 bg-red-50'
                                            : 'border-gray-200 bg-gray-50'
                                    : selectedOption === index
                                        ? 'border-blue-500 bg-blue-50'
                                        : 'border-gray-200 hover:border-gray-300 bg-white'
                                }`}
                        >
                            <div className="flex items-center">
                                <span className="w-8 h-8 rounded-full border-2 border-current flex items-center justify-center mr-3 text-sm font-medium">
                                    {String.fromCharCode(65 + index)}
                                </span>
                                {option}
                                {showAnswer && index === correctAnswer && (
                                    <CheckCircle className="w-5 h-5 text-green-500 ml-auto" />
                                )}
                                {showAnswer && index === userAnswer && index !== correctAnswer && (
                                    <XCircle className="w-5 h-5 text-red-500 ml-auto" />
                                )}
                            </div>
                        </button>
                    ))}
                </div>
            ) : (
                <div className="mb-8">
                    <input
                        type="text"
                        value={textInput}
                        onChange={(e) => setTextInput(e.target.value)}
                        disabled={showAnswer}
                        placeholder="Введите ваш ответ..."
                        className={`w-full p-4 text-lg border-2 rounded-xl ${showAnswer
                                ? isCorrect()
                                    ? 'border-green-500 bg-green-50'
                                    : 'border-red-500 bg-red-50'
                                : 'border-gray-300 focus:border-blue-500 focus:outline-none'
                            }`}
                    />
                    {showAnswer && Array.isArray(correctAnswer) && (
                        <div className="mt-2 text-sm">
                            <span className="text-gray-600">Правильные ответы: </span>
                            <span className="font-medium text-green-600">
                                {correctAnswer.join(', ')}
                            </span>
                        </div>
                    )}
                </div>
            )}

            {/* Объяснение */}
            {showAnswer && (
                <div className="bg-blue-50 rounded-xl p-6 mb-8">
                    <h3 className="font-semibold text-blue-900 mb-2">Объяснение:</h3>
                    <p className="text-blue-800">{question.explanation}</p>
                </div>
            )}

            {/* Кнопка отправки */}
            {!showAnswer && (
                <button
                    onClick={handleSubmit}
                    disabled={
                        question.type === 'multiple_choice'
                            ? selectedOption === null
                            : !textInput.trim()
                    }
                    className="w-full bg-blue-500 text-white py-4 rounded-xl font-semibold text-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                >
                    {mode === MODES.STUDY ? 'Показать ответ' : 'Ответить'}
                </button>
            )}
        </div>
    );
};

export default QuestionCard;