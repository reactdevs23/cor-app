import React, { useState, forwardRef, ChangeEvent, FocusEvent } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import clsx from "clsx";

import classes from "./NumberInput.module.css";
import { handleKeyDown } from "@/utils/utils";
import { Text } from "..";

interface NumberInputProps {
  value: string | number;
  setValue: (value: number | string) => void;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  className?: string;
  readonly?: boolean;
  name?: string;
  sm?: boolean;
  type2?: boolean;
  type3?: boolean;
  type4?: boolean;
  isSol?: boolean;
  postfix?: string;
}

const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  (
    {
      value,
      setValue,
      placeholder,
      onChange,
      type,
      className,
      readonly,
      name,
      sm,
      type2,
      type3,
      type4,
      isSol,
      postfix,
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = (e: FocusEvent<HTMLInputElement>) => setIsFocused(true);
    const handleBlur = (e: FocusEvent<HTMLInputElement>) => setIsFocused(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      if (onChange) {
        onChange(e);
      } else {
        setValue(newValue);
      }
    };

    const increment = () => {
      const current = parseFloat(value?.toString() || "0");
      setValue((current + 1).toString());
    };

    const decrement = () => {
      const current = parseFloat(value?.toString() || "0");
      setValue((current - 1).toString());
    };

    return (
      <div
        className={clsx(
          type2 && classes.type2,
          type3 && classes.type3,
          classes.inputContainer,
          isFocused && classes.focused,
          className,
          sm && classes.sm
        )}
      >
        {!isSol && type2 && !type3 && !type4 && (
          <Text primitive400 sm medium>
            %
          </Text>
        )}

        <input
          id="input"
          name={name}
          type="number"
          onKeyDown={handleKeyDown}
          value={value}
          onChange={handleChange}
          className={classes.input}
          placeholder={placeholder}
          required
          readOnly={readonly}
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={ref}
        />
        {type2 && !type4 && (
          <div className={classes.arrows}>
            <button
              type="button"
              onClick={increment}
              className={clsx(classes.iconButton, classes.up)}
            >
              <FiChevronUp />
            </button>
            <button
              type="button"
              onClick={decrement}
              className={clsx(classes.iconButton, classes.down)}
            >
              <FiChevronDown />
            </button>
          </div>
        )}
        {type4 && (
          <Text primitive400 sm medium>
            {postfix || "%"}
          </Text>
        )}

        {isSol && (
          <Text primitive400 sm medium>
            SOL
          </Text>
        )}
      </div>
    );
  }
);

export default NumberInput;
