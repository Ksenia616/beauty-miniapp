import React, { useState } from "react";

const BackButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="mt-6 px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-300 transition"
  >
    Назад
  </button>
);

export default function Shop() {
  const [category, setCategory] = useState(null);

  const renderCategory = (title, products) => (
    <div className="flex flex-col items-center text-center text-white bg-black min-h-screen p-6">
      <h2 className="text-xl mb-6">{title}</h2>
      {products.map((p, i) => (
        <a
          key={i}
          href={p.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-72 py-3 mb-3 bg-white text-black rounded-lg hover:bg-gray-300"
        >
          {p.name}
        </a>
      ))}
      <BackButton onClick={() => setCategory(null)} />
    </div>
  );

  if (!category) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
        <h2 className="text-xl mb-8">Выберите категорию 🛍️</h2>
        <button onClick={() => setCategory("lips")} className="w-64 py-3 mb-3 bg-white text-black rounded-lg hover:bg-gray-300">Губы</button>
        <button onClick={() => setCategory("brows")} className="w-64 py-3 mb-3 bg-white text-black rounded-lg hover:bg-gray-300">Брови</button>
        <button onClick={() => setCategory("face")} className="w-64 py-3 mb-3 bg-white text-black rounded-lg hover:bg-gray-300">Лицо</button>
        <button onClick={() => setCategory("eyes")} className="w-64 py-3 mb-3 bg-white text-black rounded-lg hover:bg-gray-300">Глаза</button>
        <button onClick={() => setCategory("accessories")} className="w-64 py-3 mb-3 bg-white text-black rounded-lg hover:bg-gray-300">Аксессуары</button>
        <button onClick={() => setCategory("sets")} className="w-64 py-3 mb-3 bg-white text-black rounded-lg hover:bg-gray-300">Подарочные наборы</button>
      </div>
    );
  }

  if (category === "lips")
    return renderCategory("Губы", [
      { name: "Классическая помада", link: "https://ozon.ru/product/2389643440" },
      { name: "Блеск для губ", link: "https://ozon.ru/product/1584205388" },
    ]);

  if (category === "brows")
    return renderCategory("Брови", [
      { name: "Гель для бровей", link: "https://ozon.ru/product/2389930324" },
      { name: "Механический карандаш для бровей", link: "https://ozon.ru/product/1966935888" },
    ]);

  if (category === "face")
    return renderCategory("Лицо", [
      { name: "Тональный крем", link: "https://ozon.ru/product/2389897289" },
      { name: "Стик для контуринга", link: "https://ozon.ru/product/2389496078" },
    ]);

  if (category === "eyes")
    return renderCategory("Глаза", [
      { name: "Палетка теней", link: "https://ozon.ru/product/1256463743" },
      { name: "Тушь", link: "https://ozon.ru/product/576410466" },
    ]);

  if (category === "accessories")
    return renderCategory("Аксессуары", [
      { name: "Спонж Black", link: "https://ozon.ru/product/1398413692" },
      { name: "Точилка", link: "https://ozon.ru/product/468442065" },
    ]);

  if (category === "sets")
    return renderCategory("Подарочные наборы", [
      { name: "You're Beautiful!", link: "https://ozon.ru/product/1991194990" },
      { name: "Набор №1", link: "https://ozon.ru/product/1778295505" },
    ]);

  return null;
}
