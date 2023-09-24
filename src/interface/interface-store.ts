export interface Action {
  type: ActionTypes;
  payload?: any;
}

export type ActionPayloadGlobal =
  | {
      type: ActionTypes.SET_LOADING;
      action: boolean;
    }
  | {
      type: ActionTypes.SET_NAV_MENU;
      action: string;
    };

export type ActionPayloadPortofolio =
  | {
      type: ActionTypes.SET_POP_FILTER_PORTO;
      action: boolean;
    }
  | {
      type: ActionTypes.SET_DATA_PORTOFOLIO;
      action: string[];
    };

export interface GlobalStateInterface {
  isLoading: boolean;
  userLogin: object;
  activeNav?: string;
}

export interface PortofolioStateInterface {
  isFilterPop: boolean;
}

export enum ActionTypes {
  SET_LOADING = "SET_LOADING",
  SET_NAV_MENU = "SET_NAV_MENU",
  SET_POP_FILTER_PORTO = "SET_POP_FILTER_PORTO",
  SET_DATA_PORTOFOLIO = "SET_DATA_PORTOFOLIO",
}
