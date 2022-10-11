import React from "react";
import { Bar } from "react-chartjs-2";
import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement);

const BarChart = () => {
  const [dataChart, setDataChart] = useState({
    labels: [],
    datasets: [
      {
        label: "",
        data: [],
      },
    ],
  });

  return (
    <div>
      <Bar data={dataChart} />
    </div>
  );
};

export default BarChart;
