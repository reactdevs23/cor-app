import clsx from "clsx";
import { Heading, Text } from "..";
import classes from "./SelectBox.module.css";
import { FaAngleDown } from "react-icons/fa6";

const SelectBox = ({ label, selectedItem, logo, onClick, className }) => {
  return (
    <button className={clsx(classes.wrapper, className)} onClick={onClick}>
      <Heading lsm primitive400>
        {label}
      </Heading>

      <div className={classes.selectedItem}>
        {logo && <img src={logo} alt="#" className={classes.logo} />}
        <Text primitive200 base medium>
          {selectedItem}
        </Text>
        <FaAngleDown className={classes.icon} />
      </div>
    </button>
  );
};
export default SelectBox;
