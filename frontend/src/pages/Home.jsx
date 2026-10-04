import PublicLayout from "../layouts/PublicLayout";

import Hero from "../components/sections/home/Hero";
import WhyChooseUs from "../components/sections/home/WhyChooseUs";
import Programs from "../components/sections/home/Programs";
import LearningMethodology from "../components/sections/home/LearningMethodology";
import Facilities from "../components/sections/home/Facilities";
import GalleryPreview from "../components/sections/home/GalleryPreview";
import Testimonials from "../components/sections/home/Testimonials";
import FAQ from "../components/sections/home/FAQ";

const Home = () => {
  return (
    <PublicLayout>
      <Hero />
      <WhyChooseUs />
      <Programs />
      <LearningMethodology />
      <Facilities />
      <GalleryPreview />
      <Testimonials />
      <FAQ />
    </PublicLayout>
  );
};

export default Home;
