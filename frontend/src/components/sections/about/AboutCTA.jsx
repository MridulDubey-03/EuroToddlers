import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

import Section from "../../common/Section";
import Button from "../../common/Button";
import { fadeUp } from "../../../utils/animations";

const AboutCTA = () => {
  return (
    <Section padding="pb-24">
      <motion.div
        {...fadeUp}
        className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-red-500 to-pink-500 px-8 py-16 text-center shadow-2xl lg:px-16"
      >
        {/* Decorative Circles */}
        <div className="absolute -top-16 -left-16 h-56 w-56 rounded-full bg-white/10"></div>
        <div className="absolute -right-10 -bottom-20 h-64 w-64 rounded-full bg-white/10"></div>

        <div className="relative">
          <h2 className="text-4xl font-extrabold text-white lg:text-5xl">
            Give Your Child The Best Start
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-red-50">
            Admissions are open for 2026–27. Visit our campus, meet our
            teachers and see why families trust Euro Toddlers.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button to="/admissions" variant="light" size="lg" icon={FaArrowRight}>
              Apply For Admission
            </Button>
            <Button to="/contact" variant="outline-light" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default AboutCTA;
