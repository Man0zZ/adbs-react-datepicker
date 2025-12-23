import { CalendarType, CalendarCell } from '../types';
/**
 * To detect clicks outside a specific element
 */
export declare const useClickOutside: (ref: React.RefObject<HTMLElement>, callback: () => void) => void;
/**
 * To position the popup above or below the input
 */
export declare const usePopupPosition: (isOpen: boolean, wrapperRef: React.RefObject<HTMLElement>, popupRef: React.RefObject<HTMLElement>) => "top" | "bottom";
/**
 * To calculate the grid of days for the specific month/year
 */
export declare const useCalendarCalculation: (currentYear: number, currentMonth: number, calendarType: CalendarType, selectedDate: Date, minDate?: Date | null, maxDate?: Date | null) => CalendarCell[][];
