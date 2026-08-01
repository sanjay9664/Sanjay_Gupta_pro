"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Magnetic } from "./Magnetic";
import { ArrowRight, Loader2 } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gradient";
  size?: "sm" | "md" | "lg";
  href?: string;
  magnetic?: boolean;
  isLoading?: boolean;
  icon?: React.ReactNode;
  showArrow?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  href,
  magnetic = true,
  isLoading = false,
  icon,
  showArrow = false,
  className,
  disabled,
  onClick,
  ...props
}) => {
  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs gap-1.5",
    md: "px-5 py-2.5 text-xs sm:text-sm gap-2 font-semibold",
    lg: "px-6 py-3 text-xs sm:text-sm gap-2 font-semibold",
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:via-indigo-500 hover:to-cyan-400 text-white shadow-md shadow-indigo-500/20 border border-white/20 hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5 active:translate-y-0",
    secondary:
      "bg-white/10 hover:bg-white/15 text-white border border-white/15 backdrop-blur-md hover:border-white/30 hover:-translate-y-0.5 active:translate-y-0",
    outline:
      "bg-white/90 hover:bg-white text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow hover:-translate-y-0.5 active:translate-y-0",
    ghost:
      "bg-transparent hover:bg-white/10 text-slate-300 hover:text-white",
    gradient:
      "bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-md shadow-indigo-500/20 font-semibold border border-white/20 hover:-translate-y-0.5 active:translate-y-0",
  };

  const baseClasses = cn(
    "inline-flex items-center justify-center rounded-full transition-all duration-300 tracking-tight disabled:opacity-50 disabled:pointer-events-none select-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:ring-offset-2 focus:ring-offset-slate-950",
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  const content = (
    <>
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin text-current" />
      ) : icon ? (
        <span>{icon}</span>
      ) : null}
      <span>{children}</span>
      {showArrow && !isLoading && (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  const buttonElement = href ? (
    <Link href={href} className={cn(baseClasses, "group")}>
      {content}
    </Link>
  ) : (
    <button
      className={cn(baseClasses, "group")}
      disabled={disabled || isLoading}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );

  if (magnetic && !disabled && !isLoading) {
    return <Magnetic>{buttonElement}</Magnetic>;
  }

  return buttonElement;
};
