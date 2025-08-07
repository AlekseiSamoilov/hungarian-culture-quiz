import React from 'react';
import { QuizResult } from '../types';

interface ResultsScreenProps {
    results: QuizResult[];
    onRestart: () => void;
    onBackToMenu: () => void;
}

const ResultsScreen: React.FC<ResultsScreenProps> = ({
    results,
    onRestart,
    onBackToMenu
}) => {
    const correctCount = results.filter(r => r.correct).length;
    const totalCount = results.length;
    const percentage = Math.round((correctCount / totalCount) * 100);

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-8 text-center">
                <div className="mb-8">
                    <div className={`w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center ${percentage >= 80 ? 'bg-green-100' : percentage >= 60 ? 'bg-yellow-100' : 'bg-red-100'
                        }`}>
                        <span className={`text-3xl font-bold ${percentage >= 80 ? 'text-green-600' : percentage >= 60 ? 'text-yellow-600' : 'text-red-600'
                            }`}>
                            {percentage}%
                        </span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        Тест завершён!
                    </h2>
                    <p className="text-xl text-gray-600">
                        Правильных ответов: {correctCount} из {totalCount}
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                    <button
                        onClick={onRestart}
                        className="bg-blue-500 text-white py-3 px-6 rounded-xl font-semibold hover:bg-blue-600 transition-colors"
                    >
                        Начать заново
                    </button>
                    <button
                        onClick={onBackToMenu}
                        className="bg-gray-500 text-white py-3 px-6 rounded-xl font-semibold hover:bg-gray-600 transition-colors"
                    >
                        В главное меню
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ResultsScreen;