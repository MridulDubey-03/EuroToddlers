import PublicLayout from "../layouts/PublicLayout";
import { motion } from "framer-motion";

import Section from "../components/common/Section";
import SectionHeader from "../components/common/SectionHeader";
import { galleryImages } from "../data/home";
import { staggerReveal } from "../utils/animations";

const Gallery = () => {
  return (
    <PublicLayout>
      <Section>
        <SectionHeader
          badge="Our Gallery"
          title="Moments at Euro Toddlers"
          description="A look at the celebrations and special moments shared at our school."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((item, index) => (
            <motion.div
              key={item.image}
              {...staggerReveal(index)}
              className="group relative overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-end bg-black/40 opacity-0 transition duration-300 group-hover:opacity-100">
                <h2 className="p-6 text-xl font-semibold text-white">
                  {item.title}
                </h2>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </PublicLayout>
  );
};

export default Gallery;
