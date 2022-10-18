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

  return (
    <div>
      <BarChart />
    </div>
  );
};

export default ChartComp;
