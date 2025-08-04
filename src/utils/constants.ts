import type { Mode } from '../types/index.js';

export const MODES: Record<string>, Mode = {
    STUDY: 'study',
    PRACTICE: 'practice',
    EXAM: 'exam',
    REVIEW: 'review',
} as const;