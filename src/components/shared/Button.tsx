import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const styles = {
    primary:
      "bg-white text-black hover:opacity-90",
    secondary:
      "border border-zinc-800 bg-transparent text-white hover:border-zinc-600",
  };

  return (
    <button
      className={`
        inline-flex
        items-center
        justify-center
        rounded-full
        px-6
        py-3
        text-sm
        font-medium
        transition-all
        duration-300
        ${styles[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}