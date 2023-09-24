import React from "react";
import NavbarFront from "../components/molecules/nav-front/nav-front";

type LayoutProps = {
  children: React.ReactNode;
};

const LayoutePage: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className="relative h-screen flex items-center justify-center overflow-x-hidden bg-dark-blue bg-bg-pattern dark:bg-slate-800 transition-all duration-500">
      <div className="container w-full h-full">
        {children}
        <NavbarFront />
      </div>
    </main>
  );
};

export default LayoutePage;
