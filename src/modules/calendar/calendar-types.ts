export type TDateTuple = [Date[], Date];

export type TCalendarDay = {
    dayNumber: number;
    isCurrentMonthDay: boolean;
};


export type TCalendarRow = TCalendarDay[];
export type TCalendarMatrix = Array<TCalendarRow>;
