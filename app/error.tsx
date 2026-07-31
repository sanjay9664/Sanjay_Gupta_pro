"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { AlertTriangle, RefreshCw } from "lucide-react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Runtime application error:", error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 py-32 bg-[#07080c] relative z-10">
      <div className="flex flex-col items-center gap-6 max-w-lg mx-auto">
        <Badge variant="amber" icon={<AlertTriangle className="w-3.5 h-3.5 text-amber-400" />}>
          Runtime Error Detected
        </Badge>

        <h1 className="text-3xl font-extrabold text-white tracking-tight">
          Something went wrong
        </h1>

        <p className="text-sm text-slate-400 leading-relaxed">
          An unexpected runtime error occurred. You can retry loading this page or return to the main homepage.
        </p>

        <div className="flex items-center justify-center gap-4 pt-4">
          <Button variant="primary" size="md" onClick={() => reset()} icon={<RefreshCw className="w-4 h-4" />}>
            Try Again
          </Button>
          <Button variant="secondary" size="md" href="/">
            Go to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
