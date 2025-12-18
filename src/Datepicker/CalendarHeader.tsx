import React from "react";
import ArrowBtn from "../Icons/index";
import { CalendarType, ViewMode } from "../types";
import { toNepaliNumber } from "../../helpers";
import { AD_MONTHS, BS_MONTHS } from "../const/months";
import CustomSelect from "../components/customSelect";

type Props = {
  currentMonth: number;
  currentYear: number;
  calendarType: CalendarType;
  viewMode: ViewMode;
  onMonthChange: (m: number) => void;
  onYearChange: (y: number) => void;
  onPrev: () => void;
  onNext: () => void;
};

const CalendarHeader: React.FC<Props> = ({
  currentMonth,
  currentYear,
  calendarType,
  viewMode,
  onMonthChange,
  onYearChange,
  onPrev,
  onNext,
}) => {
  const months = calendarType === "AD" ? AD_MONTHS : BS_MONTHS;

  const getYearRange = () => {
    const startYear = currentYear - 6;
    return Array.from({ length: 12 }, (_, i) => startYear + i);
  };

  return (
    <div className='datepicker-header'>
      <ArrowBtn
        direction='prev'
        disabled={viewMode !== "date"}
        onClick={onPrev}
      />
      <div className='datepicker-select'>
        <CustomSelect
          className='month-select'
          value={currentMonth}
          onChange={(val) => onMonthChange(Number(val))}
          options={months.map((m, i) => ({ label: m, value: i }))}
        />
        <CustomSelect
          className='year-select'
          value={currentYear}
          onChange={(val) => onYearChange(Number(val))}
          options={getYearRange().map((year) => ({
            value: year,
            label:
              calendarType === "AD" ? year.toString() : toNepaliNumber(year),
          }))}
        />
      </div>
      <ArrowBtn
        direction='next'
        disabled={viewMode !== "date"}
        onClick={onNext}
      />
    </div>
  );
};

export default CalendarHeader;
