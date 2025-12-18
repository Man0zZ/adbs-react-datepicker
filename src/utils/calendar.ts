import { BS_CALENDAR_DATA } from '../const/bsCalendarData';

const BS_REFERENCE_AD_DATE = new Date('1943-04-14');
const BS_REFERENCE_YEAR = 2000;

export function getBSYearList(): number[] {
  return Object.keys(BS_CALENDAR_DATA)
    .map(Number)
    .sort((a, b) => b - a);
}

export function adToBs(adDate: Date): {
  year: number;
  month: number;
  day: number;
} {
  const adYear = adDate.getFullYear();
  if (adYear < 1943 || adYear > 2044) {
    console.warn('AD date is out of supported BS range (2000-2100).');
    return { year: adYear + 57, month: adDate.getMonth() + 1, day: adDate.getDate() };
  }

  const msPerDay = 1000 * 60 * 60 * 24;
  const refUTC = Date.UTC(
    BS_REFERENCE_AD_DATE.getFullYear(),
    BS_REFERENCE_AD_DATE.getMonth(),
    BS_REFERENCE_AD_DATE.getDate()
  );
  const adUTC = Date.UTC(adDate.getFullYear(), adDate.getMonth(), adDate.getDate());
  let dayDiff = Math.floor((adUTC - refUTC) / msPerDay);

  let bsYear = BS_REFERENCE_YEAR;
  let bsMonth = 1;
  let bsDay = 1;

  if (dayDiff < 0) {
    return { year: 0, month: 0, day: 0 };
  }

  while (dayDiff > 0) {
    const daysInCurrentBsMonth = BS_CALENDAR_DATA[bsYear][bsMonth - 1];
    if (dayDiff >= daysInCurrentBsMonth) {
      dayDiff -= daysInCurrentBsMonth;
      bsMonth++;
      if (bsMonth > 12) {
        bsMonth = 1;
        bsYear++;
      }
    } else {
      bsDay += dayDiff;
      dayDiff = 0;
    }
  }
  return { year: bsYear, month: bsMonth, day: bsDay };
}

export function bsToAd(bsYear: number, bsMonth: number, bsDay: number): Date {
  if (bsYear < 2000 || bsYear > 2100) {
    console.warn('BS date is out of range (2000-2100).');
    return new Date(bsYear - 57, bsMonth - 1, bsDay);
  }

  let dayDiff = 0;
  for (let y = BS_REFERENCE_YEAR; y < bsYear; y++) {
    dayDiff += BS_CALENDAR_DATA[y].reduce((sum, days) => sum + days, 0);
  }
  for (let m = 1; m < bsMonth; m++) {
    dayDiff += BS_CALENDAR_DATA[bsYear][m - 1];
  }
  dayDiff += bsDay - 1;

  const msPerDay = 1000 * 60 * 60 * 24;
  const refUTCTimestamp = Date.UTC(
    BS_REFERENCE_AD_DATE.getFullYear(),
    BS_REFERENCE_AD_DATE.getMonth(),
    BS_REFERENCE_AD_DATE.getDate()
  );
  const newUTCTimestamp = refUTCTimestamp + dayDiff * msPerDay;
  return new Date(newUTCTimestamp);
}

export const generateADCalendar = (month: number, year: number): (number | null)[] => {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const days: (number | null)[] = Array(firstDay).fill(null);
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }
  return days;
};

export const generateBSCalendar = (month: number, year: number): (number | null)[] => {
  if (!BS_CALENDAR_DATA[year]) {
    console.error(`BS data for year ${year} not available.`);
    return Array(35).fill(null);
  }
  const firstAdDateOfBsMonth = bsToAd(year, month + 1, 1);
  const firstDayOfWeek = firstAdDateOfBsMonth.getDay();
  const daysInMonth = BS_CALENDAR_DATA[year][month];
  const days: (number | null)[] = Array(firstDayOfWeek).fill(null);
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }
  return days;
};
