import { createContext, useContext, useEffect, useState } from "react";

type T = { mode: "light" | "dark"; toggle: () => void };
const C = createContext<T>({ mode: "light", toggle: () => { } });

export const ThemeProviderCtx = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<"light" | "dark">(
    (localStorage.getItem("theme-mode") as "light" | "dark") || "light"
  );
  const toggle = () => setMode((p) => (p === "light" ? "dark" : "light"));
  useEffect(() => localStorage.setItem("theme-mode", mode), [mode]);
  return <C.Provider value={{ mode, toggle }}>{children}</C.Provider>;
};
export const useThemeMode = () => useContext(C);
