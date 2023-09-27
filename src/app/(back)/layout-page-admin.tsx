import React from "react";
import NavbarFrontAdmin from "@/components/molecules/nav-admin/nav-admin";

type LayoutProps = {
  children: React.ReactNode;
};

const LayoutePageAdmin: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className="h-screen flex flex-col overflow-x-hidden bg-slate-900 dark:bg-slate-950 transition-all duration-500">
      <NavbarFrontAdmin />
      <main className="mx-auto w-full flex-1 px-3 py-4 sm:px-6 sm:py-6">
        {children}
      </main>
    </main>
  );
};

export default LayoutePageAdmin;
