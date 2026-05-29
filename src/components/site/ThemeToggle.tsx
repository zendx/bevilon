import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export function ThemeToggle() {
  const { resolved, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="size-9 rounded-full border border-border flex items-center justify-center hover:bg-surface-2 transition-colors cursor-pointer"
    >
      {resolved === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  );
}
