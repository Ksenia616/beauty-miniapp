// src/components/Shop.js
import React, { useState } from "react";

function Shop() {
  const [category, setCategory] = useState(null);

  const categories = {
    "Губы": [
      { name: "Классическая помада", link: "https://ozon.ru/product/2389643440" },
      { name: "Блеск для губ", link: "https://ozon.ru/product/1584205388" },
      { name: "Карандаш для губ Classic", link: "https://ozon.ru/product/592242354" },
      { name: "Карандаш для губ Ultra Long", link: "https://ozon.ru/product/1748902349" },
      { name: "Механический карандаш для губ", link: "https://ozon.ru/product/1702999354" },
    ],
    "Брови": [
      { name: "Гель для бровей", link: "https://ozon.ru/product/2389930324" },
      { name: "Механический карандаш для бровей", link: "https://ozon.ru/product/1966935888" },
      { name: "Тату маркер для бровей", link: "https://ozon.ru/product/1642025832" },
      { name: "Карандаш для бровей с щеточкой", link: "https://ozon.ru/product/156210680" },
    ],
    "Лицо": [
      { name: "Тональный крем", link: "https://ozon.ru/product/2389897289" },
      { name: "Стик для контуринга", link: "https://ozon.ru/product/2389496078" },
      { name: "Консилер", link: "https://ozon.ru/product/1858292831" },
      { name: "Пудра", link: "https://ozon.ru/product/1256472893" },
      { name: "Хайлайтер", link: "https://ozon.ru/product/1256513327" },
    ],
    "Глаза": [
      { name: "Палетка теней", link: "https://ozon.ru/product/1256463743" },
      { name: "Карандаш для глаз Classic", link: "https://ozon.ru/product/160827250" },
      { name: "Карандаш для глаз Ultra long", link: "https://ozon.ru/product/160826605" },
      { name: "Водостойкая подводка для глаз", link: "https://ozon.ru/product/1642028475" },
      { name: "Подводка для глаз", link: "https://ozon.ru/product/160908093" },
      { name: "Механический кайал", link: "https://ozon.ru/product/684949867" },
      { name: "Водостойкий карандаш для глаз", link: "https://ozon.ru/product/239966806" },
      { name: "Тушь", link: "https://ozon.ru/product/576410466" },
    ],
    "Аксессуары": [
      { name: "Косметичка Black", link: "https://ozon.ru/product/1398490770" },
      { name: "Косметичка Leopard", link: "https://ozon.ru/product/1755338232" },
      { name: "Косметичка Holographic", link: "https://ozon.ru/product/1718221409" },
      { name: "Спонж Black", link: "https://ozon.ru/product/1398413692" },
      { name: "Спонж Coffee", link: "https://ozon.ru/product/1398357739" },
      { name: "Спонж Beige", link: "https://ozon.ru/product/1398357482" },
      { name: "Точилка", link: "https://ozon.ru/product/468442065" },
    ],
    "Подарочные наборы": [
      { name: "You're Beautiful!", link: "https://ozon.ru/product/1991194990" },
      { name: "Набор №1", link: "https://ozon.ru/product/1778295505" },
      { name: "Набор №2", link: "https://ozon.ru/product/1778303896" },
      { name: "Набор №3", link: "https://ozon.ru/product/1778304322" },
      { name: "Набор №4", link: "https://ozon.ru/product/1778304506" },
    ],
  };

  if (!category) {
    return (
      <div className="p-6 text-center text-white">
        <h2 className="text-lg mb-6">Выберите категорию:</h2>
        <div className="flex flex-col space-y-4">
          {Object.keys(categories).map((cat, i) => (
            <button
              key={i}
              onClick={() => setCategory(cat)}
              className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-300"
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 text-center text-white">
      <h2 className="text-lg mb-6">{category}</h2>
      <div className="flex flex-col space-y-4">
        {categories[category].map((item, i) => (
          <a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-300"
          >
            {item.name}
          </a>
        ))}
      </div>
      <div className="mt-6">
        <button
          onClick={() => setCategory(null)}
          className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-300"
        >
          Назад
        </button>
      </div>
    </div>
  );
}

export default Shop;
