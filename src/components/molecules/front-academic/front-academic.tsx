import React from "react";
import HeaderCompTitle from "../../atoms/header-title-comp/header-title-comp";
import "./front-academic.css";
import { listEducation } from "@/assets/static";

const FrontAcademic = () => {
  return (
    <section id="services" className="mt-20">
      <HeaderCompTitle title="What I Study" subtitle="Education" />
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-y-5 services__container">
        {/* CARD */}
        {listEducation.map((item, index) => {
          return (
            <div
              key={index}
              className="container__card__service center__service">
              <div className="card__service hover:bg-slate-800 dark:hover:bg-dark-blue dark:hover:bg-opacity-60 text-white">
                <h2 className="">{item.education}</h2>
                <hr />
                <br />
                <div className="card__year">{item.year}</div>
                <p className="text-sm md:text-[1rem] ">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FrontAcademic;
