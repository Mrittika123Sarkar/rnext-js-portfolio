"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export function ThemeToggle() {
  const { toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--foreground)] transition-colors hover:bg-[var(--surface)]"
    >
      <Sun className="h-4 w-4 scale-100 dark:scale-0 transition-transform" />
      <Moon className="absolute h-4 w-4 scale-0 dark:scale-100 transition-transform" />
    </button>
  );
}
