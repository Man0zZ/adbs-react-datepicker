import React from "react";
import { CalendarCell, CalendarType } from "../types";
import { toNepaliNumber } from "../../helpers";
import { ENGLISH_WEEKDAYS, NEPALI_WEEKDAYS } from "../const/weekdays";

type Props = {
  weeks: CalendarCell[][];
  calendarType: CalendarType;
  onSelect: (cell: CalendarCell) => void;
};

const CalendarGrid: React.FC<Props> = ({ weeks, calendarType, onSelect }) => {
  const weekdays = calendarType === "AD" ? ENGLISH_WEEKDAYS : NEPALI_WEEKDAYS;

  return (
    <table className='calendar-table'>
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
                  ${cell.isSelected ? "selected" : ""} 
                  ${cell.isToday ? "today" : ""} 
                  ${cell.isDisabled ? "disabled" : ""}`}
                onClick={() => onSelect(cell)}
              >
                {calendarType === "BS" ? toNepaliNumber(cell.day) : cell.day}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CalendarGrid;
