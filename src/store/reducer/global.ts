import {
  ActionTypes,
  GlobalStateInterface,
} from "../../interface/interface-store";

const initGlobal = {
  isLoading: true,
  userLogin: {},
  activeNav: "#",
};

const globalReducer = (state: GlobalStateInterface, payload: any) => {
  switch (payload.type) {
    case ActionTypes.SET_LOADING:
      return {
        ...state,
        isLoading: payload.action,
      };
    case ActionTypes.SET_LOADING:
      return {
        ...state,
        activeNav: payload.action,
      };
    default:
      return state;
  }
};

export default globalReducer;
export { initGlobal };
