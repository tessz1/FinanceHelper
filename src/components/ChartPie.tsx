import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title, elements } from "chart.js";
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

export const nameFilterValue = () => {
  return Object.values(LABEL_TRANSFORMATION)
}

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

export const COLOR_SCHEME = {
  Расход: {
    background: "rgba(255, 145, 145, 0.8)",
    border: "rgba(244, 114, 114, 0.9)",
    label: "Расход",
  },
  Доход: {
    background: "rgba(102, 210, 150, 0.8)",
    border: "rgba(81, 190, 130, 0.9)",
    label: "Доход",
  },
  Еда: {
    background: "rgba(255, 199, 109, 0.8)",
    border: "rgba(240, 170, 80, 0.9)",
    label: "Еда",
  },
  Транспорт: {
    background: "rgba(139, 195, 245, 0.8)",
    border: "rgba(100, 181, 246, 0.9)",
    label: "Транспорт",
  },
  Развлечения: {
    background: "rgba(172, 148, 248, 0.8)",
    border: "rgba(152, 128, 228, 0.9)",
    label: "Развлечения",
  },
  default: {
    background: "rgba(189, 189, 189, 0.8)",
    border: "rgba(158, 158, 158, 0.9)",
  },
  Зарплата: {
    background: "rgba(102, 210, 150, 0.8)",
    border: "rgba(81, 190, 130, 0.9)",
  },
  Фриланс: {
    background: "rgba(165, 222, 140, 0.8)",
    border: "rgba(140, 200, 110, 0.9)",
  },
  Жилье: {
    background: "rgba(255, 170, 195, 0.8)",
    border: "rgba(245, 140, 170, 0.9)",
  },
  Здоровье: {
    background: "rgba(204, 172, 239, 0.8)",
    border: "rgba(184, 152, 219, 0.9)",
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
        borderWidth: 0,
      },
    ],
  };
  const options = {
    responsive: true,
    radius: "100%",
    plugins: {
      legend: {
        display: false,
      },
      elements: {
        border: 0
      }
      // legend: {
      //   labels: {
      //     //@ts-ignore
      //     generateLabels: (chart) => {
      //       const labels =
      //         ChartJS.overrides.pie.plugins.legend.labels.generateLabels(chart);
      //       return labels.map((label) => {
      //         label.text = `${label.text} `;
      //         return label;
      //       });
      //     },
      //   },
      //   position: "top",
      // },
    },
  };
  // @ts-ignore
  return <Pie data={chartData} options={options} />;
};

export default PieChart;
