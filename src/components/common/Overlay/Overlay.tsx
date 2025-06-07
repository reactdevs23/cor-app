import classes from "./Overlay.module.css";
import clsx from "clsx";
import { useScroll } from "@/hooks/useScroll";

const Overlay = ({ className, type2 }) => {
  const { hasScrolled, isScrollingUp } = useScroll();
  return (
    <div
      className={clsx(
        classes.overlay,
        isScrollingUp && classes.isScrollingUp,
        className,
        !hasScrolled && classes.noBg,
        type2 && classes.type2
      )}
    ></div>
  );
};
export default Overlay;
