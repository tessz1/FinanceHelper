import { useState } from "react";
// @ts-ignore
import PieChart from "./ChartPie";
import { mockTransactions } from "./mockDatas";

function CreateCheck() {
  const [activeFilter, setActiveFilter] = useState("Все");

  const filters = [
    "Все",
    "Доходы",
    "Расходы",
    "Еда",
    "Траспорт",
    "Развлечения",
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen flex flex-col items-center font-mono">
      <div className="mt-12">
        <p className="text-gray-800 text-center">
          Наглядный контроль <br />
          один взгляд на график — и вы понимаете, куда движется ваш бюджет
        </p>
      </div>
      <div>
        <PieChart data={mockTransactions} />
      </div>
      <div className="w-full max-w-[100vw] px-4">
        <div className="flex gap-2 px-4 py-3 overflow-x-auto scrollbar-hide whitespace-nowrap touch-pan-x">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm shrink-0
            ${
              activeFilter === filter
                ? "bg-blue-600 text-white border-transparent transition duration-300"
                : "bg-white text-gray-800 border border-gray-200"
            }
            `}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
export default CreateCheck;
