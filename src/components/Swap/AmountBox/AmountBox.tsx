import { memo, ReactNode } from "react";
import { Input, Text } from "@/components/common";
import classes from "./AmountBox.module.css";
import { handleKeyDown } from "@/utils/utils";

import clsx from "clsx";

import { FaChevronDown } from "react-icons/fa6";

interface AmountBoxProps {
  disabled?: boolean;
  setIsExactIn?: () => void;
  label: string;
  amount: string;
  setAmount: (value: string) => void;
  logo?: string;
  selectedItem?: string;
  balance?: number;
  usdBalance?: number;
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  paying?: boolean;
  receving?: boolean; // not used in your code, but kept for completeness
}

const AmountBox = memo(
  ({
    disabled,
    setIsExactIn,
    label,
    amount,
    setAmount,
    logo,
    selectedItem,
    balance,
    children,
    className,
    onClick,
    paying,
  }: AmountBoxProps) => {
    return (
      <div className={clsx(classes.wrapper, className)}>
        <div className={classes.container}>
          <div className={classes.header}>
            <Text lsm primitive400 medium>
              {label}
            </Text>
            {paying && (
              <Text lxs primitive300 semiBold>
                <span className={classes.label}>Balance:</span> {balance ?? 0}{" "}
                {selectedItem}
              </Text>
            )}
          </div>
          <div className={classes.inputWrapper}>
            <Input
              disabled={disabled}
              value={amount}
              setValue={setAmount}
              placeholder="0.00"
              onKeyDown={handleKeyDown}
              type="number"
              className={classes.input}
            />
            <div className={classes.selectedItem} onClick={onClick}>
              {logo && <img src={logo} alt="#" className={classes.logo} />}
              <Text primitive300 base semiBold>
                {selectedItem}
              </Text>
              <FaChevronDown className={classes.icon} />
            </div>
          </div>

          {children}
        </div>
      </div>
    );
  }
);

export default AmountBox;
