import { default as React } from 'react';
import { CalendarCell, CalendarType } from '../types';
type Props = {
    weeks: CalendarCell[][];
    calendarType: CalendarType;
    onSelect: (cell: CalendarCell) => void;
    lang?: 'en' | 'np';
};
declare const CalendarGrid: React.FC<Props>;
export default CalendarGrid;
