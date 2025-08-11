import React, { useState } from 'react';
import { BookOpen, Target, Settings, Shuffle } from "lucide-react";
import { MODES } from "../utils/constants.ts";
import { Mode } from "../types/index.ts";

interface QuizSettings {
    mode: Mode;
    questionCount: number;
    shuffle: boolean;
}

interface IModeSelectorProps {
    onSelect: (settings: QuizSettings) => void;
    totalQuestions: number;
}

const ModeSelector: React.FC<IModeSelectorProps> = ({ onSelect, totalQuestions }) => {
    const [selectedMode, setSelectedMode] = useState<Mode | null>(null);
    const [questionCount, setQuestionCount] = useState<number>(10);
    const [shuffle, setShuffle] = useState<boolean>(true);

    const availableModes = [
        {
            id: MODES.STUDY,
            title: 'Изучение',
            description: 'Показ ответов с объяснениями',
            icon: BookOpen,
            color: 'bg-blue-500',
            enabled: true
        },
        {
            id: MODES.PRACTICE,
            title: 'Тренировка',
            description: 'Случайные вопросы с таймером',
            icon: Target,
            color: 'bg-green-500',
            enabled: true
        }
        // Экзамен и повторение отключены пока что
    ];

    const questionCountOptions = [5, 10, 15, 20, totalQuestions];

    const handleModeSelect = (mode: Mode) => {
        setSelectedMode(mode);
    };

    const handleStart = () => {
        if (selectedMode) {
            onSelect({
                mode: selectedMode,
                questionCount: questionCount,
                shuffle: shuffle
            });
        }
    };

    const handleBack = () => {
        setSelectedMode(null);
    };

    if (!selectedMode) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
                <div className="max-w-4xl w-full">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            Тест по венгерской культуре
                        </h1>
                        <p className="text-xl text-gray-600">
                            Выберите режим обучения
                        </p>
                        <p className="text-sm text-gray-500 mt-2">
                            Всего доступно {totalQuestions} вопросов
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                        {availableModes.map((mode) => (
                            <button
                                key={mode.id}
                                onClick={() => handleModeSelect(mode.id)}
                                disabled={!mode.enabled}
                                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-left ${!mode.enabled ? 'opacity-50 cursor-not-allowed' : ''
                                    }`}>
                                <div className="flex items-center mb-4">
                                    <div className={`${mode.color} rounded-xl p-4 mr-4`}>
                                        <mode.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-semibold text-gray-900">
                                        {mode.title}
                                    </h3>
                                </div>
                                <p className="text-gray-600 text-lg">
                                    {mode.description}
                                </p>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    const currentMode = availableModes.find(m => m.id === selectedMode);

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="max-w-2xl w-full">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    {/* Заголовок */}
                    <div className="text-center mb-8">
                        <div className="flex items-center justify-center mb-4">
                            <div className={`${currentMode?.color} rounded-xl p-4 mr-4`}>
                                <currentMode.icon className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900">
                                {currentMode?.title}
                            </h2>
                        </div>
                        <p className="text-gray-600 text-lg">
                            {currentMode?.description}
                        </p>
                    </div>

                    {/* Настройки */}
                    <div className="space-y-6">
                        {/* Количество вопросов */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3">
                                Количество вопросов
                            </label>
                            <div className="grid grid-cols-5 gap-2">
                                {questionCountOptions.map((count) => (
                                    <button
                                        key={count}
                                        onClick={() => setQuestionCount(count)}
                                        className={`py-2 px-3 rounded-lg border text-sm font-medium transition-colors ${questionCount === count
                                            ? 'bg-blue-500 text-white border-blue-500'
                                            : 'bg-white text-gray-700 border-gray-300 hover:border-blue-300'
                                            }`}
                                    >
                                        {count === totalQuestions ? 'Все' : count}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Перемешивание */}
                        <div>
                            <label className="flex items-center space-x-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={shuffle}
                                    onChange={(e) => setShuffle(e.target.checked)}
                                    className="w-5 h-5 text-blue-500 rounded focus:ring-blue-500"
                                />
                                <div className="flex items-center">
                                    <Shuffle className="w-5 h-5 text-gray-600 mr-2" />
                                    <span className="text-sm font-medium text-gray-700">
                                        Перемешать вопросы
                                    </span>
                                </div>
                            </label>
                            <p className="text-xs text-gray-500 mt-1 ml-8">
                                Вопросы будут показываться в случайном порядке
                            </p>
                        </div>

                        {/* Информация о режиме */}
                        <div className="bg-gray-50 rounded-lg p-4">
                            <div className="flex items-center mb-2">
                                <Settings className="w-4 h-4 text-gray-600 mr-2" />
                                <span className="text-sm font-medium text-gray-700">
                                    Параметры режима
                                </span>
                            </div>
                            <ul className="text-sm text-gray-600 space-y-1">
                                {selectedMode === MODES.STUDY && (
                                    <>
                                        <li>• Правильный ответ показывается сразу</li>
                                        <li>• Подробные объяснения к каждому вопросу</li>
                                        <li>• Нет ограничения по времени</li>
                                    </>
                                )}
                                {selectedMode === MODES.PRACTICE && (
                                    <>
                                        <li>• 60 секунд на каждый вопрос</li>
                                        <li>• Результаты показываются в конце</li>
                                        <li>• Счетчик правильных ответов</li>
                                    </>
                                )}
                            </ul>
                        </div>
                    </div>

                    {/* Кнопки */}
                    <div className="flex space-x-4 mt-8">
                        <button
                            onClick={handleBack}
                            className="flex-1 py-3 px-6 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors"
                        >
                            Назад
                        </button>
                        <button
                            onClick={handleStart}
                            className="flex-1 py-3 px-6 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 transition-colors"
                        >
                            Начать тест
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModeSelector;