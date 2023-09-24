import {
  ActionTypes,
  PortofolioStateInterface,
} from "../../interface/interface-store";

const initPortofolio = {
  isFilterPop: false,
  dataPortofolio: [],
};

const portofolioReducer = (state: PortofolioStateInterface, payload: any) => {
  switch (payload.type) {
    case ActionTypes.SET_POP_FILTER_PORTO:
      return {
        ...state,
        isFilterPop: payload.action,
      };
    case ActionTypes.SET_DATA_PORTOFOLIO:
      return {
        ...state,
        dataPortofolio: payload.action,
      };

    default:
      return state;
  }
};

export default portofolioReducer;
export { initPortofolio };
