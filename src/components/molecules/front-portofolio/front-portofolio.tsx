"use client";
import { useStore } from "@/store/use-store/use-store";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import HeaderCompTitle from "../../atoms/header-title-comp/header-title-comp";

import { STACKS } from "@/components/atoms/stacks-comp/stacks-comp";
import Tooltip from "@/components/atoms/tooltip-comp/tooltip-comp";
import { ResponseBodyProjectInterface } from "@/interface/interface-project";
import {
  ActionPayloadPortofolio,
  ActionTypes,
} from "@/interface/interface-store";
import { actionGetAllProject } from "@/store/action/portofolio-action";
import PaginatePortofolio from "./paginate-porto/paginate-porto";

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

  // const setHandlerView = (view: string) => {
  //   setViewState(view);
  //   typeDispatch({
  //     type: ActionTypes.SET_POP_FILTER_PORTO,
  //     action: !isFilterPop,
  //   });
  // };

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
    <section className="mt-20 mb-16">
      <HeaderCompTitle title="My Recent Work" subtitle="Portofolio" />
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
              className="h-auto bg-black bg-opacity-50 rounded-lg shadow-md px-8 py-10 text-white">
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
