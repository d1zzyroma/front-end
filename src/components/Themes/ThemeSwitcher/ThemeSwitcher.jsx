import { useEffect } from "react";
import s from "./ThemeSwither.module.css";

const ThemeSwitcher = ({ theme, setTheme, closeDropdown }) => {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleThemeSelection = (newTheme) => {
    setTheme(newTheme);
    closeDropdown(); // Закриваємо меню після вибору теми
  };

  return (
    <div>
      <button onClick={() => handleThemeSelection("light")}>Light</button>
      <button onClick={() => handleThemeSelection("dark")}>Dark</button>
      <button onClick={() => handleThemeSelection("violet")}>Violet</button>
    </div>
  );
};

export default ThemeSwitcher;
