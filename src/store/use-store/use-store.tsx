"use client";
import { useContext } from "react";
import Context from "../context/context";

import { InitState } from "..";

export const useStore = () => {
  // @ts-ignore
  const [state, dispatch] = useContext(Context);
  return [state, dispatch] as [typeof InitState, any];
};
