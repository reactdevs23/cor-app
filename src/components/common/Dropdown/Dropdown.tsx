import { useRef } from "react";
import clsx from "clsx";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import classes from "./Dropdown.module.css";
import React from "react";
import useOnClickOutside from "@/hooks";
import { Text } from "@/components/common";

interface DropdownProps<T> {
  isActive: boolean;
  dropdownItems?: T[];
  selectedValue?: T;
  onSelect: (item: T | "All") => void;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  label: string;
  className?: string;
}

function Dropdown<T>({
  isActive,
  dropdownItems,
  selectedValue,
  onSelect,
  setIsActive,
  label,
  className,
}: DropdownProps<T>) {
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () => setIsActive(false));

  return (
    <div className={clsx(classes.dropdown, className)} ref={ref}>
      <div
        className={clsx(classes.labelContainer, isActive && classes.active)}
        onClick={() => setIsActive((prev) => !prev)}
      >
        <Text base primitive400 medium className={clsx(classes.label)}>
          {selectedValue ? String(selectedValue) : label}
        </Text>
        {isActive ? (
          <FaChevronUp className={clsx(classes.arrow, classes.active)} />
        ) : (
          <FaChevronDown className={classes.arrow} />
        )}
      </div>
      <div className={clsx(classes.dropdownMain, isActive && classes.active)}>
        <div className={clsx(classes.list, "overflow")}>
          <button
            className={classes.listItemContainer}
            onClick={() => {
              setIsActive(false);
              onSelect("All");
            }}
          >
            <Text
              className={clsx(
                classes.listItem,
                selectedValue === "All" && classes.active
              )}
              sm
            >
              All
            </Text>
          </button>

          {dropdownItems?.map((item, idx) => (
            <button
              key={idx}
              className={classes.listItemContainer}
              onClick={() => {
                setIsActive(false);
                onSelect(item);
              }}
            >
              <Text
                className={clsx(
                  classes.listItem,
                  item === selectedValue && classes.active
                )}
                sm
              >
                {String(item)}
              </Text>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
