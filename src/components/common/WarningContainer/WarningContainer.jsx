import clsx from "clsx";
import { Text } from "..";
import classes from "./WarningContainer.module.css";
import { RiErrorWarningFill } from "react-icons/ri";

const WarningContainer = ({ children, type2, type3 }) => {
  return (
    <div className={clsx(classes.wrapper, type2 && classes.type2)}>
      <RiErrorWarningFill className={classes.icon} />
      {!type3 && (
        <Text lxs primitive300>
          {children}
        </Text>
      )}
      {type3 && children}
    </div>
  );
};
export default WarningContainer;
