import { userData } from "@/assets/static";
import Image from "next/image";
import { AiOutlineFileDone } from "react-icons/ai";
import { FaMobileAlt } from "react-icons/fa";
import { MdOutlineWebAsset } from "react-icons/md";
import Me from "../../../assets/me-about.jpg";
import FrontCardAbout from "../../atoms/front-card-about/front-card-about";
import HeaderCompTitle from "../../atoms/header-title-comp/header-title-comp";
import "./front-about.css";

const FrontAbout = () => {
  const ListCard = [
    {
      id: 1,
      title: "Web Development",
      content:
        "Membuat aplikasi berbasis web dengan bahasa pemrograman php, javascript, python dengan framework Laravel, CI, React, Django ",
      icon: <MdOutlineWebAsset className="about__icon dark:fill-white" />,
    },
    {
      id: 2,
      title: "Mobile Development",
      content:
        "Membuat aplikasi berbasis mobile dengan framwork React Native, Flutter ",
      icon: <FaMobileAlt className="about__icon dark:fill-white" />,
    },
    {
      id: 3,
      title: "Tools",
      content:
        "Membuat Tools penunjang aplikasi dengan bahasa python atau javascript",
      icon: <AiOutlineFileDone className="about__icon dark:fill-white" />,
    },
  ];

  return (
    <section id="about" className="mt-20">
      <HeaderCompTitle title="Get To Know" subtitle="About Me" />
      <div className="about__container mt-20">
        <div className="about__me">
          <div className="about__me-image">
            <Image className="block w-full object-cover" src={Me} alt="me" />
          </div>
        </div>

        <div className="text-slate-300 space-y-5 mt-10 md:py-10 sm:py-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-6 px-5">
            {ListCard.map((item) => {
              return (
                <FrontCardAbout
                  key={item.id}
                  title={item.title}
                  content={item.content}
                  icon={item.icon}
                />
              );
            })}
          </div>
          <p className="px-6 text-md py-5">
            Perkenalkan nama saya{" "}
            <span className="font-bold text-white">{userData.fullName}</span>,
            {userData.myInfo}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FrontAbout;
