import React from "react";
import classes from "./ChartPage.module.css";
import { FaCaretDown } from "react-icons/fa";
import { Heading, Text } from "@/components/common";
import { bitCoinLogo, clockIcon } from "@/images";
import { MdStar } from "react-icons/md";
import clsx from "clsx";
import Chart from "@/components/Swap/Chart/Chart";

interface ChartPageData {
  pair: string;
  change: number | null;
  logo: string;
  balance: number | null;
  usdBalance: number;
  rank: number;
}

const ChartPage: React.FC = () => {
  const data: ChartPageData = {
    logo: bitCoinLogo,
    pair: "BTC / USDT",
    change: 0.99,
    balance: 42879.02,
    usdBalance: 42879.02,
    rank: 1,
  };
  const hourChange: number | null = 99;

  return (
    <div className={clsx(classes.wrapper)}>
      <div className={clsx(classes.container)}>
        <div className={clsx(classes.header, "space")}>
          <div className={classes.coinInfo}>
            <img src={data.logo} alt="coin logo" className={classes.logo} />
            <div className={classes.pairAndChange}>
              <Heading medium lg semiBold primitive200 className={classes.pair}>
                {data.pair}
                <FaCaretDown className={classes.arrow} />
              </Heading>
              <Text sm medium>
                {data.change !== null ? (
                  <span
                    className={
                      data.change >= 0 ? classes.positive : classes.negative
                    }
                  >
                    {data.change > 0 ? "+" : ""}
                    {data.change.toFixed(2)}%
                  </span>
                ) : (
                  "-"
                )}
              </Text>
            </div>
          </div>
          <div className={classes.balanceContainer}>
            <Heading xxl semiBold textRight primitive300>
              {data.balance?.toLocaleString()}
            </Heading>
            <Text sm primitive500 medium textRight>
              ${data.usdBalance.toLocaleString()}
            </Text>
            <Text lxs className={classes.rank} semiBold>
              <MdStar /> Rank {data.rank} Crypto
            </Text>
          </div>
        </div>

        <div className={clsx(classes.infoContainer, "space")}>
          <div className={clsx(classes.infoBox, classes.change)}>
            <img
              src={clockIcon}
              alt="clock icon"
              className={classes.clockIcon}
            />

            <div className={classes.info}>
              <Text primitive500 xs medium>
                24h Change
              </Text>
              <Text sm semiBold primitive300>
                {hourChange !== null ? (
                  <span
                    className={
                      hourChange >= 0 ? classes.positive : classes.negative
                    }
                  >
                    {hourChange > 0 ? "+" : ""}
                    {hourChange.toFixed(2)}%
                  </span>
                ) : (
                  "-"
                )}
              </Text>
            </div>
          </div>
          <div className={classes.infoBox}>
            <Text primitive500 xs medium>
              24h High
            </Text>
            <Text sm semiBold primitive300>
              307.7
            </Text>
          </div>
          <div className={classes.infoBox}>
            <Text primitive500 xs medium>
              24h Volume
            </Text>
            <Text sm semiBold primitive300>
              561,774.59
            </Text>
          </div>
          <div className={classes.infoBox}>
            <Text primitive500 xs medium>
              24h Low
            </Text>
            <Text sm semiBold primitive300>
              298.0
            </Text>
          </div>
          <div className={classes.infoBox}>
            <Text primitive500 xs medium>
              Market Cap.
            </Text>
            <Text sm semiBold primitive300>
              171.02M
            </Text>
          </div>
        </div>
      </div>
      <Chart />
    </div>
  );
};

export default ChartPage;
