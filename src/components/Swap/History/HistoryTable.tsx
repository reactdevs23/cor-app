import React, { useState } from "react";
import clsx from "clsx";
import { LuMoveRight } from "react-icons/lu";
import { IoIosArrowDroprightCircle } from "react-icons/io";

import { Heading, Loader, Text } from "@/components/common";
import Overlay from "@/components/common/Overlay/Overlay";
import classes from "./HistoryTable.module.css";
import HistoryDetails from "@/components/Modals/SelectToken/HistoryDetails/HistoryDetails";

interface TokenInfo {
  symbol: string;
  amount: number;
}

interface Pair {
  from: TokenInfo;
  to: TokenInfo;
}

interface TransactionData {
  pair: Pair;
  status: string;
  date: string;
}

interface HistoryTableProps {
  data?: TransactionData[];
}

const HistoryTable: React.FC<HistoryTableProps> = ({ data = [] }) => {
  const [selectedTransaction, setSelectedTransaction] =
    useState<TransactionData | null>(null);
  const [loading, setLoading] = useState(true);

  const handleOpenDetails = (transaction: TransactionData) => {
    setSelectedTransaction(transaction);
  };

  const handleCloseDetails = () => {
    setSelectedTransaction(null);
  };

  return (
    <div className={classes.tableContainer}>
      <div className={classes.flexList}>
        {data.length > 0 ? (
          data.map((item, idx) => {
            const { pair, status, date } = item;

            return (
              <div
                key={idx}
                className={classes.flexRow}
                onClick={() => handleOpenDetails(item)}
              >
                <div className={classes.item}>
                  <Text base primitive200 semiBold className={classes.pair}>
                    {pair?.from.symbol}
                    <LuMoveRight className={classes.arrow} />
                    {pair?.to.symbol}
                  </Text>
                  <Text sm primitive400 semiBold className={classes.pair}>
                    {pair?.from?.amount} {pair?.from?.symbol}
                    <LuMoveRight className={classes.arrow} />
                    {pair?.to?.amount} {pair?.to?.symbol}
                  </Text>
                  <Text sm primitive400 semiBold className={classes.pair}>
                    {date}
                  </Text>
                </div>
                <div className={classes.statusContainer}>
                  <Text
                    lxs
                    semiBold
                    className={clsx(classes.status, {
                      [classes.completed]:
                        status?.toLowerCase() === "completed",
                      [classes.pending]: status?.toLowerCase() === "pending",
                      [classes.failed]: status?.toLowerCase() === "failed",
                    })}
                  >
                    {status}
                  </Text>
                  <IoIosArrowDroprightCircle className={classes.arrow} />
                </div>
              </div>
            );
          })
        ) : (
          <Heading lg primitive400 medium textCenter className={classes.noData}>
            There is no such data
          </Heading>
        )}
      </div>

      {selectedTransaction && (
        <HistoryDetails
          isAactive={true}
          onClose={handleCloseDetails}
          status={selectedTransaction.status}
          from={selectedTransaction.pair.from}
          to={selectedTransaction.pair.to}
          exchangeRate="1:1234" // Add real values if available in data
          slipTolerance="0.5%" // Add real values if available in data
        />
      )}
      {loading && <Loader className={classes.loader}></Loader>}
    </div>
  );
};

export default HistoryTable;
