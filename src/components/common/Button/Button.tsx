import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { ImSpinner } from "react-icons/im";
import classes from "./Button.module.css";

interface BaseProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  to?: string;
  arrowButton?: boolean;
  transparent?: boolean;
  btnPrimary?: boolean;
  primitive800?: boolean;
  primitive900?: boolean;
  primitiveTransparent8?: boolean;
  semiBold?: boolean;
  blue10?: boolean;
  green10?: boolean;
  green?: boolean;
  red?: boolean;
  wFull?: boolean;
  loading?: boolean;
  xs?: boolean;
  lsm?: boolean;
  lxs?: boolean;
  base?: boolean;
  lg?: boolean;
  sm?: boolean;
  radius?: boolean;
  disabled?: boolean;
  mxAuto?: boolean;
  className?: string;
}

type ButtonProps = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    type?: "button" | "submit" | "reset";
  };

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  href,
  to,
  arrowButton,
  transparent,
  btnPrimary,
  primitive800,
  primitive900,
  primitiveTransparent8,
  semiBold,
  blue10,
  green10,
  green,
  red,
  wFull,
  className,
  loading,
  xs,
  lsm,
  lxs,
  base,
  lg,
  sm,
  radius,
  disabled,
  mxAuto,
  ...rest
}) => {
  const buttonClass = clsx(
    className,
    classes.button,
    semiBold && classes.semiBold,
    radius && classes.radius,
    base && classes.base,
    lg && classes.lg,
    sm && classes.sm,
    xs && classes.xs,
    lsm && classes.lsm,
    lxs && classes.lxs,
    mxAuto && classes.mxAuto,
    primitive800 && classes.primitive800,
    primitive900 && classes.primitive900,
    blue10 && classes.blue10,
    green10 && classes.green10,
    green && classes.green,
    red && classes.red,
    arrowButton && classes.arrowButton,
    btnPrimary && classes.btnPrimary,
    transparent && classes.transparent,
    primitiveTransparent8 && classes.primitiveTransparent8,
    wFull && classes.wFull,
    loading && classes.loading
  );

  const content = loading ? (
    <>
      {children} <ImSpinner className={classes.spinner} />
    </>
  ) : (
    children
  );

  if (href) {
    return (
      <a href={href} className={buttonClass} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={buttonClass}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={buttonClass}
      disabled={!!(loading || disabled)}
      {...rest}
    >
      {content}
    </button>
  );
};

export default Button;
