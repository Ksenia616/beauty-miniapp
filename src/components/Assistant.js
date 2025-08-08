import React, { useState } from "react";
import FF01 from "../assets/FF01.png";
import FF02 from "../assets/FF02.png";
import FF03 from "../assets/FF03.png";
import FF04 from "../assets/FF04.png";
import J01 from "../assets/J01.png";
import J02 from "../assets/J02.png";
import J03 from "../assets/J03.png";
import A427 from "../assets/A427.png";
import A328 from "../assets/A328.png";
import A321 from "../assets/A321.png";
import A002 from "../assets/A002.png";
import A005 from "../assets/A005.png";
import A317 from "../assets/A317.png";
import A319 from "../assets/A319.png";
import A320 from "../assets/A320.png";

export default function Assistant() {
  const [step, setStep] = useState("menu");

  const StyledButton = ({ onClick, children }) => (
    <button
      onClick={onClick}
      className="w-[280px] h-14 bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-300 text-center transition"
    >
      {children}
    </button>
  );

  const BackButtonGray = ({ onClick }) => (
    <button
      onClick={onClick}
      className="w-[280px] h-14 mt-6 bg-white text-black px-6 py-2 rounded-lg border border-black hover:bg-gray-200 transition"
    >
      Назад
    </button>
  );

  const renderProduct = (title, description, image, link, backStep) => (
    <div className="flex flex-col items-center justify-center flex-1 bg-white text-black p-6 rounded-lg">
      {image && <img src={image} alt={title} className="w-60 mb-6" />}
      <h2 className="text-xl font-semibold mb-4 text-center">{title}</h2>
      <p className="mb-6 text-center">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-[280px] h-14 bg-white text-black px-6 py-2 rounded-lg border border-black hover:bg-gray-200 flex items-center justify-center transition"
      >
        Открыть!
      </a>
      <BackButtonGray onClick={() => setStep(backStep)} />
    </div>
  );

  if (step === "menu") {
    return (
      <div className="flex flex-col items-center justify-center flex-1 bg-black text-white p-6">
        <h2 className="text-lg mb-6 text-center animate-pulse text-pink-300 drop-shadow-md">
          Выбери, какой продукт ты хочешь подобрать для себя сегодня ✨
        </h2>
        <div className="flex flex-col items-center space-y-4">
          <StyledButton onClick={() => setStep("lipstick")}>Помада</StyledButton>
          <StyledButton onClick={() => setStep("foundation")}>Тональный крем</StyledButton>
          <StyledButton onClick={() => setStep("contour")}>Стик для контуринга</StyledButton>
        </div>
      </div>
    );
  }

  if (step === "lipstick") {
    return (
      <div className="flex flex-col items-center justify-center flex-1 bg-black text-white p-6">
        <h2 className="text-lg mb-6">Выбери настроение на сегодня:</h2>
        <div className="flex flex-col items-center space-y-4">
          <StyledButton onClick={() => setStep("A427")}>Сладкая Вата 🫧</StyledButton>
          <StyledButton onClick={() => setStep("A328")}>Бургунди 🍇</StyledButton>
          <StyledButton onClick={() => setStep("A321")}>Натуральность 🌿</StyledButton>
          <StyledButton onClick={() => setStep("A002")}>Корица ☕️</StyledButton>
          <StyledButton onClick={() => setStep("A005")}>Яркость 👠</StyledButton>
          <StyledButton onClick={() => setStep("A317")}>Тихая Роскошь 👜</StyledButton>
          <StyledButton onClick={() => setStep("A319")}>Свежесть 🦋</StyledButton>
          <StyledButton onClick={() => setStep("A320")}>Сирень 🪻</StyledButton>
          <BackButtonGray onClick={() => setStep("menu")} />
        </div>
      </div>
    );
  }

  // Карточки помад
  if (step === "A427") return renderProduct("A427 Cotton Candy", "Нежный розово-сиреневый оттенок, создающий игривое настроение.", A427, "https://ozon.ru/product/2389643440", "lipstick");
  if (step === "A328") return renderProduct("A328 Burgundy", "Насыщенный винный цвет для смелого и яркого образа.", A328, "https://ozon.ru/product/2389643440", "lipstick");
  if (step === "A321") return renderProduct("A321 Natural Beige", "Нюдовый оттенок с лёгкой теплотой, идеально подходит на каждый день.", A321, "https://ozon.ru/product/2389643440", "lipstick");
  if (step === "A002") return renderProduct("A002 Cinnamon", "Теплый коричный оттенок для уюта и мягкости.", A002, "https://ozon.ru/product/2389643440", "lipstick");
  if (step === "A005") return renderProduct("A005 Brick Red", "Кирпично-красный цвет, добавляющий выразительности и характера.", A005, "https://ozon.ru/product/2389643440", "lipstick");
  if (step === "A317") return renderProduct("A317 Dark Natural", "Глубокий нюд с тёплым подтоном — для элегантного образа.", A317, "https://ozon.ru/product/2389643440", "lipstick");
  if (step === "A319") return renderProduct("A319 Beige", "Светло-бежевый оттенок с лёгкой ноткой персика.", A319, "https://ozon.ru/product/2389643440", "lipstick");
  if (step === "A320") return renderProduct("A320 Lilac", "Нежный лиловый для весеннего настроения и свежести.", A320, "https://ozon.ru/product/2389643440", "lipstick");

  // Тональные средства
  if (step === "foundation") {
    return (
      <div className="flex flex-col items-center justify-center flex-1 bg-black text-white p-6 space-y-4">
        <h2 className="text-lg mb-4 text-center">Какая у тебя кожа?</h2>
        <StyledButton onClick={() => setStep("ff01")}>Светлая фарфорового оттенка</StyledButton>
        <StyledButton onClick={() => setStep("ff02")}>Среднего тона с холодным оттенком</StyledButton>
        <StyledButton onClick={() => setStep("ff03")}>Кожа с теплым золотистым подтоном</StyledButton>
        <StyledButton onClick={() => setStep("ff04")}>Загорелая или смуглая кожа</StyledButton>
        <BackButtonGray onClick={() => setStep("menu")} />
      </div>
    );
  }

  if (step === "ff01") return renderProduct("FF01 Fair Nude", "Очень светлый нейтральный беж с мягким теплым подтоном. Идеален для светлой кожи фарфорового оттенка, которая легко краснеет и едва загорает. Выравнивает тон, не утяжеляя образ.", FF01, "https://ozon.ru/product/2389897289", "foundation");
  if (step === "ff02") return renderProduct("FF02 Light Rose", "Светлый беж с нежным розовым подтоном. Прекрасен для кожи светлого и светло-среднего тона с холодным или розовым оттенком. Подходит, если есть склонность к легкому румянцу или веснушкам.", FF02, "https://ozon.ru/product/2389897141", "foundation");
  if (step === "ff03") return renderProduct("FF03 Warm Beige", "Средний бежевый с теплым персиковым подтоном. Это универсальный оттенок для средней кожи с теплым золотистым подтоном. Красиво подчеркивает легкий загар или натуральную смуглость.", FF03, "https://ozon.ru/product/2389897767", "foundation");
  if (step === "ff04") return renderProduct("FF04 Tan Honey", "Средне-темный беж с насыщенным теплым подтоном. Подходит загорелой или смуглой коже, идеально ложится на кожу после отпуска или с эффектом автозагара.", FF04, "https://ozon.ru/product/2389897299", "foundation");

  // Контуринг
  if (step === "contour") {
    return (
      <div className="flex flex-col items-center justify-center flex-1 bg-black text-white p-6 space-y-4">
        <h2 className="text-lg mb-4 text-center">Какой у тебя цветотип внешности?</h2>
        <StyledButton onClick={() => setStep("j01")}>Теплый</StyledButton>
        <StyledButton onClick={() => setStep("j02")}>Холодный</StyledButton>
        <StyledButton onClick={() => setStep("j03")}>Загорелый</StyledButton>
        <BackButtonGray onClick={() => setStep("menu")} />
      </div>
    );
  }

  if (step === "j01") return renderProduct("J01 Soft Brown", "Светло-коричневый — цвет оттенка Soft Brown предназначен для теплого цветотипа.", J01, "https://ozon.ru/product/2389496078", "contour");
  if (step === "j02") return renderProduct("J02 Cool Brown", "Холодно-коричневый — цвет оттенка Cool Brown предназначен для холодного цветотипа.", J02, "https://ozon.ru/product/2389502155", "contour");
  if (step === "j03") return renderProduct("J03 Warm Brown", "Тепло-коричневый — цвет оттенка Warm Brown предназначен для загорелой кожи.", J03, "https://ozon.ru/product/2389497767", "contour");

  return null;
}
