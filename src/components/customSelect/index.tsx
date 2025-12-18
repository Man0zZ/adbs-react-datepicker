import React, { useEffect, useRef, useState } from 'react';
import { toNepaliNumber } from '../../../helpers';
import { CustomSelectProps } from '../../types';

const CustomSelect: React.FC<CustomSelectProps> = ({
  type = 'select',
  options = [],
  value,
  onChange = () => {},
  placeholder = type === 'calendar' ? 'Select date' : 'Select an option',
  disabled = false,
  className,
  onClick,
  name,
  lang = 'en',
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const localizedValue = lang === 'np' && value ? toNepaliNumber(value) : value;

  if (type === 'calendar') {
    return (
      <div className="calendar">
        <input
          readOnly
          type="text"
          name={name}
          value={localizedValue}
          placeholder={placeholder}
          className={`custom-calendar ${className}`}
          onClick={onClick}
        />
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 1v2h6V1h2v2h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1zm11 10H4v8h16zM7 5H4v4h16V5h-3v2h-2V5H9v2H7z" />
        </svg>
      </div>
    );
  }

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div ref={ref} className={`custom-select ${className} ${disabled ? 'disabled' : ''}`}>
      <button
        type="button"
        className="select-trigger"
        onClick={() => !disabled && setOpen((prev) => !prev)}
        disabled={disabled}
      >
        <span className={!selectedOption ? 'placeholder' : ''}>
          {selectedOption?.label || placeholder}
        </span>
        <svg
          className={`arrow ${open ? 'open' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="m12 15-4.243-4.242 1.415-1.414L12 12.172l2.828-2.828 1.415 1.414z" />
        </svg>
      </button>

      {open && (
        <ul className="select-dropdown">
          {options.length === 0 && <li className="empty">No options</li>}
          {options.map((option) => (
            <li
              key={option.value}
              className={`option ${option.value === value ? 'selected' : ''}`}
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
