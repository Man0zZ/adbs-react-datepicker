export type CalendarType = "AD" | "BS";

export type ViewMode = "date" | "month" | "year";

export type CalendarCell = {
  day: number;
  isDisabled: boolean;
  isToday: boolean;
  isSelected: boolean;
};

export type DatepickerProps = {
  initialDate?: Date;
  calendar?: CalendarType;
  onChange?: (date: string) => void;
  placeholder?: string;
  value?: string;
  className?: string;
};
