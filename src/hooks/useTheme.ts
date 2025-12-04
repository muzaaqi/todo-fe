import { useCallback, useEffect, useState } from "react";

export type Theme = "light" | "dark" | "system";

const getInitialTheme = (): Theme => {
  const stored = localStorage.getItem("theme") as Theme | null;
  return stored ?? "system";
};

const getSystemTheme = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(() => getInitialTheme());

  const resolvedTheme: "light" | "dark" = theme === "system"
    ? getSystemTheme()
    : theme;

  const applyTheme = useCallback((mode: "light" | "dark") => {
    const root = document.documentElement;
    if (mode === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
  }, []);

  const setTheme = useCallback((value: Theme) => {
    setThemeState(value);
    localStorage.setItem("theme", value);
  }, []);

  useEffect(() => {
    applyTheme(resolvedTheme);
  }, [resolvedTheme, applyTheme]);

  useEffect(() => {
    if (theme !== "system") return;

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      const mode = mq.matches ? "dark" : "light";
      applyTheme(mode);
    };

    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [theme, applyTheme]);

  return {
    theme,
    resolvedTheme,
    setTheme
  };
}