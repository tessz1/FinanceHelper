import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { useFilter } from "./context/filtex";

ChartJS.register(ArcElement, Tooltip, Legend, Title);
interface PieChartType {
  data: {
    type: string;
    value: number;
    category?: string,
  }[];
}
const COLOR_SCHEME = {
  Расход: {
    background: "rgba(224, 0, 0, 0.9)",
    border: "rgba(192, 0, 0, 0.9)",
  },
  Доход: {
    background: "rgba(76, 175, 80, 0.9)",
    border: "rgba(64, 155, 70, 0.9)",
  },
  Еда: {
    background: "rgba(255, 152, 0, 0.9)",
    border: "rgba(235, 132, 0, 0.9)",
  },
  Транспорт: {
    background: "rgba(33, 150, 243, 0.9)",
    border: "rgba(23, 140, 233, 0.9)",
  },
  Развлечения: {
    background: "rgba(156, 39, 176, 0.9)",
    border: "rgba(136, 19, 156, 0.9)",
  },
  default: {
    background: "rgba(158, 158, 158, 0.9)",
    border: "rgba(138, 138, 138, 0.9)",
  },
};

const PieChart = ({ data }: PieChartType) => {
  const { activeFilter } = useFilter();
  const filterData = data.filter(
    (item) => activeFilter === "Все" || item.type === activeFilter
  );
  const chartData = {
    labels: filterData.map((item) => item.type || item.category),
    datasets: [
      {
        data: filterData.map((item) => item.value),
        backgroundColor: filterData.map(item => 
          COLOR_SCHEME[item.category as keyof typeof COLOR_SCHEME]?.background || 
          COLOR_SCHEME[item.type as keyof typeof COLOR_SCHEME]?.background ||
          COLOR_SCHEME.default.background
        ),

        borderWidth: 1,
    
      },
    ],
  };
  const options = {
    responsive: true,
    radius: "80%",
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "Информация об расходах и доходах",
        font: {
          size: 14,
        },
        padding: {
          top: 0,
          bottom: 0,
        },
      },
    },
  };
  // @ts-ignore
  return <Pie data={chartData} options={options} />;
};

export default PieChart;
