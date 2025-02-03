/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useState } from "react";

// Buat Context
const ThemeContext = createContext({
  theme: "",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState("light");

  // Fungsi untuk mengganti tema
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom Hook untuk mempermudah penggunaan Context
export const useTheme = () => useContext(ThemeContext);
