import React, { useState } from "react";

// --- foundation ---
import FF01 from "../assets/FF01.png";
import FF02 from "../assets/FF02.png";
import FF03 from "../assets/FF03.png";
import FF04 from "../assets/FF04.png";

// --- contour ---
import J01 from "../assets/J01.png";
import J02 from "../assets/J02.png";
import J03 from "../assets/J03.png";

// --- lipstick (помады) ---
import A427 from "../assets/A427.png";
import A328 from "../assets/A328.png";
import A321 from "../assets/A321.png";
import A002 from "../assets/A002.png";
import A005 from "../assets/A005.png";
import A317 from "../assets/A317.png";
import A319 from "../assets/A319.png";
import A320 from "../assets/A320.png";

// --- lip pencils (карандаши для губ) ---
// теперь каждое имя соответствует номеру файла
import P317 from "../assets/317.jpg";
import P318 from "../assets/318.jpg";
import P319 from "../assets/319.jpg";
import P320 from "../assets/320.jpg";
import P321 from "../assets/321.jpg";
import P322 from "../assets/322.jpg";
import P323 from "../assets/323.jpg";
import P324 from "../assets/324.jpg";
import P325 from "../assets/325.jpg";
import P326 from "../assets/326.jpg";
import P327 from "../assets/327.jpg";
import P328 from "../assets/328.jpg";
import P331 from "../assets/331.jpg";
import P332 from "../assets/332.jpg";
import P333 from "../assets/333.jpg";
import P334 from "../assets/334.jpg";
import P336 from "../assets/336.jpg";
import P337 from "../assets/337.jpg";
import P338 from "../assets/338.jpg";

