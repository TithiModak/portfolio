"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  const saved = window.localStorage.getItem("theme");
  if (saved === "dark" || saved === "light") return saved;
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = getInitialTheme();
    setTheme(t);
    setMounted(true);
    document.documentElement.classList.toggle("dark", t === "dark");
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    window.localStorage.setItem("theme", next);
  }

  if (!mounted) return null;

  return (
    <button
      onClick={toggle}
      className="rounded-lg border border-zinc-200 p-2 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
      aria-label="Toggle theme"
      aria-pressed={theme === "dark"}
      type="button"
    >
      <img
        src={theme === "dark" ? "moon.png" : "/sun.png"}
        alt={theme === "dark" ? "Moon icon" : "Sun icon"}
        title={theme === "dark" ? "Switch to light" : "Switch to dark"}
        className="h-5 w-5 transition-transform duration-200 transform hover:scale-110"
      />
    </button>
  );
}