import HeaderCompTitle from "../../atoms/header-title-comp/header-title-comp";
import PageExperienceView from "./detail-experience/front-detail-experience";

const FrontExperience = () => {
  return (
    <section id="experience" className="mt-20">
      <HeaderCompTitle title="What My Experience" subtitle="My Experience" />
      <PageExperienceView />
      <br />
      <br />
    </section>
  );
};

export default FrontExperience;
