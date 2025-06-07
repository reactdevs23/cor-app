import clsx from "clsx";
import classes from "./Wrapper.module.css";
import { Heading } from "..";

const Wrapper = ({ className, children, heading, icon }) => {
  return (
    <div className={clsx(classes.wrapper, className)}>
      <div className={classes.header}>
        <img src={icon} alt={heading} className={classes.icon} />
        <Heading base medium primitive200>
          {heading}
        </Heading>
      </div>

      {children}
    </div>
  );
};
export default Wrapper;
