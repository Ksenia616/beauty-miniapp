// src/App.js
import React, { useState } from "react";
import Assistant from "./components/Assistant";
import Shop from "./components/Shop";
import Test from "./components/Test";

// импорт логотипа
import Logo from "./assets/logo-small.png"; // сюда вставь свой файл логотипа

function App() {
  const [activeTab, setActiveTab] = useState("assistant");

  return (
    <div className="flex flex-col min-h-screen bg-black text-white relative">
      {/* Основной контент */}
      <div className="flex-1">
        {activeTab === "assistant" && <Assistant />}
        {activeTab === "shop" && <Shop />}
        {activeTab === "test" && <Test />}
      </div>

      {/* Логотип снизу */}
      <div className="absolute bottom-20 w-full flex justify-center animate-pulse-silver">
        <img src={Logo} alt="Marvel Cosmetics" className="w-28 drop-shadow-lg" />
      </div>

      {/* Навигация */}
      <div className="flex justify-around bg-black py-4 border-t border-gray-700 relative z-10">
        <button
          className={`px-4 py-2 rounded-lg ${
            activeTab === "assistant"
              ? "bg-white text-black shadow-lg"
              : "bg-white text-black hover:bg-gray-300"
          }`}
          onClick={() => setActiveTab("assistant")}
        >
          Ассистент
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${
            activeTab === "shop"
              ? "bg-white text-black shadow-lg"
              : "bg-white text-black hover:bg-gray-300"
          }`}
          onClick={() => setActiveTab("shop")}
        >
          Магазин
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${
            activeTab === "test"
              ? "bg-white text-black shadow-lg"
              : "bg-white text-black hover:bg-gray-300"
          }`}
          onClick={() => setActiveTab("test")}
        >
          Тест
        </button>
      </div>
    </div>
  );
}

export default App;
