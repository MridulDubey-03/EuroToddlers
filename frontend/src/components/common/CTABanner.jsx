import { motion } from "framer-motion";

import Section from "./Section";
import { fadeUp } from "../../utils/animations";

// Red gradient call-to-action banner. Pass the buttons as children.
const CTABanner = ({ title, description, children }) => {
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
            {title}
          </h2>
          {description && (
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-red-50">
              {description}
            </p>
          )}

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {children}
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default CTABanner;
