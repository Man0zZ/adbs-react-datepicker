import React, { useState, useRef, useMemo } from "react";
import CustomSelect from "../components/customSelect";
import { adToBs, bsToAd } from "../utils/calendar";
import { AD_MONTHS, BS_MONTHS } from "../const/months";
import {
  useClickOutside,
  usePopupPosition,
  useCalendarCalculation,
} from "../hooks";
import {
  DatepickerProps,
  CalendarType,
  ViewMode,
  CalendarCell,
} from "../types";
import CalendarGrid from "./CalendarGrid";
import CalendarHeader from "./CalendarHeader";
import MonthYearGrid from "./MonthYearGrid";

const Datepicker: React.FC<DatepickerProps> = ({
  calendar = "AD",
  onChange,
  placeholder,
  value,
  className,
}) => {
  const initialDate = useMemo(() => new Date(), []);
  const initialBS = useMemo(() => adToBs(initialDate), [initialDate]);

  const [selectedDate, setSelectedDate] = useState(initialDate);
  const [currentCalendar, setCurrentCalendar] =
    useState<CalendarType>(calendar);
  const [viewMode, setViewMode] = useState<ViewMode>("date");
  const [showCalendar, setShowCalendar] = useState(false);
  const [hasSelected, setHasSelected] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(
    calendar === "BS" ? initialBS.month - 1 : initialDate.getMonth()
  );
  const [currentYear, setCurrentYear] = useState(
    calendar === "BS" ? initialBS.year : initialDate.getFullYear()
  );

  const wrapperRef = useRef<HTMLDivElement>(null!);
  const dropdownRef = useRef<HTMLDivElement>(null!);

  useClickOutside(wrapperRef, () => setShowCalendar(false));
  const position = usePopupPosition(showCalendar, wrapperRef, dropdownRef);

  const weeks = useCalendarCalculation(
    currentYear,
    currentMonth,
    currentCalendar,
    selectedDate
  );

  const getBsDateString = (date: Date): string => {
    const bs = adToBs(date);
    return `${bs.year}-${String(bs.month).padStart(2, "0")}-${String(
      bs.day
    ).padStart(2, "0")}`;
  };

  const handleDateSelect = (cell: CalendarCell) => {
    if (cell.isDisabled) return;

    const newDate =
      currentCalendar === "AD"
        ? new Date(currentYear, currentMonth, cell.day)
        : bsToAd(currentYear, currentMonth + 1, cell.day);

    setSelectedDate(newDate);
    setHasSelected(true);
    setShowCalendar(false);

    onChange?.(
      currentCalendar === "BS"
        ? getBsDateString(newDate)
        : newDate.toLocaleDateString("en-CA")
    );
  };

  const toggleCalendarType = () => {
    const newCal = currentCalendar === "AD" ? "BS" : "AD";
    setCurrentCalendar(newCal);

    if (newCal === "BS") {
      const bsDate = adToBs(selectedDate);
      setCurrentYear(bsDate.year);
      setCurrentMonth(bsDate.month - 1);
    } else {
      setCurrentYear(selectedDate.getFullYear());
      setCurrentMonth(selectedDate.getMonth());
    }
    setViewMode("date");
  };

  const handleMonthNav = (direction: "next" | "prev") => {
    if (direction === "next") {
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear((y: number) => y + 1);
      } else {
        setCurrentMonth((m: number) => m + 1);
      }
    } else {
      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear((y: number) => y - 1);
      } else {
        setCurrentMonth((m: number) => m - 1);
      }
    }
  };

  return (
    <>
      {/* <button onClick={toggleCalendarType} className='toggle-btn' type='button'>
        {currentCalendar === "AD" ? "Switch to BS" : "Switch to AD"}
      </button> */}

      <div className='wrapper' ref={wrapperRef}>
        <CustomSelect
          type='calendar'
          onClick={() => setShowCalendar((prev) => !prev)}
          placeholder={
            placeholder ||
            (calendar === "AD" ? "Select date" : "मिति छान्नुहोस्")
          }
          value={
            value ||
            hasSelected
              ? currentCalendar === "AD"
                ? selectedDate.toLocaleDateString("en-CA")
                : getBsDateString(selectedDate)
              : undefined
          }
          className={className}
        />

        {showCalendar && (
          <div
            className='datepicker'
            ref={dropdownRef}
            style={{
              [position === "bottom" ? "top" : "bottom"]: "100%",
              [position === "bottom" ? "marginTop" : "marginBottom"]: "4px",
              zIndex: 1000,
            }}
          >
            <CalendarHeader
              currentMonth={currentMonth}
              currentYear={currentYear}
              calendarType={currentCalendar}
              viewMode={viewMode}
              onMonthChange={setCurrentMonth}
              onYearChange={setCurrentYear}
              onPrev={() => handleMonthNav("prev")}
              onNext={() => handleMonthNav("next")}
            />

            <div className='datepicker-calendar'>
              {viewMode === "date" && (
                <CalendarGrid
                  weeks={weeks}
                  calendarType={currentCalendar}
                  onSelect={handleDateSelect}
                />
              )}

              {viewMode === "month" && (
                <MonthYearGrid
                  items={currentCalendar === "AD" ? AD_MONTHS : BS_MONTHS}
                  activeItem={currentMonth}
                  calendarType={currentCalendar}
                  onSelect={(idx) => {
                    setCurrentMonth(idx);
                    setViewMode("date");
                  }}
                />
              )}

              {viewMode === "year" && (
                <MonthYearGrid
                  items={Array.from(
                    { length: 12 },
                    (_, i) => currentYear - 6 + i
                  )}
                  activeItem={currentYear}
                  calendarType={currentCalendar}
                  onSelect={(year) => {
                    setCurrentYear(year);
                    setViewMode("month");
                  }}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Datepicker;
