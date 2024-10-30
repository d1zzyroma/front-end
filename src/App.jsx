import "./App.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// // import { LocalizationProvider } from "@mui/x-date-pickers-pro/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Navigate, Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage/WelcomePage.jsx";
import AuthPage from "./pages/AuthPage/AuthPage.jsx";
import LoginForm from "./components/LoginForm/LoginForm.jsx";
import RegisterForm from "./components/RegisterForm/RegisterForm.jsx";
import ScreensPage from "./pages/ScreensPage/ScreensPage.jsx";
import { RestrictedRoute } from "./RestrictedRoute.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import { ThemeProvider } from "./components/Themes/ThemeContext/ThemeContext.jsx";
import InfoForTeam from "./info/InfoForTeam/InfoForTeam.jsx";
// // import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";

function App() {
  return (
    <ThemeProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Routes>
          <Route path="/" element={<Navigate to="/welcome" />} />
          <Route path="/info" element={<InfoForTeam />} />
          {/* WelcomePage */}
          <Route path="/welcome" element={<WelcomePage />} />

          {/* Dynamic AuthPage */}
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

          {/* Private route ScreensPage */}
          <Route path="/home" element={<HomePage />}>
            <Route path=":boardId" element={<ScreensPage />} />
          </Route>
        </Routes>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
