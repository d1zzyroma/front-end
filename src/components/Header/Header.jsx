import { useEffect, useState } from "react";
import ThemeSwitcher from "../Themes/ThemeSwitcher/ThemeSwitcher";
import EditProfile from "../EditProfile/EditProfile.jsx";
import icons from "../../images/icons/icons.svg";
import s from "./Header.module.css";
import userAva from "../../images/user.png";
import { useSelector } from "react-redux";
import { selectUserName, selectUserTheme } from "../../redux/auth/selectors.js";
const Header = () => {
  // const [theme, setTheme] = useState("light");
  const theme = useSelector(selectUserTheme);
  const [isOpen, setIsOpen] = useState(false);
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const user = useSelector(selectUserName);

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

  const openEditProfile = () => {
    setIsEditProfileOpen(true);
  };

  const closeEditProfile = () => {
    setIsEditProfileOpen(false);
  };

  return (
    <header>
      <div className={s.cont}>
        <svg className={s.mobileMenu}>
          <use href={`${icons}#icon-mobile-menu`} />
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
                  // theme={theme}
                  // setTheme={setTheme}
                  closeDropdown={closeDropdown}
                />
              </div>
            )}
          </div>
          <div className={s.divUser}>
            <p className={s.p}>{user}</p>
            <div className={s.divImg}>
              <button
                className={s.btnEditProf}
                type="button"
                onClick={openEditProfile}
              >
                <img src={userAva} alt="UserAvatar" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {isEditProfileOpen && <EditProfile onClose={closeEditProfile} />}
    </header>
  );
};

export default Header;
