import React from "react";
import TableComp from "../../components/Table/TableComp/tableComp";
import rectangle from "../../assets/rectangle.png";
import "./dashboard.css";

const Dashboard = () => {
  return (
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
  );
};

export default Dashboard;
