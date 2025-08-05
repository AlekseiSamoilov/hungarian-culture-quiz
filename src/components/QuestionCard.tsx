import type { Mode, Question } from "../types/index.js";
import { Clock, CheckCircle, XCircle } from 'lucide-react';
import React, { useState } from 'react'
import { unmaskAnswer } from "../utils/answerMasking.js";

interface IQuestionCardProps {
    question: Question;
    onAnswer: (answer: number | string) => void;
    showAnswer: boolean;
    userAnswer?: number | string | null;
    mode: Mode;
    timeLeft: number | null;
}



const QuestionCard: React.FC<IQuestionCardProps> = ({
    question,
    onAnswer,
    showAnswer,
    userAnswer,
    mode,
    timeLeft
}) => {
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [textInput, setTextInput] = useState<string>('');

    const correctAnser = unmaskAnswer(question.correctAnswer);

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
            return userAnswer === correctAnser
        } else {
            if (Array.isArray(correctAnser) && typeof userAnswer === 'string') {
                return correctAnser.Answer.some((answer: string) =>
                    answer.toLowerCase() === userAnswer.toLowerCase()
                );
            }
            return false;
        }
    };

    return (
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">
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
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">
                {question.question}
            </h2>
        </div>
    )
}

export default QuestionCard
