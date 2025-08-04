import type { Question } from '../types/index.js';
import { maskAnswer } from './answerMasking/';

// Тестовые данные вопросов
export const testQuestions: Question[] = [
    {
        id: 'hist_001',
        type: 'multiple_choice',
        category: 'history',
        difficulty: 2,
        question: 'В каком году была основана Будапешт как единый город?',
        options: ['1873', '1867', '1896', '1901'],
        correctAnswer: maskAnswer(0),
        explanation: 'Будапешт был образован в 1873 году путём объединения трёх городов: Буды, Пешта и Обуды.',
        image: null
    },
    {
        id: 'geo_001',
        type: 'multiple_choice',
        category: 'geography',
        difficulty: 1,
        question: 'Какая река протекает через Будапешт?',
        options: ['Тиса', 'Дунай', 'Драва', 'Раба'],
        correctAnswer: maskAnswer(1),
        explanation: 'Дунай - вторая по длине река в Европе, протекает через центр Будапешта, разделяя Буду и Пешт.',
        image: null
    },
    {
        id: 'cult_001',
        type: 'text_input',
        category: 'culture',
        difficulty: 2,
        question: 'Как называется традиционный венгерский народный танец?',
        correctAnswer: maskAnswer(['чардаш', 'csardas']),
        explanation: 'Чардаш (csárdás) - традиционный венгерский народный танец, состоящий из медленной и быстрой частей.',
        image: null
    },
    {
        id: 'lang_001',
        type: 'text_input',
        category: 'language',
        difficulty: 1,
        question: 'Как сказать "Добро пожаловать" по-венгерски?',
        correctAnswer: maskAnswer(['üdvözöljük', 'udvozoljuk']),
        explanation: 'Üdvözöljük - формальное приветствие, означающее "добро пожаловать". Также можно использовать "Üdvözlöm" для единственного числа.',
        image: null
    }
];