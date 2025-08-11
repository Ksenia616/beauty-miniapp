// src/components/MenuPage.js
import React from "react";

export default function MenuPage({ onSelect }) {
  return (
    <div className="flex flex-col h-full bg-black text-white text-center p-6">
      <div className="flex flex-col items-center justify-center flex-1">
        <h2 className="text-2xl mb-8 animate-pulse-silver">Меню</h2>
        <div className="flex flex-col space-y-4 w-full max-w-xs">
          <button
            onClick={() => onSelect("assistant")}
            className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-300 transition"
          >
            Ассистент
          </button>
          <button
            onClick={() => onSelect("shop")}
            className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-300 transition"
          >
            Магазин
          </button>
          <button
            onClick={() => onSelect("contacts")}
            className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-300 transition"
          >
            Контакты
          </button>
        </div>
      </div>
    </div>
  );
}

