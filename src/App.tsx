// App.tsx
import { useEffect, useState } from "react";
import { backButton, isTMA } from "@telegram-apps/sdk-react";
// import Welcome from "./components/Welcome";
import CreateCheck from "./components/CreateAccount";

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
    <div>
      {/* <Welcome /> */}
      <CreateCheck />
      {isTmaEnv && <div>hello</div>}
    </div>
  );
}

export default App;
