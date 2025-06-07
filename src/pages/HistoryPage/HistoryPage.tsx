import React, { useState, useMemo } from "react";
import clsx from "clsx";
import classes from "./HistoryPage.module.css";

import { RiFilter2Fill } from "react-icons/ri";
import { isSameDay, parse } from "date-fns";

import HistoryTable from "@/components/Swap/History/HistoryTable";
import { tokenList, transactionsData } from "@/data/data";
import { Button, Input } from "@/components/common";
import Overlay from "@/components/common/Overlay/Overlay";
import Dropdown from "@/components/common/Dropdown/Dropdown";
import DateFilter from "./DateFilter/DateFilter";
import TokenDropdown from "./TokenDropdown/TokenDropdown";
import NoHistory from "@/components/common/NoHistory/NoHistory";

// Define types for tokens and transactions (adjust to your actual data shape)
interface Token {
  symbol: string;
  // add other token fields if necessary
}

interface Transaction {
  status: string;
  pair: {
    from: Token;
    to: Token;
  };
  date: string; // e.g. "June 6, 2025 - 10:00 AM"
  // add other transaction fields if necessary
}

const allStatus = ["Completed", "Failed", "Pending"];

const HistoryPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showStatusDropdown, setShowStatusDropdown] = useState<boolean>(false);
  const [selectedStatus, setSelectedStatus] = useState<string>("All");
  const [showTokenDropdown, setShowTokenDropdown] = useState<boolean>(false);
  const [selectedToken, setSelectedToken] = useState<string>("All");
  const [searchValue, setSearchValue] = useState<string>("");
  const [showFilter, setShowFilter] = useState<boolean>(false);

  const filteredTransactions = useMemo(() => {
    return transactionsData.filter((transaction: Transaction) => {
      // Status filter
      const statusMatch =
        selectedStatus === "All" || transaction.status === selectedStatus;

      // Token filter (check from or to)
      const tokenMatch =
        selectedToken === "All" ||
        transaction.pair.from.symbol === selectedToken ||
        transaction.pair.to.symbol === selectedToken;

      // Date filter
      let dateMatch = true;
      if (selectedDate) {
        const transactionDateStr = transaction.date.split(" - ")[0]; // Extract "June 6, 2025"
        const transactionDate = parse(
          transactionDateStr,
          "MMMM d, yyyy",
          new Date()
        );
        dateMatch = isSameDay(transactionDate, selectedDate);
      }

      // Search filter (case-insensitive search on token symbols)
      const searchMatch =
        searchValue.trim() === "" ||
        transaction.pair.from.symbol
          .toLowerCase()
          .includes(searchValue.toLowerCase()) ||
        transaction.pair.to.symbol
          .toLowerCase()
          .includes(searchValue.toLowerCase());

      return statusMatch && tokenMatch && dateMatch && searchMatch;
    });
  }, [selectedStatus, selectedToken, selectedDate, searchValue]);

  return (
    <div className={clsx(classes.wrapper, "space")}>
      <div className={clsx(classes.header, classes.sticky)}>
        <Input
          search
          value={searchValue}
          setValue={setSearchValue}
          placeholder="Search"
          className={classes.input}
        />
        <Button
          blue10={showFilter}
          primitive800={!showFilter}
          className={classes.filterToggle}
          onClick={() => setShowFilter((prev) => !prev)}
        >
          <RiFilter2Fill />
          Filter
        </Button>

        {showFilter && (
          <div className={classes.dropdownContainer}>
            <Dropdown
              label="Status"
              className={classes.dropdown}
              dropdownItems={allStatus}
              isActive={showStatusDropdown}
              selectedValue={selectedStatus}
              setIsActive={setShowStatusDropdown}
              onSelect={(val: string) => setSelectedStatus(val)}
            />
            <DateFilter
              date={selectedDate}
              setDate={setSelectedDate}
              className={classes.dateFilter}
            />
            <TokenDropdown
              label="Token"
              className={classes.dropdown}
              dropdownItems={tokenList}
              isActive={showTokenDropdown}
              selectedValue={selectedToken}
              setIsActive={setShowTokenDropdown}
              onSelect={(val: string) => setSelectedToken(val)}
            />
          </div>
        )}
      </div>

      {filteredTransactions.length > 0 ? (
        <HistoryTable data={filteredTransactions} />
      ) : (
        <NoHistory />
      )}

      <Overlay type2={false} className={classes.overlay} />
    </div>
  );
};

export default HistoryPage;
