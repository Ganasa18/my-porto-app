import React from "react";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import "./header-social.css";

const HeaderSocial = () => {
  const socialMedia = [
    {
      icon: <BsLinkedin className="dark:fill-white" />,
      url: "https://www.linkedin.com/in/yosua-liharja-0a264927b/",
    },
    {
      icon: <FaGithub className="dark:fill-white" />,
      url: "https://github.com/ganasa18",
    },
    {
      icon: <BsInstagram className="dark:fill-white" />,
      url: "https://www.instagram.com/ganasasurem/",
    },
  ];

  return (
    <div className="header__socials">
      {socialMedia.map((item, index) => {
        return (
          <a key={index} href={item.url} target="_blank">
            {item.icon}
          </a>
        );
      })}
    </div>
  );
};

export default HeaderSocial;
