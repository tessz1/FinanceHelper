import { useNavigate } from "react-router";
// import { useEffect, useState, useRef, type FC, type ReactNode } from "react";
import { Tooltip } from 'react-tooltip'
// default tooltip
// interface Props {
//   children?: ReactNode;
//   text?: ReactNode;
// }
// const ToolTip: FC<Props> = ({ children, text }) => {
//   const navigate = useNavigate();
//   const [showToolTip, setShowToolTip] = useState(false);
//   const tooltipRef = useRef<any>(null);
//   const triggerRef = useRef<any>(null);
//   useEffect(() => {
//     const handleMouseLeave = () => {
//       setShowToolTip(false);
//     };

//     if (triggerRef.current) {
//       triggerRef.current.addEventListener("mouseleave", handleMouseLeave);
//     }
//   }, []);
//   const toggleTooltip = () => {
//     setShowToolTip(!showToolTip);
//   };
//   return (
//     <>
//       <span
//         ref={triggerRef}
//         onMouseEnter={toggleTooltip}
//         onMouseLeave={toggleTooltip}
//         style={{ position: "absolute", cursor: "pointer" }}
//       >
//         {children}
//       </span>
//       {showToolTip && (
//         <div
//           ref={tooltipRef}
//           style={{
//             position: "absolute",
//             top: triggerRef.current
//               ? triggerRef.current.offsetTop + triggerRef.current.offsetHeight
//               : 0,
//             left: triggerRef.current ? triggerRef.current.offsetLeft : 0,
//             background: "black",
//             color: "white",
//             // padding: "5px",
//             // borderRadius: "5px",
//             zIndex: 100,
//             // display: "block",
//           }}
//         >
//           {text}
//         </div>
//       )}
//     </>
//   );
// };

function Welcome() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 font-mono">
      <div className="max-w-md mx-auto text-center space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Добро пожаловать в{" "}
          <span className="text-blue-600 cursor-pointer">Finance Helper</span>!
        </h1>
        <p className="text-lg text-gray-600 cursor-pointer">
          Умный помощник для управления вашими финансами
        </p>
        <div className="space-y-4">
          <div className="bg-white p-4 cursor-pointer rounded-xl shadow-sm hover:shadow-md transition-shadow border border-blue-100">
            <span className="text-blue-500 font-semibold">
              📊 Учет операций
            </span>{" "}
            - добавляйте доходы и расходы
          </div>
          <div className="bg-white p-4 cursor-pointer rounded-xl shadow-sm hover:shadow-md transition-shadow border border-blue-100">
            <span className="text-blue-500 font-semibold">📈 Анализ</span> -
            наглядные графики и отчеты
          </div>
          <div className="bg-white p-4 cursor-pointer rounded-xl shadow-sm hover:shadow-md transition-shadow border border-blue-100">
            <span className="text-blue-500 font-semibold">🎯 Бюджет</span> -
            контролируйте лимиты
          </div>
        </div>
        {/* Используется для навигации между компонентами, в данном случае, навигаться переводит на страницу создания счета, если нету счетов *!Будет в дальнейшом. */}
        <button
          onClick={() => navigate("/createCheck")}
          className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all"
        >
          Начать
        </button>
      </div>
    </div>
  );
}

export default Welcome;
