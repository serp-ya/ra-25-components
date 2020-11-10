import * as React from 'react';
import { TCalendarMatrix } from '../../calendar-types';
import { CalendarTableHeader } from './calendar-table-header';
import { CalendarTableRow } from './calendar-table-row';
import styles from './calendar-table.module.css';

type TCalendarTableProps = {
    calendarMatrix: TCalendarMatrix;
    currentDate: number;
};

export const CalendarTable = React.memo(({ calendarMatrix, currentDate }: TCalendarTableProps) => (
    <table className={styles['table']}>
        <CalendarTableHeader />
        <tbody>
            {calendarMatrix.map((matrixRow, i) => (
                <CalendarTableRow currentDate={currentDate} matrixRow={matrixRow} key={i} />
            ))}
        </tbody>
    </table>
));