"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type MuteState = "muted" | "unmuted";

function getInitialMuteState(): MuteState {
  if (typeof window === "undefined") return "unmuted";
  const saved = window.localStorage.getItem("muteState");
  if (saved === "muted" || saved === "unmuted") return saved as MuteState;
  return "unmuted";
}

export default function MuteToggle() {
  const [muteState, setMuteStateLocal] = useState<MuteState>("unmuted");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const state = getInitialMuteState();
    setMuteStateLocal(state);
    setMounted(true);
  }, []);

  function toggle() {
    const next: MuteState = muteState === "muted" ? "unmuted" : "muted";
    setMuteStateLocal(next);
    window.localStorage.setItem("muteState", next);
  }

  if (!mounted) return null;

  return (
    <button
      onClick={toggle}
      aria-label="Toggle mute"
      aria-pressed={muteState === "muted"}
      type="button"
      className="rounded-full p-1 hover:scale-105 active:scale-95 transition-transform duration-200"
    >
      <Image
        src={muteState === "muted" ? "/mute.png" : "/sound.png"}
        width={64}
        height={64}
        alt={muteState === "muted" ? "Mute icon" : "Unmute icon"}
        className="select-none"
      />
    </button>
  );
}

