import React from "react";
import { CalendarType } from "../types";
import { toNepaliNumber } from "../../helpers";

type Props = {
  items: (string | number)[];
  activeItem: string | number;
  calendarType: CalendarType;
  onSelect: (index: number) => void;
};

const MonthYearGrid: React.FC<Props> = ({
  items,
  activeItem,
  calendarType,
  onSelect,
}) => (
  <div className='month-year-grid'>
    {items.map((item, i) => {
      const label =
        typeof item === "number" && calendarType === "BS"
          ? toNepaliNumber(item)
          : item;

      const isActive =
        typeof item === "number" ? item === activeItem : i === activeItem;

      return (
        <div
          key={item}
          className={`month-year-item ${isActive ? "active" : ""}`}
          onClick={() => onSelect(typeof item === "number" ? item : i)}
        >
          {label}
        </div>
      );
    })}
  </div>
);

export default MonthYearGrid;
