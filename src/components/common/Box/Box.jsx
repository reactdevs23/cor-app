import React from "react";
import classes from "./Box.module.css";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import { Text } from "..";
import { FaAngleRight } from "react-icons/fa";

const Box = ({ className, label, onClick }) => {
  return (
    <button className={clsx(classes.wrapper, className)} onClick={onClick}>
      <Text base primitive200>
        {label}
      </Text>
      <FaAngleRight className={classes.icon} />
    </button>
  );
};

export default Box;
