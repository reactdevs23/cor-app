import { copyToClipboard } from "@/utils/utils";
import classes from "./CopyButton.module.css";
import clsx from "clsx";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { LuCopy } from "react-icons/lu";

const CopyButton = ({ className, textToCopy = "No Value" }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    copyToClipboard(textToCopy); // Pass the text to copy
    setCopied(true);
    setTimeout(() => setCopied(false), 1000); // Reset after 1s
  };

  return (
    <button
      className={clsx(classes.editButton, className, classes.button)}
      onClick={handleCopy}
    >
      {copied ? (
        <FaCheck className={classes.checkIcon} />
      ) : (
        <LuCopy className={classes.copyIcon} />
      )}
    </button>
  );
};

export default CopyButton;
