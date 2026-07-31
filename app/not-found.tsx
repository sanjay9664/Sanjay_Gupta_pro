import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 py-32 bg-[#07080c] relative z-10">
      <div className="flex flex-col items-center gap-6 max-w-lg mx-auto">
        <Badge variant="indigo" icon={<Compass className="w-3.5 h-3.5 text-indigo-400 animate-spin" />}>
          Page Navigation Error
        </Badge>

        <h1 className="text-7xl font-extrabold font-mono text-gradient-accent tracking-tighter">
          404
        </h1>

        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Page Could Not Be Found
        </h2>

        <p className="text-sm text-slate-400 leading-relaxed">
          The requested route does not exist or has been relocated. You can navigate back to the main studio homepage or explore our services and portfolio.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Button variant="primary" size="md" href="/" icon={<ArrowLeft className="w-4 h-4" />}>
            Return to Studio Home
          </Button>
          <Button variant="secondary" size="md" href="/portfolio">
            Explore Portfolio
          </Button>
        </div>
      </div>
    </div>
  );
}
