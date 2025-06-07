import React from "react";
import classes from "./Loader.module.css";
import clsx from "clsx";

const Spinner = ({ className }) => {
  return <div className={clsx(classes.loader, className)} />;
};

export default Spinner;
