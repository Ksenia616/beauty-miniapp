import React, { useState } from "react";

const BackButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="mt-6 px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-300 transition"
  >
    Назад
  </button>
);

export default function Assistant() {
  const [step, setStep] = useState("menu");
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Главное меню
  if (step === "menu") {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
        <h2 className="text-xl mb-8 text-center">
          Выбери, какой продукт ты хочешь подобрать для себя сегодня ✨
        </h2>
        <button
          className="w-64 py-3 mb-4 bg-white text-black rounded-lg hover:bg-gray-300"
          onClick={() => setStep("lipstick")}
        >
          Помада
        </button>
        <button
          className="w-64 py-3 mb-4 bg-white text-black rounded-lg hover:bg-gray-300"
          onClick={() => setStep("foundation")}
        >
          Тональный крем
        </button>
        <button
          className="w-64 py-3 bg-white text-black rounded-lg hover:bg-gray-300"
          onClick={() => setStep("contour")}
        >
          Стик для контуринга
        </button>
      </div>
    );
  }

  // Помада
  if (step === "lipstick" && !selectedProduct) {
    const options = [
      { mood: "Сладкая Вата 🫧", name: "A427 Cotton Candy", link: "https://ozon.ru/product/2389639521" },
      { mood: "Бургунди 🍇", name: "A328 Burgundy", link: "https://ozon.ru/product/2389639937" },
      { mood: "Натуральность 🌿", name: "A321 Natural Beige", link: "https://ozon.ru/product/2389638492" },
      { mood: "Корица ☕️", name: "A002 Cinnamon", link: "https://ozon.ru/product/2389639924" },
      { mood: "Яркость 👠", name: "A005 Brick Red", link: "https://ozon.ru/product/2389638203" },
      { mood: "Тихая Роскошь 👜", name: "A317 Dark Natural", link: "https://ozon.ru/product/2389639388" },
      { mood: "Свежесть 🦋", name: "A319 Beige", link: "https://ozon.ru/product/2389643440" },
      { mood: "Сирень 🪻", name: "A320 Lilac", link: "https://ozon.ru/product/2389643032" },
    ];

    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
        <h2 className="text-xl mb-8">Выбери настроение на сегодня 💄</h2>
        {options.map((opt, i) => (
          <button
            key={i}
            onClick={() => setSelectedProduct(opt)}
            className="w-64 py-3 mb-3 bg-white text-black rounded-lg hover:bg-gray-300"
          >
            {opt.mood}
          </button>
        ))}
        <BackButton onClick={() => setStep("menu")} />
      </div>
    );
  }

  if (selectedProduct) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black p-6">
        <h2 className="text-xl font-semibold mb-6">{selectedProduct.name}</h2>
        <a
          href={selectedProduct.link}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-white text-black border border-black rounded-lg hover:bg-gray-200"
        >
          Открыть!
        </a>
        <BackButton onClick={() => setSelectedProduct(null)} />
      </div>
    );
  }

  return null;
}

