import * as React from 'react';
import cn from 'classnames';
import { TCalendarRow } from '../../calendar-types';
import styles from './calendar-table.module.css';

type TCalendarTableRowProps = {
    currentDate: number;
    matrixRow: TCalendarRow;
};

export const CalendarTableRow = React.memo(({ currentDate, matrixRow }: TCalendarTableRowProps) => (
    <tr>
        {matrixRow.map(({ dayNumber, isCurrentMonthDay }) => {
            let className = '';
            if (isCurrentMonthDay && currentDate === dayNumber) {
                className = 'ui-datepicker-today';
            } else if (!isCurrentMonthDay) {
                className = 'ui-datepicker-other-month';
            }

            return (
                <td
                    className={cn(styles['td'], styles[className])}
                    key={dayNumber}
                >
                    {dayNumber}
                </td>
            );
        })}
    </tr>
));