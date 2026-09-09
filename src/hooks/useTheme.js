import { useEffect, useState } from "react";

const storageKey = "portfolio-theme";
const systemPreference = () => window.matchMedia("(prefers-color-scheme: dark)");

function readPreference() {
  try {
    const saved = localStorage.getItem(storageKey);
    return saved === "dark" || saved === "light" ? saved : null;
  } catch {
    return null;
  }
}

export default function useTheme() {
  const [theme, setTheme] = useState(() =>
    readPreference() ?? (systemPreference().matches ? "dark" : "light"),
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      "content", theme === "dark" ? "#07111F" : "#F6F8FB",
    );
  }, [theme]);

  useEffect(() => {
    const media = systemPreference();
    const onSystemChange = (event) => {
      if (!readPreference()) setTheme(event.matches ? "dark" : "light");
    };
    const onStorage = (event) => {
      if (event.key === storageKey || event.key === null) {
        setTheme(readPreference() ?? (media.matches ? "dark" : "light"));
      }
    };
    media.addEventListener("change", onSystemChange);
    window.addEventListener("storage", onStorage);
    return () => {
      media.removeEventListener("change", onSystemChange);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    try { localStorage.setItem(storageKey, next); } catch { /* Storage may be unavailable. */ }
    setTheme(next);
  }

  return { theme, toggleTheme };
}
