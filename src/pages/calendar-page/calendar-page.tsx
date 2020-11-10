import * as React from 'react';
import { Calendar } from '../../modules/calendar';

export const CalendarPage = React.memo(() => (
    <Calendar date={new Date()}/>
));