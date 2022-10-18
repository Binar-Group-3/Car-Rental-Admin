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
        <div id="chart-dashboard">
          <div className="component_title">
            <img src={rectangle} />
            <h2>Rented Car Data Visualization</h2>
          </div>
          <h3>Month</h3>
          <ChartComp />
        </div>
        <div id="table-dashboard">
          <h1>Dashboard</h1>
          <div className="component_title">
            <img src={rectangle} />
            <h2>List Order</h2>
          </div>
          <TableComp />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
