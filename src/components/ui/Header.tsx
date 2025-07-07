"use client";
import { useState, useEffect } from "react";
import { MoonIcon, Sun } from "lucide-react";
import { Button } from "./button";

export default function Header() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="text-white">
            <h1 className="text-3xl font-black tracking-tight">TI24 SE 3</h1>
            <p className="text-blue-100 font-bold">Global Institute</p>
          </div>
          <Button
            onClick={() => setIsDark(!isDark)}
            variant="reverse"
            size="icon"
            className="bg-white hover:bg-gray-100 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
          >
            {isDark ? (
              <Sun className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}
