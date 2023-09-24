"use client";
import { ActionPayloadGlobal, ActionTypes } from "@/interface/interface-store";
import { useStore } from "@/store/use-store/use-store";
import { useEffect } from "react";
import HeaderFront from "../components/molecules/header-front/header_front";
import "./globals.css";
import LayoutePage from "./layout-page";
import { actionGetAllProject } from "@/store/action/portofolio-action";

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

function LoadingScreen() {
  return (
    <>
      <section className="relative flex h-screen items-center bg-black justify-center">
        <h2 className="text-white sm:text-[11rem] md:text-[12rem] cursor-default">
          Loading...
        </h2>
        <div className="light"></div>
      </section>
    </>
  );
}

function MainContent() {
  return (
    <LayoutePage>
      <HeaderFront />
    </LayoutePage>
  );
}
