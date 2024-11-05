import "./App.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Navigate, Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage/WelcomePage.jsx";
import AuthPage from "./pages/AuthPage/AuthPage.jsx";
import LoginForm from "./components/LoginForm/LoginForm.jsx";
import RegisterForm from "./components/RegisterForm/RegisterForm.jsx";
import ScreensPage from "./pages/ScreensPage/ScreensPage.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import { ThemeProvider } from "./components/Themes/ThemeContext/ThemeContext.jsx";
import InfoForTeam from "./info/InfoForTeam/InfoForTeam.jsx";
import { RestrictedRoute } from "./components/Routes/RestrictedRoute.jsx";
import { PrivateRoute } from "./components/Routes/PrivateRoute.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from "./redux/auth/selectors.js";
import { userCurrent } from "./redux/auth/operations.js";
import { useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      await dispatch(userCurrent());
      setLoading(false);
    };
    fetchUser();
  }, [dispatch]);

  if (isRefreshing || loading) {
    return (
      <div className="loader">
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          visible={true}
        />
      </div>
    );
  }

  return (
    <ThemeProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Routes>
          <Route
            path="/"
            element={<Navigate to={isLoggedIn ? "/home" : "/welcome"} />}
          />
          <Route path="/info" element={<InfoForTeam />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/auth/" element={<AuthPage />}>
            <Route
              path="login"
              element={
                <RestrictedRoute redirectTo="/home" component={<LoginForm />} />
              }
            />
            <Route
              path="register"
              element={
                <RestrictedRoute
                  redirectTo="/home"
                  component={<RegisterForm />}
                />
              }
            />
          </Route>
          <Route
            path="/home"
            element={
              <PrivateRoute redirectTo="/welcome" component={<HomePage />} />
            }
          >
            <Route path=":boardId" element={<ScreensPage />} />
          </Route>
        </Routes>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
