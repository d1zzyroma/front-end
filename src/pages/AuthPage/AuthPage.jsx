import { NavLink, Outlet } from "react-router-dom";
import s from "./AuthPage.module.css";

const AuthPage = () => {
  return (
    <div className={s.cont}>
      <div>
        <NavLink to="login">Login</NavLink>
        <NavLink to="register">Register</NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default AuthPage;
