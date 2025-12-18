import React from 'react';
import { CalendarCell, CalendarType } from '../types';
import { toNepaliNumber } from '../../helpers';
import { ENGLISH_WEEKDAYS, NEPALI_WEEKDAYS } from '../const/weekdays';

type Props = {
  weeks: CalendarCell[][];
  calendarType: CalendarType;
  onSelect: (cell: CalendarCell) => void;
  lang?: 'en' | 'np';
};

const CalendarGrid: React.FC<Props> = ({ weeks, calendarType, onSelect, lang = 'en' }) => {
  const getWeekdays = (calendarType: CalendarType, lang: 'en' | 'np') => {
    if (calendarType === 'BS') {
      return lang === 'np' ? NEPALI_WEEKDAYS : ENGLISH_WEEKDAYS;
    }

    return ENGLISH_WEEKDAYS;
  };

  const formatDay = (day: number, calendarType: CalendarType, lang: 'en' | 'np') => {
    if (calendarType === 'BS' && lang === 'np') {
      return toNepaliNumber(day);
    }

    return day;
  };
  const weekdays = getWeekdays(calendarType, lang);

  return (
    <table className="calendar-table">
      <thead>
        <tr>
          {weekdays.map((w, i) => (
            <th key={i}>{w}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {weeks.map((week, i) => (
          <tr key={i}>
            {week.map((cell, j) => (
              <td
                key={j}
                className={`calendar-cell 
                  ${cell.isSelected ? 'selected' : ''} 
                  ${cell.isToday ? 'today' : ''} 
                  ${cell.isDisabled ? 'disabled' : ''}`}
                onClick={() => onSelect(cell)}
              >
                {formatDay(cell.day, calendarType, lang)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CalendarGrid;
