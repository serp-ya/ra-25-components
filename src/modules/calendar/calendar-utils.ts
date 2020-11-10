import { DAYS_IN_WEEK } from '../../constants';
import {
    getFirstDayIsSunday,
    getFirstDayOfDate,
    getNextDayDate,
} from '../../utils/date-utils';
import { START_DAY_DIFF_INDEX, SUNDAY_RUS_INDEX } from './calendar-constants';
import { TDateTuple, TCalendarMatrix } from './calendar-types';

const getCalendarStartDate = (date: Date): Date => {
    const firstDayOfDateIsSunday = getFirstDayIsSunday(date);
    const firstDayOfDateIndex = getFirstDayOfDate(date).getDay();
    const daysDiffIndex = firstDayOfDateIsSunday
        ? SUNDAY_RUS_INDEX
        : firstDayOfDateIndex;

    return new Date(
        date.getFullYear(),
        date.getMonth(),
        START_DAY_DIFF_INDEX - daysDiffIndex,
    );
};

const createDateRow = (date: Date): TDateTuple => (
    Array.from({ length: DAYS_IN_WEEK }).reduce(
        (acc: TDateTuple, _): TDateTuple => {
            const [row, currentDate] = acc;
            row.push(currentDate);

            return [row, getNextDayDate(currentDate)];
        },
        [[], date]
    )
);

const createDateMatrix = (date: Date): Array<Date[]> => {
    const monthOfDate = date.getMonth();
    const startDate = getCalendarStartDate(date);
    const result: Array<Date[]> = [];

    let currentDate = startDate;
    while(true) {
        const [newCalendarRow, lastDate] = createDateRow(currentDate);
        result.push(newCalendarRow);
        currentDate = lastDate;

        if (monthOfDate !== currentDate.getMonth()) {
            break;
        }
    }

    return result;
};

const createCalendarDay = (date: Date, month: number) => ({
    dayNumber: date.getDate(),
    isCurrentMonthDay: date.getMonth() === month,
});

export const createCalendarMatrix = (date: Date): TCalendarMatrix => {
    const currentMonth = date.getMonth();
    const dateMatrix = createDateMatrix(date);
    
    return dateMatrix.map(row => row.map(date => createCalendarDay(date, currentMonth)));
};