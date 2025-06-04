function Welcome() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-md mx-auto text-center space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Добро пожаловать в <span className="text-blue-600">Finance Helper</span>!
        </h1>
        
        <p className="text-lg text-gray-600">
          Умный помощник для управления вашими финансами
        </p>

        <div className="space-y-4">
          <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-blue-100">
            <span className="text-blue-500 font-semibold">📊 Учет операций</span> - добавляйте доходы и расходы
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-blue-100">
            <span className="text-blue-500 font-semibold">📈 Анализ</span> - наглядные графики и отчеты
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-blue-100">
            <span className="text-blue-500 font-semibold">🎯 Бюджет</span> - контролируйте лимиты
          </div>
        </div>

        <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all">
          Начать
        </button>
      </div>
    </div>
  );
}

export default Welcome;