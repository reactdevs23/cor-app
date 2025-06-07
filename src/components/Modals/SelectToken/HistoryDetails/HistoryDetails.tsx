import { Line, Modal, Text } from "@/components/common";
import classes from "./HistoryDetails.module.css";
import clsx from "clsx";
import React from "react";

interface TokenInfo {
  amount?: number | string;
  symbol?: string;
}

interface WalletInfo {
  name?: string;
}

interface HistoryDetailsProps {
  isAactive: boolean; // typo in original? consider renaming to isActive
  onClose: () => void;
  status?: string;
  from: TokenInfo;
  to: TokenInfo;
  exchangeRate?: string | number;
  slipTolerance?: string | number;
}

const HistoryDetails: React.FC<HistoryDetailsProps> = ({
  isAactive,
  onClose,
  status,
  from,
  to,
  exchangeRate,
  slipTolerance,
}) => {
  // Hardcoded details (consider passing these as props if dynamic)
  const { transactionId, transactionTime, wallet, networkFee } = {
    transactionId: "0xAB128KA34CD",
    wallet: { name: "Trading Wallet" } as WalletInfo,
    transactionTime: "13.2 sec",
    networkFee: "0.002 ETH",
  };

  return (
    <Modal isActive={isAactive} onClose={onClose} heading="Transaction Summary">
      <div className={classes.container}>
        <div className={classes.items}>
          <div className={classes.item}>
            <Text lsm primitive400 medium>
              Status
            </Text>
            <Text
              sm
              semiBold
              primitive200
              textRight
              className={clsx(classes.status, {
                [classes.completed]: status?.toLowerCase() === "completed",
                [classes.pending]: status?.toLowerCase() === "pending",
                [classes.failed]: status?.toLowerCase() === "failed",
              })}
            >
              {status || "-"}
            </Text>
          </div>
          <div className={classes.item}>
            <Text lsm primitive400 medium>
              Transaction ID
            </Text>
            <Text base medium primitive200 textRight>
              {transactionId || "-"}
            </Text>
          </div>
        </div>
        <Line type2 />
        <div className={classes.items}>
          <div className={classes.item}>
            <Text lsm primitive400 medium>
              From
            </Text>
            <Text base medium primitive200 textRight>
              {(from.amount ?? "") + " " + (from.symbol ?? "") || "-"}
            </Text>
          </div>
          <div className={classes.item}>
            <Text lsm primitive400 medium>
              To
            </Text>
            <Text base medium primitive200 textRight>
              {(to.amount ?? "") + " " + (to.symbol ?? "") || "-"}
            </Text>
          </div>
          <div className={classes.item}>
            <Text lsm primitive400 medium>
              Exchange Rate
            </Text>
            <Text base medium primitive200 textRight>
              {exchangeRate ?? "-"}
            </Text>
          </div>
          <div className={classes.item}>
            <Text lsm primitive400 medium>
              Slippage Tolerance
            </Text>
            <Text base medium primitive200 textRight>
              {slipTolerance ?? "-"}
            </Text>
          </div>
          <div className={classes.item}>
            <Text lsm primitive400 medium>
              Wallet
            </Text>
            <Text base medium primitive200 textRight>
              {wallet?.name || "-"}
            </Text>
          </div>
        </div>
        <Line type2 />
        <div className={classes.items}>
          <div className={classes.item}>
            <Text lsm primitive400 medium>
              Transaction Time
            </Text>
            <Text base medium primitive200 textRight>
              {transactionTime}
            </Text>
          </div>
          <div className={classes.item}>
            <Text lsm primitive400>
              Network Fee
            </Text>
            <Text base medium primitive200 textRight>
              {networkFee}
            </Text>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default HistoryDetails;
