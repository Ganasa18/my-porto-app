"use client";
import { listExperience } from "@/assets/static";
import { motion, useScroll, useSpring } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";

interface DetailsExperienceProps {
  position: string;
  company: string;
  companyLink?: string;
  time: string;
  address: string;
  work: string;
}

const PageExperienceView = () => {
  return (
    <div className="h-4/5 p-5">
      <ul className="grid grid-flow-col gap-x-6 justify-start overflow-x-scroll ">
        {listExperience.map((item, index) => (
          <DetailsExperience
            key={index}
            position={item.position}
            company={item.company}
            time={item.time}
            address={item.address}
            companyLink={item.companyLink}
            work={item.work}
          />
        ))}
      </ul>
    </div>
  );
};

const DetailsExperience: React.FC<DetailsExperienceProps> = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}) => {
  return (
    <li className="my-8 w-[350px] md:w-[500px] mx-auto flex flex-col items-center justify-between bg-slate-900 dark:bg-slate-700 px-5 py-6 rounded-md animate-slide-card">
      <div className="overflow-x-auto">
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-light-blue capitalize">
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-slate-300">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </div>
    </li>
  );
};

export default PageExperienceView;
export { DetailsExperience };
