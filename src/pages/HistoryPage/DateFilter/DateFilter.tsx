import React, { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";

import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import classes from "./DateFilter.module.css";
import clsx from "clsx";
import { Text } from "@/components/common";

interface DropdownProps {
  value?: string;
  onClick?: () => void;
  isOpen: boolean;
}

const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  ({ value, onClick, isOpen }, ref) => (
    <div className={classes.dropdown} onClick={onClick} ref={ref}>
      <Text base primitive400 medium>
        {value || "Date"}
      </Text>
      {isOpen ? (
        <FaChevronUp
          className={clsx(classes.arrow, isOpen && classes.active)}
        />
      ) : (
        <FaChevronDown className={classes.arrow} />
      )}
    </div>
  )
);
Dropdown.displayName = "Dropdown";

interface DateFilterProps {
  date: Date | null;
  setDate: (date: Date | null) => void;
  className?: string;
}

const DateFilter: React.FC<DateFilterProps> = ({
  date,
  setDate,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={clsx(classes.wrapper, className)}>
      <DatePicker
        selected={date}
        onChange={(date: Date | null) => setDate(date)}
        dateFormat="dd/MM/yy"
        customInput={<Dropdown isOpen={isOpen} />}
        onCalendarOpen={() => setIsOpen(true)}
        onCalendarClose={() => setIsOpen(false)}
        showPopperArrow={false}
        // No need to add selectsMultiple unless you want multiple dates selection
      />
    </div>
  );
};

export default DateFilter;
