import clsx from "clsx";
import { Text } from "..";
import Switch from "../Switch/Switch";
import classes from "./ToggleContainer.module.css";

const ToggleContainer = ({ className, label, checked, setChecked }) => {
  return (
    <div className={clsx(classes.chekcBoxContainer, className)}>
      <Text sm primitive400>
        {label}
      </Text>
      <Switch isChecked={checked} setIsChecked={setChecked} />
    </div>
  );
};
export default ToggleContainer;
