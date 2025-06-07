import clsx from "clsx";
import classes from "./TransactionTypes.module.css";
import { Heading, Text } from "@/components/common";

interface TransactionType {
  title: string;
  duration: string;
}

interface TransactionTypesProps {
  transactionTypes: TransactionType[];
  selectedTransactionType: TransactionType | null;
  setSelectedTransactionType: (type: TransactionType) => void;
}

const TransactionTypes: React.FC<TransactionTypesProps> = ({
  transactionTypes,
  selectedTransactionType,
  setSelectedTransactionType,
}) => {
  return (
    <div className={classes.mainWrapper}>
      <Text sm primitive400 medium>
        Transaction Type
      </Text>
      <div className={classes.wrapper}>
        {transactionTypes.map((transactionType, i) => (
          <button
            key={i}
            className={clsx(classes.box, {
              [classes.active]:
                selectedTransactionType?.title === transactionType.title,
            })}
            onClick={() => setSelectedTransactionType(transactionType)}
            type="button"
          >
            <div className={classes.titleAndDuration}>
              <Heading base primitive200 semiBold className={classes.title}>
                {transactionType.title}
              </Heading>
              <Text sm primitive400 medium className={classes.duration}>
                {transactionType.duration}
              </Text>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TransactionTypes;
