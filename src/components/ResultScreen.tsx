import React from 'react';
import { CheckCircle, XCircle, Clock, RotateCcw, Home, Trophy, Target } from 'lucide-react';
import { QuizResult, Question, Mode } from '../types';
import { unmaskAnswer } from '../utils/answerMasking';
import { MODES } from '../utils/constants';

interface ResultsScreenProps {
    results: QuizResult[];
    questions: Question[];
    onRestart: () => void;
    onBackToMenu: () => void;
    mode: Mode;
}

const ResultsScreen: React.FC<ResultsScreenProps> = ({
    results,
    questions,
    onRestart,
    onBackToMenu,
    mode
}) => {
    const correctAnswers = results.filter(result => result.correct).length;
    const totalQuestions = results.length;
    const percentage = Math.round((correctAnswers / totalQuestions) * 100);

    // Подсчет статистики по времени (только для режима тренировки)
    const timeStats = mode === MODES.PRACTICE ? {
        totalTime: results.reduce((sum, result) => sum + (result.timeSpent || 0), 0),
        averageTime: results.reduce((sum, result) => sum + (result.timeSpent || 0), 0) / results.length
    } : null;

    // Определение уровня результата
    const getResultLevel = (percentage: number) => {
        if (percentage >= 90) return { text: 'Отлично!', color: 'text-green-600', icon: Trophy };
        if (percentage >= 70) return { text: 'Хорошо!', color: 'text-blue-600', icon: Target };
        if (percentage >= 50) return { text: 'Неплохо', color: 'text-yellow-600', icon: Target };
        return { text: 'Нужна практика', color: 'text-red-600', icon: Target };
    };

    const resultLevel = getResultLevel(percentage);

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Основные результаты */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                    <div className="text-center mb-8">
                        <div className="flex items-center justify-center mb-4">
                            <resultLevel.icon className={`w-12 h-12 ${resultLevel.color} mr-3`} />
                            <h1 className="text-4xl font-bold text-gray-900">
                                {resultLevel.text}
                            </h1>
                        </div>
                        <p className="text-xl text-gray-600 mb-6">
                            Режим: {mode === MODES.STUDY ? 'Изучение' : 'Тренировка'}
                        </p>

                        {/* Основная статистика */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div className="bg-green-50 rounded-lg p-6">
                                <div className="text-3xl font-bold text-green-600 mb-1">
                                    {correctAnswers}
                                </div>
                                <div className="text-sm text-green-700">Правильных ответов</div>
                            </div>
                            <div className="bg-blue-50 rounded-lg p-6">
                                <div className="text-3xl font-bold text-blue-600 mb-1">
                                    {percentage}%
                                </div>
                                <div className="text-sm text-blue-700">Процент успеха</div>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-6">
                                <div className="text-3xl font-bold text-gray-600 mb-1">
                                    {totalQuestions}
                                </div>
                                <div className="text-sm text-gray-700">Всего вопросов</div>
                            </div>
                        </div>

                        {/* Статистика по времени для тренировки */}
                        {timeStats && (
                            <div className="bg-purple-50 rounded-lg p-4 mb-6">
                                <div className="flex items-center justify-center mb-2">
                                    <Clock className="w-5 h-5 text-purple-600 mr-2" />
                                    <span className="font-medium text-purple-800">Статистика времени</span>
                                </div>
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <span className="text-purple-700">Общее время: </span>
                                        <span className="font-medium">{Math.round(timeStats.totalTime)}с</span>
                                    </div>
                                    <div>
                                        <span className="text-purple-700">Среднее время: </span>
                                        <span className="font-medium">{Math.round(timeStats.averageTime)}с</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Прогресс бар */}
                        <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                            <div
                                className={`h-3 rounded-full transition-all duration-1000 ${percentage >= 70 ? 'bg-green-500' :
                                        percentage >= 50 ? 'bg-yellow-500' : 'bg-red-500'
                                    }`}
                                style={{ width: `${percentage}%` }}
                            />
                        </div>
                    </div>

                    {/* Кнопки действий */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={onRestart}
                            className="flex items-center justify-center px-6 py-3 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 transition-colors"
                        >
                            <RotateCcw className="w-5 h-5 mr-2" />
                            Пройти еще раз
                        </button>
                        <button
                            onClick={onBackToMenu}
                            className="flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors"
                        >
                            <Home className="w-5 h-5 mr-2" />
                            Главное меню
                        </button>
                    </div>
                </div>

                {/* Детальный разбор ответов */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        Разбор ответов
                    </h2>

                    <div className="space-y-4">
                        {results.map((result, index) => {
                            const question = questions.find(q => q.id === result.questionId);
                            if (!question) return null;

                            const correctAnswer = unmaskAnswer(question.correctAnswer);
                            const isCorrect = result.correct;

                            return (
                                <div
                                    key={result.questionId}
                                    className={`border rounded-lg p-4 ${isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'
                                        }`}
                                >
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 mr-3 mt-1">
                                            {isCorrect ? (
                                                <CheckCircle className="w-5 h-5 text-green-500" />
                                            ) : (
                                                <XCircle className="w-5 h-5 text-red-500" />
                                            )}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className="font-medium text-gray-900">
                                                    Вопрос {index + 1}
                                                </h3>
                                                {result.timeSpent && (
                                                    <span className="text-sm text-gray-500">
                                                        {result.timeSpent}с
                                                    </span>
                                                )}
                                            </div>

                                            <p className="text-gray-700 mb-3">
                                                {question.question}
                                            </p>

                                            <div className="space-y-2 text-sm">
                                                <div>
                                                    <span className="font-medium text-gray-600">Ваш ответ: </span>
                                                    <span className={isCorrect ? 'text-green-700' : 'text-red-700'}>
                                                        {result.userAnswer === null
                                                            ? 'Не отвечено'
                                                            : question.type === 'multiple_choice'
                                                                ? question.options?.[result.userAnswer as number] || 'Неизвестно'
                                                                : result.userAnswer
                                                        }
                                                    </span>
                                                </div>

                                                {!isCorrect && (
                                                    <div>
                                                        <span className="font-medium text-gray-600">Правильный ответ: </span>
                                                        <span className="text-green-700">
                                                            {question.type === 'multiple_choice'
                                                                ? question.options?.[correctAnswer as number]
                                                                : Array.isArray(correctAnswer)
                                                                    ? correctAnswer.join(', ')
                                                                    : correctAnswer
                                                            }
                                                        </span>
                                                    </div>
                                                )}

                                                {/* Объяснение */}
                                                {question.explanation && (
                                                    <div className="mt-3 p-3 bg-blue-50 rounded border-l-4 border-blue-400">
                                                        <span className="font-medium text-blue-800">Объяснение: </span>
                                                        <span className="text-blue-700">
                                                            {question.explanation.split(' | ')[0]}
                                                        </span>
                                                        {question.explanation.includes(' | ') && (
                                                            <div className="text-sm text-blue-600 mt-1 italic">
                                                                {question.explanation.split(' | ')[1]}
                                                            </div>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultsScreen;