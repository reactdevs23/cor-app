import { handleKeyDown } from "@/utils/utils";
import { Text } from "..";
import NumberInput from "../NumberInput/NumberInput";
import classes from "./NumberInputContainer.module.css";
import clsx from "clsx";

const NumberInputContainer = ({
  label,
  value,
  setValue,
  placeholder,
  type2,
  type3,
  type4,
  textCenter,
}) => {
  return (
    <div className={classes.wrapper}>
      <Text lxs primitive400 medium>
        {label}
      </Text>
      <NumberInput
        value={value}
        setValue={setValue}
        type2={type2}
        type3={type3}
        type4={type4}
        placeholder={placeholder}
        type="number"
        className={clsx(classes.input, textCenter && classes.textCenter)}
      />
    </div>
  );
};
export default NumberInputContainer;
