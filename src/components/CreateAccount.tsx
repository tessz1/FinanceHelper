import { useState } from "react";
// @ts-ignore
import PieChart from "./ChartPie";
import { mockTransactions } from "./mockDatas";
import { nameFilters } from "./ChartPie";
import { COLOR_SCHEME } from "./ChartPie";
import { nameFilterValue } from "./ChartPie";
import {
  FaMoneyBillTrendUp,
  FaBowlFood,
  FaCar,
  FaFilm,
  FaMoneyBillWave,
} from "react-icons/fa6";
import { FaHeartbeat, FaHome } from "react-icons/fa";
import { AiTwotonePushpin } from "react-icons/ai";
import { ColorCirlce } from "./ColorCircle";
function CreateCheck() {
  const [activeFilter, setActiveFilter] = useState("Все");
  const filters: string[] = nameFilters();
  const ValueFilters: string[] = nameFilterValue();
  const icons = [
    <FaMoneyBillTrendUp key="income" />,
    <FaBowlFood key="food" />,
    <FaCar key="transport" />,
    <FaFilm key="entertainment" />,
    <FaMoneyBillWave key="freelance" />,
    <AiTwotonePushpin key="other" />,
    <FaHome key="housing" />,
    <FaHeartbeat key="health" />,
  ];

  const valueCategory = mockTransactions.map((filter) => {
    const transformationCurrency = `${filter.value} руб.`;
    // const avgValue
    return {
      value: transformationCurrency,
    };
  });

  // фильтрация для отображения кружков и имен категорий по ключу
  const filterDefaultKeys = filters.map((filter, index) => {
    const colorEntry =
      COLOR_SCHEME[filter as keyof typeof COLOR_SCHEME] || COLOR_SCHEME.default;
    return {
      name: filter,
      icons: icons[index],
      theme: colorEntry.background,
    };
  });
  // фильтрация для отображения имени по значению и массив иконок
  const filtersWithIcons = ValueFilters.map((filter, index) => ({
    name: filter,
    icon: icons[index],
  }));

  return (
    <div className="bg-gradient-to-br from-[#dbf1fc] to-[#daf0fb] min-h-screen flex flex-col items-center font-sans tracking-tight">
      <div className="mt-12 text-center">
        <h1 className="text-[24px] font-bold leading-[28px] tracking-[-0.2px] mb-1">
          Контроль бюджета
        </h1>
        <p className="text-gray-600 text-base font-medium">
          Понимай, куда уходит каждый рубль
        </p>
      </div>
      <div className="w-full max-w-[100vw] px-4">
        <div className="flex gap-2 py-6 overflow-x-auto scrollbar-hide whitespace-nowrap no-scrollbar touch-pan-x">
          {filtersWithIcons.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveFilter(item.name)}
              className={`px-4 py-2 rounded-full text-sm shrink-0 flex items-center gap-1
                ${
                  activeFilter === item.name
                    ? "bg-[#4d99d7] text-white transition duration-300"
                    : "bg-white text-gray-800 border border-gray-200"
                }`}
            >
              <span>{item.icon}</span>
              {item.name}
            </button>
          ))}
        </div>
        <div className="flex justify-center items-center mt-1 w-full px-6   ">
          <PieChart data={mockTransactions} />
        </div>
        {/* Кружки для отображения */}
        <div>
          <div className="bg-amber-300-">
            {filterDefaultKeys.map((item) => (
              <span
                key={item.name}
                className="flex flex-col px-6 py-1 font-sans"
              >
                <div className="bg-white p-4 mr-1  rounded max-w-4xl flex items-center gap-2 ">
                  <ColorCirlce color={item.theme} size="lg" />
                  {item.name}
                </div>
              </span>
            ))}
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CreateCheck;
