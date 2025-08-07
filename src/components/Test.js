import React, { useState } from "react";

export default function Test() {
  const [subscribed, setSubscribed] = useState(false);
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      question: "В каком году был основан бренд Marvel Cosmetics?",
      answers: ["2013", "2024", "2010", "2021"],
      correct: "2013",
    },
    {
      question: "Какой продукт бренда был выпущен первым?",
      answers: ["гель для бровей", "карандаш для губ", "помада", "тушь"],
      correct: "карандаш для губ",
    },
    {
      question: "Сколько оттенков у классической матовой помады Marvel Cosmetics?",
      answers: ["9", "5", "10", "8"],
      correct: "8",
    },
    {
      question: "Какой компонент в составе тонального крема бренда регулирует выработку себума и поддерживает чистоту пор?",
      answers: ["Ниацинамид", "Салициловая кислота", "Цинк", "Каолин"],
      correct: "Ниацинамид",
    },
    {
      question: "Как переводится название бренда с английского языка?",
      answers: ["Блестки", "Чудо", "Волшебство", "Великолепие"],
      correct: "Чудо",
    },
  ];

  const handleAnswer = (answer) => {
    if (answer === questions[step].correct) {
      setScore(score + 1);
    }
    setStep(step + 1);
  };

  if (!subscribed) {
    return (
      <div className="flex flex-col items-center justify-center flex-1 bg-black text-white px-4">
        <h1 className="text-xl mb-4 text-center">
          Пройди тест без ошибок и получи подарок от Marvel Cosmetics!❤️ <br />
          Чтобы пройти тест, подпишитесь на наш Telegram-канал.
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
      <div className="flex flex-col items-center justify-center flex-1 bg-black text-white px-4">
        <h2 className="text-lg mb-6 text-center">{questions[step].question}</h2>
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
    <div className="flex flex-col items-center justify-center flex-1 bg-black text-white px-4 text-center">
      {score === questions.length ? (
        <>
          <h2 className="text-green-400 text-xl mb-4">
            Поздравляем! Вы успешно прошли тест! 🎁
          </h2>
          <p className="text-white text-sm">
            Покажите это ассистенту на стойке нашего бренда на выставке InterCharm и получите подарок от бренда!
          </p>
        </>
      ) : (
        <h2 className="text-red-400 text-xl">К сожалению, вы прошли тест с ошибками 😔</h2>
      )}
    </div>
  );
}
