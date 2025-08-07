// src/App.js
import React, { useState } from "react";
import Home from "./components/Home";
import Assistant from "./components/Assistant";
import Shop from "./components/Shop";
import Logo from "./assets/logo-small.png"; // Логотип

function App() {
  const [started, setStarted] = useState(false); // Управляет показом Home
  const [activeTab, setActiveTab] = useState("assistant");

  if (!started) {
    return (
      <div className="flex flex-col h-screen bg-black text-white">
        <Home onStart={() => setStarted(true)} />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Контент страниц */}
      <div className="flex-1 overflow-hidden flex items-center justify-center">
        {activeTab === "assistant" && <Assistant />}
        {activeTab === "shop" && <Shop />}
      </div>

      {/* Логотип над меню */}
      <div className="w-full flex justify-center mb-2 animate-pulse-silver">
        <img src={Logo} alt="Marvel Cosmetics" className="w-32 drop-shadow-lg" />
      </div>

      {/* Меню */}
      <div className="flex justify-around bg-black py-3 border-t border-gray-700">
        <button
          className={`px-4 py-2 rounded-lg ${
            activeTab === "assistant"
              ? "bg-pink-200 text-black shadow-lg"
              : "bg-white text-black hover:bg-gray-300"
          }`}
          onClick={() => setActiveTab("assistant")}
        >
          Ассистент
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${
            activeTab === "shop"
              ? "bg-pink-200 text-black shadow-lg"
              : "bg-white text-black hover:bg-gray-300"
          }`}
          onClick={() => setActiveTab("shop")}
        >
          Магазин
        </button>
      </div>
    </div>
  );
}

export default App;

