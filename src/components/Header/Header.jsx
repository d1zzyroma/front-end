import ThemeSwitcher from "../Themes/ThemeSwitcher/ThemeSwitcher.jsx";
import s from "./Header.module.css";

const Header = () => {
  return (
    <div className={s.cont}>
      Header
      <ThemeSwitcher />
    </div>
  );
};

export default Header;
