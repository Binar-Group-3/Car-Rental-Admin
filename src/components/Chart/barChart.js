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
        },
      ],
    });
  }, [chartData]);

  return (
    <div>
      <Bar data={dataChart} />
    </div>
  );
};

export default BarChart;
