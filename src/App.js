import { useState } from "react";

function App() {
  const [screen, setScreen] = useState("start");

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-center">
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

      {screen === "welcome" && (
        <div className="text-white space-y-6">
          <h2 className="text-3xl font-bold text-pink-400">
            Добро пожаловать в Marvel Cosmetics 💄
          </h2>
          <p className="text-lg text-gray-300 max-w-md mx-auto">
            Я помогу тебе подобрать идеальный образ ✨
          </p>
          <button
            onClick={() => alert("Тут скоро будет первый вопрос!")}
            className="px-8 py-4 bg-pink-600 text-white text-lg font-semibold rounded-2xl shadow-lg hover:bg-pink-500 hover:scale-105 transition-transform"
          >
            Начать тест
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
