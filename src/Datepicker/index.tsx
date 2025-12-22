import React, { useState, useRef } from 'react';
import CustomSelect from '../components/customSelect';
import { adToBs, bsToAd } from '../utils/calendar';
import { useClickOutside, usePopupPosition, useCalendarCalculation } from '../hooks';
import { DatepickerProps, CalendarType, CalendarCell } from '../types';
import CalendarGrid from './CalendarGrid';
import CalendarHeader from './CalendarHeader';
import { formatBsDate, parseToDate, toNepaliNumber } from '../../helpers';

const Datepicker: React.FC<DatepickerProps> = ({
  calendar = 'AD',
  onChange,
  placeholder,
  value,
  className,
  min,
  max,
  name,
  lang = 'en',
  darkMode = false,
  clearable,
}) => {
  /* ------------------ Initial setup ------------------ */
  const today = new Date();
  const initialBS = adToBs(today);

  const minDate = parseToDate(min, calendar);
  const maxDate = parseToDate(max, calendar);

  /* ------------------ State ------------------ */
  const [selectedDate, setSelectedDate] = useState<Date>(today);
  const [currentCalendar] = useState<CalendarType>(calendar);
  const [showCalendar, setShowCalendar] = useState(false);
  const [hasSelected, setHasSelected] = useState(false);

  const [currentMonth, setCurrentMonth] = useState(
    calendar === 'BS' ? initialBS.month - 1 : today.getMonth()
  );
  const [currentYear, setCurrentYear] = useState(
    calendar === 'BS' ? initialBS.year : today.getFullYear()
  );

  /* ------------------ Refs & hooks ------------------ */
  const wrapperRef = useRef<HTMLDivElement>(null!);
  const dropdownRef = useRef<HTMLDivElement>(null!);

  useClickOutside(wrapperRef, () => setShowCalendar(false));
  const position = usePopupPosition(showCalendar, wrapperRef, dropdownRef);

  const weeks = useCalendarCalculation(
    currentYear,
    currentMonth,
    currentCalendar,
    selectedDate,
    minDate,
    maxDate
  );

  const displayDateValue =
    value ??
    (hasSelected
      ? currentCalendar === 'AD'
        ? selectedDate.toLocaleDateString('en-CA')
        : formatBsDate(selectedDate)
      : undefined);

  const localizedValue =
    lang === 'np' && displayDateValue ? toNepaliNumber(displayDateValue) : displayDateValue;

  const placeholderText = placeholder ?? (lang === 'np' ? 'मिति छान्नुहोस्' : 'Select date');

  /* ------------------ Handlers ------------------ */
  const handleDateSelect = (cell: CalendarCell) => {
    if (cell.isDisabled) return;

    const date =
      currentCalendar === 'AD'
        ? new Date(currentYear, currentMonth, cell.day)
        : bsToAd(currentYear, currentMonth + 1, cell.day);

    setSelectedDate(date);
    setHasSelected(true);
    setShowCalendar(false);

    onChange?.(currentCalendar === 'BS' ? formatBsDate(date) : date.toLocaleDateString('en-CA'));
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  };

  const handleYearChange = (year: number) => {
    setCurrentYear(year);
  };

  const handleClear = () => {
    setHasSelected(false);
    const resetDate = new Date();
    setSelectedDate(resetDate);

    onChange?.('');
  };

  return (
    <div className={`wrapper ${darkMode ? 'dark' : ''}`} ref={wrapperRef}>
      <CustomSelect
        name={name}
        type="calendar"
        onClick={() => setShowCalendar((s) => !s)}
        onClear={handleClear}
        placeholder={placeholderText}
        value={localizedValue}
        className={className}
        lang={lang}
        clearable={clearable}
      />

      {showCalendar && (
        <div
          className="datepicker"
          ref={dropdownRef}
          style={{
            [position === 'bottom' ? 'top' : 'bottom']: '100%',
            [position === 'bottom' ? 'marginTop' : 'marginBottom']: '4px',
            zIndex: 1000,
          }}
        >
          <CalendarHeader
            currentMonth={currentMonth}
            currentYear={currentYear}
            calendarType={currentCalendar}
            onMonthChange={setCurrentMonth}
            onYearChange={handleYearChange}
            onPrev={handlePrevMonth}
            onNext={handleNextMonth}
            minDate={minDate}
            maxDate={maxDate}
            lang={lang}
          />

          <div className="datepicker-calendar">
            <CalendarGrid
              weeks={weeks}
              calendarType={currentCalendar}
              onSelect={handleDateSelect}
              lang={lang}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Datepicker;
