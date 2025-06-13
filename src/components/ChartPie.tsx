import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { useFilter } from "./context/filtex";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

interface PieChartType {
  data: {
    type: string;
    value: number;
    category?: string;
    label?: any;
  }[];
}

// DEAULT VALUE CATEGORY
export const LABEL_TRANSFORMATION: Record<string, string> = {
  Доход: "Прибыль",
  Еда: "Продукты",
  Транспорт: "Транспортные расходы",
  Развлечения: "Досуг и развлечения",
  Зарплата: "Заработная плата",
  Фриланс: "Внештатная работа",
  Жилье: "Аренда жилья",
  Здоровье: "Медицинские расходы",
};

export const nameFilters = () => {
  return Object.keys(LABEL_TRANSFORMATION);
};

const transformOriginal = (original: string | undefined): string => {
  if (!original) return "Другое";

  if (LABEL_TRANSFORMATION[original]) {
    return LABEL_TRANSFORMATION[original];
  }

  const partical = Object.keys(LABEL_TRANSFORMATION).find((key) =>
    original.includes(key)
  );

  return partical ? LABEL_TRANSFORMATION[partical] : original;
};

const COLOR_SCHEME = {
  Расход: {
    background: "rgba(224, 0, 0, 0.9)",
    border: "rgba(192, 0, 0, 0.9)",
    label: "Расход",
  },
  Доход: {
    background: "rgba(76, 175, 80, 0.9)",
    border: "rgba(64, 155, 70, 0.9)",
    label: "Доход",
  },
  Еда: {
    background: "rgba(255, 152, 0, 0.9)",
    border: "rgba(235, 132, 0, 0.9)",
    label: "Еда",
  },
  Транспорт: {
    background: "rgba(33, 150, 243, 0.9)",
    border: "rgba(23, 140, 233, 0.9)",
    label: "Транспорт",
  },
  Развлечения: {
    background: "rgba(156, 39, 176, 0.9)",
    border: "rgba(136, 19, 156, 0.9)",
    label: "Развлечения",
  },
  default: {
    background: "rgba(158, 158, 158, 0.9)",
    border: "rgba(138, 138, 138, 0.9)",
  },
  Зарплата: {
    background: "rgba(0, 200, 83, 0.9)",
    border: "rgba(0, 180, 63, 0.9)",
  },
  Фриланс: {
    background: "rgba(100, 221, 23, 0.9)",
    border: "rgba(80, 201, 3, 0.9)",
  },
  Жилье: {
    background: "rgba(233, 30, 99, 0.9)",
    border: "rgba(213, 10, 79, 0.9)",
  },
  Здоровье: {
    background: "rgba(171, 71, 188, 0.9)",
    border: "rgba(151, 51, 168, 0.9)",
  },
};

const PieChart = ({ data }: PieChartType) => {
  const { activeFilter } = useFilter();
  const filterData = data.filter(
    (item) => activeFilter === "Все" || item.type === activeFilter
  );
  const chartData = {
    labels: filterData.map((item) => {
      const originalLabel = item.category || item.type;
      return transformOriginal(originalLabel);
    }),
    datasets: [
      {
        data: filterData.map((item) => item.value),
        backgroundColor: filterData.map(
          (item) =>
            COLOR_SCHEME[item.category as keyof typeof COLOR_SCHEME]
              ?.background ||
            COLOR_SCHEME[item.type as keyof typeof COLOR_SCHEME]?.background ||
            COLOR_SCHEME.default.background
        ),
        borderWidth: 1,
      },
    ],
  };
  const options = {
    responsive: true,
    radius: "100%",
    plugins: {
      legend: {
        labels: {
          //@ts-ignore
          generateLabels: (chart) => {
            const labels =
              ChartJS.overrides.pie.plugins.legend.labels.generateLabels(chart);
            return labels.map((label) => {
              label.text = `${label.text} `;
              return label;
            });
          },
        },
        position: "top",
      },
    },
  };
  // @ts-ignore
  return <Pie data={chartData} options={options} />;
};

export default PieChart;
