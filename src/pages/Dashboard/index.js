import React from "react";
import rectangle from "../../assets/rectangle.png";
import "./dashboard.scss";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
const TableComp = React.lazy(() =>
  import("../../components/Table/TableComp/tableComp")
);

const Dashboard = () => {
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
          sidebar === true ? "container-dasboard__on" : "container-dasboard__off"
        }`}
      >
        <div className="container">
          <h1>Dashboard</h1>
          <div className="list_order">
            <img src={rectangle} />
            <h2>List Order</h2>
          </div>
          <div className="table">
            <TableComp />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
