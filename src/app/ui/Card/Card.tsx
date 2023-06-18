"use client";

import { useRef } from "react";
import useMouseCssVariables from "../../hooks/useMouseCssVariables";

interface CardProps {
  children?: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  const ref = useRef<HTMLDivElement>(null);
  useMouseCssVariables(ref);

  return (
    <div
      ref={ref}
      className="relative h-full bg-slate-800 rounded-3xl p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-slate-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden w-full"
    >
      <div className="relative h-full bg-slate-950 bg-opacity-95 p-6 rounded-[inherit] z-20 overflow-hidden">
        <div
          className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
          aria-hidden="true"
        >
          <div className="absolute inset-0 translate-z-0 bg-slate-900 bg-opacity-75 rounded-full blur-[80px]"></div>
        </div>
        <div className="flex flex-col h-full">{children}</div>
      </div>
    </div>
  );
}
