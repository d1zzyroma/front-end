import { useState } from "react";
import { NavLink } from "react-router-dom";
import s from "./WelcomePage.module.css";
import icons from "../../images/icons/icons.svg";
const WelcomePage = () => {
  const [activeButton, setActiveButton] = useState("register");

  return (
    <>
      <div className={s.bgCon}>
        <div className={s.cont}>
          <div className={s.logoCont}>
            <div className={s.logoNameCont}>
              <div className={s.svg}>
                <svg className={s.icon} width="15px" height="20px">
                  <use href={`${icons}#icon-welcome`}></use>
                </svg>
              </div>
              <h1 className={s.logoText}>Task Pro</h1>
            </div>
          </div>
          <h1 className={s.title}>
            Supercharge your productivity and take control of your tasks with
            Task Pro - Dont wait, start achieving your goals now!
          </h1>
        </div>
        <div className={s.nav}>
          <NavLink
            to="/auth/register"
            className={`${s.button} ${
              activeButton === "register" ? s.active : ""
            }`}
            onMouseEnter={() => setActiveButton("register")}
            onFocus={() => setActiveButton("register")}
          >
            Registration
          </NavLink>
          <NavLink
            to="/auth/login"
            className={`${s.button} ${
              activeButton === "login" ? s.active : ""
            }`}
            onMouseEnter={() => setActiveButton("login")}
            onFocus={() => setActiveButton("login")}
          >
            Log in
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default WelcomePage;
