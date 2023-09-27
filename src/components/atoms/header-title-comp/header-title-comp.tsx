"use client";
import React from "react";
import { motion } from "framer-motion";

const quoute = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
};

interface HeaderCompTitleProps {
  title: string;
  subtitle: string;
}

const HeaderCompTitle: React.FC<HeaderCompTitleProps> = ({
  title,
  subtitle,
}) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-1 mb-20">
      <motion.h5
        variants={quoute}
        initial={"initial"}
        animate={"animate"}
        className="text-sm text-slate-300 font-medium">
        {title}
      </motion.h5>
      <motion.h2
        variants={quoute}
        initial={"initial"}
        animate={"animate"}
        className="text-3xl text-light-blue dark:text-slate-200 font-semibold">
        {subtitle}
      </motion.h2>
    </div>
  );
};

export default HeaderCompTitle;
