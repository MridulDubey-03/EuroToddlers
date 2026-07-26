import PublicLayout from "../Components/layouts/PublicLayout";
import AboutHero from "../Components/about/AboutHero";
import AboutSchool from "../Components/about/AboutSchool";

const About = () => {
  return (
    <PublicLayout>
      <AboutHero />
      <AboutSchool />
    </PublicLayout>
  );
};

export default About;