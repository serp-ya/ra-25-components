import * as React from 'react';
import styles from './calendar-header.module.css';

type TCalendarHeaderProps = {
    dayName: string,
    dayNumber: number,
    fullYear: number,
    monthNameGenitive: string,
    monthNameNominative: string,
};

export const CalendarHeader = React.memo(({
    dayName,
    dayNumber,
    fullYear,
    monthNameGenitive,
    monthNameNominative,
}: TCalendarHeaderProps) => (
    <React.Fragment>
        <div className={styles['ui-datepicker-material-header']}>
            <div className={styles['ui-datepicker-material-day']}>
                {dayName}
            </div>
            <div className={styles['ui-datepicker-material-date']}>
                <div className={styles['ui-datepicker-material-day-num']}>
                    {dayNumber}
                </div>
                <div className={styles['ui-datepicker-material-month']}>
                    {monthNameGenitive}
                </div>
                <div className={styles['ui-datepicker-material-year']}>
                    {fullYear}
                </div>
            </div>
        </div>
        <div className={styles['ui-datepicker-header']}>
            <div className={styles['ui-datepicker-title']}>
                <span>
                    {monthNameNominative} {fullYear}
                </span>
            </div>
        </div>
    </React.Fragment>
));