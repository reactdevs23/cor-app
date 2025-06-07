import { NumberInput, Text } from "@/components/common";
import React from "react";
import classes from "./SlipTolerance.module.css";
import clsx from "clsx";

interface SlipToleranceProps {
  label: string;
  slipTolerance: string;
  setSlipTolerance: (value: string) => void;
  activeSlipTolerance: "Auto" | number | string; // Accept "Auto" or a number/string for tolerance
  setActiveSlipTolerance: (value: "Auto" | string) => void;
}

const SlipTolerance: React.FC<SlipToleranceProps> = ({
  label,
  slipTolerance,
  setSlipTolerance,
  activeSlipTolerance,
  setActiveSlipTolerance,
}) => {
  return (
    <div className={classes.wrapper}>
      <Text sm primitive400 medium>
        {label}
      </Text>
      <div className={classes.toleranceContainer}>
        <button
          className={clsx(classes.tolerance, {
            [classes.activeTolerance]: activeSlipTolerance === "Auto",
          })}
          onClick={() => {
            setActiveSlipTolerance("Auto");
          }}
        >
          Auto
        </button>
        {/* Uncomment and adapt if you want a fixed tolerance button */}
        {/* <button
          className={clsx(classes.tolerance, {
            [classes.activeTolerance]: activeSlipTolerance === 0.5,
          })}
          onClick={() => {
            setActiveSlipTolerance(0.5);
          }}
        >
          0.5%
        </button> */}
        <NumberInput
          type4
          value={slipTolerance}
          setValue={setSlipTolerance}
          placeholder="0"
          className={clsx(classes.customInput, {
            [classes.activePercentage]: slipTolerance !== "",
          })}
        />
      </div>
    </div>
  );
};

export default SlipTolerance;
