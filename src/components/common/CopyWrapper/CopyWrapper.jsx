import clsx from "clsx";
import classes from "./CopyWrapper.module.css";
import { Text } from "@/components/common";

import CopyButton from "@/components/common/CopyButton/CopyButton";

const CopyWrapper = ({
  label,
  notes,
  primitive700,
  medium,
  className,
  children,
  textToCopy = "No Value",
}) => {
  return (
    <div className={clsx(classes.wrapper, className)}>
      <Text
        sm
        primitive600={!primitive700}
        medium={medium}
        primitive700={primitive700}
      >
        {label}
      </Text>
      <div className={classes.copyContainer}>
        <Text sm primitive800 className={classes.content}>
          {children}
        </Text>
        <CopyButton className={classes.copyButton} textToCopy={textToCopy} />
      </div>
      {notes && (
        <Text primitive600 sm>
          {notes}
        </Text>
      )}
    </div>
  );
};
export default CopyWrapper;
