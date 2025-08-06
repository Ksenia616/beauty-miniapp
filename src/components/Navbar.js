import React from "react";

function Navbar({ setPage, currentPage }) {
  const buttons = [
    { id: "assistant", label: "Ассистент" },
    { id: "shop", label: "Магазин" },
    { id: "test", label: "Тест" },
  ];

  return (
    <div className="flex justify-around bg-black py-3 border-t border-gray-700">
      {buttons.map((btn) => (
        <button
          key={btn.id}
          onClick={() => setPage(btn.id)}
          className={`px-4 py-2 ${
            currentPage === btn.id
              ? "text-gray-300 animate-pulse"
              : "text-white"
          }`}
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
}

export default Navbar;
