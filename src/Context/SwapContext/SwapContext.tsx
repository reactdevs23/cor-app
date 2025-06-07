import React from "react";
import { Token } from "@/types/token";

interface SwapContextType {
  selectedPayingToken: Token;
  setSelectedPayingToken: React.Dispatch<React.SetStateAction<Token>>;
  selectedReceivingToken: Token;
  setSelectedReceivingToken: React.Dispatch<React.SetStateAction<Token>>;
  payingAmount: string;
  setPayingAmount: React.Dispatch<React.SetStateAction<string>>;
  receivingAmount: string;
  setReceivingAmount: React.Dispatch<React.SetStateAction<string>>;
}

const defaultValue: SwapContextType = {
  selectedPayingToken: {} as Token,
  setSelectedPayingToken: () => {},
  selectedReceivingToken: {} as Token,
  setSelectedReceivingToken: () => {},
  payingAmount: "",
  setPayingAmount: () => {},
  receivingAmount: "",
  setReceivingAmount: () => {},
};

const SwapContext = React.createContext<SwapContextType>(defaultValue);

export default SwapContext;
