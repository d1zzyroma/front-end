import { NavLink } from "react-router-dom";
import s from "./WelcomePage.module.css";

const WelcomePage = () => {
  return (
    <>
      <div className={s.cont}>WelcomePage</div>
      <NavLink to="/auth/login">Login</NavLink>
      <NavLink to="/auth/register">Register</NavLink>
    </>
  );
};

export default WelcomePage;
