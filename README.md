# adbs-react-datepicker

**AD/BS React Datepicker** – A lightweight and customizable datepicker component for React that supports both **AD (Gregorian)** and **BS (Bikram Sambat / Nepali)** calendars.

---

## Features

- Support for **AD (Gregorian)** and **BS (Bikram Sambat / Nepali)** calendars.
- Fully **TypeScript-ready**.
- Lightweight and easy to integrate into any React project.
- Customizable styles via `style.css`.
- Compatible with **React 18+**.
- Supports tree-shaking with both ESM and CommonJS formats.

---

## Installation

npm install adbs-react-datepicker

# or

yarn add adbs-react-datepicker

Peer Dependencies
Make sure you have these installed in your project:
react >= 18
react-dom >= 18

---

## Usage

Import the component and the styles in your React application.

```tsx
import React, { useState } from 'react';
import Datepicker from 'adbs-react-datepicker';
// Import default styles (adjust path if using specific css loaders)
import 'adbs-react-datepicker/dist/style.css';

const MyComponent = () => {
  const [adDate, setAdDate] = useState('');
  const [bsDate, setBsDate] = useState('');

  return (
    <div className="date-picker-container">
      <h3>AD Datepicker</h3>
      <Datepicker
        calendar="AD"
        value={adDate}
        onChange={setAdDate}
        placeholder="Select English Date"
      />

      <h3>BS Datepicker (Nepali)</h3>
      <Datepicker
        calendar="BS"
        value={bsDate}
        onChange={setBsDate}
        lang="np"
        placeholder="मिति छान्नुहोस्"
      />
    </div>
  );
};

export default MyComponent;
```

## Props

The `Datepicker` component accepts the following props:

| Prop              | Type                     | Default         | Description                                                               |
| :---------------- | :----------------------- | :-------------- | :------------------------------------------------------------------------ |
| **`calendar`**    | `'AD' \| 'BS'`           | `'AD'`          | Determines the calendar system used.                                      |
| **`value`**       | `string`                 | `undefined`     | The selected date value (Format: `YYYY-MM-DD`).                           |
| **`onChange`**    | `(date: string) => void` | `-`             | Callback function triggered when a date is selected. Returns date string. |
| **`lang`**        | `'en' \| 'np'`           | `'en'`          | Language for the UI. `'np'` renders Nepali numerals and month names.      |
| **`placeholder`** | `string`                 | `"Select date"` | Placeholder text displayed when no date is selected.                      |
| **`className`**   | `string`                 | `''`            | Custom CSS class for the input wrapper.                                   |
| **`name`**        | `string`                 | `-`             | Name attribute for the input field.                                       |
| **`min`**         | `string`                 | `-`             | Minimum selectable date.                                                  |
| **`max`**         | `string`                 | `-`             | Maximum selectable date.                                                  |

## Localization (`lang`)

The library supports full localization for the Nepali calendar.

- **`lang="en"` (Default):** Displays months in English (e.g., Baisakh, Jestha) and English numerals.
- **`lang="np"`:** Displays months in Nepali (e.g., बैशाख, जेठ) and Nepali numerals (०, १, २...).

## Date Format

- **Output:** The `onChange` event returns the date as a string in `YYYY-MM-DD` format (e.g., `2023-04-14` or `2080-01-01`).
- **Input:** The `value` prop expects the same format.

## License

This project is licensed under the **MIT License**.