export default function Assistant() {
  // стартуем с выбора категории
  const [step, setStep] = useState("category");

  const StyledButton = ({ onClick, children }) => (
    <button
      onClick={onClick}
      className="w-[280px] h-14 bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-300 text-center transition"
    >
      {children}
    </button>
  );

  const BackButton = ({ onClick }) => (
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
      {description && <p className="mb-6 text-center">{description}</p>}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-[280px] h-14 bg-white text-black px-6 py-2 rounded-lg border border-black hover:bg-gray-200 flex items-center justify-center transition"
      >
        Открыть!
      </a>
      <BackButton onClick={() => setStep(backStep)} />
    </div>
  );

  // --- Новый экран: выбор категории ---
  if (step === "category") {
    return (
      <div className="flex flex-col items-center justify-center flex-1 bg-black text-white p-6">
        <h2 className="text-xl mb-8 text-center text-white animate-glow">
          Выбери, из какой категории хочешь подобрать для себя продукт
        </h2>
        <div className="flex flex-col items-center space-y-4">
          <StyledButton onClick={() => setStep("faceMenu")}>Лицо</StyledButton>
          <StyledButton onClick={() => setStep("lipsMenu")}>Губы</StyledButton>
        </div>
      </div>
    );
  }

  // --- Мини-меню для "Лицо" ---
  if (step === "faceMenu") {
    return (
      <div className="flex flex-col items-center justify-center flex-1 bg-black text-white p-6">
        <h2 className="text-xl mb-8 text-center text-white animate-glow">
          Выбери продукт для лица
        </h2>
        <div className="flex flex-col items-center space-y-4">
          <StyledButton onClick={() => setStep("foundation")}>Тональный крем</StyledButton>
          <StyledButton onClick={() => setStep("contour")}>Стик для контуринга</StyledButton>
          <BackButton onClick={() => setStep("category")} />
        </div>
      </div>
    );
  }

  // --- Новое мини-меню для "Губы" ---
  if (step === "lipsMenu") {
    return (
      <div className="flex flex-col items-center justify-center flex-1 bg-black text-white p-6">
        <h2 className="text-xl mb-8 text-center text-white animate-glow">
          Выбери продукт для губ
        </h2>
        <div className="flex flex-col items-center space-y-4">
          <StyledButton onClick={() => setStep("lipPencilTone")}>Карандаш для губ</StyledButton>
          <StyledButton onClick={() => setStep("lipstick")}>Помада</StyledButton>
          <BackButton onClick={() => setStep("category")} />
        </div>
      </div>
    );
  }

  // --- Тональные средства ---
  if (step === "foundation") {
    return (
      <div className="flex flex-col items-center justify-center flex-1 bg-black text-white p-6 space-y-4">
        <h2 className="text-lg mb-4 text-center">Какая у тебя кожа?</h2>
        <StyledButton onClick={() => setStep("ff01")}>
          Светлая фарфорового оттенка, легко краснеет и едва загорает
        </StyledButton>
        <StyledButton onClick={() => setStep("ff02")}>
          Среднего тона с холодным или розовым оттенком с румянцем или веснушками
        </StyledButton>
        <StyledButton onClick={() => setStep("ff03")}>
          Кожа с теплым золотистым подтоном с легким загаром или натуральной смуглостью
        </StyledButton>
        <StyledButton onClick={() => setStep("ff04")}>Загорелая или смуглая кожа</StyledButton>
        <BackButton onClick={() => setStep("faceMenu")} />
      </div>
    );
  }

  if (step === "ff01")
    return renderProduct("FF01 Fair Nude", "Очень светлый нейтральный беж с мягким теплым подтоном.", FF01, "https://ozon.ru/product/2389897289", "foundation");
  if (step === "ff02")
    return renderProduct("FF02 Light Rose", "Светлый беж с нежным розовым подтоном.", FF02, "https://ozon.ru/product/2389897141", "foundation");
  if (step === "ff03")
    return renderProduct("FF03 Warm Beige", "Средний бежевый с теплым персиковым подтоном.", FF03, "https://ozon.ru/product/2389897767", "foundation");
  if (step === "ff04")
    return renderProduct("FF04 Tan Honey", "Средне-темный беж с насыщенным теплым подтоном.", FF04, "https://ozon.ru/product/2389897299", "foundation");

  // --- Контуринг ---
  if (step === "contour") {
    return (
      <div className="flex flex-col items-center justify-center flex-1 bg-black text-white p-6 space-y-4">
        <h2 className="text-lg mb-4 text-center">Какой у тебя цветотип внешности?</h2>
        <StyledButton onClick={() => setStep("j01")}>Теплый</StyledButton>
        <StyledButton onClick={() => setStep("j02")}>Холодный</StyledButton>
        <StyledButton onClick={() => setStep("j03")}>Загорелый</StyledButton>
        <BackButton onClick={() => setStep("faceMenu")} />
      </div>
    );
  }

  if (step === "j01")
    return renderProduct("J01 Soft Brown", "Светло-коричневый — для теплого цветотипа", J01, "https://ozon.ru/product/2389496078", "contour");
  if (step === "j02")
    return renderProduct("J02 Cool Brown", "Холодно-коричневый — для холодного цветотипа", J02, "https://ozon.ru/product/2389502155", "contour");
  if (step === "j03")
    return renderProduct("J03 Warm Brown", "Тепло-коричневый — для загорелой кожи", J03, "https://ozon.ru/product/2389497767", "contour");

  // --- Помады ---
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
          <BackButton onClick={() => setStep("lipsMenu")} />
        </div>
      </div>
    );
  }

  // Карточки помад
  if (step === "A427") return renderProduct("A427 Cotton Candy", "Нежный розово-сиреневый оттенок, создающий игривое настроение.", A427, "https://ozon.ru/product/2389643440", "lipstick");
  if (step === "A328") return renderProduct("A328 Burgundy", "Насыщенный винный цвет для смелого и яркого образа.", A328, "https://ozon.ru/product/2389643440", "lipstick");
  if (step === "A321") return renderProduct("A321 Natural Beige", "Нюдовый оттенок с лёгкой теплотой.", A321, "https://ozon.ru/product/2389643440", "lipstick");
  if (step === "A002") return renderProduct("A002 Cinnamon", "Теплый коричный оттенок для уюта.", A002, "https://ozon.ru/product/2389643440", "lipstick");
  if (step === "A005") return renderProduct("A005 Brick Red", "Кирпично-красный цвет, добавляющий выразительности.", A005, "https://ozon.ru/product/2389643440", "lipstick");
  if (step === "A317") return renderProduct("A317 Dark Natural", "Глубокий нюд с тёплым подтоном.", A317, "https://ozon.ru/product/2389643440", "lipstick");
  if (step === "A319") return renderProduct("A319 Beige", "Светло-бежевый оттенок с лёгкой ноткой персика.", A319, "https://ozon.ru/product/2389643440", "lipstick");
  if (step === "A320") return renderProduct("A320 Lilac", "Нежный лиловый для весеннего настроения.", A320, "https://ozon.ru/product/2389643440", "lipstick");

  // -------------------------------
  // КАРАНДАШ ДЛЯ ГУБ — ветка
  // -------------------------------

  // Выбор тона карандаша
  if (step === "lipPencilTone") {
    return (
      <div className="flex flex-col items-center justify-center flex-1 bg-black text-white p-6">
        <h2 className="text-xl mb-8 text-center text-white animate-glow">
          Какой оттенок карандаша тебя интересует?
        </h2>
        <div className="flex flex-col items-center space-y-4">
          <StyledButton onClick={() => setStep("lp_cool")}>Холодный</StyledButton>
          <StyledButton onClick={() => setStep("lp_warm")}>Тёплый</StyledButton>
          <StyledButton onClick={() => setStep("lp_bright")}>Яркий</StyledButton>
          <StyledButton onClick={() => setStep("lp_nude")}>Нюд</StyledButton>
          <BackButton onClick={() => setStep("lipsMenu")} />
        </div>
      </div>
    );
  }

  // --- ХОЛОДНЫЕ ---
  if (step === "lp_cool") {
    return (
      <div className="flex flex-col items-center justify-center flex-1 bg-black text-white p-6">
        <div className="flex flex-col items-center space-y-4">
          <StyledButton onClick={() => setStep("lp_317")}>пепельно-розовый</StyledButton>
          <StyledButton onClick={() => setStep("lp_318")}>светло-розовый</StyledButton>
          <StyledButton onClick={() => setStep("lp_319")}>бежевый</StyledButton>
          <StyledButton onClick={() => setStep("lp_320")}>лиловый</StyledButton>
          <BackButton onClick={() => setStep("lipPencilTone")} />
        </div>
      </div>
    );
  }
  if (step === "lp_317") return renderProduct("317 Dark Natural", "", P317, "https://ozon.ru/product/592242213", "lp_cool");
  if (step === "lp_318") return renderProduct("318 Soft Rose", "", P318, "https://ozon.ru/product/592242354", "lp_cool");
  if (step === "lp_319") return renderProduct("319 Beige", "", P319, "https://ozon.ru/product/156210637", "lp_cool");
  if (step === "lp_320") return renderProduct("320 Lilac", "", P320, "https://ozon.ru/product/156210751", "lp_cool");

  // --- ТЁПЛЫЕ ---
  if (step === "lp_warm") {
    return (
      <div className="flex flex-col items-center justify-center flex-1 bg-black text-white p-6">
        <div className="flex flex-col items-center space-y-4">
          <StyledButton onClick={() => setStep("lp_321")}>натуральный бежевый</StyledButton>
          <StyledButton onClick={() => setStep("lp_322")}>натуральный</StyledButton>
          <StyledButton onClick={() => setStep("lp_323")}>светлый бежевый</StyledButton>
          <StyledButton onClick={() => setStep("lp_324")}>кирпичный</StyledButton>
          <StyledButton onClick={() => setStep("lp_338")}>темно-коричневый</StyledButton>
          <BackButton onClick={() => setStep("lipPencilTone")} />
        </div>
      </div>
    );
  }
  if (step === "lp_321") return renderProduct("321 Natural Beige", "", P321, "https://ozon.ru/product/156210752", "lp_warm");
  if (step === "lp_322") return renderProduct("322 Natural", "", P322, "https://ozon.ru/product/156210753", "lp_warm");
  if (step === "lp_323") return renderProduct("323 Ultra Beige", "", P323, "https://ozon.ru/product/156324857", "lp_warm");
  if (step === "lp_324") return renderProduct("324 Spice", "", P324, "https://ozon.ru/product/156324860", "lp_warm");
  if (step === "lp_338") return renderProduct("338 Marsala", "", P338, "https://ozon.ru/product/160827216", "lp_warm");

  // --- ЯРКИЕ ---
  if (step === "lp_bright") {
    return (
      <div className="flex flex-col items-center justify-center flex-1 bg-black text-white p-6">
        <div className="flex flex-col items-center space-y-4">
          <StyledButton onClick={() => setStep("lp_327")}>темно-красный</StyledButton>
          <StyledButton onClick={() => setStep("lp_328")}>бургунди</StyledButton>
          <StyledButton onClick={() => setStep("lp_332")}>сливовый</StyledButton>
          <StyledButton onClick={() => setStep("lp_333")}>фуксия</StyledButton>
          <StyledButton onClick={() => setStep("lp_334")}>ярко-красный</StyledButton>
          <StyledButton onClick={() => setStep("lp_336")}>коралловый</StyledButton>
          <StyledButton onClick={() => setStep("lp_337")}>розовый кварц</StyledButton>
          <BackButton onClick={() => setStep("lipPencilTone")} />
        </div>
      </div>
    );
  }
  if (step === "lp_327") return renderProduct("327 Cabaret", "", P327, "https://ozon.ru/product/160826892", "lp_bright");
  if (step === "lp_328") return renderProduct("328 Burgundy", "", P328, "https://ozon.ru/product/160826412", "lp_bright");
  if (step === "lp_332") return renderProduct("332 Plum", "", P332, "https://ozon.ru/product/160826899", "lp_bright");
  if (step === "lp_333") return renderProduct("333 Fuchsia", "", P333, "https://ozon.ru/product/160827212", "lp_bright");
  if (step === "lp_334") return renderProduct("334 Hot Red", "", P334, "https://ozon.ru/product/160827213", "lp_bright");
  if (step === "lp_336") return renderProduct("336 Coral", "", P336, "https://ozon.ru/product/160826597", "lp_bright");
  if (step === "lp_337") return renderProduct("337 Rose Quartz", "", P337, "https://ozon.ru/product/160826598", "lp_bright");

  // --- НЮД ---
  if (step === "lp_nude") {
    return (
      <div className="flex flex-col items-center justify-center flex-1 bg-black text-white p-6">
        <div className="flex flex-col items-center space-y-4">
          <StyledButton onClick={() => setStep("lp_325")}>нейтральный бежевый</StyledButton>
          <StyledButton onClick={() => setStep("lp_326")}>нюдовый</StyledButton>
          <StyledButton onClick={() => setStep("lp_331")}>пыльная роза</StyledButton>
          <BackButton onClick={() => setStep("lipPencilTone")} />
        </div>
      </div>
    );
  }
  if (step === "lp_325") return renderProduct("325 Mauve", "", P325, "https://ozon.ru/product/160826407", "lp_nude");
  if (step === "lp_326") return renderProduct("326 Nude", "", P326, "https://ozon.ru/product/160826408", "lp_nude");
  if (step === "lp_331") return renderProduct("331 Dusty Rose", "", P331, "https://ozon.ru/product/160826408", "lp_nude");

  return null;
}

