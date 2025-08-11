// src/App.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import Home from "./components/Home";
import MenuPage from "./components/MenuPage";
import Assistant from "./components/Assistant";
import Shop from "./components/Shop";
import ContactsPage from "./components/ContactsPage";
import Logo from "./assets/logo-small.png";

function App() {
  const [step, setStep] = useState("home"); // 'home' | 'menu' | 'assistant' | 'shop' | 'contacts'

  // Экран запуска — без нижнего меню
  if (step === "home") {
    return (
      <div className="flex flex-col h-screen bg-black text-white">
        <Home onStart={() => setStep("menu")} />
      </div>
    );
  }

  // Определяем текущую страницу
  let currentPage = null;
  if (step === "menu") currentPage = <MenuPage onSelect={setStep} />;
  else if (step === "assistant") currentPage = <Assistant />;
  else if (step === "shop") currentPage = <Shop />;
  else if (step === "contacts") currentPage = <ContactsPage onBack={() => setStep("menu")} />;

  // Показывать ли нижнее меню?
  const showBottomNav = step !== "home" && step !== "menu";

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Контент */}
      <div className="flex-1 overflow-hidden flex items-center justify-center">
        {currentPage}
      </div>

      {/* Логотип — всегда ниже контента */}
      <div className="w-full flex justify-center mb-2 animate-pulse-silver">
        <img src={Logo} alt="Marvel Cosmetics" className="w-32 drop-shadow-lg" />
      </div>

      {/* Нижнее меню — скрыто на Home и Menu, видно на остальных */}
      {showBottomNav && (
        <div className="bg-black border-t border-gray-700">
          <div className="flex justify-around py-3">
            {[
              { id: "assistant", label: "Ассистент" },
              { id: "shop", label: "Магазин" },
              { id: "contacts", label: "Контакты" },
            ].map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setStep(tab.id)}
                className="relative px-4 py-2 rounded-lg"
                whileTap={{ scale: 0.95 }}
              >
                {/* Анимированный фон активной вкладки */}
                {step === tab.id && (
                  <motion.span
                    layoutId="navHighlight"
                    className="absolute inset-0 rounded-lg bg-pink-200 shadow-lg"
                    style={{ zIndex: 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 40, mass: 1 }}
                  />
                )}
                {/* Текст поверх фона */}
                <span
                  className={`relative z-10 ${
                    step === tab.id ? "text-black font-medium" : "text-white hover:text-gray-200"
                  }`}
                >
                  {tab.label}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
