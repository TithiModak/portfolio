"use client";

import Link from "next/link";
import React from "react";
import { playSound } from "../lib/soundUtils";

type Props = {
  href: string;
  label: string;
  children: React.ReactNode;
};

export default function NavIcon({ href, label, children }: Props) {
  return (
    <Link
      href={href}
      onClick={() => playSound("click.mp3")}
      className="flex flex-col items-center gap-3 text-zinc-700 hover:text-purple-500"
      aria-label={label}
    >
      <div className="rounded-full border-2 border-zinc-200 bg-white p-4 shadow-md dark:bg-zinc-800 dark:border-zinc-700">
        {children}
      </div>
      <span className="text-sm lowercase font-medium">{label}</span>
    </Link>
  );
}
