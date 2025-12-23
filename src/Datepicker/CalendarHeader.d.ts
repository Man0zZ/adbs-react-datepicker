import { default as React } from 'react';
import { CalendarType } from '../types';
type Props = {
    currentMonth: number;
    currentYear: number;
    calendarType: CalendarType;
    onMonthChange: (m: number) => void;
    onYearChange: (y: number) => void;
    onPrev: () => void;
    onNext: () => void;
    minDate?: Date | null;
    maxDate?: Date | null;
    lang?: 'en' | 'np';
};
declare const CalendarHeader: React.FC<Props>;
export default CalendarHeader;
