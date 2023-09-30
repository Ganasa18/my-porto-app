import LayoutePage from "@/app/layout-page";
import FrontAcademic from "@/components/molecules/front-academic/front-academic";
import FrontExperience from "@/components/molecules/front-experience/front-experience";
import FrontMySkill from "@/components/molecules/front-skills/front-skill";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portofolio | Experience",
  description: "My Portofolio",
};

const PageAcademic = () => {
  return (
    <LayoutePage>
      <FrontAcademic />
      <FrontExperience />
      <FrontMySkill />
      <br />
      <br />
    </LayoutePage>
  );
};

export default PageAcademic;
