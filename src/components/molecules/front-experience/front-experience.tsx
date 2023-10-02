import HeaderCompTitle from "../../atoms/header-title-comp/header-title-comp";
import PageExperienceView from "./detail-experience/front-detail-experience";

const FrontExperience = () => {
  return (
    <section id="experience" className="mt-20">
      <HeaderCompTitle title="My Career Journey" subtitle="Experience" />
      <PageExperienceView />
      <br />
      <br />
    </section>
  );
};

export default FrontExperience;
