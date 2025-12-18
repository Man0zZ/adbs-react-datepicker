import { bsToAd, adToBs } from '../src';
import { CalendarType } from '../src/types';

export function toNepaliNumber(num: number | string): string {
  const nepaliDigits: { [key: string]: string } = {
    '0': '०',
    '1': '१',
    '2': '२',
    '3': '३',
    '4': '४',
    '5': '५',
    '6': '६',
    '7': '७',
    '8': '८',
    '9': '९',
  };
  return String(num).replace(/[0-9]/g, (digit) => nepaliDigits[digit]);
}

const parseToDate = (value?: string, calendar?: CalendarType): Date | null => {
  if (!value) return null;

  try {
    if (calendar === 'AD') return new Date(value);
    const [y, m, d] = value.split('-').map(Number);
    return bsToAd(y, m, d);
  } catch {
    return null;
  }
};

const formatDate = (date: Date, calendar: CalendarType): string => {
  if (calendar === 'AD') {
    return date.toLocaleDateString('en-CA');
  }

  const bs = adToBs(date);
  return `${bs.year}-${String(bs.month).padStart(2, '0')}-${String(bs.day).padStart(2, '0')}`;
};

const formatBsDate = (date: Date) => {
  const bs = adToBs(date);
  return `${bs.year}-${String(bs.month).padStart(2, '0')}-${String(bs.day).padStart(2, '0')}`;
};

export { parseToDate, formatDate, formatBsDate };
