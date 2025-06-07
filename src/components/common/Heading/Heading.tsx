import React, { ReactNode } from "react";
import clsx from "clsx";
import classes from "./Heading.module.css";

interface HeadingProps {
  children: ReactNode;
  lxs?: boolean;
  xs?: boolean;
  md?: boolean;
  sm?: boolean;
  lsm?: boolean;
  base?: boolean;
  lg?: boolean;
  xl?: boolean;
  xxl?: boolean;
  xl2?: boolean;
  xxl2?: boolean;
  xl3?: boolean;
  xl4?: boolean;
  xl5?: boolean;
  xl6?: boolean;
  xl7?: boolean;
  gradient?: boolean;
  primitive0?: boolean;
  primitive50?: boolean;
  blue500?: boolean;
  blue600?: boolean;
  primitive200?: boolean;
  primitive300?: boolean;
  primitive400?: boolean;
  primitive500?: boolean;
  primitive600?: boolean;
  primitive700?: boolean;
  primitive800?: boolean;
  primitive900?: boolean;
  primitive950?: boolean;
  textPrimitive?: boolean;
  textWhite?: boolean;
  medium?: boolean;
  bold?: boolean;
  font600?: boolean;
  semiBold?: boolean;
  textCenter?: boolean;
  textRight?: boolean;
  regular?: boolean;
  uppercase?: boolean;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({
  children,
  lxs,
  xs,
  md,
  sm,
  lsm,
  base,
  lg,
  xl,
  xxl,
  xl2,
  xxl2,
  xl3,
  xl4,
  xl5,
  xl6,
  xl7,
  gradient,
  primitive0,
  blue500,
  blue600,
  primitive50,
  primitive200,
  primitive300,
  primitive400,
  primitive500,
  primitive600,
  primitive700,
  primitive800,
  primitive900,
  primitive950,
  textPrimitive,
  textWhite,
  medium,
  bold,
  font600,
  semiBold,
  textCenter,
  textRight,
  regular,
  uppercase,
  className,
}) => {
  return (
    <h2
      className={clsx(
        classes.heading,
        gradient && classes.gradient,
        primitive0 && classes.primitive0,
        blue500 && classes.blue500,
        blue600 && classes.blue600,
        primitive50 && classes.primitive50,
        primitive200 && classes.primitive200,
        primitive300 && classes.primitive300,
        primitive400 && classes.primitive400,
        primitive500 && classes.primitive500,
        primitive600 && classes.primitive600,
        primitive700 && classes.primitive700,
        primitive900 && classes.primitive900,
        primitive800 && classes.primitive800,
        primitive950 && classes.primitive950,
        textPrimitive && classes.textPrimitive,
        textWhite && classes.textWhite,
        lxs && classes.lxs,
        xs && classes.xs,
        lsm && classes.lsm,
        sm && classes.sm,
        md && classes.md,
        base && classes.base,
        lg && classes.lg,
        xl && classes.xl,
        xxl && classes.xxl,
        xl2 && classes.xl2,
        xxl2 && classes.xxl2,
        xl3 && classes.xl3,
        xl4 && classes.xl4,
        xl5 && classes.xl5,
        xl6 && classes.xl6,
        xl7 && classes.xl7,
        bold && classes.bold,
        font600 && classes.font600,
        semiBold && classes.semiBold,
        medium && classes.medium,
        regular && classes.regular,
        textCenter && classes.textCenter,
        textRight && classes.textRight,
        uppercase && classes.uppercase,
        className
      )}
    >
      {children}
    </h2>
  );
};

export default Heading;
