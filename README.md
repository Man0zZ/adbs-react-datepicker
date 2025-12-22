# adbs-react-datepicker

**AD/BS React Datepicker** – A lightweight and customizable datepicker component for React that supports both **AD (Gregorian)** and **BS (Bikram Sambat / Nepali)** calendars.

---

## Features

- Support for **AD (Gregorian)** and **BS (Bikram Sambat / Nepali)** calendars.
- Fully **TypeScript-ready**.
- Lightweight and easy to integrate into any React project.
- Customizable styles via `style.css`.
- Compatible with **React 16.8+**.
- Supports tree-shaking with both ESM and CommonJS formats.

---

## Installation

npm install adbs-react-datepicker

# or

yarn add adbs-react-datepicker

Peer Dependencies
Make sure you have these installed in your project:
react >= 16.8
react-dom >= 16.8

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
      <Datepicker name="ad" calendar="AD" value={dates.AD} onChange={handleChange('AD')} />

      <h3>BS Datepicker (Nepali)</h3>
      <Datepicker
        name="bs"
        calendar="BS"
        value={dates.BS}
        onChange={handleChange('BS')}
        lang="np"
      />
    </div>
  );
};

export default MyComponent;
```

## Props

The `Datepicker` component accepts the following props:

| Prop              | Type                     | Default         | Description                                                          |
| :---------------- | :----------------------- | :-------------- | :------------------------------------------------------------------- |
| **`calendar`**    | `'AD' \| 'BS'`           | `'AD'`          | Determines the calendar system used.                                 |
| **`value`**       | `string`                 | `undefined`     | The selected date value (Format: `YYYY-MM-DD`).                      |
| **`onChange`**    | `(date: string) => void` | `-`             | Callback triggered when a date is selected or cleared.               |
| **`lang`**        | `'en' \| 'np'`           | `'en'`          | Language for the UI. `'np'` renders Nepali numerals and month names. |
| **`placeholder`** | `string`                 | `"Select date"` | Placeholder text displayed when no date is selected.                 |
| **`className`**   | `string`                 | `''`            | Custom CSS class for the input wrapper.                              |
| **`name`**        | `string`                 | `-`             | Name attribute for the input field.                                  |
| **`min`**         | `string`                 | `-`             | Minimum selectable date (`YYYY-MM-DD`).                              |
| **`max`**         | `string`                 | `-`             | Maximum selectable date (`YYYY-MM-DD`).                              |
| **`darkMode`**    | `boolean`                | `false`         | Enables dark mode styling for input, calendar popup, and controls.   |
| **`clearable`**   | `boolean`                | `false`         | Shows a clear button to reset the selected date (`onChange('')`).    |

## Localization (`lang`)

The library supports full localization for the Nepali calendar.

- **`lang="en"` (Default):** Displays months in English (e.g., Baisakh, Jestha) and English numerals.
- **`lang="np"`:** Displays months in Nepali (e.g., बैशाख, जेठ) and Nepali numerals (०, १, २...).

## Date Format

- **Output:** The `onChange` event returns the date as a string in `YYYY-MM-DD` format (e.g., `2023-04-14` or `2080-01-01`).
- **Input:** The `value` prop expects the same format.

## License

This project is licensed under the **MIT License**.
