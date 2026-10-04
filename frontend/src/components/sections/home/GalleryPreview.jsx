import { motion } from "framer-motion";

import Section from "../../common/Section";
import SectionHeader from "../../common/SectionHeader";
import Button from "../../common/Button";
import { galleryImages } from "../../../data/home";
import { fadeIn, staggerReveal } from "../../../utils/animations";

const GalleryPreview = () => {
  return (
    <Section>
      <SectionHeader
        badge="Our Gallery"
        title="Every Smile Tells A Story"
        description="Explore joyful moments, exciting activities, creative classrooms, and unforgettable memories at Euro Toddlers."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {galleryImages.map((item, index) => (
          <motion.div
            key={item.title}
            {...staggerReveal(index)}
            className="group relative overflow-hidden rounded-3xl shadow-lg"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 flex items-end bg-black/40 opacity-0 transition duration-300 group-hover:opacity-100">
              <h3 className="p-6 text-xl font-semibold text-white">
                {item.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div {...fadeIn} className="mt-14 text-center">
        <Button to="/gallery" size="lg">
          View Full Gallery
        </Button>
      </motion.div>
    </Section>
  );
};

export default GalleryPreview;
