import React, { useState } from "react";
import Assistant from "./components/Assistant";
import Shop from "./components/Shop";
import Test from "./components/Test";
import logo from "./assets/logo.png"; // логотип бренда

import "./index.css";

function App() {
  const [activeTab, setActiveTab] = useState("intro");
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="app">
      {showIntro ? (
        <div className="intro-screen">
          <h1 className="intro-title">
            Привет! Я твой бьюти-ассистент <br /> Marvel Cosmetics
          </h1>
          <img src={logo} alt="Marvel Cosmetics" className="intro-logo" />
          <button
            className="start-btn"
            onClick={() => setShowIntro(false)}
          >
            Запустить
          </button>
        </div>
      ) : (
        <>
          <main className="content">
            {activeTab === "assistant" && <Assistant />}
            {activeTab === "shop" && <Shop />}
            {activeTab === "test" && <Test />}
          </main>

          <nav className="menu">
            <button
              className={`menu-btn ${activeTab === "assistant" ? "active" : ""}`}
              onClick={() => setActiveTab("assistant")}
            >
              Ассистент
            </button>
            <button
              className={`menu-btn ${activeTab === "shop" ? "active" : ""}`}
              onClick={() => setActiveTab("shop")}
            >
              Магазин
            </button>
            <button
              className={`menu-btn ${activeTab === "test" ? "active" : ""}`}
              onClick={() => setActiveTab("test")}
            >
              Тест
            </button>
          </nav>
        </>
      )}
    </div>
  );
}

export default App;
