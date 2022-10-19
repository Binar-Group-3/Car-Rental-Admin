import React from "react";
import rectangle from "../../assets/rectangle.png";
import ChartComp from "../../components/Chart/chartComp";
import "./dashboard.scss";
import { useState, useEffect } from "react";
const TableComp = React.lazy(() =>
  import("../../components/Table/TableComp/tableComp")
);

const Dashboard = () => {

  //FOR BREADCRUMB CHANGE STYLE WHEN SCROLLED

  const [color, setColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 500) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  window.addEventListener('scroll', changeColor)

  return (
    <div className="dashboard_style">
      <div className="container-dashboard">
        <div className={color ? "breadcrumb-scrolled" : "breadcrumb-dashboard"}>
          <h1>Dashboard</h1>
          <h1>&gt;</h1>
          <a href="#table-dashboard">Dashboard</a>
        </div>
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
