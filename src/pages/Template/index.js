import React from "react";
import "./dashboard.scss";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { Outlet } from "react-router";

const Template = () => {
  const [sidebar, setSidebar] = React.useState(false);
  const handleSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <React.Fragment>
      <Navbar handleSidebar={handleSidebar} sidebar={sidebar} />
      <Sidebar sidebar={sidebar} />
      <div
        className={`container-dasboard__ ${
          sidebar === true
            ? "container-dasboard__on"
            : "container-dasboard__off"
        }`}
      >
        <Outlet />
      </div>
    </React.Fragment>
  );
};

export default Template;
