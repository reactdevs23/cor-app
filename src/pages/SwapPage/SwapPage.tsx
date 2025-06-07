// SwapPage.tsx
import React, { useState } from "react";
import clsx from "clsx";
import Decimal from "decimal.js";
import { AiOutlineSwap } from "react-icons/ai";

import AmountBox from "@/components/Swap/AmountBox/AmountBox";
import classes from "./SwapPage.module.css";
import { tokenList } from "@/data/data";
import SelectToken from "@/components/Modals/SelectToken/SelectToken";
import { Button, Text } from "@/components/common";
import AdvanceSettings from "@/components/Swap/AdvanceSettings/AdvanceSettings";
import CoinInfo from "@/components/Swap/CoinInfo/CoinInfo";
import useSwap from "@/Context/SwapContext/useSwap";

const SwapPage: React.FC = () => {
  const {
    selectedPayingToken,
    setSelectedPayingToken,
    selectedReceivingToken,
    setSelectedReceivingToken,
    payingAmount,
    setPayingAmount,
    receivingAmount,
    setReceivingAmount,
  } = useSwap();

  const [isPayingTokenModalActive, setIsPayingTokenModalActive] =
    useState(false);
  const [isReceivingTokenModalActive, setIsReceivingTokenModalActive] =
    useState(false);

  // example balances, consider getting them dynamically
  const balance = 1.24;
  const usdBalance = 3129.72;

  const handleSwapTokensAndAmounts = () => {
    setSelectedPayingToken(selectedReceivingToken);
    setSelectedReceivingToken(selectedPayingToken);

    setPayingAmount(receivingAmount);
    setReceivingAmount(payingAmount);
  };

  return (
    <>
      <div className={clsx(classes.wrapper, "space")}>
        <div className={clsx(classes.amountContainer)}>
          {/* Paying Token Selection */}
          <div className={classes.payingAmount}>
            <AmountBox
              className={classes.paying}
              selectedItem={selectedPayingToken?.symbol}
              logo={selectedPayingToken?.logo}
              onClick={() => setIsPayingTokenModalActive(true)}
              label="You Pay"
              amount={payingAmount}
              setAmount={setPayingAmount}
              balance={balance}
              paying
            >
              <div className={classes.balanceContainer}>
                <button className={classes.maxButton}>Max</button>
                <Text sm primitive400 semiBold>
                  ~ $
                  {new Decimal(usdBalance || 0)
                    .mul(new Decimal(payingAmount || "0"))
                    .toDecimalPlaces(2, Decimal.ROUND_DOWN)
                    .toString()}
                </Text>
              </div>
            </AmountBox>

            <button
              className={classes.swapWrapper}
              onClick={handleSwapTokensAndAmounts}
            >
              <AiOutlineSwap className={classes.arrow} />
            </button>
          </div>

          {/* Receiving Token Selection */}
          <AmountBox
            className={classes.receiving}
            selectedItem={selectedReceivingToken?.symbol}
            logo={selectedReceivingToken?.logo}
            onClick={() => setIsReceivingTokenModalActive(true)}
            label="You Receive"
            amount={receivingAmount}
            setAmount={setReceivingAmount}
            balance={balance}
            usdBalance={usdBalance}
          >
            <Text sm primitive400 semiBold className={classes.balance}>
              <span>
                {12.35} {selectedReceivingToken?.symbol}
              </span>{" "}
              ≈{" "}
              <span>
                {" "}
                $
                {new Decimal(usdBalance || 0)
                  .mul(new Decimal(receivingAmount || "0"))
                  .toDecimalPlaces(2, Decimal.ROUND_DOWN)
                  .toString()}{" "}
              </span>
            </Text>
          </AmountBox>
        </div>

        <AdvanceSettings />

        <CoinInfo
          payingToken={selectedPayingToken}
          receivingToken={selectedReceivingToken}
          exchangeRate={16.68}
          minimumReceived={0.6594}
          estimatedReceived={0.6}
          networkFee={0.000518}
        />

        <div className={classes.buttonContainer}>
          <Button lg wFull disabled={!payingAmount && !receivingAmount}>
            Swap
          </Button>
        </div>
      </div>

      <SelectToken
        isActive={isPayingTokenModalActive}
        onClose={() => setIsPayingTokenModalActive(false)}
        items={tokenList}
        selectedToken={selectedPayingToken}
        setSelectedToken={setSelectedPayingToken}
      />

      <SelectToken
        isActive={isReceivingTokenModalActive}
        onClose={() => setIsReceivingTokenModalActive(false)}
        items={tokenList}
        selectedToken={selectedReceivingToken}
        setSelectedToken={setSelectedReceivingToken}
      />
    </>
  );
};

export default SwapPage;
