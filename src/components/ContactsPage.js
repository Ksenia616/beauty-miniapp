// src/components/ContactsPage.js
import React from "react";

export default function ContactsPage() {
  const openTelegram = () => {
    window.open("https://t.me/Marvel_cosmetics", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex flex-col h-full bg-black text-white text-center">
      {/* Контент */}
      <div className="flex flex-col items-center justify-center flex-1 p-6">
        <h2 className="text-xl mb-8 text-center text-white animate-glow">
          Связаться с нами
        </h2>
        <p className="opacity-80 mb-6">
          Напишите нам в Telegram — ответим как можно скорее.
        </p>

        <button
          onClick={openTelegram}
          className="w-[280px] h-14 bg-white text-black px-6 py-2 rounded-lg border border-black hover:bg-gray-200 transition"
        >
          Открыть Telegram
        </button>
      </div>
    </div>
  );
}
