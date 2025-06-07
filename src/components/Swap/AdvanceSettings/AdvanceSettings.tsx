import React, { memo, useState } from "react";
import clsx from "clsx";

import { IconButton, Text } from "@/components/common";
import classes from "./AdvanceSettings.module.css";

import SlipTolerance from "./SlipTolerance/SlipTolerance";
import SwapDeadline from "./SwapDeadline/SwapDeadline";
import TransactionTypes from "./TransactionTypes/TransactionTypes";

import { transactionTypes } from "@/data/data";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { TransactionType } from "@/types/transactonData";

const AdvanceSettings: React.FC = memo(() => {
  const [showAdvanceSettings, setShowAdvanceSettings] = useState<boolean>(true);
  const [activeSlipTolerance, setActiveSlipTolerance] =
    useState<string>("Auto");
  const [slipTolerance, setSlipTolerance] = useState<string>("");

  const [swapDeadline, setSwapDeadline] = useState<number>(30);

  const [selectedTransactionType, setSelectedTransactionType] =
    useState<TransactionType>(transactionTypes[0]);

  // Accessibility: handle keyboard toggle on header div
  const handleToggle = () => setShowAdvanceSettings((prev) => !prev);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleToggle();
    }
  };

  return (
    <div className={classes.wrapper}>
      <div
        className={clsx(classes.header, showAdvanceSettings && classes.active)}
        onClick={handleToggle}
        role="button"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        aria-expanded={showAdvanceSettings}
        aria-controls="advance-settings-content"
      >
        <Text base semiBold primitive200>
          Advance
        </Text>
        <IconButton>
          {showAdvanceSettings ? (
            <FaChevronUp className={classes.icon} />
          ) : (
            <FaChevronDown className={classes.icon} />
          )}
        </IconButton>
      </div>

      {showAdvanceSettings && (
        <div id="advance-settings-content" className={classes.container}>
          <SlipTolerance
            label="Slippage tolerance"
            activeSlipTolerance={activeSlipTolerance}
            setActiveSlipTolerance={setActiveSlipTolerance}
            slipTolerance={slipTolerance}
            setSlipTolerance={setSlipTolerance}
          />
          <SwapDeadline
            label="Swap deadline"
            swapDeadline={swapDeadline}
            setSwapDeadline={setSwapDeadline}
          />
          <TransactionTypes
            transactionTypes={transactionTypes}
            selectedTransactionType={selectedTransactionType}
            setSelectedTransactionType={setSelectedTransactionType}
          />
        </div>
      )}
    </div>
  );
});

export default AdvanceSettings;
