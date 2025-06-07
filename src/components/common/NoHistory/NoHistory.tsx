import React from "react";
import classes from "./NoHistory.module.css";
import { noData } from "@/images";
import { Button, Heading, Text } from "..";

const NoHistory: React.FC = () => {
  return (
    <div className={classes.wrapper}>
      <img src={noData} alt="No data illustration" className={classes.img} />

      <div className={classes.info}>
        <Heading xl2 primitive50 semiBold textCenter>
          No swap history yet
        </Heading>
        <Text lg primitive500 medium textCenter>
          When you perform swaps, your transaction history will appear here.
        </Text>
      </div>
      <Button to="/swap">Start Swapping</Button>
    </div>
  );
};

export default NoHistory;
