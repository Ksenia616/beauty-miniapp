// src/App.js
import React, { useState } from "react";
import Assistant from "./components/Assistant";
import Shop from "./components/Shop";
import Test from "./components/Test";
import logo from "./assets/logo.png"; // твой логотип

function App() {
  const [page, setPage] = useState("home");
  const [activeMenu, setActiveMenu] = useState("assistant");

  if (page === "home") {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
        <h1 className="text-2xl font-light mb-6 text-center">
          Привет! Я твой бьюти-ассистент Marvel Cosmetics
        </h1>
        <img
          src={logo}
          alt="Marvel Cosmetics"
          className="w-48 mb-6 shiny-logo"
        />
        <button
          onClick={() => setPage("menu")}
          className="bg-white text-black px-6 py-2 rounded hover:bg-gray-300 transition glowing-btn"
        >
          Запустить
        </button>
      </div>
    );
  }

  if (page === "menu") {
    return (
      <div className="flex flex-col min-h-screen bg-black text-white">
        <div className="flex-grow">
          {activeMenu === "assistant" && <Assistant />}
          {activeMenu === "shop" && <Shop />}
          {activeMenu === "test" && <Test />}
        </div>

        {/* меню снизу */}
        <div className="flex justify-around bg-black border-t border-gray-700 py-6">
          <button
            onClick={() => setActiveMenu("assistant")}
            className={`px-4 py-2 rounded ${
              activeMenu === "assistant"
                ? "bg-gray-300 text-black glowing-btn"
                : "bg-white text-black hover:bg-gray-300"
            }`}
          >
            Ассистент
          </button>
          <button
            onClick={() => setActiveMenu("shop")}
            className={`px-4 py-2 rounded ${
              activeMenu === "shop"
                ? "bg-gray-300 text-black glowing-btn"
                : "bg-white text-black hover:bg-gray-300"
            }`}
          >
            Магазин
          </button>
          <button
            onClick={() => setActiveMenu("test")}
            className={`px-4 py-2 rounded ${
              activeMenu === "test"
                ? "bg-gray-300 text-black glowing-btn"
                : "bg-white text-black hover:bg-gray-300"
            }`}
          >
            Тест
          </button>
        </div>
      </div>
    );
  }

  return null;
}

export default App;
