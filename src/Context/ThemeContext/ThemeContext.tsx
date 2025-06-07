// ThemeContext.tsx
import { createContext, useContext } from "react";
import type { Theme } from "./theme";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light", // fallback
  toggleTheme: () => {}, // no-op fallback
});

export const useTheme = () => useContext(ThemeContext);
