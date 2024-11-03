import { useEffect, useState } from "react";
import icons from "../../images/icons/icons.svg";
// import ThemeSwitcher from "../Themes/ThemeSwitcher/ThemeSwitcher.jsx";
import s from "./Header.module.css";

const Header = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  return (
    <div className={s.cont}>
      <svg className={s.mobileMenu}>
        <use href={`${icons}#icon-bell`} />
      </svg>
      <div className={s.divRight}>
        <div className={s.divLabel}>
          <label htmlFor="theme-selector" className={s.label}>
            {/* <p className={s.p}>Theme</p> */}
            <div className={s.divSelect}>
              <select
                name="Theme"
                id="theme-selector"
                value={theme}
                onChange={handleThemeChange}
                className={s.select}
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="violet">Violet</option>
              </select>
            </div>
          </label>
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
