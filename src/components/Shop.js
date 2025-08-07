// src/components/Shop.js
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
    <div className="flex flex-col items-center text-center text-white bg-black flex-1 p-6">
      <h2 className="text-xl mb-6">{title}</h2>
      {products.map((p, i) => (
        <a
          key={i}
          href={p.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-72 py-3 mb-3 bg-white text-black rounded-lg hover:bg-gray-300 transition"
        >
          {p.name}
        </a>
      ))}
      <BackButton onClick={() => setCategory(null)} />
    </div>
  );

  if (!category) {
    return (
      <div className="flex flex-col items-center justify-center flex-1 bg-black text-white p-6">
        <h2 className="text-xl mb-8">Выберите категорию 🛍️</h2>
        <div className="flex flex-col space-y-4">
          <button onClick={() => setCategory("lips")} className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-300">Губы</button>
          <button onClick={() => setCategory("brows")} className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-300">Брови</button>
          <button onClick={() => setCategory("face")} className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-300">Лицо</button>
          <button onClick={() => setCategory("eyes")} className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-300">Глаза</button>
          <button onClick={() => setCategory("accessories")} className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-300">Аксессуары</button>
          <button onClick={() => setCategory("sets")} className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-300">Подарочные наборы</button>
        </div>
      </div>
    );
  }

  if (category === "lips")
    return renderCategory("Губы", [
      { name: "Классическая помада", link: "https://ozon.ru/product/2389643440" },
      { name: "Блеск для губ", link: "https://ozon.ru/product/1584205388" },
      { name: "Карандаш для губ Classic", link: "https://ozon.ru/product/592242354" },
      { name: "Карандаш для губ Ultra Long", link: "https://ozon.ru/product/1748902349" },
      { name: "Механический карандаш для губ", link: "https://ozon.ru/product/1702999354" },
    ]);

  if (category === "brows")
    return renderCategory("Брови", [
      { name: "Гель для бровей", link: "https://ozon.ru/product/2389930324" },
      { name: "Механический карандаш для бровей", link: "https://ozon.ru/product/1966935888" },
      { name: "Тату маркер для бровей", link: "https://ozon.ru/product/1642025832" },
      { name: "Карандаш для бровей с щеточкой", link: "https://ozon.ru/product/156210680" },
    ]);

  if (category === "face")
    return renderCategory("Лицо", [
      { name: "Тональный крем", link: "https://ozon.ru/product/2389897289" },
      { name: "Стик для контуринга", link: "https://ozon.ru/product/2389496078" },
      { name: "Консилер", link: "https://ozon.ru/product/1858292831" },
      { name: "Пудра", link: "https://ozon.ru/product/1256472893" },
      { name: "Хайлайтер", link: "https://ozon.ru/product/1256513327" },
    ]);

  if (category === "eyes")
    return renderCategory("Глаза", [
      { name: "Палетка теней", link: "https://ozon.ru/product/1256463743" },
      { name: "Карандаш для глаз Classic", link: "https://ozon.ru/product/160827250" },
      { name: "Карандаш для глаз Ultra long", link: "https://ozon.ru/product/160826605" },
      { name: "Водостойкая подводка для глаз", link: "https://ozon.ru/product/1642028475" },
      { name: "Подводка для глаз", link: "https://ozon.ru/product/160908093" },
      { name: "Механический кайал", link: "https://ozon.ru/product/684949867" },
      { name: "Водостойкий карандаш для глаз", link: "https://ozon.ru/product/239966806" },
      { name: "Тушь", link: "https://ozon.ru/product/576410466" },
    ]);

  if (category === "accessories")
    return renderCategory("Аксессуары", [
      { name: "Косметичка Black", link: "https://ozon.ru/product/1398490770" },
      { name: "Косметичка Leopard", link: "https://ozon.ru/product/1755338232" },
      { name: "Косметичка Holographic", link: "https://ozon.ru/product/1718221409" },
      { name: "Спонж Black", link: "https://ozon.ru/product/1398413692" },
      { name: "Спонж Coffee", link: "https://ozon.ru/product/1398357739" },
      { name: "Спонж Beige", link: "https://ozon.ru/product/1398357482" },
      { name: "Точилка", link: "https://ozon.ru/product/468442065" },
    ]);

  if (category === "sets")
    return renderCategory("Подарочные наборы", [
      { name: "You're Beautiful!", link: "https://ozon.ru/product/1991194990" },
      { name: "№1", link: "https://ozon.ru/product/1778295505" },
      { name: "№2", link: "https://ozon.ru/product/1778303896" },
      { name: "№3", link: "https://ozon.ru/product/1778304322" },
      { name: "№4", link: "https://ozon.ru/product/1778304506" },
    ]);

  return null;
}
