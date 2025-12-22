export type CalendarType = 'AD' | 'BS';

export type Lang = 'en' | 'np';

export type CalendarCell = {
  day: number;
  isDisabled: boolean;
  isToday: boolean;
  isSelected: boolean;
};

export interface DatepickerProps {
  calendar?: CalendarType;
  onChange?: (date: string) => void;
  value?: string;
  placeholder?: string;
  className?: string;
  min?: string;
  max?: string;
  name?: string;
  lang?: 'en' | 'np';
  darkMode?: boolean;
}

export interface SelectOption {
  label: string;
  value: string | number;
}

export interface CustomSelectProps {
  type?: 'select' | 'calendar';
  options?: SelectOption[];
  value?: string | number;
  onChange?: (value: string | number | Date) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  name?: string;
  lang?: 'en' | 'np';
  onClear?: () => void;
}
