export interface Question {
    id: string;
    type: 'multiple_choice' | 'text_input';
    category: string;
    difficulty: number;
    question: string;
    options?: string[];
    correctAnswer: string;
    explanation: string;
    image?: string | null;
}

export interface QuizResult {
    questionId: string;
    userAnswer: number | string | null;
    correct: boolean;
    timeSpent?: number | null;
}

export type Mode = 'study' | 'practice' | 'exam' | 'review';

export interface ModeConfig {
    id: Mode;
    title: string;
    description: string;
    icon: React.ComponentType<any>;
    color: string;
}