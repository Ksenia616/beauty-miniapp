import React, { useState } from "react";
import Assistant from "./components/Assistant";
import Shop from "./components/Shop";
import Test from "./components/Test";
import Logo from "./assets/logo.png"; // твой логотип
import SmallLogo from "./assets/logo-small.png"; // мини-логотип

function App() {
  const [started, setStarted] = useState(false);
  const [activeTab, setActiveTab] = useState("assistant");

  // ---- Стартовая страница ----
  if (!started) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white text-center">
        <img
          src={Logo}
          alt="Marvel Cosmetics"
          className="w-40 mb-8 animate-pulse-silver"
        />
        <h1 className="text-xl font-light mb-8">
          Привет! Я твой бьюти‑ассистент Marvel Cosmetics
        </h1>
        <button
          onClick={() => setStarted(true)}
          className="px-8 py-3 bg-white text-black rounded-lg hover:bg-gray-300 transition"
        >
          Запустить
        </button>
      </div>
    );
  }

  // ---- Основное приложение ----
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Контент */}
      <div className="flex-1">
        {activeTab === "assistant" && <Assistant />}
        {activeTab === "shop" && <Shop />}
        {activeTab === "test" && <Test />}
      </div>

      {/* Логотип над меню */}
      <div className="flex justify-center mb-2">
        <img
          src={SmallLogo}
          alt="Marvel Small Logo"
          className="w-16 animate-pulse-silver"
        />
      </div>

      {/* Горизонтальное меню внизу */}
      <div className="fixed bottom-0 w-full bg-black border-t border-gray-700 flex justify-around py-4">
        <button
          onClick={() => setActiveTab("assistant")}
          className={`w-28 py-2 rounded-lg ${
            activeTab === "assistant"
              ? "active-tab"
              : "bg-white text-black hover:bg-gray-300"
          }`}
        >
          Ассистент
        </button>
        <button
          onClick={() => setActiveTab("shop")}
          className={`w-28 py-2 rounded-lg ${
            activeTab === "shop"
              ? "active-tab"
              : "bg-white text-black hover:bg-gray-300"
          }`}
        >
          Магазин
        </button>
        <button
          onClick={() => setActiveTab("test")}
          className={`w-28 py-2 rounded-lg ${
            activeTab === "test"
              ? "active-tab"
              : "bg-white text-black hover:bg-gray-300"
          }`}
        >
          Тест
        </button>
      </div>
    </div>
  );
}

export default App;
