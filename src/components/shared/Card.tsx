import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`
        rounded-[32px]
        border
        border-zinc-900
        bg-zinc-950
        p-8

        transition-all
        duration-300
        ease-[cubic-bezier(.16,1,.3,1)]

        hover:-translate-y-1
        hover:border-zinc-800
        hover:shadow-[0_14px_32px_rgba(0,0,0,0.22)]

        ${className}
      `}
    >
      {children}
    </div>
  );
}