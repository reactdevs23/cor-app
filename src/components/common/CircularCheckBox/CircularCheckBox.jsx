import clsx from "clsx";
import classes from "./CircularCheckBox.module.css";

const CircularCheckBox = ({ checked, setChecked }) => {
  return (
    <button
      className={clsx(classes.outerCircle, checked && classes.active)}
      onClick={() => setChecked((prev) => !prev)}
    >
      <div className={classes.innerCircle}></div>
    </button>
  );
};

export default CircularCheckBox;
