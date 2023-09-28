"use client";
import { ActionPayloadGlobal, ActionTypes } from "@/interface/interface-store";
import { useStore } from "@/store/use-store/use-store";
import { useEffect } from "react";
import HeaderFront from "../components/molecules/header-front/header_front";
import LayoutePage from "./layout-page";
import { actionGetAllProject } from "@/store/action/portofolio-action";
import LoadingScreen from "@/components/molecules/loading-front/loading-front";

export default function Home() {
  const [state, dispatch] = useStore();
  const { isLoading } = state.globalReducer;
  type Dispatch = (action: ActionPayloadGlobal) => void;
  const typeDispatch: Dispatch = dispatch;

  const handleTimeOutLoading = () => {
    setTimeout(async () => {
      await actionGetAllProject(dispatch);
      typeDispatch({ type: ActionTypes.SET_LOADING, action: false });
    }, 5000);
  };

  useEffect(() => {
    handleTimeOutLoading();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{isLoading ? <LoadingScreen /> : <MainContent />}</>;
}

function MainContent() {
  return (
    <LayoutePage>
      <HeaderFront />
      <br />
    </LayoutePage>
  );
}
