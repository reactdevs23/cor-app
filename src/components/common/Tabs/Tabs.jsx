import classes from "./Tabs.module.css";
import clsx from "clsx";

const Tabs = ({ className, tabs, activeTab, setActiveTab }) => {
  return (
    <div className={clsx(classes.tabs, className)}>
      {tabs.map((tab, i) => (
        <button
          key={i}
          onClick={() => setActiveTab(tab)}
          className={clsx(classes.tab, activeTab === tab && classes.active)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};
export default Tabs;
