import { motion } from "framer-motion";

import Section from "../../common/Section";
import SectionHeader from "../../common/SectionHeader";
import { timeline } from "../../../data/about";
import { staggerReveal } from "../../../utils/animations";

const Timeline = () => {
  return (
    <Section container="max-w-4xl">
      <SectionHeader
        badge="Our Journey"
        title="Milestones Along The Way"
        description="From our first classroom to the school we are today, every step has been about the children."
      />

      <ol className="relative mt-16 border-l-4 border-red-100 pl-10">
        {timeline.map((item, index) => (
          <motion.li
            key={`${item.year}-${index}`}
            {...staggerReveal(index)}
            className="relative mb-12 last:mb-0"
          >
            <span className="absolute top-1 -left-[3.15rem] h-6 w-6 rounded-full border-4 border-white bg-red-500 shadow"></span>

            <span className="inline-flex rounded-full bg-red-100 px-4 py-1 text-sm font-bold text-red-600">
              {item.year}
            </span>
            <h3 className="mt-3 text-2xl font-bold text-slate-800">
              {item.title}
            </h3>
            <p className="mt-2 leading-7 text-slate-600">{item.description}</p>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
};

export default Timeline;
