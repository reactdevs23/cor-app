import { NumberInput, Text } from "@/components/common";
import React from "react";
import classes from "./SwapDeadline.module.css";
import clsx from "clsx";

interface SwapDeadlineProps {
  label: string;
  swapDeadline: number | string;
  setSwapDeadline: (value: number) => void; // matches NumberInput setValue type
}

const SwapDeadline: React.FC<SwapDeadlineProps> = ({
  label,
  swapDeadline,
  setSwapDeadline,
}) => {
  return (
    <div className={classes.wrapper}>
      <Text sm primitive400 medium>
        {label}
      </Text>

      <NumberInput
        type4
        postfix="minutes"
        value={swapDeadline}
        setValue={setSwapDeadline}
        placeholder="0"
        className={clsx(classes.customInput)}
      />
    </div>
  );
};

export default SwapDeadline;
