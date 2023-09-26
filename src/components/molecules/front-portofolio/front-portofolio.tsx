"use client";
import React, { useEffect, useState } from "react";
import HeaderCompTitle from "../../atoms/header-title-comp/header-title-comp";
import Image from "next/image";
import { ListPortfolio } from "@/assets/static";
import Button from "../../atoms/button/button";
import { useStore } from "@/store/use-store/use-store";
import { motion, AnimatePresence } from "framer-motion";

import {
  ActionPayloadPortofolio,
  ActionTypes,
  PortofolioStateInterface,
} from "@/interface/interface-store";
import { actionGetAllProject } from "@/store/action/portofolio-action";
import { ResponseBodyProjectInterface } from "@/interface/interface-project";
import Tooltip from "@/components/atoms/tooltip-comp/tooltip-comp";
import { STACKS } from "@/components/atoms/stacks-comp/stacks-comp";

const FrontPortofolio = () => {
  const [state, dispatch] = useStore();
  const { dataPortofolio, isFilterPop } = state.portofolioReducer;
  const [viewState, setViewState] = useState("Grid");
  type Dispatch = (action: ActionPayloadPortofolio) => void;
  const typeDispatch: Dispatch = dispatch;

  // const [blogPosts, setBlogPosts] = useState(ListPortfolio);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = dataPortofolio.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const setHandlerView = (view: string) => {
    setViewState(view);
    typeDispatch({
      type: ActionTypes.SET_POP_FILTER_PORTO,
      action: !isFilterPop,
    });
  };

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(dataPortofolio.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    if (dataPortofolio.length === 0) {
      actionGetAllProject(dispatch);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="mt-20">
      <HeaderCompTitle title="My Recent Work" subtitle="Portofolio" />
      <div className="flex px-5 gap-5 py-4 relative">
        {/* <div>Sort By</div> */}
        <PopFilterPortofolio
          viewState={setHandlerView}
          nameBtn={`View : ${viewState}`}
          dataFilter={["Grid", "Column"]}
        />
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className={`grid sm:grid-cols-1 ${
          viewState == "Grid"
            ? "md:grid-cols-2 lg:grid-cols-3"
            : "md:grid-cols-1 lg:grid-cols-1"
        } gap-5 px-4`}>
        {currentPosts?.map((item: ResponseBodyProjectInterface, index) => {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="h-auto bg-black bg-opacity-50 rounded-lg shadow-md px-8 py-10">
              <div className="flex flex-col space-y-6">
                <div className="w-full">
                  <div className="pb-6 hover:cursor-pointer group ">
                    <Image
                      height={viewState == "Grid" ? 400 : 200}
                      width={viewState == "Grid" ? 400 : 400}
                      src={item.image!}
                      alt="project"
                      objectFit="cover"
                      className="rounded-md transition-opacity duration-300 ease-in-out group-hover:opacity-80"
                    />
                  </div>
                  {/* <div className="sm:line-clamp-3 md:line-clamp-3 lg:line-clamp-6">
                    <p className="font-normal ">{item.description}</p>
                  </div> */}
                </div>
                <h3 className="font-bold">{item.title}</h3>
                <h3 className="font-bold">Stacks :</h3>
                <div className="flex flex-wrap items-center gap-5 pt-2">
                  {item.stacks
                    ?.split(",")
                    .map((stack: string, index: number) => (
                      <div key={index} className="w-6">
                        <Tooltip title={stack}>{STACKS[stack]}</Tooltip>
                      </div>
                    ))}
                  {/* <Button
                    className="dark:bg-dark-blue bg-slate-400 hover:text-white text-white"
                    variant={"link"}>
                    Github
                  </Button>
                  <Button
                    disabled={item.link_demo === null ? true : false}
                    variant={"normal"}>
                    Live Web
                  </Button> */}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      <PaginatePortofolio
        postsPerPage={postsPerPage}
        totalPosts={dataPortofolio.length}
        currentPage={currentPage}
        paginate={paginate}
        previousPage={previousPage}
        nextPage={nextPage}
      />
      <br />
      <br />
    </section>
  );
};

export default FrontPortofolio;

interface PopFilterPortofolioProps {
  nameBtn?: string;
  dataFilter?: string[];
  viewState: (view: string) => void;
}

export const PopFilterPortofolio: React.FC<PopFilterPortofolioProps> = ({
  nameBtn = "Filter",
  dataFilter,
  viewState,
}) => {
  const [state, dispatch] = useStore();
  const { isFilterPop }: PortofolioStateInterface = state.portofolioReducer;
  type Dispatch = (action: ActionPayloadPortofolio) => void;
  const typeDispatch: Dispatch = dispatch;

  const handleFilterPop = () => {
    typeDispatch({
      type: ActionTypes.SET_POP_FILTER_PORTO,
      action: !isFilterPop,
    });
  };

  return (
    <div className="absolute top-[-2.8rem] right-5">
      <div className="inline-flex bg-white border rounded-md">
        <div className="relative">
          <Button
            onClick={() => handleFilterPop()}
            variant="default"
            className="px-10 text-dark-blue">
            {nameBtn}
          </Button>
          {isFilterPop && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute right-0 z-10 w-32 mt-4 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg">
              <div className="p-2 space-y-4">
                {dataFilter?.map((item, index) => {
                  return (
                    <div
                      onClick={() => viewState(item)}
                      key={index}
                      className="flex items-center justify-between cursor-pointer p-2 space-x-4 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700">
                      <span>{item}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

interface PaginatePortofolioProps {
  postsPerPage: number;
  totalPosts: number;
  currentPage: number;
  paginate: (pageNumber: number) => void;
  previousPage: () => void;
  nextPage: () => void;
}

const PaginatePortofolio: React.FC<PaginatePortofolioProps> = ({
  postsPerPage,
  totalPosts,
  currentPage,
  paginate,
  previousPage,
  nextPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center items-center py-10 space-x-5">
      <button
        disabled={currentPage === 1 ? true : false}
        onClick={previousPage}
        type="button"
        className="bg-slate-200 text-dark-blue rounded-l-md border-r border-gray-100 py-2 hover:bg-dark-blue hover:text-white px-3">
        <div className="flex flex-row align-middle">
          <span className="ml-2">Prev</span>
        </div>
      </button>

      <ul className="flex items-center space-x-2 font-light">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`border ${
              currentPage === number
                ? " border-slate-900 bg-slate-800 dark:bg-dark-blue text-white"
                : "border-gray-300 hover:bg-gray-200 hover:border-gray-200 bg-white text-gray-500"
            } rounded-full   `}>
            <span
              onClick={() => paginate(number)}
              className="w-8 h-8 flex items-center justify-center cursor-pointer">
              {number}
            </span>
          </li>
        ))}
      </ul>

      <button
        onClick={nextPage}
        type="button"
        className="bg-slate-200 text-dark-blue rounded-r-md py-2 border-l border-gray-200 hover:bg-dark-blue hover:text-white px-3">
        <div className="flex flex-row align-middle">
          <span className="mr-2">Next</span>
        </div>
      </button>
    </div>
  );
};

export { PaginatePortofolio };
