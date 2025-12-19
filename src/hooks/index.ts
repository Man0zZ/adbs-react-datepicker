import { useState, useEffect, useLayoutEffect, useMemo } from 'react';
import { CalendarType, CalendarCell } from '../types';
import { generateADCalendar, generateBSCalendar, bsToAd, adToBs } from '../utils/calendar';
import { BS_CALENDAR_DATA } from '../const/bsCalendarData';

/**
 * To detect clicks outside a specific element
 */
export const useClickOutside = (ref: React.RefObject<HTMLElement>, callback: () => void) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [ref, callback]);
};

/**
 * To position the popup above or below the input
 */
export const usePopupPosition = (
  isOpen: boolean,
  wrapperRef: React.RefObject<HTMLElement>,
  popupRef: React.RefObject<HTMLElement>
) => {
  const [position, setPosition] = useState<'top' | 'bottom'>('bottom');

  useLayoutEffect(() => {
    if (!isOpen || !wrapperRef.current || !popupRef.current) return;

    const updatePosition = () => {
      const wrapperRect = wrapperRef.current!.getBoundingClientRect();
      const popupRect = popupRef.current!.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const spaceBelow = viewportHeight - wrapperRect.bottom;
      const spaceAbove = wrapperRect.top;

      if (spaceBelow < popupRect.height && spaceAbove > popupRect.height) {
        setPosition('top');
      } else {
        setPosition('bottom');
      }
    };

    updatePosition();
    window.addEventListener('scroll', updatePosition, true);
    window.addEventListener('resize', updatePosition);

    return () => {
      window.removeEventListener('scroll', updatePosition, true);
      window.removeEventListener('resize', updatePosition);
    };
  }, [isOpen, wrapperRef, popupRef]);

  return position;
};

/**
 * To calculate the grid of days for the specific month/year
 */
export const useCalendarCalculation = (
  currentYear: number,
  currentMonth: number,
  calendarType: CalendarType,
  selectedDate: Date,
  minDate?: Date | null,
  maxDate?: Date | null
) => {
  return useMemo(() => {
    const rawDays =
      calendarType === 'AD'
        ? generateADCalendar(currentMonth, currentYear)
        : generateBSCalendar(currentMonth, currentYear);

    let prevMonthLastDay = 0;
    if (calendarType === 'AD') {
      prevMonthLastDay = new Date(currentYear, currentMonth, 0).getDate();
    } else {
      const prevMonth = currentMonth > 0 ? currentMonth - 1 : 11;
      const prevYear = currentMonth > 0 ? currentYear : currentYear - 1;

      prevMonthLastDay = BS_CALENDAR_DATA[prevYear]?.[prevMonth] ?? 0;
    }

    const firstDayIndex = rawDays.findIndex((d) => d !== null);
    let nextMonthCounter = 1;
    const today = new Date();
    const todayBS = adToBs(today);
    const selectedBS = adToBs(selectedDate);

    /**
     * Helper to check if a specific day is within min/max range
     */
    const isOutOfRange = (day: number, monthIdx: number, year: number) => {
      const cellDate =
        calendarType === 'AD' ? new Date(year, monthIdx, day) : bsToAd(year, monthIdx + 1, day);

      const compareDate = new Date(cellDate).setHours(0, 0, 0, 0);

      if (minDate) {
        const min = new Date(minDate).setHours(0, 0, 0, 0);
        if (compareDate < min) return true;
      }
      if (maxDate) {
        const max = new Date(maxDate).setHours(0, 0, 0, 0);
        if (compareDate > max) return true;
      }
      return false;
    };

    const processCell = (
      day: number,
      isPadding: boolean,
      paddingType?: 'prev' | 'next'
    ): CalendarCell => {
      let isToday = false;
      let isSelected = false;
      let isDisabled = isPadding;

      // 1. Calculate the actual month/year for this specific cell (to check range)
      let cellMonth = currentMonth;
      let cellYear = currentYear;

      if (paddingType === 'prev') {
        cellMonth = currentMonth === 0 ? 11 : currentMonth - 1;
        cellYear = currentMonth === 0 ? currentYear - 1 : currentYear;
      } else if (paddingType === 'next') {
        cellMonth = currentMonth === 11 ? 0 : currentMonth + 1;
        cellYear = currentMonth === 11 ? currentYear + 1 : currentYear;
      }

      // 2. Check Min/Max constraints
      if (isOutOfRange(day, cellMonth, cellYear)) {
        isDisabled = true;
      }

      // 3. Highlight Today and Selected
      if (!isPadding) {
        if (calendarType === 'AD') {
          isToday =
            today.getFullYear() === currentYear &&
            today.getMonth() === currentMonth &&
            today.getDate() === day;
          isSelected =
            selectedDate.getFullYear() === currentYear &&
            selectedDate.getMonth() === currentMonth &&
            selectedDate.getDate() === day;
        } else {
          isToday =
            todayBS.year === currentYear &&
            todayBS.month - 1 === currentMonth &&
            todayBS.day === day;
          isSelected =
            selectedBS.year === currentYear &&
            selectedBS.month - 1 === currentMonth &&
            selectedBS.day === day;
        }
      }

      return { day, isDisabled, isToday, isSelected };
    };

    const processedDays: CalendarCell[] = rawDays.map((day, index) => {
      if (day !== null) return processCell(day, false);

      if (index < firstDayIndex) {
        const prevDay = prevMonthLastDay - (firstDayIndex - 1 - index);
        return processCell(prevDay, true, 'prev');
      }

      return processCell(nextMonthCounter++, true, 'next');
    });

    const remainingSlots = 7 - (processedDays.length % 7);
    if (remainingSlots < 7) {
      for (let i = 0; i < remainingSlots; i++) {
        processedDays.push(processCell(nextMonthCounter++, true, 'next'));
      }
    }

    const weeks: CalendarCell[][] = [];
    for (let i = 0; i < processedDays.length; i += 7) {
      weeks.push(processedDays.slice(i, i + 7));
    }

    return weeks;
  }, [currentYear, currentMonth, calendarType, selectedDate, minDate, maxDate]);
};
