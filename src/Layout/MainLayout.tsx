import React from "react";
import { Outlet } from "react-router-dom";
import classes from "./MainLayout.module.css";

import clsx from "clsx";
import Overlay from "@/components/common/Overlay/Overlay";

interface MainLayoutProps {
  noPadding?: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({ noPadding }) => {
  return (
    <main className={clsx(classes.wrapper, noPadding && classes.noPadding)}>
      <Outlet />
      <Overlay className="overlay" type2={false} />
    </main>
  );
};

export default MainLayout;
