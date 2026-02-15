"use client";

import React from "react";
import { useModal } from "../contexts/ModalContext";
import { playSound } from "../lib/soundUtils";

type ModalType = "about" | "links" | "projects" | "faq" | "contact";

type Props = {
  modalType: ModalType;
  label: string;
  children: React.ReactNode;
};

export default function NavIconButton({ modalType, label, children }: Props) {
  const { openModal } = useModal();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    playSound("click.mp3");
    openModal(modalType);
  };

  return (
    <button
      onClick={handleClick}
      className="flex flex-col items-center gap-3 text-zinc-700 hover:text-purple-500 bg-transparent border-none cursor-pointer"
      aria-label={label}
    >
      <div className="rounded-full border-2 border-zinc-200 bg-white p-4 shadow-md dark:bg-zinc-800 dark:border-zinc-700 hover:scale-105 transition-transform">
        {children}
      </div>
      <span className="text-sm lowercase font-medium">{label}</span>
    </button>
  );
}
