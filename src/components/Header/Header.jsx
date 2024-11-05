import { useEffect, useState } from "react";
import ThemeSwitcher from "../Themes/ThemeSwitcher/ThemeSwitcher";
import EditProfile from "../EditProfile/EditProfile.jsx";
import { useSelector } from "react-redux";
import {
  selectUserName,
  selectUserAvatar,
} from "../../redux/auth/selectors.js";
import icons from "../../images/icons/icons.svg";
import s from "./Header.module.css";

const Header = () => {
  const [theme, setTheme] = useState("light");
  const [isOpen, setIsOpen] = useState(false);
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const userName = useSelector(selectUserName);
  const userAvatar = useSelector(selectUserAvatar);
  console.log("User Name:", userName);
  console.log("User Avatar:", userAvatar);

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
        <button className={s.btnMobMenu} type="button">
          <svg className={s.mobileMenu}>
            <use href={`${icons}#icon-mobile-menu`} />
          </svg>
        </button>
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
            <p className={s.p}>{userName}</p>
            <div className={s.divImg}>
              <button
                className={s.btnEditProf}
                type="button"
                onClick={openEditProfile}
              >
                {userAvatar ? (
                  <img
                    src={userAvatar}
                    alt="avatar"
                    className={s.profile_avatar}
                  />
                ) : (
                  <svg className={s.profile_icon}>
                    <use href={`${icons}#icon-user-ico`}></use>
                  </svg>
                )}
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
