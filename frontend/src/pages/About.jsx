import PublicLayout from "../layouts/PublicLayout";

import AboutHero from "../components/sections/about/AboutHero";
import AboutSchool from "../components/sections/about/AboutSchool";
import Founder from "../components/sections/about/Founder";
import AboutStats from "../components/sections/about/AboutStats";
import VisionMission from "../components/sections/about/VisionMission";
import Timeline from "../components/sections/about/Timeline";
import Teachers from "../components/sections/about/Teachers";
import WhyChooseAbout from "../components/sections/about/WhyChooseAbout";
import AboutCTA from "../components/sections/about/AboutCTA";

const About = () => {
  return (
    <PublicLayout>
      <AboutHero />
      <AboutSchool />
      <Founder />
      <AboutStats />
      <VisionMission />
      <Timeline />
      <Teachers />
      <WhyChooseAbout />
      <AboutCTA />
    </PublicLayout>
  );
};

export default About;
