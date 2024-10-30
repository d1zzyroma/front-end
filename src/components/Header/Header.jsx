import SvgIcon from "../SvgIcon/SvgIcon.jsx";
import ThemeSwitcher from "../Themes/ThemeSwitcher/ThemeSwitcher.jsx";
import s from "./Header.module.css";

const Header = () => {
  return (
    <div className={s.cont}>
      Header
      <ThemeSwitcher />
      <SvgIcon id="icon-welcome" className="user-icon" />
    </div>
  );
};

export default Header;
