import { useState } from "react";
import { NavLink } from "react-router-dom";
import s from "./WelcomePage.module.css";

const WelcomePage = () => {
  const [activeButton, setActiveButton] = useState("register"); // За замовчуванням активна кнопка "Register"

  return (
    <>
      <div className={s.cont}>
        <h1 className={s.title}>
          Supercharge your productivity and take control of your tasks with Task
          Pro - Dont wait, start achieving your goals now!
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
          className={`${s.button} ${activeButton === "login" ? s.active : ""}`}
          onMouseEnter={() => setActiveButton("login")}
          onFocus={() => setActiveButton("login")}
        >
          Log in
        </NavLink>
      </div>
    </>
  );
};

export default WelcomePage;
