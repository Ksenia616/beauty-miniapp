import React, { useState } from "react";

// Обновлённая универсальная кнопка "Назад"
const BackButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="w-[280px] h-14 mt-6 bg-white text-black px-6 py-2 rounded-lg border border-black hover:bg-gray-200 transition"
  >
    Назад
  </button>
);

export default function Shop() {
  const [category, setCategory] = useState(null);

  const StyledLink = ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-[280px] h-14 bg-white text-black px-6 py-2 rounded-lg border border-black hover:bg-gray-200 flex items-center justify-center transition"
    >
      {children}
    </a>
  );

  const StyledButton = ({ onClick, children }) => (
    <button
      onClick={onClick}
      className="w-[280px] h-14 bg-white text-black px-6 py-2 rounded-lg border border-black hover:bg-gray-200 transition"
    >
      {children}
    </button>
  );

  const renderCategory = (title, products) => (
    <div className="flex flex-col items-center justify-center text-center text-white bg-black flex-1 p-6 overflow-hidden">
      <h2 className="text-xl mb-6">{title}</h2>
      <div className="flex flex-col items-center space-y-3">
        {products.map((p, i) => (
          <StyledLink key={i} href={p.link}>{p.name}</StyledLink>
        ))}
        <BackButton onClick={() => setCategory(null)} />
      </div>
    </div>
  );

  if (!category) {
    return (
      <div className="flex flex-col items-center justify-center flex-1 bg-black text-white p-6 overflow-hidden">
        <h2 className="text-xl mb-8 text-center text-white animate-glow">
          Ассортимент продукции
        </h2>
        <div className="flex flex-col items-center space-y-4">
          <StyledButton onClick={() => setCategory("lips")}>Губы</StyledButton>
          <StyledButton onClick={() => setCategory("brows")}>Брови</StyledButton>
          <StyledButton onClick={() => setCategory("face")}>Лицо</StyledButton>
          <StyledButton onClick={() => setCategory("eyes")}>Глаза</StyledButton>
          <StyledButton onClick={() => setCategory("accessories")}>Аксессуары</StyledButton>
          <StyledButton onClick={() => setCategory("sets")}>Подарочные наборы</StyledButton>
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
