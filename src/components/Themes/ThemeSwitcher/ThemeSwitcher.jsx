import { useEffect } from "react";
import s from "./ThemeSwitсher.module.css";
import { useDispatch, useSelector } from "react-redux";
import { updateUserTheme } from "../../../redux/auth/operations.js";
import { selectUserTheme } from "../../../redux/auth/selectors.js";

const ThemeSwitcher = ({ closeDropdown }) => {
  const theme = useSelector(selectUserTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, []);
  const dispatch = useDispatch();
  const handleThemeSelection = (newTheme) => {
    dispatch(updateUserTheme(newTheme));
    document.documentElement.setAttribute("data-theme", newTheme);
    closeDropdown(); // Закриваємо меню після вибору теми
  };

  return (
    <div>
      <button className={s.item} onClick={() => handleThemeSelection("light")}>
        Light
      </button>
      <button className={s.item} onClick={() => handleThemeSelection("dark")}>
        Dark
      </button>
      <button className={s.item} onClick={() => handleThemeSelection("violet")}>
        Violet
      </button>
    </div>
  );
};

export default ThemeSwitcher;
