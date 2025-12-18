import { useState, useEffect, useLayoutEffect, useMemo } from "react";
import { CalendarType, CalendarCell } from "../types";
import {
  generateADCalendar,
  generateBSCalendar,
  bsToAd,
  adToBs,
} from "../utils/calendar";

/**
 * To detect clicks outside a specific element
 */
export const useClickOutside = (
  ref: React.RefObject<HTMLElement>,
  callback: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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
  const [position, setPosition] = useState<"top" | "bottom">("bottom");

  useLayoutEffect(() => {
    if (!isOpen || !wrapperRef.current || !popupRef.current) return;

    const updatePosition = () => {
      const wrapperRect = wrapperRef.current!.getBoundingClientRect();
      const popupRect = popupRef.current!.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const spaceBelow = viewportHeight - wrapperRect.bottom;
      const spaceAbove = wrapperRect.top;

      if (spaceBelow < popupRect.height && spaceAbove > popupRect.height) {
        setPosition("top");
      } else {
        setPosition("bottom");
      }
    };

    updatePosition();
    window.addEventListener("scroll", updatePosition, true);
    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("scroll", updatePosition, true);
      window.removeEventListener("resize", updatePosition);
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
  selectedDate: Date
) => {
  return useMemo(() => {
    const rawDays =
      calendarType === "AD"
        ? generateADCalendar(currentMonth, currentYear)
        : generateBSCalendar(currentMonth, currentYear);

    // Calculate previous month's last day logic...
    let prevMonthLastDay = 0;
    if (calendarType === "AD") {
      prevMonthLastDay = new Date(currentYear, currentMonth, 0).getDate();
    } else {
      const currentMonthStartAD = bsToAd(currentYear, currentMonth + 1, 1);
      const prevMonthEndAD = new Date(currentMonthStartAD);
      prevMonthEndAD.setDate(prevMonthEndAD.getDate() - 1);
      prevMonthLastDay = adToBs(prevMonthEndAD).day;
    }

    const firstDayIndex = rawDays.findIndex((d) => d !== null);
    let nextMonthCounter = 1;
    const today = new Date();
    const todayBS = adToBs(today);
    const selectedBS = adToBs(selectedDate);

    const processCell = (day: number, isDisabled: boolean): CalendarCell => {
      let isToday = false;
      let isSelected = false;

      if (!isDisabled) {
        if (calendarType === "AD") {
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
        return processCell(
          prevMonthLastDay - (firstDayIndex - 1 - index),
          true
        );
      }
      return processCell(nextMonthCounter++, true);
    });

    const remainingSlots = 7 - (processedDays.length % 7);
    if (remainingSlots < 7) {
      for (let i = 0; i < remainingSlots; i++) {
        processedDays.push(processCell(nextMonthCounter++, true));
      }
    }

    const weeks: CalendarCell[][] = [];
    for (let i = 0; i < processedDays.length; i += 7) {
      weeks.push(processedDays.slice(i, i + 7));
    }

    return weeks;
  }, [currentYear, currentMonth, calendarType, selectedDate]);
};
