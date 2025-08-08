// src/App.js
import React, { useState } from "react";
import Home from "./components/Home";
import MenuPage from "./components/MenuPage";
import Assistant from "./components/Assistant";
import Shop from "./components/Shop";
import Logo from "./assets/logo-small.png"; // Логотип

function App() {
  const [step, setStep] = useState("home"); // 'home', 'menu', 'assistant', 'shop'

  // Старт → меню выбора
  if (step === "home") {
    return (
      <div className="flex flex-col h-screen bg-black text-white">
        <Home onStart={() => setStep("menu")} />
      </div>
    );
  }

  // Меню выбора → ассистент/магазин
  if (step === "menu") {
    return (
      <div className="flex flex-col h-screen bg-black text-white">
        <MenuPage onSelect={(tab) => setStep(tab)} />
      </div>
    );
  }

  // Основной интерфейс (ассистент или магазин)
  const currentPage = step === "assistant" ? <Assistant /> : <Shop />;

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Контент */}
      <div className="flex-1 overflow-hidden flex items-center justify-center">
        {currentPage}
      </div>

      {/* Логотип над меню */}
      <div className="w-full flex justify-center mb-2 animate-pulse-silver">
        <img src={Logo} alt="Marvel Cosmetics" className="w-32 drop-shadow-lg" />
      </div>

      {/* Меню */}
      <div className="flex justify-around bg-black py-3 border-t border-gray-700">
        <button
          className={`px-4 py-2 rounded-lg ${
            step === "assistant"
              ? "bg-pink-200 text-black shadow-lg"
              : "bg-white text-black hover:bg-gray-300"
          }`}
          onClick={() => setStep("assistant")}
        >
          Ассистент
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${
            step === "shop"
              ? "bg-pink-200 text-black shadow-lg"
              : "bg-white text-black hover:bg-gray-300"
          }`}
          onClick={() => setStep("shop")}
        >
          Магазин
        </button>
      </div>
    </div>
  );
}

export default App;
