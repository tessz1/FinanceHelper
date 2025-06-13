// App.tsx
import { useEffect, useState } from "react";
import { backButton, isTMA } from "@telegram-apps/sdk-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import CreateCheck from "./components/CreateAccount";
import { FilterProvider } from "./components/context/filtex";
function App() {
  const [isTmaEnv, setIsTmaEnv] = useState(false);

  useEffect(() => {
    if (isTMA()) {
      setIsTmaEnv(true);
      backButton.show();
      backButton.onClick(() => {});
      const listener = () => alert("hello");
      return () => backButton.offClick(listener);
    }
  }, []);

  return (
    <FilterProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/createCheck" element={<CreateCheck />} />
          {/* // {isTmaEnv && <div>hello</div>} */}
        </Routes>
      </BrowserRouter>
    </FilterProvider>
  );
}

export default App;
