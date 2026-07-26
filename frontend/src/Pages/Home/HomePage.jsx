import PublicLayout from "../../Components/layouts/PublicLayout";

import Hero from "../../Components/sections/Hero";
import WhyChooseUs from "../../Components/sections/WhyChooseUs";
import Programs from "../../Components/sections/Programs";
import LearningMethodology from "../../Components/sections/LearningMethodology";
import Facilities from "../../Components/sections/Facilities";
import GalleryPreview from "../../Components/sections/GalleryPreview";

const Home = () => {
  return (
    <PublicLayout>
      <Hero />
      <WhyChooseUs />
      <Programs />
      <LearningMethodology />
      <Facilities />
      <GalleryPreview />
    </PublicLayout>
  );
};

export default Home;