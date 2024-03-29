"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavbarFrontAdmin = () => {
  const pathname = usePathname();
  const listMenu = [
    {
      name: "Overview",
      path: "/dashboard",
    },
    {
      name: "Content",
      path: "/content",
    },
  ];

  return (
    <div className="relative z-40 border-b-[1px] bg-primary px-3 text-primary sm:px-6">
      <header className="px-16 relative mx-auto">
        <div className="flex items-center pb-2 pt-5 md:pb-3 md:pt-4">
          <div className="flex flex-grow items-center pt-3">Logo</div>
          <div className="flex flex-none items-center gap-x-2">Contact Us</div>
        </div>
        <div className="-mb-px flex space-x-3 overflow-x-auto sm:space-x-0">
          {listMenu.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.path}
                className={`whitespace-nowrap border-b pb-2 pt-1 leading-none text-primary transition sm:px-2 ${
                  pathname == item.path ? "border-blue-600" : ""
                }  font-semibold hover:border-blue-600`}>
                {item.name}
              </Link>
            );
          })}
        </div>
      </header>
    </div>
  );
};

export default NavbarFrontAdmin;
