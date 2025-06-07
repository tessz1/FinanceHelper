import { useState } from "react";
// @ts-ignore
import PieChart from "./ChartPie";
function CreateCheck() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen flex flex-col items-center font-mono">
      <div className="mt-24">
        <p className="text-gray-800 text-center">Наглядный контроль <br/>один взгляд на график — и вы понимаете, куда движется ваш бюджет</p>
      </div>
      <div>
        <PieChart />
      </div>
    </div>
  );
}
export default CreateCheck;
