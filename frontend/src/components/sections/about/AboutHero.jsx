import PageHero from "../../common/PageHero";
import heroImage from "../../../assets/images/EuroToddlerLogo.png";

const AboutHero = () => {
  return (
    <PageHero
      badge="About Euro Toddlers"
      title="Building Strong Foundations"
      highlight="For Lifelong Learning"
      description="At Euro Toddlers International Pre School, every child is encouraged to learn, discover and grow through joyful experiences in a safe and nurturing environment."
      breadcrumb="About Us"
      image={heroImage}
    />
  );
};

export default AboutHero;
