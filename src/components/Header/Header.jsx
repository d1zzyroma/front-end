import { useEffect, useState } from "react";
import ThemeSwitcher from "../Themes/ThemeSwitcher/ThemeSwitcher";
import icons from "../../images/icons/icons.svg";
import s from "./Header.module.css";

const Header = () => {
  const [theme, setTheme] = useState("light");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // const theme = "dark"

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className={s.cont}>
      <svg className={s.mobileMenu}>
        <use href={`${icons}#icon-bell`} />
      </svg>
      <div className={s.divRight}>
        <div className={s.divLabel}>
          <p className={s.pTheme}>Theme</p>
          <button onClick={toggleDropdown} className={s.iconButton}>
            <svg className={s.icon}>
              <use href={`${icons}#icon-down`} />
            </svg>
          </button>
          {isOpen && (
            <div className={s.dropdown}>
              <ThemeSwitcher
                theme={theme}
                setTheme={setTheme}
                closeDropdown={closeDropdown}
              />
            </div>
          )}
        </div>
        <div className={s.divUser}>
          <p className={s.p}>Login</p>
          <div className={s.divImg}></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
