import React, { ReactNode, RefObject } from "react";
import { IoClose } from "react-icons/io5";
import { Heading } from "..";
import classes from "./Modal.module.css";
import clsx from "clsx";
import useViewportHeight from "@/hooks/useViewportHeight";

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  isActive: boolean;
  onClose: () => void;
  className?: string;
  heading?: ReactNode;
  children?: ReactNode;
  parentRef?: RefObject<HTMLDivElement>;
  noHeader?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isActive,
  onClose,
  className,
  heading,
  children,
  parentRef,
  noHeader,
  ...rest
}) => {
  useViewportHeight();

  return (
    <>
      {isActive && (
        <div
          className={clsx(isActive && classes.active, classes.modalOverlay)}
          onClick={onClose}
        />
      )}
      <div
        ref={parentRef}
        className={clsx(
          className,
          isActive && classes.active,
          classes.modal,
          "overflow"
        )}
        {...rest}
      >
        {!noHeader && (
          <div className={classes.header}>
            <Heading primitive200 semiBold lg>
              {heading}
            </Heading>

            <button onClick={onClose}>
              <IoClose className={classes.closeIcon} />
            </button>
          </div>
        )}
        {children}
      </div>
    </>
  );
};

export default Modal;
