import React from "react";
import { Text } from "@/components/common";
import classes from "./PopularToken.module.css";
import Marquee from "react-fast-marquee";

import { Token } from "@/types/token";

interface PopularTokenProps {
  items?: Token[];

  setSelectedToken: (token: Token) => void;
  onClose: () => void;
}

const PopularToken: React.FC<PopularTokenProps> = ({
  setSelectedToken,
  onClose,
  items = [],
}) => {
  return (
    <div className={classes.wrapper}>
      <Marquee autoFill speed={30} pauseOnHover>
        <div className={classes.allToken}>
          {items.map((token, i) => (
            <div
              className={classes.token}
              key={i}
              onClick={() => {
                setSelectedToken(token);
                onClose();
              }}
            >
              <img
                src={token.logo}
                alt={token.symbol}
                className={classes.tokenLogo}
              />
              <Text sm primitive400 medium>
                {token.symbol}
              </Text>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default PopularToken;
