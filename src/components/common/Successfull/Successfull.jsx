import React from "react";
import classes from "./Successfull.module.css";

import { Heading, Text } from "@/components/common";

import clsx from "clsx";
const Successfull = ({ heading, info, className }) => {
  return (
    <div className={clsx(classes.wrapper, className)}>
      {/* <img src={successImg} alt="#" className={classes.img} /> */}
      <div className={classes.infoContainer}>
        <Heading xl primitive50 medium textCenter>
          {heading}
        </Heading>
        <Text sm primitive500 textCenter>
          {info}
        </Text>
      </div>
    </div>
  );
};

export default Successfull;
