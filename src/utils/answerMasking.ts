export const maskAnswer = (answer: number | string[]): string => {
    return btoa(JSON.stringify(answer));
};

export const unmaskAnswer = (maskedAnswer: string): number | string[] => {
    return JSON.stringify(atob(maskedAnswer));
};