import { RotateCcw, BookOpen, Target, Award } from "lucide-react";
import { MODES } from "../utils/constants.ts";
import { Mode, ModeConfig } from "../types/index.ts";

interface IModeSelectorProps {
    onSelect: (mode: Mode) => void;
}

const ModeSelector: React.FC<IModeSelectorProps> = ({ onSelect }) => {
    const modes: ModeConfig[] = [
        {
            id: MODES.STUDY,
            title: 'Изучение',
            description: 'Показ ответов с объяснениями',
            icon: BookOpen,
            color: 'bg-blue-500',
        },
        {
            id: MODES.PRACTICE,
            title: 'Тренировка',
            description: 'Показ ответов с объяснениями',
            icon: Target,
            color: 'bg-green-500',
        },
        {
            id: MODES.EXAM,
            title: 'Экзамен',
            description: 'Показ ответов в конце теста',
            icon: Award,
            color: 'bg-red-500',
        },
        {
            id: MODES.REVIEW,
            title: 'Повторение',
            description: 'Сложные и неправльные вопросы',
            icon: RotateCcw,
            color: 'bg-purple-500'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="max-w-4xl w-full">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Тест по венгерской культуре
                    </h1>
                    <p className="text-xl text-gray-600">
                        Выберете режим обучения
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {modes.map((mode) => (
                        <button
                            key={mode.id}
                            onClick={() => onSelect(mode.id)}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-left">
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
    )
}