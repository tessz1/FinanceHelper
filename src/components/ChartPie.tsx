import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const PieChart = () => {
  const data = {
    labels: ["Расход", "Доход"],
    datasets: [
      {
        label: "d",
        data: [30, 25],
        backgroundColor: [
          "rgb(224,0,0, 0.9)", // Красный
          "rgb(68,148,74, 0.9)", // Зелёный
        ],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 2,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Информация об расходах и доходах",
        font: {
          size: 16,
        },
      },
    },
  };
  // @ts-ignore
  return <Pie data={data} options={options} />;
};

export default PieChart;
