import React, { memo, useState, useEffect } from "react";
import clsx from "clsx";

import classes from "./SelectToken.module.css";
import { Modal, Text, Input, Heading } from "@/components/common";
import { IoClose } from "react-icons/io5";
import PopularToken from "./PopularToken/PopularToken";
import Tabs from "./Tabs/Tabs";
import { Token } from "@/types/token";

interface SelectTokenProps {
  items: Token[];
  selectedToken: Token | null;
  setSelectedToken: (token: Token) => void;
  isActive: boolean;
  onClose: () => void;
}

const tabs = ["Featured", "Pumpfun Hot", "24H Volume"];

const SelectToken: React.FC<SelectTokenProps> = memo(
  ({ items, selectedToken, setSelectedToken, isActive, onClose }) => {
    const [searchValue, setSearchValue] = useState("");
    const [activeTab, setActiveTab] = useState("Pumpfun Hot");
    const [loading, setLoading] = useState(false);

    const filterByTab = (item: Token) => {
      switch (activeTab) {
        case "Featured":
          return !!item.featured;
        case "Pumpfun Hot":
          return item.source === "pumpfun";
        case "24H Volume":
          return !!item.volume24h;
        default:
          return true;
      }
    };

    const filteredItems = items.filter((item) => {
      const matchesSearch = item.name
        .toLowerCase()
        .includes(searchValue.toLowerCase());
      const matchesTab = filterByTab(item);

      if (searchValue) return matchesSearch;
      return matchesTab;
    });

    // Simulate loading while searching
    useEffect(() => {
      if (searchValue) {
        setLoading(true);
        const timeout = setTimeout(() => setLoading(false), 300);
        return () => clearTimeout(timeout);
      } else {
        setLoading(false);
      }
    }, [searchValue]);

    return (
      <Modal
        noHeader
        isActive={isActive}
        onClose={onClose}
        className={clsx(classes.modal, classes.myModal)}
      >
        <div className={classes.sticky}>
          <div className={clsx(classes.header, "space")}>
            <Heading primitive200 semiBold lg>
              Select Token
            </Heading>

            <button onClick={onClose}>
              <IoClose className={classes.closeIcon} />
            </button>
            <Input
              search
              value={searchValue}
              setValue={setSearchValue}
              placeholder="Search tokens or paste address"
              className={classes.input}
            />
          </div>

          <PopularToken
            items={items.filter((item) => item.featured)}
            setSelectedToken={setSelectedToken}
            onClose={onClose}
          />

          <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        <div className={clsx(classes.items, "space")}>
          {loading ? (
            <Heading
              lg
              primitive400
              medium
              textCenter
              className={classes.noData}
            >
              Searching...
            </Heading>
          ) : filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div
                onClick={() => {
                  setSelectedToken(item);
                  onClose();
                }}
                className={clsx(
                  classes.item,
                  selectedToken?.name.toLowerCase() ===
                    item.name.toLowerCase() && classes.active
                )}
                key={item.symbol}
              >
                <div className={classes.coinInfo}>
                  <img
                    src={item.logo}
                    alt={item.name}
                    className={classes.logo}
                  />
                  <div className={classes.name}>
                    <Text lg semiBold primitive200 className={classes.symbol}>
                      {item.symbol}
                    </Text>
                    <Text primitive500 sm medium>
                      {item.name}
                    </Text>
                  </div>
                </div>
                <div className={classes.value}>
                  <Text base semiBold primitive200 textRight>
                    {item.balance}
                  </Text>
                  <Text primitive500 medium lxs textRight>
                    ≈ ${item.usdBalance}
                  </Text>
                </div>
              </div>
            ))
          ) : (
            <Heading
              lg
              primitive400
              medium
              textCenter
              className={classes.noData}
            >
              No tokens found
            </Heading>
          )}
        </div>
      </Modal>
    );
  }
);

export default SelectToken;
