import clsx from "clsx";
import classes from "./Line.module.css";

interface LineProps {
  className?: string;
  type2?: boolean;
}

const Line: React.FC<LineProps> = ({ className, type2 }) => {
  return (
    <div
      className={clsx(classes.line, className, type2 && classes.type2)}
    ></div>
  );
};

export default Line;
