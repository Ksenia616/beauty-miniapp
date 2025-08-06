// src/components/Test.js
import React, { useState } from "react";

function Test({ goBack }) {
  const [step, setStep] = useState("subscription"); // шаги: subscription → thankyou → quiz → result
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const questions = [
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
      question: "Какой компонент в составе тонального крема регулирует себум?",
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
    if (answer === questions[currentQuestion].correct) {
      setCorrectAnswers(correctAnswers + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setStep("result");
    }
  };

  // 🔹 Страница подписки
  if (step === "subscription") {
    return (
      <div className="p-6 text-center text-white">
        <h2 className="text-xl mb-4">
          Пройди тест без ошибок и получи подарок от Marvel Cosmetics! ❤️
          <br />
          Чтобы пройти тест необходимо подписаться на официальный Telegram-канал бренда.
        </h2>
        <a
          href="https://t.me/marvelcosmetics_official"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-blue-400 underline mb-4"
        >
          Перейти в канал
        </a>
        <button
          onClick={() => setStep("thankyou")}
          className="bg-white text-black px-6 py-2 rounded-lg"
        >
          Проверить подписку
        </button>
      </div>
    );
  }

  // 🔹 Новая страница «Спасибо за подписку»
  if (step === "thankyou") {
    return (
      <div className="p-6 text-center text-white">
        <h2 className="text-xl mb-6">
          Благодарим за подписку на канал! 🌸 <br />
          Здесь ты найдешь самые свежие новости бренда и полезные бьюти-советы.
        </h2>
        <button
          onClick={() => setStep("quiz")}
          className="px-6 py-2 rounded-lg bg-white text-black animate-pulse"
        >
          Начать тест
        </button>
      </div>
    );
  }

  // 🔹 Страницы вопросов
  if (step === "quiz") {
    const q = questions[currentQuestion];
    return (
      <div className="p-6 text-center text-white">
        <h2 className="text-lg mb-6">{q.question}</h2>
        <div className="flex flex-col items-center space-y-4">
          {q.answers.map((ans, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(ans)}
              className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-300"
            >
              {ans}
            </button>
          ))}
        </div>
      </div>
    );
  }

  // 🔹 Финальная страница
  if (step === "result") {
    const isWinner = correctAnswers === questions.length;
    return (
      <div className="p-6 text-center">
        {isWinner ? (
          <>
            <h2 className="text-green-400 text-2xl mb-4">
              Поздравляем! Вы успешно прошли тест! 🎉
            </h2>
            <p className="text-white">
              Покажите это ассистенту на стойке нашего бренда на выставке InterCharm и получите подарок 🎁
            </p>
          </>
        ) : (
          <>
            <h2 className="text-red-500 text-2xl mb-4">
              К сожалению, вы прошли тест с ошибками 😔
            </h2>
            <p className="text-white">Попробуйте снова, чтобы выиграть подарок!</p>
          </>
        )}
      </div>
    );
  }

  return null;
}

export default Test;
