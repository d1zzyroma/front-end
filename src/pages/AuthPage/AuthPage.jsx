import { NavLink, Outlet } from "react-router-dom";
import s from "./AuthPage.module.css";

const AuthPage = () => {
  return (
    <div className={s.bgCon}>
      <div className={s.authContainer}>
        <div className={s.tabContainer}>
          <NavLink
            to="register"
            className={({ isActive }) =>
              isActive ? `${s.tab} ${s.activeTab}` : s.tab
            }
          >
            Registration
          </NavLink>
          <NavLink
            to="login"
            className={({ isActive }) =>
              isActive ? `${s.tab} ${s.activeTab}` : s.tab
            }
          >
            Log In
          </NavLink>
        </div>
        <div className={s.formContainer}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
