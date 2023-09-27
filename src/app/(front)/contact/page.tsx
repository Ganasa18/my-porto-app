import LayoutePage from "@/app/layout-page";
import FrontContactMe from "@/components/molecules/front-contact/front-contact";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Portofolio | Contact Me",
  description: "My Portofolio",
};

const PageContactMe = () => {
  return (
    <LayoutePage>
      <FrontContactMe />
      <br />
      <br />
      <br />
      <br />
    </LayoutePage>
  );
};

export default PageContactMe;
