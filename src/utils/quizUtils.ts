import { Question } from "../types";

// Shake questions to randomize their order
export const shuffleArray = <T>(array: T[]): T[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]]
    }
    return newArray;
}

export const filterQuestionByMode = (questions: Question[], category: string): Question[] => {
    return questions.filter(question => question.category === category);
};

export const filterQuestionsByDifficulty = (question: Question[], difficulty: number): Question[] => {
    return question.filter(question => question.difficulty === difficulty);
};

export const getRandomQuestions = (
    questions: Question[],
    count: number,
    shuffle: boolean = true,
): Question[] => {
    let selectedQuestions = [...questions];

    if (shuffle) {
        selectedQuestions = shuffleArray(selectedQuestions);
    }

    return selectedQuestions.slice(0, Math.min(count, selectedQuestions.length));
};

export const groupQuestionsByCategory = (questions: Question[]): Record<string, Question[]> => {
    return questions.reduce((acc, question) => {
        if (!acc[question.category]) {
            acc[question.category] = [];
        }
        acc[question.category].push(question);
        return acc;
    }, {} as Record<string, Question[]>);
};

export const getQuestionsStats = (questions: Question[]) => {
    const categories = groupQuestionsByCategory(questions);
    const difficulties = questions.reduce((acc, q) => {
        acc[q.difficulty] = (acc[q.difficulty] || 0) + 1;
        return acc;
    }, {} as Record<number, number>);

    const types = questions.reduce((acc, q) => {
        acc[q.type] = (acc[q.type] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);

    return {
        total: questions.length,
        categories: Object.keys(categories).map(cat => ({
            name: cat,
            count: categories[cat].length
        })),
        difficulties,
        types,
        multipleChoice: types.multiple_choice || 0,
        textInput: types.text_input || 0
    };
};
