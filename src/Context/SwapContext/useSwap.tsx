import { useContext } from "react";
import SwapContext from "./SwapContext";

const useSwap = () => {
  const context = useContext(SwapContext);
  if (!context) {
    throw new Error("useSWap must be used within a <TradeProvider>");
  }
  return context;
};

export default useSwap;
