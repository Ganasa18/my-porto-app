"use client";
import Button from "@/components/atoms/button/button";
import {
  ActionPayloadPortofolio,
  ActionTypes,
  PortofolioStateInterface,
} from "@/interface/interface-store";
import { useStore } from "@/store/use-store/use-store";
import { motion } from "framer-motion";

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
