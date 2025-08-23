"use client";
import { useState, useEffect } from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa";

const Button = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme-tailwind");
    const prefersDark =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const handleChange = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme-tailwind", newTheme);
  };

  return (
    <button
      type="button"
      onClick={handleChange}
      aria-label="Toggle theme"
      aria-pressed={theme === "dark"}
      className="relative mx-2 flex h-10 w-32 items-center gap-2 rounded-full bg-neutral-300 px-1 text-center text-[10px] font-semibold transition-colors dark:bg-neutral-700"
    >
      <span
        className={`flex h-8 w-9 items-center justify-center rounded-full bg-neutral-200 transition-all duration-500 dark:bg-neutral-600 ${
          theme === "dark" ? "translate-x-21" : "translate-x-0"
        }`}
      >
        {theme === "light" ? (
          <IoSunnyOutline size={19} />
        ) : (
          <FaRegMoon size={19} />
        )}
      </span>
      <span className={`transition-all duration-500 ${theme === "dark" ? "-mx-6" : ""}`}>
        {theme === "light" ? "Bright as fuck" : "Dark as shit"}
      </span>
    </button>
  );
};

export default Button
