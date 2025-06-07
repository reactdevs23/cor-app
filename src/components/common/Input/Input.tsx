import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import { LuSearch } from "react-icons/lu";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import clsx from "clsx";

import classes from "./Input.module.css";

interface InputProps {
  value: string | number;
  disabled?: boolean;
  setValue: (val: string) => void;
  search?: boolean;
  placeholder?: string;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  className?: string;
  readonly?: boolean;
  noIcon?: boolean;
  name?: string;
  sm?: boolean;
}

const Input: React.FC<InputProps> = ({
  value,
  disabled = false,
  setValue,
  search = false,
  placeholder = "",
  onKeyDown,
  onChange,
  type = "text",
  className,
  readonly = false,
  noIcon = false,
  name,
  sm = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    } else {
      setValue(e.target.value);
    }
  };

  return (
    <div
      className={clsx(
        classes.inputContainer,
        isFocused && classes.focused,
        className,
        search && classes.searchIconInputContainer,
        sm && classes.sm
      )}
    >
      {search && !noIcon && <LuSearch className={classes.searchIcon} />}

      <input
        id="input"
        name={name}
        type={showPassword ? "text" : type}
        onKeyDown={onKeyDown}
        value={value}
        onChange={handleChange}
        className={classes.input}
        placeholder={placeholder}
        required
        disabled={disabled}
        readOnly={readonly}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />

      {type === "password" && (
        <>
          {showPassword ? (
            <FaRegEye
              className={classes.eye}
              onClick={() => setShowPassword((prev) => !prev)}
            />
          ) : (
            <FaRegEyeSlash
              className={classes.eye}
              onClick={() => setShowPassword((prev) => !prev)}
            />
          )}
        </>
      )}

      {search && value && (
        <MdClose className={classes.close} onClick={() => setValue("")} />
      )}
    </div>
  );
};

export default Input;
