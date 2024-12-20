'use client';
import { regexPhone } from '@/regex';
import styles from './FormInput.module.scss';
import { useState, useEffect } from 'react';

function FormInput({
  value,
  limit,
  id,
  label,
  type,
  inputName,
  pattern,
  size,
  accept,
  maxLength,
  min,
  max,
  placeholder,
  disabled,
  isCleanedInput,
  onChange,
  className,
  forModalSign,
}) {
  const [inputValue, setInputValue] = useState(value || '');
  const [isClean, setIsClean] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (e) => {
    let newValue = e.target.value;
    const trimmedValue = newValue.trim();

    if (type === 'email' || inputName === 'email') {
      newValue = newValue.trim();
      if (newValue.length > 0) {
        newValue = newValue.replace(/\s{2,}/g, ' ');
      }
    } else {
      const trimmedValue = newValue.trim();
      if (trimmedValue === '') {
        newValue = newValue.trim();
      }
      if (newValue.startsWith(' ')) {
        newValue = newValue.slice(1);
      }
    }
    if (type === 'number') {
      if (newValue.startsWith('-') || newValue.startsWith('+')) {
        newValue = newValue.slice(1);
      }
      if (newValue.endsWith('-') || newValue.endsWith('+')) {
        newValue = newValue.slice(0, -1);
      }

      if (inputName.includes('experience')) {
        const validExperiences = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        console.log(newValue, validExperiences.includes(newValue));
        if (
          !validExperiences.includes(Number(newValue)) ||
          newValue.includes('-') ||
          newValue.includes('+')
        ) {
          newValue = '';
        }
      }
    }

    if (trimmedValue === '') {
      newValue = newValue.trim();
    }
    if (newValue.startsWith(' ')) {
      newValue = newValue.slice(1);
    }
    if (type === 'text') {
      if (newValue.length > 0) {
        newValue = newValue.replace(/\s{2,}/g, ' ');
        newValue = newValue[0].toUpperCase() + newValue.slice(1);
      }
    }
    if (type === 'url') {
      if (newValue.length > 0) {
        newValue = newValue.replace(/\s{2,}/g, ' ');
      }
    }

    if (type === 'tel') {
      const phonePattern = '+7 (777) 777 77 77';
      const inputValue = newValue.replace(/\D/g, '');
      let formattedValue = '+7 (';

      for (let i = 1; i < phonePattern.length; i++) {
        if (inputValue[i]) {
          if (i === 4) formattedValue += ') ';
          else if (i === 7 || i === 9) formattedValue += ' ';
          formattedValue += inputValue[i];
        } else {
          break;
        }
      }

      newValue = formattedValue;
    }
    if (inputName === 'tux_number') {
      const inputValue = newValue.replace(/\D/g, '');

      let formattedValue = '';
      if (inputValue.length > 0) formattedValue += `${inputValue.slice(0, 2)}`;
      if (inputValue.length >= 3)
        formattedValue += ` ${inputValue.slice(2, 4)}`;
      if (inputValue.length >= 5)
        formattedValue += ` ${inputValue.slice(4, 10)}`;
      if (inputValue.length >= 11)
        formattedValue += ` (${inputValue.slice(10, 12)}`;
      if (inputValue.length >= 12) formattedValue += `)`;

      newValue = formattedValue;
    }

    setInputValue(newValue);
    setIsClean(trimmedValue !== '' && isCleanedInput);

    if (typeof onChange === 'function') {
      onChange({
        target: {
          name: inputName,
          value: newValue,
        },
      });
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
    if (inputName === 'tel' && !inputValue) {
      setInputValue('+7 (');
    }
  };

  const handleBlur = () => {
    setIsFocused(false);

    const trimmedValue = inputValue.trimEnd();
    setInputValue(trimmedValue);

    if (inputName === 'tel' && trimmedValue === '+7 (') {
      setInputValue('');
    }

    if (typeof onChange === 'function' && trimmedValue !== inputValue) {
      onChange({ target: { name: inputName, value: trimmedValue } });
    }
  };

  const handleKeyDownTax = (e) => {
    if (e.key === 'Backspace' && e.target.value.endsWith(')')) {
      const newValue = e.target.value.slice(0, -1);
      setInputValue(newValue);
      e.preventDefault();
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
    if (inputName === 'tux_number') {
      handleKeyDownTax(e);
    }
  };

  const clean = () => {
    setInputValue('');
    setIsClean(false);
    if (typeof onChange === 'function') {
      onChange({ target: { name: inputName, value: '' } });
    }
  };

  const inputProps = {
    className: isClean
      ? `${styles.input} ${styles.padding} ${className} ${
          type === 'number' && styles.number_input
        }`
      : `${styles.input} ${className} ${
          type === 'number' && styles.number_input
        }`,
    id,
    type: type === 'tel' ? 'tel' : type,
    name: inputName,
    max,
    min,
    pattern: inputName === 'tel' ? regexPhone : pattern,
    size,
    accept,
    placeholder: isFocused && type === 'tel' ? '' : placeholder,
    disabled,
    value: inputValue,
    onChange: handleInputChange,
    onFocus: handleFocus,
    onBlur: handleBlur,
    maxLength: type === 'tel' ? 18 : undefined,
    onKeyDown: handleKeyDown,
  };

  return (
    <div className={styles.box}>
      {label && (
        <label
          htmlFor={id}
          className={
            disabled
              ? `${styles.label} ${styles.disabled} ${
                  forModalSign && styles.labelModal
                }`
              : `${styles.label} ${forModalSign && styles.labelModal}`
          }
        >
          {label}
        </label>
      )}
      {limit ? (
        <div className={styles.container}>
          <input
            {...inputProps}
            className={`${inputProps.className} ${styles.inputCustom}  ${
              forModalSign && styles.inputModal
            }`}
          />
          <span className={styles.customPlaceholder}>{limit}</span>
          {isClean && (
            <button onClick={clean} className={styles.clean}>
              <img
                className={styles.clean__img}
                src="/images/form/clean-input.svg"
                alt="clean"
              />
            </button>
          )}
        </div>
      ) : (
        <div className={styles.container}>
          <input
            {...inputProps}
            className={`${inputProps.className}  ${
              forModalSign && styles.inputModal
            }`}
          />
          {isClean && (
            <button onClick={clean} className={styles.clean}>
              <img src="/images/form/clean-input.svg" alt="clean" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default FormInput;
