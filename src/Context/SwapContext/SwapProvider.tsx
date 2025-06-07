import React, { useState, ReactNode } from "react";
import SwapContext from "./SwapContext";
import { tokenList } from "@/data/data";
import { Token } from "@/types/token";

interface SwapProviderProps {
  children: ReactNode;
}

const SwapProvider: React.FC<SwapProviderProps> = ({ children }) => {
  const [selectedPayingToken, setSelectedPayingToken] = useState<Token>(
    tokenList[0]
  );
  const [selectedReceivingToken, setSelectedReceivingToken] = useState<Token>(
    tokenList[1]
  );

  const [payingAmount, setPayingAmount] = useState<string>("");
  const [receivingAmount, setReceivingAmount] = useState<string>("");

  return (
    <SwapContext.Provider
      value={{
        selectedPayingToken,
        setSelectedPayingToken,
        selectedReceivingToken,
        setSelectedReceivingToken,
        payingAmount,
        setPayingAmount,
        receivingAmount,
        setReceivingAmount,
      }}
    >
      {children}
    </SwapContext.Provider>
  );
};

export default SwapProvider;
