import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataChart } from "../../redux/actions/dataChartAction";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import moment from "moment";
import BarChart from "./barChart";
import "./chartComp.scss";

const ChartComp = () => {
  const { chartData } = useSelector((state) => state.chartReducer)
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const getData = (value) => {
    dispatch(getDataChart(value));
  };

  useEffect(() => {
    getData(value);
  }, []);

  // FOR GET MONTH ONLY
  const monthData = chartData.map((item) => moment(item, "D MMM").format("MMM"))
  const monthOnly = monthData.filter((element, index) => {
    return monthData.indexOf(element) === index;
  });

  const handleDropdownDate = () => {
    getData(value)
  }

  return (
    <div className="chart_component_style">
      <div className="action-button">
        <select onChange={(e) => setValue(e.target.value)} className="dropdown_button">
          {monthOnly.map((item) => (
            <option value={item}>{item} - 2022</option>
          ))}
        </select>
        <button onClick={handleDropdownDate} className="go_button">Go</button>
      </div>
      <div className="chart_style">
        <BarChart />
      </div>
    </div>
  );
};

export default ChartComp;
