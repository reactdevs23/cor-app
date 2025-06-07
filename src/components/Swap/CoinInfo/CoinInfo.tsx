import { Text } from "@/components/common";
import classes from "./CoinInfo.module.css";

import { memo } from "react";

interface Token {
  symbol: string;
  logo?: string;
}

interface CoinInfoProps {
  payingToken?: Token | null;
  receivingToken?: Token | null;
  exchangeRate?: number | string;
  minimumReceived?: number | string;
  estimatedReceived?: number | string;
  networkFee?: number | string;
}

const CoinInfo = memo(
  ({
    payingToken,
    receivingToken,
    exchangeRate,
    minimumReceived,
    estimatedReceived,
    networkFee,
  }: CoinInfoProps) => {
    return (
      <div className={classes.coinInfo}>
        <div className={classes.spaceBetween}>
          <Text sm primitive400 medium>
            Exchange Rate:
          </Text>
          <Text lsm primitive300 semiBold textRight>
            1 {payingToken?.symbol} ≈ {exchangeRate || "-"}
            {receivingToken?.symbol}
          </Text>
        </div>

        <div className={classes.spaceBetween}>
          <Text sm primitive400 medium>
            Estimated received :
          </Text>
          <Text lsm primitive300 semiBold textRight>
            {estimatedReceived || "-"}
            {receivingToken?.symbol}
          </Text>
        </div>

        <div className={classes.spaceBetween}>
          <Text sm primitive400 medium>
            Minimum Received: <br /> (after slippage)
          </Text>
          <Text lsm primitive300 semiBold textRight>
            {minimumReceived || "-"}
            {receivingToken?.symbol}
          </Text>
        </div>

        <div className={classes.spaceBetween}>
          <Text sm primitive400 medium>
            Network fee :
          </Text>
          <Text lsm primitive300 semiBold textRight>
            {networkFee || "-"}
            {receivingToken?.symbol} ($0.1066)
          </Text>
        </div>
      </div>
    );
  }
);

export default CoinInfo;
