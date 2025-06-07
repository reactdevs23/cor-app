import React, { useState, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";
import { THEMES, DEFAULT_THEME, type Theme } from "./theme";

/**
 * Applies the theme class to the <html> element.
 */
const applyTheme = (theme: Theme) => {
  const root = document.documentElement;
  root.classList.remove("theme-light", "theme-dark");

  if (theme === THEMES.AUTO) {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const resolved = prefersDark ? THEMES.DARK : THEMES.LIGHT;
    root.classList.add(`theme-${resolved}`);
  } else {
    root.classList.add(`theme-${theme}`);
  }
};

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(DEFAULT_THEME);

  useEffect(() => {
    const stored = localStorage.getItem("app-theme") as Theme | null;
    const validTheme = stored && Object.values(THEMES).includes(stored) ? stored : DEFAULT_THEME;
    setTheme(validTheme);
    applyTheme(validTheme);
  }, []);

  const updateTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem("app-theme", newTheme);
    applyTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme: () => updateTheme(theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK) }}>
      {children}
    </ThemeContext.Provider>
  );
};
