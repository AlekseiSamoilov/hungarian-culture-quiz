// Простая маскировка без base64 (избегает проблемы с UTF-8)
export const maskAnswer = (answer: number | string[]): string => {
    const jsonString = JSON.stringify(answer);
    // Простое "шифрование" - реверс строки + префикс
    return 'masked_' + jsonString.split('').reverse().join('');
};

export const unmaskAnswer = (maskedAnswer: string): number | string[] => {
    try {
        // Убираем префикс и реверсируем обратно
        const reversed = maskedAnswer.replace('masked_', '');
        const original = reversed.split('').reverse().join('');
        return JSON.parse(original);
    } catch (error) {
        console.error('Error unmasking answer:', error);
        return [];
    }
};