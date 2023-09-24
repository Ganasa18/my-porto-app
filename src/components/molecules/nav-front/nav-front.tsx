"use client";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineBook, AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { BsJournalBookmarkFill } from "react-icons/bs";

import "./nav-front.css";

const NavbarFront = () => {
  const { theme } = useTheme();
  const pathname = usePathname();

  const navMenu = [
    {
      path: "/",
      icon: <AiOutlineHome />,
      name: "Home",
    },
    {
      path: "/about",
      icon: <AiOutlineUser />,
      name: "About",
    },
    {
      path: "/experience",
      icon: <AiOutlineBook />,
      name: "Experience",
    },
    {
      path: "/portofolio",
      icon: <BsJournalBookmarkFill />,
      name: "Journey",
    },
  ];

  return (
    <nav className={`${theme == "dark" ? "bg-blend-darken" : null}`}>
      {navMenu.map((item, index) => {
        return (
          <Link
            key={index}
            className={`link ${pathname === item.path ? "active" : ""}`}
            href={item.path}>
            {item.icon}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavbarFront;
