import { init, isTMA } from "@telegram-apps/sdk-react";
import { createRoot } from "react-dom/client";
import App from "./App";
import './index.css'

async function initializeApp() {
  if (import.meta.env.DEV && !isTMA()) {
    window.localStorage.setItem(
      "tma-params",
      JSON.stringify({
        tgWebAppPlatform: "web",
        tgWebAppThemeParams: { bg_color: "#ffffff" },
        tgWebAppVersion: "6.0",
      })
    );
  }

  try {
    if (isTMA()) {
      await init();
      console.log("TMA initialized successfully");
    }
  } catch (error) {
    console.error("Failed to initialize TMA:", error);
  }

  const root = createRoot(document.getElementById("root")!);
  root.render(<App />);
}
initializeApp();
