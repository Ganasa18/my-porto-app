"use client";
import React from "react";
import "./front-card-about.css";
import { motion } from "framer-motion";

interface FrontCardAboutProps {
  title: string;
  content: string;
  icon: any;
  index: number;
}

const FrontCardAbout: React.FC<FrontCardAboutProps> = ({
  title,
  content,
  icon,
  index,
}) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="about__card dark:bg-slate-700 dark:border-slate-200">
      {icon}
      <h5>{title}</h5>
      <small>{content}</small>
    </motion.article>
  );
};

export default FrontCardAbout;
