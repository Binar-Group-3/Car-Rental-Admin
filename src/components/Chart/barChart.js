import React from "react";
import { Bar } from "react-chartjs-2";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import moment from "moment";

ChartJS.register(CategoryScale, LinearScale, BarElement);

const BarChart = () => {
  const { chartData } = useSelector((state) => state.chartReducer)
  const countData = {}
  const [dataChart, setDataChart] = useState({
    labels: [],
    datasets: [
      {
        label: "",
        data: [],
      },
    ],
  });

  // FOR COUNT DUPLICATE AND SORTING
  const dailyData = chartData.map((item) => moment(item, "D MMM").format("D"))
  const sortData = dailyData.sort((a, b) => a.localeCompare(b))
  sortData.forEach(function (x) { countData[x] = (countData[x] || 0) + 1; });

  useEffect(() => {
    setDataChart({
      labels: Object.keys(countData),
      datasets: [
        {
          label: "Rental",
          data: Object.values(countData),
          backgroundColor: "#586B90"
        },
      ],
    });
  }, [chartData]);

  const options = {
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Date"
        }
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Amout of Car Rented"
        }
      }
    }
  }

  return (
    <div>
      <Bar data={dataChart} options={options} />
    </div>
  );
};

export default BarChart;
