import LayoutePage from "@/app/layout-page";
import FrontAbout from "@/components/molecules/front-about/front-about";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portofolio | About",
  description: "My Portofolio",
};

const PageAbout = () => {
  return (
    <>
      <LayoutePage>
        <FrontAbout />
      </LayoutePage>
    </>
  );
};

export default PageAbout;
