// Utility to get mute state from localStorage
export function isMuted(): boolean {
  if (typeof window === "undefined") return false;
  const saved = window.localStorage.getItem("muteState");
  const muted = saved === "muted";
  return muted;
}

// Utility to set mute state in localStorage
export function setMuteState(muted: boolean): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem("muteState", muted ? "muted" : "unmuted");
}

// Utility to play sounds that respects mute state
export function playSound(soundFile: string, volume: number = 0.5): void {
  if (typeof window === "undefined") return;
  
  const muted = isMuted();
  if (muted) return;
  
  try {
    const audio = new Audio(`/${soundFile}`);
    audio.volume = volume;
    audio.play().catch((e) => console.log("Audio playback failed:", e));
  } catch (e) {
    // silently fail on unsupported browsers
  }
}
