// src/components/Themes/ThemeContext.js

import { createContext, useContext, useState } from "react";

// Створюємо контекст теми
const ThemeContext = createContext();
const lightTheme = {
  palette: {
    primary: {
      light: "#FCFCFC",
      main: "#BEDBB0",
      dark: "#0b5c15",
      contrastText: "rgba(22, 22, 22, 0.1)",
    },
    secondary: {
      main: "rgba(22, 22, 22, 0.10)",
      light: "#BEDBB0",
      dark: "#161616",
    },
    background: {
      default: "#FFF",
      paper: "#FCFCFC",
    },
    text: {
      primary: "#161616",
      secondary: "rgba(22, 22, 22, 0.8)",
    },
  },
};

const darkTheme = {
  palette: {
    primary: {
      light: "#161616",
      main: "#BEDBB0",
      dark: "#1b1c21",
      contrastText: "rgba(255, 255, 255, 0.1)",
    },
    secondary: {
      main: "rgba(255, 255, 255, 0.10)",
      light: "#BEDBB0",
      dark: "#FFF",
    },
    background: {
      default: "#121212",
      paper: "#161616",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "rgba(255, 255, 255, 0.8)",
    },
  },
};

const violetTheme = {
  palette: {
    primary: {
      light: "#FFF",
      main: "#5255BC",
      dark: "#B8BCFD",
      contrastText: "rgba(255, 255, 255, 0.1)",
    },
    secondary: {
      main: "rgba(22, 22, 22, 0.10)",
      light: "#ECEDFD",
      dark: "#FFF",
    },
    background: {
      default: "#5255BC",
      paper: "#FFF",
    },
    text: {
      primary: "#161616",
      secondary: "rgba(22, 22, 22, 0.8)",
    },
  },
};

// Експортуємо теми
const themes = {
  lightTheme,
  darkTheme,
  violetTheme,
};

// Провайдер контексту теми
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.lightTheme); // Встановлюємо за замовчуванням світлу тему

  const toggleTheme = (themeName) => {
    setTheme(themes[themeName]); // Змінюємо тему
    // Тут ви можете додати логіку для збереження теми в localStorage або базі даних
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, modes: themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Хук для використання контексту теми
export const useTheme = () => {
  return useContext(ThemeContext);
};
