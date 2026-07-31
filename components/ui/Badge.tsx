import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "indigo" | "emerald" | "amber" | "cyan" | "outline";
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  className,
  icon,
}) => {
  const variantStyles = {
    default: "bg-white/5 text-slate-300 border-white/10",
    indigo: "bg-indigo-500/10 text-indigo-300 border-indigo-500/30",
    emerald: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
    amber: "bg-amber-500/10 text-amber-300 border-amber-500/30",
    cyan: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
    outline: "bg-transparent text-slate-400 border-slate-700",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-sm tracking-wide select-none transition-colors",
        variantStyles[variant],
        className
      )}
    >
      {icon && <span className="w-3.5 h-3.5">{icon}</span>}
      {children}
    </span>
  );
};
