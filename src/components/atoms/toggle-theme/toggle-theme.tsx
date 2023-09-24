"use client";
import React, { useState } from "react";
import Button from "../button/button";
import { BsSun, BsMoon, BsLaptop } from "react-icons/bs";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const ToggleThemeFront = () => {
  const { setTheme } = useTheme();
  const [toggleActive, setToggleActive] = useState<Boolean>(false);

  const handleTheme = (type: string) => {
    setTheme(type);
    setToggleActive((prev) => !prev);
  };

  return (
    <div className="absolute top-[2.2rem] right-5">
      <div className="inline-flex bg-white border rounded-md">
        <div className="relative">
          <Button
            variant="ghost"
            onClick={() => setToggleActive((prev) => !prev)}>
            <BsSun className="fill-black rotate-0 scale-100 transition-all hover:text-slate-900 dark:-rotate-90 dark:scale-0 dark:text-slate-400 dark:hover:text-slate-100" />
            <BsMoon className="absolute rotate-90 scale-0 transition-all hover:text-slate-900 dark:rotate-0 dark:scale-100 dark:text-slate-400 dark:hover:text-slate-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          {toggleActive && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.4 }}
              className="absolute top-[-11.5rem] sm:top-0 right-0 z-10 w-32 mt-4 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg">
              <div className="p-2 space-y-4">
                <div
                  onClick={() => handleTheme("light")}
                  className="flex items-center justify-between cursor-pointer p-2 space-x-4 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700">
                  <BsSun />
                  <span>Light</span>
                </div>
                <div
                  onClick={() => handleTheme("dark")}
                  className="flex items-center justify-between cursor-pointer p-2 space-x-4 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700">
                  <BsMoon />
                  <span>Dark</span>
                </div>
                <div
                  onClick={() => handleTheme("system")}
                  className="flex items-center justify-between cursor-pointer p-2 space-x-4 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700">
                  <BsLaptop />
                  <span>System</span>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToggleThemeFront;
