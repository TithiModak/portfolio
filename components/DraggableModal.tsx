"use client";

import React, { useRef, useState } from "react";
import { playSound } from "../lib/soundUtils";

interface DraggableModalProps {
  title: string;
  children: React.ReactNode;
  onClose?: () => void;
  useCardStyle?: boolean;
  maxWidth?: string;
  aspectRatio?: string;
}

export default function DraggableModal({
  title,
  children,
  onClose,
  useCardStyle = false,
  maxWidth = "800px",
  aspectRatio = "800/560",
}: DraggableModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [size, setSize] = useState({ width: 800, height: 560 });
  const [isResizing, setIsResizing] = useState(false);
  const [resizeDirection, setResizeDirection] = useState<string>("");

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (
      (e.target as HTMLElement).closest("button") ||
      (e.target as HTMLElement).closest("a")
    ) {
      return;
    }

    setIsDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    setPosition({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsResizing(false);
    setResizeDirection("");
  };

  const handleResizeStart = (e: React.MouseEvent, direction: string) => {
    e.stopPropagation();
    setIsResizing(true);
    setResizeDirection(direction);
    setOffset({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handleMouseMoveResize = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - offset.x,
        y: e.clientY - offset.y,
      });
    } else if (isResizing) {
      const deltaX = e.clientX - offset.x;
      const deltaY = e.clientY - offset.y;

      setSize((prevSize) => {
        let newWidth = prevSize.width;
        let newHeight = prevSize.height;
        let newX = position.x;
        let newY = position.y;

        // Handle horizontal resize
        if (resizeDirection.includes("e")) {
          newWidth = Math.max(300, prevSize.width + deltaX);
        } else if (resizeDirection.includes("w")) {
          newWidth = Math.max(300, prevSize.width - deltaX);
          newX = position.x + deltaX;
        }

        // Handle vertical resize
        if (resizeDirection.includes("s")) {
          newHeight = Math.max(200, prevSize.height + deltaY);
        } else if (resizeDirection.includes("n")) {
          newHeight = Math.max(200, prevSize.height - deltaY);
          newY = position.y + deltaY;
        }

        // Update position if resizing from top or left
        if (resizeDirection.includes("w") || resizeDirection.includes("n")) {
          setPosition({ x: newX, y: newY });
        }

        return { width: newWidth, height: newHeight };
      });

      setOffset({
        x: e.clientX,
        y: e.clientY,
      });
    }
  };

  const playCloseSound = () => {
    playSound("close.mp3");
  };

  const handleClose = () => {
    playCloseSound();
    onClose?.();
  };

  return (
    <div
      ref={modalRef}
      onMouseMove={handleMouseMoveResize}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onClick={(e) => e.stopPropagation()}
      className={`fixed border-zinc-300 dark:border-zinc-600 shadow-2xl bg-white dark:bg-zinc-900 ${
        useCardStyle ? "rounded-2xl overflow-hidden border-0" : "rounded-xl border"
      } z-50 flex flex-col ${
        isDragging ? "cursor-grabbing" : ""
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${size.width}px`,
        height: `${size.height}px`,
        userSelect: isDragging || isResizing ? "none" : "auto",
      }}
    >
      {/* Title Bar */}
      <div
        onMouseDown={handleMouseDown}
        className={`flex items-center justify-between px-6 py-3 ${
          useCardStyle ? "bg-[#B77F7F] dark:bg-[#5A4875] rounded-t-2xl h-12" : "bg-zinc-100 dark:bg-zinc-800 rounded-t-md border-b border-zinc-300 dark:border-zinc-600"
        } ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
      >
        <h2 className={`font-semibold ${useCardStyle ? "text-white text-lg" : "text-lg text-zinc-900 dark:text-white"}`}>
          {title}
        </h2>
        <button
          onClick={handleClose}
          className={`${
            useCardStyle 
              ? "text-white hover:text-gray-200" 
              : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-700"
          } text-xl font-bold w-8 h-8 flex items-center justify-center rounded`}
          aria-label="Close modal"
        >
          ✕
        </button>
      </div>

      {/* Content */}
      <div className={`${useCardStyle ? "flex-1" : ""} p-8 max-h-[70vh] overflow-y-auto`}>{children}</div>

      {/* Resize Handles */}
      {/* Corners */}
      <div
        onMouseDown={(e) => handleResizeStart(e, "se")}
        className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize"
        style={{ touchAction: "none" }}
      />
      <div
        onMouseDown={(e) => handleResizeStart(e, "sw")}
        className="absolute bottom-0 left-0 w-4 h-4 cursor-sw-resize"
        style={{ touchAction: "none" }}
      />
      <div
        onMouseDown={(e) => handleResizeStart(e, "ne")}
        className="absolute top-0 right-0 w-4 h-4 cursor-ne-resize"
        style={{ touchAction: "none" }}
      />
      <div
        onMouseDown={(e) => handleResizeStart(e, "nw")}
        className="absolute top-0 left-0 w-4 h-4 cursor-nw-resize"
        style={{ touchAction: "none" }}
      />
      {/* Edges */}
      <div
        onMouseDown={(e) => handleResizeStart(e, "e")}
        className="absolute top-0 right-0 w-2 h-full cursor-ew-resize"
        style={{ touchAction: "none" }}
      />
      <div
        onMouseDown={(e) => handleResizeStart(e, "w")}
        className="absolute top-0 left-0 w-2 h-full cursor-ew-resize"
        style={{ touchAction: "none" }}
      />
      <div
        onMouseDown={(e) => handleResizeStart(e, "s")}
        className="absolute bottom-0 left-0 w-full h-2 cursor-ns-resize"
        style={{ touchAction: "none" }}
      />
      <div
        onMouseDown={(e) => handleResizeStart(e, "n")}
        className="absolute top-0 left-0 w-full h-2 cursor-ns-resize"
        style={{ touchAction: "none" }}
      />
    </div>
  );
}
