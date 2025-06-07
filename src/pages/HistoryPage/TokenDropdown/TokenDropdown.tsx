import React, { useRef } from "react";
import clsx from "clsx";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import classes from "./TokenDropdown.module.css";
import useOnClickOutside from "@/hooks";
import { Text } from "@/components/common";

interface Token {
  symbol: string;
  name: string;
}

interface TokenDropdownProps {
  isActive: boolean;
  dropdownItems: Token[];
  selectedValue: string;
  onSelect: (value: string) => void;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  label: string;
  className?: string;
}

const TokenDropdown: React.FC<TokenDropdownProps> = ({
  isActive,
  dropdownItems,
  selectedValue,
  onSelect,
  setIsActive,
  label,
  className,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () => setIsActive(false));

  return (
    <div className={clsx(classes.dropdown, className)} ref={ref}>
      <div
        className={clsx(classes.labelContainer, isActive && classes.active)}
        onClick={() => setIsActive((prev) => !prev)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setIsActive((prev) => !prev);
          }
        }}
      >
        <Text base primitive400 medium className={clsx(classes.label)}>
          {selectedValue || label}
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
            type="button"
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

          {dropdownItems.map((item, idx) => (
            <button
              key={idx}
              type="button"
              className={classes.listItemContainer}
              onClick={() => {
                setIsActive(false);
                onSelect(item.symbol);
              }}
            >
              <Text
                className={clsx(
                  classes.listItem,
                  item.symbol === selectedValue && classes.active
                )}
                sm
              >
                {item.name}
              </Text>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TokenDropdown;
