import React, { useState } from "react";
import clsx from "clsx";
import classes from "./AmountInput.module.css";
import { handleKeyDown } from "@/utils/utils";
import { Text } from "..";

const AmountInput = (
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
    label,
    tokenName,
  },
  ref
) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const handleChange = (e) => {
    const newValue = e.target.value;
    if (onChange) {
      onChange(e);
    } else {
      setValue(newValue);
    }
  };

  return (
    <div
      className={clsx(
        classes.inputContainer,
        isFocused && classes.focused,
        className,
        sm && classes.sm
      )}
    >
      <div className={classes.label}>
        <Text primitive400 sm>
          {label}
        </Text>
      </div>
      <input
        id="input"
        name={name}
        type="number"
        onKeyDown={type === "number" ? handleKeyDown : undefined}
        value={value}
        onChange={handleChange}
        className={classes.input}
        placeholder={placeholder}
        required
        readOnly={readonly}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />{" "}
      <Text primitive400 lxs>
        {tokenName}
      </Text>
    </div>
  );
};

export default AmountInput;
