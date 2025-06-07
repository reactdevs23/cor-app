import React, { ReactNode, MouseEventHandler } from "react";
import classes from "./Text.module.css";
import clsx from "clsx";

interface TextProps {
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLParagraphElement>;

  // Font sizes
  xxs?: boolean;
  xs?: boolean;
  lxs?: boolean;
  sm?: boolean;
  lsm?: boolean;
  base?: boolean;
  md?: boolean;
  lg?: boolean;
  xl?: boolean;
  xxl?: boolean;
  xl2?: boolean;
  xl3?: boolean;
  xl4?: boolean;

  // Colors
  blue500?: boolean;
  blue50?: boolean;
  primitive0?: boolean;
  primitive50?: boolean;
  primitive100?: boolean;
  primitive200?: boolean;
  primitive300?: boolean;
  primitive400?: boolean;
  primitive500?: boolean;
  primitive600?: boolean;
  primitive700?: boolean;
  primitive800?: boolean;
  primitive900?: boolean;
  primitive950?: boolean;
  green?: boolean;
  warning?: boolean;
  error?: boolean;
  success?: boolean;

  // Font weights / styles
  medium?: boolean;
  secondary?: boolean;
  bold?: boolean;
  font600?: boolean;
  semiBold?: boolean;

  // Text alignment
  textCenter?: boolean;
  textRight?: boolean;
  textLeft?: boolean;
  uppercase?: boolean;
}

const Text: React.FC<TextProps> = ({
  children,
  xxs,
  xs,
  lxs,
  sm,
  lsm,
  base,
  md,
  lg,
  xl,
  xxl,
  xl2,
  xl3,
  xl4,
  blue500,
  blue50,
  primitive0,
  primitive50,
  primitive100,
  primitive200,
  primitive300,
  primitive400,
  primitive500,
  primitive600,
  primitive700,
  primitive800,
  primitive900,
  primitive950,
  green,
  warning,
  error,
  success,
  medium,
  secondary,
  bold,
  font600,
  semiBold,
  textCenter,
  textRight,
  textLeft,
  uppercase,
  className,
  onClick,
}) => {
  return (
    <p
      onClick={onClick}
      className={clsx(
        classes.text,
        blue500 && classes.blue500,
        blue50 && classes.blue50,
        primitive0 && classes.primitive0,
        primitive50 && classes.primitive50,
        primitive100 && classes.primitive100,
        primitive200 && classes.primitive200,
        primitive300 && classes.primitive300,
        primitive400 && classes.primitive400,
        primitive500 && classes.primitive500,
        primitive600 && classes.primitive600,
        primitive700 && classes.primitive700,
        primitive800 && classes.primitive800,
        primitive900 && classes.primitive900,
        primitive950 && classes.primitive950,
        green && classes.green,
        warning && classes.warning,
        error && classes.error,
        success && classes.success,
        secondary && classes.secondary,
        xxs && classes.xxs,
        xs && classes.xs,
        lxs && classes.lxs,
        sm && classes.sm,
        lsm && classes.lsm,
        md && classes.md,
        base && classes.base,
        lg && classes.lg,
        xl && classes.xl,
        xxl && classes.xxl,
        xl2 && classes.xl2,
        xl3 && classes.xl3,
        xl4 && classes.xl4,
        bold && classes.bold,
        font600 && classes.font600,
        semiBold && classes.semiBold,
        medium && classes.medium,
        textCenter && classes.textCenter,
        textLeft && classes.textLeft,
        textRight && classes.textRight,
        uppercase && classes.uppercase,
        className
      )}
    >
      {children}
    </p>
  );
};

export default Text;
