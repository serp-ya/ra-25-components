import * as React from 'react';
import {
    FULL_RUS_DAYS_NAMES_SORTED_BY_DATE_INDEX,
    MONTH_NAME_NOMENATIVE,
    MONTH_NAME_GENITIVE,
} from '../../constants';
import { CalendarHeader } from './components/calendar-header';
import { CalendarTable } from './components/calendar-table';
import { createCalendarMatrix } from './calendar-utils';
import styles from './calendar.module.css';

type TCalendarProps = {
    date: Date;
};

export const Calendar = React.memo(({ date }: TCalendarProps) => {
    const currentDate = date.getDate();
    const currentDay = date.getDay();
    const fullYear = date.getFullYear();
    const monthNum = date.getMonth();

    const calendarMatrix = createCalendarMatrix(date);
    console.log('Calendar');
    console.log('calendarMatrix', calendarMatrix);

    return (
        <div className={styles['ui-datepicker']}>
            <CalendarHeader
                dayName={FULL_RUS_DAYS_NAMES_SORTED_BY_DATE_INDEX[currentDay]}
                dayNumber={currentDate}
                fullYear={fullYear}
                monthNameGenitive={MONTH_NAME_GENITIVE[monthNum]}
                monthNameNominative={MONTH_NAME_NOMENATIVE[monthNum]}
            />
            <CalendarTable
                calendarMatrix={calendarMatrix}
                currentDate={currentDate}
            />
        </div>
    );
});