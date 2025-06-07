import { ReactNode, ButtonHTMLAttributes } from "react";
import classes from "./IconButton.module.css";
import clsx from "clsx";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({
  className,
  children,
  onClick,
  ...rest
}) => {
  return (
    <button
      className={clsx(classes.button, className)}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default IconButton;
