"use client";

import * as React from "react";
import { CheckCircle2Icon, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  function toggleTheme(event: React.MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();
    setTheme(theme === "light" ? "dark" : "light");
    toast.success("Theme toggled!", {
      duration: 3000,
      icon: <CheckCircle2Icon className='size-5 text-success' />,
    });
  }

  return (
    <Button onClick={toggleTheme} variant='outline' size='icon'>
      <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
      <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
      <span className='sr-only'>Toggle theme</span>
    </Button>
  );
}
