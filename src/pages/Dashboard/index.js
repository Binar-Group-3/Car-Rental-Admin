import React from "react";
import rectangle from "../../assets/rectangle.png";
import ChartComp from "../../components/Chart/chartComp";
import "./dashboard.scss";
const TableComp = React.lazy(() =>
  import("../../components/Table/TableComp/tableComp")
);

const Dashboard = () => {
  return (
    <div className="dashboard_style">
      <div className="container-dashboard">
        <h1>Dashboard</h1>
        <div className="list_order">
          <img src={rectangle} />
          <h2>List Order</h2>
        </div>
        <div>
          <ChartComp />
        </div>
        <div className="table-component">
          <TableComp />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
