import React from "react";
import HeaderCompTitle from "../../atoms/header-title-comp/header-title-comp";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { listExperience } from "@/assets/static";

const FrontExperience = () => {
  return (
    <section id="experience" className="mt-20">
      <HeaderCompTitle title="What Skills I Have" subtitle="My Experience" />
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 place-items-center gap-5 mt-20">
        {listExperience.map((item, index) => {
          return (
            <div
              key={index}
              className="px-20 py-14 h-full bg-slate-400 dark:bg-slate-700 dark:bg-opacity-60 bg-opacity-80  hover:bg-transparent border hover:border-light-blue rounded-lg transition-all ease-in-out delay-150">
              <h1 className="text-lg text-white font-bold">{item.title}</h1>
              <div className="grid grid-cols-2 gap-y-10 gap-x-12 mt-5">
                {item.data.map((item, index) => {
                  return (
                    <div key={index} className="flex items-center gap-5">
                      <div>
                        <BsFillPatchCheckFill className="fill-white text-xl" />
                      </div>
                      <div>
                        <h2>{item.title}</h2>
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
