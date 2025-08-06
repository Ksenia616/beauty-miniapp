// src/components/Assistant.js
import React, { useState } from "react";

// импорт картинок тональных кремов
import FF01 from "../assets/FF01.png";
import FF02 from "../assets/FF02.png";
import FF03 from "../assets/FF03.png";
import FF04 from "../assets/FF04.png";

// импорт картинок стиков
import J01 from "../assets/J01.png";
import J02 from "../assets/J02.png";
import J03 from "../assets/J03.png";

// импорт картинок помад
import A002 from "../assets/A002.png";
import A005 from "../assets/A005.png";
import A317 from "../assets/A317.png";
import A319 from "../assets/A319.png";
import A320 from "../assets/A320.png";
import A321 from "../assets/A321.png";
import A328 from "../assets/A328.png";
import A427 from "../assets/A427.png";

function Assistant() {
  const [step, setStep] = useState("menu");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const backToMenu = () => {
    setStep("menu");
    setSelectedProduct(null);
  };

  // ---------- ГЛАВНОЕ МЕНЮ ----------
  if (step === "menu") {
    return (
      <div className="p-6 text-center text-white">
        <h2 className="text-lg mb-6">
          Выбери, какой продукт ты хочешь подобрать для себя сегодня? ✨
        </h2>
        <div className="flex flex-col space-y-4">
          <button
            onClick={() => setStep("lipstick")}
            className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-300"
          >
            Помада
          </button>
          <button
            onClick={() => setStep("foundation")}
            className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-300"
          >
            Тональный крем
          </button>
          <button
            onClick={() => setStep("contour")}
            className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-300"
          >
            Стик для контуринга
          </button>
        </div>
      </div>
    );
  }

  // ---------- ПОМАДА ----------
  if (step === "lipstick") {
    const options = [
      { mood: "Сладкая Вата 🫧", name: "A427 Cotton Candy", img: A427, link: "https://ozon.ru/product/2389639521" },
      { mood: "Бургунди 🍇", name: "A328 Burgundy", img: A328, link: "https://ozon.ru/product/2389639937" },
      { mood: "Натуральность 🌿", name: "A321 Natural Beige", img: A321, link: "https://ozon.ru/product/2389638492" },
      { mood: "Корица ☕️", name: "A002 Cinnamon", img: A002, link: "https://ozon.ru/product/2389639924" },
      { mood: "Яркость 👠", name: "A005 Brick Red", img: A005, link: "https://ozon.ru/product/2389638203" },
      { mood: "Тихая Роскошь 👜", name: "A317 Dark Natural", img: A317, link: "https://ozon.ru/product/2389639388" },
      { mood: "Свежесть 🦋", name: "A319 Beige", img: A319, link: "https://ozon.ru/product/2389643440" },
      { mood: "Сирень 🪻", name: "A320 Lilac", img: A320, link: "https://ozon.ru/product/2389643032" },
    ];

    if (!selectedProduct) {
      return (
        <div className="p-6 text-center text-white">
          <h2 className="text-lg mb-6">Выбери настроение на сегодня:</h2>
          <div className="flex flex-col space-y-4">
            {options.map((opt, i) => (
              <button
                key={i}
                onClick={() => setSelectedProduct(opt)}
                className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-300"
              >
                {opt.mood}
              </button>
            ))}
            <button
              onClick={backToMenu}
              className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-300 mt-6"
            >
              Назад
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="p-6 text-center text-black bg-white rounded-lg">
        <img src={selectedProduct.img} alt={selectedProduct.name} className="mx-auto mb-4 w-40" />
        <h2 className="text-xl font-semibold mb-4">{selectedProduct.name}</h2>
        <a
          href={selectedProduct.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-700"
        >
          Открыть!
        </a>
        <div className="mt-6">
          <button
            onClick={() => setSelectedProduct(null)}
            className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-700"
          >
            Назад
          </button>
        </div>
      </div>
    );
  }

  // ---------- ТОНАЛЬНЫЙ КРЕМ ----------
  if (step === "foundation") {
    const options = [
      {
        text: "Светлая фарфоровая кожа",
        name: "FAIR NUDE (FF01)",
        img: FF01,
        desc: "Очень светлый нейтральный беж с мягким теплым подтоном.",
        link: "https://ozon.ru/product/2389897289",
      },
      {
        text: "Средний тон с розовым подтоном",
        name: "LIGHT ROSE (FF02)",
        img: FF02,
        desc: "Светлый беж с нежным розовым подтоном.",
        link: "https://ozon.ru/product/2389897141",
      },
      {
        text: "Теплый золотистый подтон",
        name: "WARM BEIGE (FF03)",
        img: FF03,
        desc: "Средний бежевый с теплым персиковым подтоном.",
        link: "https://ozon.ru/product/2389897767",
      },
      {
        text: "Загорелая или смуглая кожа",
        name: "TAN HONEY (FF04)",
        img: FF04,
        desc: "Средне-темный беж с насыщенным теплым подтоном.",
        link: "https://ozon.ru/product/2389897299",
      },
    ];

    if (!selectedProduct) {
      return (
        <div className="p-6 text-center text-white">
          <h2 className="text-lg mb-6">Какая у тебя кожа?</h2>
          <div className="flex flex-col space-y-4">
            {options.map((opt, i) => (
              <button
                key={i}
                onClick={() => setSelectedProduct(opt)}
                className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-300"
              >
                {opt.text}
              </button>
            ))}
            <button
              onClick={backToMenu}
              className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-300 mt-6"
            >
              Назад
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="p-6 text-center text-black bg-white rounded-lg">
        <img src={selectedProduct.img} alt={selectedProduct.name} className="mx-auto mb-4 w-40" />
        <h2 className="text-xl font-semibold mb-2">{selectedProduct.name}</h2>
        <p className="mb-4">{selectedProduct.desc}</p>
        <a
          href={selectedProduct.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-700"
        >
          Открыть!
        </a>
        <div className="mt-6">
          <button
            onClick={() => setSelectedProduct(null)}
            className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-700"
          >
            Назад
          </button>
        </div>
      </div>
    );
  }

  // ---------- СТИК ДЛЯ КОНТУРИНГА ----------
  if (step === "contour") {
    const options = [
      {
        text: "Теплый",
        name: "J01 Soft Brown",
        img: J01,
        desc: "Светло-коричневый оттенок для теплого цветотипа.",
        link: "https://ozon.ru/product/2389496078",
      },
      {
        text: "Холодный",
        name: "J02 Cool Brown",
        img: J02,
        desc: "Холодно-коричневый оттенок для холодного цветотипа.",
        link: "https://ozon.ru/product/2389502155",
      },
      {
        text: "Загорелый",
        name: "J03 Warm Brown",
        img: J03,
        desc: "Тепло-коричневый оттенок для загорелой кожи.",
        link: "https://ozon.ru/product/2389497767",
      },
    ];

    if (!selectedProduct) {
      return (
        <div className="p-6 text-center text-white">
          <h2 className="text-lg mb-6">Какой у тебя цветотип внешности?</h2>
          <div className="flex flex-col space-y-4">
            {options.map((opt, i) => (
              <button
                key={i}
                onClick={() => setSelectedProduct(opt)}
                className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-300"
              >
                {opt.text}
              </button>
            ))}
            <button
              onClick={backToMenu}
              className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-300 mt-6"
            >
              Назад
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="p-6 text-center text-black bg-white rounded-lg">
        <img src={selectedProduct.img} alt={selectedProduct.name} className="mx-auto mb-4 w-40" />
        <h2 className="text-xl font-semibold mb-2">{selectedProduct.name}</h2>
        <p className="mb-4">{selectedProduct.desc}</p>
        <a
          href={selectedProduct.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-700"
        >
          Открыть!
        </a>
        <div className="mt-6">
          <button
            onClick={() => setSelectedProduct(null)}
            className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-700"
          >
            Назад
          </button>
        </div>
      </div>
    );
  }

  return null;
}

export default Assistant;
