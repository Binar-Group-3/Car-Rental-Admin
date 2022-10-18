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

  return (
    <div>
      <select onChange={(e) => setValue(e.target.value)}>
        {monthOnly.map((item) => (
          !!item.length &&
          <option value={item}>{item} - 2022</option>
        ))}
      </select>
      <BarChart />
    </div>
  );
};

export default ChartComp;
