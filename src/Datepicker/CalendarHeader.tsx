import React from 'react';
import ArrowBtn from '../Icons/index';
import { CalendarType } from '../types';
import { toNepaliNumber } from '../../helpers';
import CustomSelect from '../components/customSelect';
import { getBsLocale } from '../utils/bsLocale';

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

const CalendarHeader: React.FC<Props> = ({
  currentMonth,
  currentYear,
  calendarType,
  onMonthChange,
  onYearChange,
  onPrev,
  onNext,
  lang = 'en',
}) => {
  const { months } = getBsLocale(lang, calendarType);
  const isBs = calendarType === 'BS';
  const isPrevDisabled = isBs && currentYear <= 2000 && currentMonth <= 0;
  const isNextDisabled = isBs && currentYear >= 2100 && currentMonth >= 11;

  const getYearOptions = () => {
    if (isBs) {
      const years = [];
      for (let y = 2100; y >= 2000; y--) {
        const bsYearLabel = lang === 'np' ? toNepaliNumber(y) : y.toString();

        years.push({
          value: y,
          label: `${bsYearLabel}`,
        });
      }
      return years;
    } else {
      const currentAdYear = new Date().getFullYear();
      const adYears = [];
      for (let y = currentAdYear + 20; y >= currentAdYear - 80; y--) {
        adYears.push({ value: y, label: y.toString() });
      }
      return adYears;
    }
  };

  return (
    <div className="datepicker-header">
      <ArrowBtn direction="prev" disabled={isPrevDisabled} onClick={onPrev} />

      <div className="datepicker-select">
        <CustomSelect
          className="month-select"
          value={currentMonth}
          onChange={(val) => onMonthChange(Number(val))}
          options={months.map((m, i) => ({ label: m, value: i }))}
        />

        <CustomSelect
          className="year-select"
          value={currentYear}
          onChange={(val) => onYearChange(Number(val))}
          options={getYearOptions()}
        />
      </div>

      <ArrowBtn direction="next" disabled={isNextDisabled} onClick={onNext} />
    </div>
  );
};

export default CalendarHeader;
