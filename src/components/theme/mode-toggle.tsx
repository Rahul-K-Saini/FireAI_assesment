"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <span
      className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      {theme === "dark" ? (
        <Sun className=" h-5 w-5 rotate-90 transition-all dark:rotate-0 " />
      ) : (
        <Moon className="h-5 w-5 rotate-0 transition-all dark:-rotate-90 " />
      )}
    </span>
  );
}
