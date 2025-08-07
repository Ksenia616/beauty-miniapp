// src/components/Assistant.js
import React, { useState } from "react";
import FF01 from "../assets/FF01.png";
import FF02 from "../assets/FF02.png";
import FF03 from "../assets/FF03.png";
import FF04 from "../assets/FF04.png";
import J01 from "../assets/J01.png";
import J02 from "../assets/J02.png";
import J03 from "../assets/J03.png";

export default function Assistant() {
  const [step, setStep] = useState("menu");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const backToMenu = () => {
    setStep("menu");
    setSelectedProduct(null);
  };

  const renderProduct = (title, description, image, link, backStep) => (
    <div className="flex flex-col items-center justify-center flex-1 bg-white text-black p-6 rounded-lg">
      {image && <img src={image} alt={title} className="w-60 mb-6" />}
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <p className="mb-6 text-center">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-black px-6 py-2 rounded-lg border border-black hover:bg-gray-200"
      >
        Открыть!
      </a>
      <button
        onClick={() => setStep(backStep)}
        className="mt-6 bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-700"
      >
        Назад
      </button>
    </div>
  );

  if (step === "menu") {
    return (
      <div className="flex flex-col items-center justify-center flex-1 bg-black text-white p-6">
        <h2 className="text-lg mb-6 text-center">
          Выбери, какой продукт ты хочешь подобрать для себя сегодня ✨
        </h2>
        <div className="flex flex-col items-center space-y-4">
          <button onClick={() => setStep("lipstick")} className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-300">
            Помада
          </button>
          <button onClick={() => setStep("foundation")} className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-300">
            Тональный крем
          </button>
          <button onClick={() => setStep("contour")} className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-300">
            Стик для контуринга
          </button>
        </div>
      </div>
    );
  }

  if (step === "lipstick") {
    if (!selectedProduct) {
      return (
        <div className="flex flex-col items-center justify-center flex-1 bg-black text-white p-6">
          <h2 className="text-lg mb-6">Выбери настроение на сегодня:</h2>
          <div className="flex flex-col items-center space-y-4">
            <button onClick={() => setSelectedProduct("A427 Cotton Candy")} className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-300">Сладкая Вата 🫧</button>
            <button onClick={() => setSelectedProduct("A328 Burgundy")} className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-300">Бургунди 🍇</button>
            <button onClick={() => setSelectedProduct("A321 Natural Beige")} className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-300">Натуральность 🌿</button>
            <button onClick={() => setSelectedProduct("A002 Cinnamon")} className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-300">Корица ☕️</button>
            <button onClick={() => setSelectedProduct("A005 Brick Red")} className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-300">Яркость 👠</button>
            <button onClick={() => setSelectedProduct("A317 Dark Natural")} className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-300">Тихая Роскошь 👜</button>
            <button onClick={() => setSelectedProduct("A319 Beige")} className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-300">Свежесть 🦋</button>
            <button onClick={() => setSelectedProduct("A320 Lilac")} className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-300">Сирень 🪻</button>
            <button onClick={backToMenu} className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-300 mt-6">Назад</button>
          </div>
        </div>
      );
    }

    return renderProduct(selectedProduct, "https://ozon.ru", "lipstick");
  }

  if (step === "foundation") {
    return (
      <div className="flex flex-col items-center justify-center flex-1 bg-black text-white p-6 space-y-4">
        <h2 className="text-lg mb-4 text-center">Какая у тебя кожа?</h2>
        <button onClick={() => setStep("ff01")} className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-300">Светлая фарфорового оттенка, легко краснеет и едва загорает</button>
        <button onClick={() => setStep("ff02")} className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-300">Среднего тона с холодным или розовым оттенком с румянцем или веснушками</button>
        <button onClick={() => setStep("ff03")} className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-300">Кожа с теплым золотистым подтоном с легким загаром или натуральной смуглостью</button>
        <button onClick={() => setStep("ff04")} className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-300">Загорелая или смуглая кожа</button>
        <button onClick={backToMenu} className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-300 mt-6">Назад</button>
      </div>
    );
  }

  if (step === "ff01") return renderProduct("FAIR NUDE (FF01)", "Очень светлый нейтральный беж с мягким теплым подтоном. Идеален для светлой кожи фарфорового оттенка, которая легко краснеет и едва загорает. Выравнивает тон, не утяжеляя образ.", FF01, "https://ozon.ru/product/2389897289", "foundation");
  if (step === "ff02") return renderProduct("LIGHT ROSE (FF02)", "Светлый беж с нежным розовым подтоном. Прекрасен для кожи светлого и светло-среднего тона с холодным или розовым оттенком. Подходит, если есть склонность к легкому румянцу или веснушкам.", FF02, "https://ozon.ru/product/2389897141", "foundation");
  if (step === "ff03") return renderProduct("WARM BEIGE (FF03)", "Средний бежевый с теплым персиковым подтоном. Это универсальный оттенок для средней кожи с теплым золотистым подтоном. Красиво подчеркивает легкий загар или натуральную смуглость.", FF03, "https://ozon.ru/product/2389897767", "foundation");
  if (step === "ff04") return renderProduct("TAN HONEY (FF04)", "Средне-темный беж с насыщенным теплым подтоном.Подходит загорелой или смуглой кожи, идеально ложится на кожу после отпуска или с эффектом автозагара.", FF04, "https://ozon.ru/product/2389897299", "foundation");

  if (step === "contour") {
    return (
      <div className="flex flex-col items-center justify-center flex-1 bg-black text-white p-6 space-y-4">
        <h2 className="text-lg mb-4 text-center">Какой у тебя цветотип внешности?</h2>
        <button onClick={() => setStep("j01")} className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-300">Теплый</button>
        <button onClick={() => setStep("j02")} className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-300">Холодный</button>
        <button onClick={() => setStep("j03")} className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-300">Загорелый</button>
        <button onClick={backToMenu} className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-300 mt-6">Назад</button>
      </div>
    );
  }

  if (step === "j01") return renderProduct("J01 Soft Brown", "Светло-коричневый - цвет оттенка Soft Brown предназначен для теплого цветотипа", J01, "https://ozon.ru/product/2389496078", "contour");
  if (step === "j02") return renderProduct("J02 Cool Brown", "Холодно-коричневый - цвет оттенка Cool Brown предназначен для холодного цветотипа", J02, "https://ozon.ru/product/2389502155", "contour");
  if (step === "j03") return renderProduct("J03 Warm Brown", "Тепло-коричневый - цвет оттенка Warm Brown предназначен для загорелой кожи", J03, "https://ozon.ru/product/2389497767", "contour");

  return null;
}
