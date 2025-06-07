import { Outlet } from "react-router-dom";
import classes from "./SwapLayout.module.css";
import NavItems from "./NavItems/NavItems";

const SwapLayout = () => {
  return (
    <div>
      <NavItems />
      <Outlet />
    </div>
  );
};
export default SwapLayout;
