"use client";
import React, { useEffect } from "react";
import HeaderCompTitle from "../../atoms/header-title-comp/header-title-comp";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { listExperience } from "@/assets/static";
import { useMediaQuery } from "@/hook/use-media-query";

const FrontExperience = () => {
  const matches = useMediaQuery("(max-width: 800px)");
  return (
    <section id="experience" className="mt-20">
      <HeaderCompTitle title="What Skills I Have" subtitle="My Experience" />
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 place-items-center gap-5 mt-20 px-4">
        {listExperience.map((item, index) => {
          return (
            <div
              key={index}
              className="px-10 sm:px-10 lg:px-20 py-14 w-full h-full bg-slate-400 dark:bg-slate-700 dark:bg-opacity-60 bg-opacity-80  hover:bg-black hover:bg-opacity-50 border hover:border-light-blue rounded-lg transition-all ease-in-out delay-150">
              <h1 className="text-lg text-white font-bold">{item.title}</h1>
              <div className="grid grid-cols-2 gap-y-10  gap-x-8 mt-5">
                {item.data.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex items-center md:gap-x-4 text-sm md:text-[0.8rem] lg:[2rem] text-white">
                      {matches ? null : (
                        <div>
                          <BsFillPatchCheckFill className="fill-white text-xl" />
                        </div>
                      )}
                      <div>
                        <h2 className="border-b-2 md:border-b-0">
                          {item.title}
                        </h2>
                        <h3>{item.skill}</h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <br />
      <br />
    </section>
  );
};

export default FrontExperience;
