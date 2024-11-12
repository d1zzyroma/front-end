import { useEffect, useState } from "react";
import ThemeSwitcher from "../Themes/ThemeSwitcher/ThemeSwitcher";
import EditProfile from "../EditProfile/EditProfile.jsx";
import { useSelector, useDispatch } from "react-redux";
import {
  selectUserAvatar,
  selectUserName,
  selectUserTheme,
} from "../../redux/auth/selectors.js";
import icons from "../../images/icons/icons.svg";
import s from "./Header.module.css";
import { toggleSideBar } from "../../redux/sideBar/slice.js";
import userAvaDefault from "../../images/user.png";

const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectUserTheme);
  const [isOpen, setIsOpen] = useState(false);
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);

  const userName = useSelector(selectUserName);
  const userAva = useSelector(selectUserAvatar);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

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
        <button
          className={s.btnMobMenu}
          type="button"
          onClick={() => dispatch(toggleSideBar())}
        >
          <svg className={s.mobileMenu}>
            <use href={`${icons}#icon-mobile-menu`} />
          </svg>
        </button>
        <div className={s.divRight}>
          <div className={s.divLabel}>
            <p className={s.pTheme}>Theme</p>
            <button onClick={toggleDropdown} className={s.btnTheme}>
              <svg className={`${s.icon} ${isOpen ? s.rotated : ""}`}>
                <use href={`${icons}#icon-down`} />
              </svg>
            </button>
            {isOpen && (
              <div className={s.dropdown}>
                <ThemeSwitcher closeDropdown={closeDropdown} />
              </div>
            )}
          </div>
          <div className={s.divUser}>
            <p className={s.p}>{userName || "Guest"}</p>

            <div className={s.divImg}>
              <button
                className={s.btnEditProf}
                type="button"
                onClick={openEditProfile}
              >
                <img
                  src={userAva || userAvaDefault}
                  alt="avatar"
                  className={s.profile_avatar}
                />
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
