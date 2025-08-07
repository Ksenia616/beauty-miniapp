import React from "react";
import logo from "../assets/logo.png";

function Home({ onStart }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-black text-white">
      <h1 className="text-xl font-light mb-4">
        Привет! Я твой бьюти-ассистент Marvel Cosmetics
      </h1>
      <img
        src={logo}
        alt="Marvel Logo"
        className="w-48 mb-6 animate-pulse-silver"
      />
      <button
        onClick={onStart}
        className="bg-white text-black px-6 py-3 rounded hover:bg-gray-300 transition"
      >
        Запустить
      </button>
    </div>
  );
}

export default Home;
