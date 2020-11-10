import * as React from 'react';
import { FULL_RUS_DAYS_NAMES, SHORT_RUS_DAYS_NAMES } from '../../../../constants';
import styles from './calendar-table.module.css';

export const CalendarTableHeader = React.memo(() => (
    <React.Fragment>
        <colgroup>
            <col />
            <col />
            <col />
            <col />
            <col />
            <col className={styles['ui-datepicker-week-end']} />
            <col className={styles['ui-datepicker-week-end']} />
        </colgroup>
        <thead>
            <tr>
                {FULL_RUS_DAYS_NAMES.map((name, i) => (
                    <th
                        className={styles['th']}
                        key={name}
                        scope="col"
                        title={name}
                    >
                        {SHORT_RUS_DAYS_NAMES[i]}
                    </th>
                ))}
            </tr>
        </thead>
    </React.Fragment>
));