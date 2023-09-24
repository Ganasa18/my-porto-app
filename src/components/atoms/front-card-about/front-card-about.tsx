"use client";
import React from "react";
import "./front-card-about.css";

interface FrontCardAboutProps {
  title: string;
  content: string;
  icon: any;
}

const FrontCardAbout: React.FC<FrontCardAboutProps> = ({
  title,
  content,
  icon,
}) => {
  return (
    <article className="about__card dark:bg-slate-700 dark:border-slate-200">
      {icon}
      <h5>{title}</h5>
      <small>{content}</small>
    </article>
  );
};

export default FrontCardAbout;
