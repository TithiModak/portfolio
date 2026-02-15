"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { playSound } from "../lib/soundUtils";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  const saved = window.localStorage.getItem("theme");
  if (saved === "dark" || saved === "light") return saved as Theme;
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function SunToggle() {
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
    if (next === "dark") {
      playSound("sunset.mp3");
    } else {
      playSound("sunrise.mp3");
    }
  }

  if (!mounted) return null;

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      aria-pressed={theme === "dark"}
      type="button"
      className="rounded-full p-1 hover:scale-105 active:scale-95 transition-transform duration-200"
    >
      <Image
        src={theme === "dark" ? "/moon.png" : "/sun.png"}
        width={64}
        height={64}
        alt={theme === "dark" ? "Moon icon" : "Sun icon"}
        className="select-none"
      />
    </button>
  );
}


