import { NavLink, useNavigate } from "react-router-dom";
import classes from "./NavItems.module.css";
import clsx from "clsx";
import { IconButton } from "@/components/common";
import { MdKeyboardArrowLeft } from "react-icons/md";

const navItems = [
  { navItem: "Swap", to: "/swap" },
  { navItem: "Chart", to: "/chart" },
  { navItem: "History", to: "/history" },
];
const NavItems = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <header className={clsx(classes.header, "space")}>
      <IconButton onClick={handleBack}>
        <MdKeyboardArrowLeft className={classes.icon} />
      </IconButton>
      <nav className={classes.navItems}>
        {navItems.map(({ navItem, to }, i) => (
          <NavLink
            key={i}
            to={to}
            className={({ isActive }) =>
              clsx(classes.navItem, isActive && classes.active)
            }
          >
            {navItem}
          </NavLink>
        ))}
      </nav>
      <div className={classes.side}></div>
    </header>
  );
};
export default NavItems;
