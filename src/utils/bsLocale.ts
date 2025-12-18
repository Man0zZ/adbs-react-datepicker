import { BS_MONTHS_EN, BS_MONTHS_NP, AD_MONTHS } from '../const/months';
import { NEPALI_WEEKDAYS, ENGLISH_WEEKDAYS } from '../const/weekdays';
import { CalendarType } from '../types';

export const getBsLocale = (lang: 'en' | 'np', calendar: CalendarType) => {
  if (calendar === 'AD') {
    return {
      months: AD_MONTHS,
      weekdays: lang === 'np' ? NEPALI_WEEKDAYS : ENGLISH_WEEKDAYS,
    };
  }

  return {
    months: lang === 'np' ? BS_MONTHS_NP : BS_MONTHS_EN,
    weekdays: lang === 'np' ? NEPALI_WEEKDAYS : ENGLISH_WEEKDAYS,
  };
};
