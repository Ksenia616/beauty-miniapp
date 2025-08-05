import { useState } from "react";

function App() {
  const [screen, setScreen] = useState("start");
  const [result, setResult] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-center px-4">
      {/* --- Экран 1 --- */}
      {screen === "start" && (
        <>
          <h1 className="text-4xl font-extrabold text-pink-400 mb-8">
            Привет! Я твой бьюти‑ассистент{" "}
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-600 text-transparent bg-clip-text">
              Marvel Cosmetics
            </span>
          </h1>
          <button
            onClick={() => setScreen("welcome")}
            className="px-8 py-4 bg-pink-600 text-white text-lg font-semibold rounded-2xl shadow-lg hover:bg-pink-500 hover:scale-105 transition-transform"
          >
            Запустить
          </button>
        </>
      )}

      {/* --- Экран 2 --- */}
      {screen === "welcome" && (
        <div className="text-white space-y-6">
          <h2 className="text-3xl font-bold text-pink-400">
            Добро пожаловать в Marvel Cosmetics 💄
          </h2>
          <p className="text-lg text-gray-300 max-w-md mx-auto">
            Я помогу тебе подобрать идеальный образ ✨
          </p>
          <button
            onClick={() => setScreen("menu")}
            className="px-8 py-4 bg-pink-600 text-white text-lg font-semibold rounded-2xl shadow-lg hover:bg-pink-500 hover:scale-105 transition-transform"
          >
            Начать
          </button>
        </div>
      )}

      {/* --- Экран 3 (меню) --- */}
      {screen === "menu" && (
        <div className="text-white space-y-8">
          <p className="text-xl text-gray-300 font-normal">
            На связи ассистент Marvel Cosmetics!<br />
            Выбери, что хочешь подобрать для себя сегодня?
          </p>
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => { setResult(null); setScreen("lipstick"); }}
              className="px-8 py-4 bg-pink-600 text-white text-lg font-semibold rounded-2xl shadow-lg hover:bg-pink-500 hover:scale-105 transition-transform"
            >
              Классическая помада
            </button>
            <button
              onClick={() => { setResult(null); setScreen("foundation"); }}
              className="px-8 py-4 bg-pink-600 text-white text-lg font-semibold rounded-2xl shadow-lg hover:bg-pink-500 hover:scale-105 transition-transform"
            >
              Тональный крем
            </button>
            <button
              onClick={() => { setResult(null); setScreen("contour"); }}
              className="px-8 py-4 bg-pink-600 text-white text-lg font-semibold rounded-2xl shadow-lg hover:bg-pink-500 hover:scale-105 transition-transform"
            >
              Стик для контуринга
            </button>
          </div>
        </div>
      )}

      {/* --- Результат --- */}
      {result && (
        <div className="text-white space-y-6 max-w-md">
          <h2 className="text-2xl font-bold text-pink-400">{result.title}</h2>
          <p className="text-lg text-gray-300">{result.description}</p>
          {result.link && (
            <a
              href={result.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-pink-600 text-white rounded-xl shadow-lg hover:bg-pink-500 hover:scale-105 transition-transform"
            >
              Купить на Ozon
            </a>
          )}
          <button
            onClick={() => { setResult(null); setScreen("menu"); }}
            className="mt-6 px-6 py-3 bg-gray-700 text-white rounded-xl shadow hover:bg-gray-600"
          >
            🔙 Вернуться в меню
          </button>
        </div>
      )}

      {/* --- Помада --- */}
      {screen === "lipstick" && !result && (
        <div className="text-white space-y-6 max-w-md">
          <h2 className="text-2xl font-bold text-pink-400">💄 Классическая помада</h2>
          <p className="text-gray-300">Выбери настроение сегодня:</p>
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => setResult({
                title: "Cinnamon A002",
                description: "Тёплый коричный оттенок. Подчеркнёт естественный макияж.",
                link: "https://www.ozon.ru/product/pomada-dlya-gub-matovaya-2389639924/"
              })}
              className="px-6 py-3 bg-pink-600 text-white rounded-xl shadow-lg"
            >
              🎀 Натуральный
            </button>
            <button
              onClick={() => setResult({
                title: "Brick Red A005",
                description: "Яркий кирпично‑красный оттенок для дерзкого образа.",
                link: "https://www.ozon.ru/product/pomada-dlya-gub-matovaya-2389638203/"
              })}
              className="px-6 py-3 bg-pink-600 text-white rounded-xl shadow-lg"
            >
              🔥 Яркий
            </button>
            <button
              onClick={() => setResult({
                title: "Dark Natural A317",
                description: "Пепельно‑розовый для делового стиля.",
                link: "https://www.ozon.ru/product/pomada-dlya-gub-matovaya-2389639388/"
              })}
              className="px-6 py-3 bg-pink-600 text-white rounded-xl shadow-lg"
            >
              💼 Деловой
            </button>
          </div>
          <button onClick={() => setScreen("menu")} className="mt-4 px-6 py-3 bg-gray-700 text-white rounded-xl">
            🔙 Назад
          </button>
        </div>
      )}

      {/* --- Тональный крем --- */}
      {screen === "foundation" && !result && (
        <div className="text-white space-y-6 max-w-md">
          <h2 className="text-2xl font-bold text-pink-400">🧴 Тональный крем</h2>
          <p className="text-gray-300">Выбери свой тон кожи:</p>
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => setResult({
                title: "FAIR NUDE FF01",
                description: "Очень светлый нейтральный беж с мягким тёплым подтоном. Идеален для фарфоровой кожи.",
                link: "https://www.ozon.ru/product/tonalnyy-krem-dlya-litsa-2389897289/?from_sku=2389897141&oos_search=false"
              })}
              className="px-6 py-3 bg-pink-600 text-white rounded-xl"
            >
              🤍 Очень светлая
            </button>
            <button
              onClick={() => setResult({
                title: "LIGHT ROSE FF02",
                description: "Светлый беж с нежным розовым подтоном. Подходит для кожи со склонностью к румянцу.",
                link: "https://www.ozon.ru/product/tonalnyy-krem-dlya-litsa-2389897141/?from_sku=2389897141&oos_search=false"
              })}
              className="px-6 py-3 bg-pink-600 text-white rounded-xl"
            >
              🌸 Светлая
            </button>
            <button
              onClick={() => setResult({
                title: "WARM BEIGE FF03",
                description: "Средний беж с тёплым персиковым подтоном. Универсален для загорелой кожи.",
                link: "https://www.ozon.ru/product/tonalnyy-krem-dlya-litsa-2389897767/?from_sku=2389897141&oos_search=false"
              })}
              className="px-6 py-3 bg-pink-600 text-white rounded-xl"
            >
              ☀️ Средняя
            </button>
            <button
              onClick={() => setResult({
                title: "TAN HONEY FF04",
                description: "Средне‑тёмный беж с насыщенным тёплым подтоном. Идеален после отпуска.",
                link: "https://www.ozon.ru/product/tonalnyy-krem-dlya-litsa-2389897299/?from_sku=2389897141&oos_search=false"
              })}
              className="px-6 py-3 bg-pink-600 text-white rounded-xl"
            >
              🍯 Загорелая
            </button>
          </div>
          <button onClick={() => setScreen("menu")} className="mt-4 px-6 py-3 bg-gray-700 text-white rounded-xl">
            🔙 Назад
          </button>
        </div>
      )}

      {/* --- Контуринг --- */}
      {screen === "contour" && !result && (
        <div className="text-white space-y-6 max-w-md">
          <h2 className="text-2xl font-bold text-pink-400">✨ Стик для контуринга</h2>
          <p className="text-gray-300">Выбери эффект макияжа:</p>
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => setResult({
                title: "SOFT BROWN J01",
                description: "Лёгкий и деликатный контур. Подходит для естественного макияжа.",
                link: "https://www.ozon.ru/product/stik-dlya-konturinga-s-gubkoy-2389496078/"
              })}
              className="px-6 py-3 bg-pink-600 text-white rounded-xl"
            >
              🌿 Естественный
            </button>
            <button
              onClick={() => setResult({
                title: "COOL BROWN J02",
                description: "Холодный коричневый оттенок для чёткой коррекции лица.",
                link: "https://www.ozon.ru/product/stik-dlya-konturinga-s-gubkoy-2389502155/"
              })}
              className="px-6 py-3 bg-pink-600 text-white rounded-xl"
            >
              ❄️ Холодный
            </button>
            <button
              onClick={() => setResult({
                title: "WARM BROWN J03",
                description: "Тёплый коричневый оттенок для яркого вечернего макияжа.",
                link: "https://www.ozon.ru/product/stik-dlya-konturinga-s-gubkoy-2389497767/"
              })}
              className="px-6 py-3 bg-pink-600 text-white rounded-xl"
            >
              🔥 Яркий
            </button>
          </div>
          <button onClick={() => setScreen("menu")} className="mt-4 px-6 py-3 bg-gray-700 text-white rounded-xl">
            🔙 Назад
          </button>
        </div>
      )}
    </div>
  );
}

export default App;