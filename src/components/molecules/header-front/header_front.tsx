"use client";
import { userData } from "@/assets/static";
import { initGA, logPageView } from "@/hook/use-ga";
import Image from "next/image";
import { useEffect } from "react";
import Me from "../../../assets/me.png";
import ToggleThemeFront from "../../atoms/toggle-theme/toggle-theme";
import Cta from "./call-to-action/cta";
import HeaderSocial from "./header-social/header-social";
import "./header_front.css";

const HeaderFront = () => {
  return (
    <header className="h-screen mt-6 overflow-hidden">
      <div className="text-center h-full relative">
        <ToggleThemeFront />
        <h5 className="font-medium text-sm text-white pb-4">Hello I`m</h5>

        <div className="inline-block text-light-blue dark:text-white font-bold">
          <p className="typing__text text-1xl sm:text-2xl">
            {userData.fullName}
          </p>
        </div>
        <h5 className="text-slate-300 font-bold py-5 text-sm">
          Fullstack Developer
        </h5>
        <Cta />
        <HeaderSocial />
        <div className="me">
          <Image src={Me} alt="me" className="animate-header-me" />
        </div>
      </div>
    </header>
  );
};

export default HeaderFront;
