import React, { useState } from "react";
import logo from "./logo.png";

function App() {
  const [page, setPage] = useState("home");
  const [subPage, setSubPage] = useState(null);
  const [quizStep, setQuizStep] = useState(0);
  const [quizScore, setQuizScore] = useState(0);

  const quizQuestions = [
    {
      question: "В каком году был основан бренд Marvel Cosmetics?",
      answers: ["2013", "2024", "2010", "2021"],
      correct: "2013",
    },
    {
      question: "Какой продукт бренда был выпущен первым?",
      answers: ["гель для бровей", "карандаш для губ", "помада", "Тушь для ресниц"],
      correct: "карандаш для губ",
    },
    {
      question: "Сколько оттенков у классической матовой помады Marvel Cosmetics?",
      answers: ["9", "5", "10", "8"],
      correct: "8",
    },
    {
      question:
        "Какой компонент в составе тонального крема бренда регулирует выработку себума?",
      answers: ["Ниацинамид", "Салициловая кислота", "Цинк", "Каолин"],
      correct: "Ниацинамид",
    },
    {
      question: "Как переводится название бренда с английского языка?",
      answers: ["Блестки", "Чудо", "Волшебство", "Великолепие"],
      correct: "Чудо",
    },
  ];

  const buttonStyle =
    "px-6 py-3 bg-white text-black rounded-lg shadow-md transition hover:bg-gray-300 my-2 w-full";

  if (page === "home") {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-black text-white text-center">
        <h1 className="text-2xl mb-4">
          Привет! Я твой бьюти‑ассистент Marvel Cosmetics
        </h1>
        <img
          src={logo}
          alt="Marvel Cosmetics"
          className="w-64 mb-6 animate-pulse"
        />
        <button
          className="px-6 py-3 bg-white text-black rounded-lg shadow-md transition hover:bg-gray-300"
          onClick={() => setPage("assistant")}
        >
          Запустить
        </button>
      </div>
    );
  }

  if (page === "assistant") {
    if (subPage === "pomada") {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white text-center p-4">
          <h2 className="text-lg mb-4">Выбери настроение на сегодня 💄</h2>
          {[
            ["Сладкая Вата🫧", "A427 Cotton Candy", "https://ozon.ru/product/2389639521"],
            ["Бургунди🍇", "A328 Burgundy", "https://ozon.ru/product/2389639937"],
            ["Натуральность🌿", "A321 Beige", "https://ozon.ru/product/2389638492"],
            ["Корица☕️", "A002 Cinnamon", "https://ozon.ru/product/2389639924"],
            ["Яркость👠", "A005 Brick Red", "https://ozon.ru/product/2389638203"],
            ["Тихая Роскошь👜", "A317 Dark Natural", "https://ozon.ru/product/2389639388"],
            ["Свежесть🦋", "A319 Beige", "https://ozon.ru/product/2389643440"],
            ["Сирень🪻", "A320 Lilac", "https://ozon.ru/product/2389643032"],
          ].map(([label, name, link]) => (
            <button
              key={name}
              className={buttonStyle}
              onClick={() =>
                setSubPage({ product: name, link })
              }
            >
              {label}
            </button>
          ))}
          <button className={buttonStyle} onClick={() => setSubPage(null)}>
            Назад
          </button>
        </div>
      );
    }

    if (subPage && subPage.product) {
      return (
        <div className="flex flex-col items-center justify-center h-screen bg-black text-white text-center">
          <h2 className="text-xl mb-4">{subPage.product}</h2>
          <a href={subPage.link} target="_blank" rel="noopener noreferrer">
            <button className={buttonStyle}>Открыть!</button>
          </a>
          <button className={buttonStyle} onClick={() => setSubPage("pomada")}>
            Назад
          </button>
        </div>
      );
    }

    return (
      <div className="flex flex-col items-center justify-center h-screen bg-black text-white text-center p-4">
        <h2 className="text-lg mb-6">
          Выбери, какой продукт ты хочешь подобрать для себя сегодня?✨
        </h2>
        <button className={buttonStyle} onClick={() => setSubPage("pomada")}>
          Помада
        </button>
        <button className={buttonStyle}>Тональный крем</button>
        <button className={buttonStyle}>Стик для контуринга</button>
        <NavBar setPage={setPage} />
      </div>
    );
  }

  if (page === "shop") {
    const categories = {
      "Губы": [
        ["Классическая помада", "https://ozon.ru/product/2389643440"],
        ["Блеск для губ", "https://ozon.ru/product/1584205388"],
        ["Карандаш для губ Classic", "https://ozon.ru/product/592242354"],
        ["Карандаш для губ Ultra Long", "https://ozon.ru/product/1748902349"],
        ["Механический карандаш для губ", "https://ozon.ru/product/1702999354"],
      ],
      "Брови": [
        ["Гель для бровей", "https://ozon.ru/product/2389930324"],
        ["Механический карандаш для бровей", "https://ozon.ru/product/1966935888"],
        ["Тату маркер для бровей", "https://ozon.ru/product/1642025832"],
        ["Карандаш для бровей с щеточкой", "https://ozon.ru/product/156210680"],
      ],
      "Лицо": [
        ["Тональный крем", "https://ozon.ru/product/2389897289"],
        ["Стик для контуринга", "https://ozon.ru/product/2389496078"],
        ["Консилер", "https://ozon.ru/product/1858292831"],
        ["Пудра", "https://ozon.ru/product/1256472893"],
        ["Хайлайтер", "https://ozon.ru/product/1256513327"],
      ],
      "Глаза": [
        ["Палетка теней", "https://ozon.ru/product/1256463743"],
        ["Карандаш для глаз Classic", "https://ozon.ru/product/160827250"],
        ["Карандаш для глаз Ultra long", "https://ozon.ru/product/160826605"],
        ["Водостойкая подводка для глаз", "https://ozon.ru/product/1642028475"],
        ["Подводка для глаз", "https://ozon.ru/product/160908093"],
        ["Механический кайал", "https://ozon.ru/product/684949867"],
        ["Водостойкий карандаш для глаз", "https://ozon.ru/product/239966806"],
        ["Тушь", "https://ozon.ru/product/576410466"],
      ],
      "Аксессуары": [
        ["Косметичка Black", "https://ozon.ru/product/1398490770"],
        ["Косметичка Leopard", "https://ozon.ru/product/1755338232"],
        ["Косметичка Holographic", "https://ozon.ru/product/1718221409"],
        ["Спонж Black", "https://ozon.ru/product/1398413692"],
        ["Спонж Coffee", "https://ozon.ru/product/1398357739"],
        ["Спонж Beige", "https://ozon.ru/product/1398357482"],
        ["Точилка", "https://ozon.ru/product/468442065"],
      ],
      "Подарочные наборы": [
        ["You're Beautiful!", "https://ozon.ru/product/1991194990"],
        ["Набор №1", "https://ozon.ru/product/1778295505"],
        ["Набор №2", "https://ozon.ru/product/1778303896"],
        ["Набор №3", "https://ozon.ru/product/1778304322"],
        ["Набор №4", "https://ozon.ru/product/1778304506"],
      ],
    };

    return (
      <div className="flex flex-col items-center min-h-screen bg-black text-white text-center p-4">
        <h2 className="text-lg mb-4">Категории</h2>
        {Object.keys(categories).map((cat) => (
          <div key={cat} className="mb-6">
            <h3 className="text-md mb-2">{cat}</h3>
            {categories[cat].map(([name, link]) => (
              <a href={link} key={name} target="_blank" rel="noopener noreferrer">
                <button className={buttonStyle}>{name}</button>
              </a>
            ))}
          </div>
        ))}
        <NavBar setPage={setPage} />
      </div>
    );
  }

  if (page === "quiz") {
    if (quizStep === 0) {
      return (
        <div className="flex flex-col items-center justify-center h-screen bg-black text-white text-center p-4">
          <h2 className="mb-4">
            Подпишитесь на наш официальный Telegram‑канал и ответьте на все
            вопросы, чтобы получить подарок от Marvel Cosmetics! 🌸
          </h2>
          <button className={buttonStyle} onClick={() => setQuizStep(1)}>
            Начать тест!
          </button>
          <NavBar setPage={setPage} />
        </div>
      );
    }

    if (quizStep <= quizQuestions.length) {
      const q = quizQuestions[quizStep - 1];
      return (
        <div className="flex flex-col items-center justify-center h-screen bg-black text-white text-center p-4">
          <h2 className="text-lg mb-6">{q.question}</h2>
          {q.answers.map((ans) => (
            <button
              key={ans}
              className={buttonStyle}
              onClick={() => {
                if (ans === q.correct) setQuizScore(quizScore + 1);
                setQuizStep(quizStep + 1);
              }}
            >
              {ans}
            </button>
          ))}
        </div>
      );
    }

    return (
      <div className="flex flex-col items-center justify-center h-screen bg-black text-center p-4">
        {quizScore === quizQuestions.length ? (
          <>
            <h2 className="text-green-400 mb-4">
              Поздравляем! Вы успешно прошли тест!
            </h2>
            <p className="text-white">
              Покажите это ассистенту на стойке Marvel Cosmetics на выставке
              InterCharm и получите подарок 🎁
            </p>
          </>
        ) : (
          <>
            <h2 className="text-red-500 mb-4">
              К сожалению, вы прошли тест с ошибками 😔
            </h2>
          </>
        )}
        <NavBar setPage={setPage} />
      </div>
    );
  }

  return null;
}

function NavBar({ setPage }) {
  const navStyle = "flex-1 text-center py-2 cursor-pointer hover:bg-gray-800";
  return (
    <div className="fixed bottom-0 left-0 w-full bg-black text-white flex border-t border-gray-700">
      <div className={navStyle} onClick={() => setPage("assistant")}>
        Ассистент
      </div>
      <div className={navStyle} onClick={() => setPage("shop")}>
        Магазин
      </div>
      <div className={navStyle} onClick={() => setPage("quiz")}>
        Тест
      </div>
    </div>
  );
}

export default App;
