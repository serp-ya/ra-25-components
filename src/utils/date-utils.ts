import { FULL_RUS_DAYS_NAMES_SORTED_BY_DATE_INDEX } from '../constants';

export const getFirstDayOfDate = (date: Date): Date => (
    new Date(date.getFullYear(), date.getMonth(), 1)
);

export const getNextDayDate = (date: Date): Date => (
    new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1)
);

export const getFirstDayIsSunday = (date: Date): boolean => (
    getFirstDayOfDate(date).getDay() === 0
);

export const getFullRusDayNameByIndex = (date: Date): string => (
    FULL_RUS_DAYS_NAMES_SORTED_BY_DATE_INDEX[date.getDay()]
);