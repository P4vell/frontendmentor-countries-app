import { createContext, ReactNode, useContext, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

type ThemeProviderProps = {
  children: ReactNode;
};

type ThemeContext = {
  isDark: boolean;
  toggleTheme: () => void;
};

type Theme = "light" | "dark";

const ThemeContext = createContext({} as ThemeContext);

export const useTheme = () => useContext(ThemeContext);

const getInitialTheme = (): Theme => {
  const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
  if (userMedia.matches) {
    return "dark";
  }
  return "light";
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useLocalStorage<Theme>("THEME", getInitialTheme);
  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  useEffect(() => {
    const rootElement = document.documentElement;
    rootElement.classList.remove(isDark ? "light" : "dark");
    rootElement.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
