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
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-6 py-3 text-sm gap-2",
    lg: "px-8 py-4 text-base gap-2.5 font-medium",
  };

  const variantStyles = {
    primary:
      "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/25 border border-indigo-500/50 hover:shadow-indigo-500/40",
    secondary:
      "bg-white/10 hover:bg-white/15 text-white border border-white/10 backdrop-blur-md hover:border-white/25",
    outline:
      "bg-transparent hover:bg-white/5 text-slate-200 border border-slate-700 hover:border-slate-500",
    ghost:
      "bg-transparent hover:bg-white/5 text-slate-300 hover:text-white",
    gradient:
      "bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 hover:from-indigo-400 hover:to-emerald-400 text-white shadow-lg shadow-indigo-500/20 font-semibold border border-white/20",
  };

  const baseClasses = cn(
    "inline-flex items-center justify-center rounded-full transition-all duration-300 font-medium tracking-tight disabled:opacity-50 disabled:pointer-events-none select-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:ring-offset-2 focus:ring-offset-slate-950",
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
