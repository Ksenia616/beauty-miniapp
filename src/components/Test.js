import React, { useState } from "react";

export default function Test() {
  const [subscribed, setSubscribed] = useState(false);
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    { question: "В каком году был основан бренд Marvel Cosmetics?", answers: ["2013", "2024", "2010", "2021"], correct: "2013" },
    { question: "Какой продукт бренда был выпущен первым?", answers: ["гель для бровей", "карандаш для губ", "помада", "тушь"], correct: "карандаш для губ" },
  ];

  const handleAnswer = (answer) => {
    if (answer === questions[step].correct) {
      setScore(score + 1);
    }
    setStep(step + 1);
  };

  if (!subscribed) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4">
        <h1 className="text-xl mb-4 text-center">
          Подпишитесь на наш официальный Telegram-канал, чтобы пройти тест ❤️
        </h1>
        <a
          href="https://t.me/marvelcosmetics_official"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-4 px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-300"
        >
          Перейти в канал
        </a>
        <button
          onClick={() => setSubscribed(true)}
          className="px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-300"
        >
          Проверить подписку
        </button>
      </div>
    );
  }

  if (step < questions.length) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4">
        <h2 className="text-lg mb-6">{questions[step].question}</h2>
        {questions[step].answers.map((a, i) => (
          <button
            key={i}
            onClick={() => handleAnswer(a)}
            className="w-64 py-3 mb-3 bg-white text-black rounded-lg hover:bg-gray-300"
          >
            {a}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4">
      {score === questions.length ? (
        <h2 className="text-green-400 text-xl">Поздравляем! 🎁</h2>
      ) : (
        <h2 className="text-red-400 text-xl">К сожалению, есть ошибки 😔</h2>
      )}
    </div>
  );
}
