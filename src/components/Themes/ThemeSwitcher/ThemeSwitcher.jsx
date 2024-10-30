import { useState, useEffect } from "react";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("light"); // Початкова тема

  // Застосовуємо зміну теми через атрибут data-theme в HTML
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Функція для перемикання тем
  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <div>
      <h2>Виберіть тему:</h2>
      <button onClick={() => handleThemeChange("light")}>Світла</button>
      <button onClick={() => handleThemeChange("dark")}>Темна</button>
      <button onClick={() => handleThemeChange("violet")}>Фіолетова</button>
    </div>
  );
};

export default ThemeSwitcher;
