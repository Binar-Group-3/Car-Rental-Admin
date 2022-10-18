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

  // FOR HANDLE CLICK
  const handleClick = () => {
    getData(value)
  }

  return (
    <div>
      <BarChart />
    </div>
  );
};

export default ChartComp;
