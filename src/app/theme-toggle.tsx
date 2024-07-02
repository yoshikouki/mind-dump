"use client";

import { LoaderCircleIcon, MoonIcon, SunIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      onClick={toggleTheme}
      variant="ghost"
      size="icon"
      className="animate-fade-in"
    >
      {!mounted ? (
        <LoaderCircleIcon size={24} />
      ) : resolvedTheme === "dark" ? (
        <SunIcon size={24} />
      ) : (
        <MoonIcon size={24} />
      )}
    </Button>
  );
}
