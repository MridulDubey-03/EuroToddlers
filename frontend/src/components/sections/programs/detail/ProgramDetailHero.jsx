import PageHero from "../../../common/PageHero";
import heroImage from "../../../../assets/images/EuroToddlerLogo.png";

const ProgramDetailHero = ({ program }) => {
  return (
    <PageHero
      badge={`Age : ${program.age}`}
      title={program.title}
      highlight="Program"
      description={program.overview}
      parent={{ label: "Programs", to: "/programs" }}
      breadcrumb={program.title}
      image={heroImage}
    />
  );
};

export default ProgramDetailHero;
