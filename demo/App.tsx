import { useState } from 'react';
import Datepicker from '../src/Datepicker';

type CalendarType = 'AD' | 'BS';

export default function App() {
  const [dates, setDates] = useState<Record<CalendarType, string>>({
    AD: '',
    BS: '',
  });

  const handleChange = (calendar: CalendarType) => (value: string) => {
    setDates((prev) => ({
      ...prev,
      [calendar]: value,
    }));
  };

  return (
    <div className="container">
      <h1>AD/BS Datepicker</h1>
      <div className="grid-layout w-full">
        <Datepicker
          name="ad"
          calendar="AD"
          value={dates.AD}
          onChange={handleChange('AD')}
          darkMode={true}
        />
        <Datepicker
          name="bs"
          calendar="BS"
          value={dates.BS}
          onChange={handleChange('BS')}
          lang="np"
        />
      </div>
    </div>
  );
}
