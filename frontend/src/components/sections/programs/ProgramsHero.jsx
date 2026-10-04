import PageHero from "../../common/PageHero";
import heroImage from "../../../assets/images/EuroToddlerLogo.png";

const ProgramsHero = () => {
  return (
    <PageHero
      badge="Our Programs"
      title="Learning Designed"
      highlight="For Every Stage"
      description="From first steps in Play Group to confident Senior KG graduates, each program is built around your child's age, curiosity and growth."
      breadcrumb="Programs"
      image={heroImage}
    />
  );
};

export default ProgramsHero;
