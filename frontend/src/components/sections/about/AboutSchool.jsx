import { motion } from "framer-motion";

import Section from "../../common/Section";
import SectionHeader from "../../common/SectionHeader";
import { school } from "../../../data/school";
import { storyHighlights } from "../../../data/about";
import { slideIn } from "../../../utils/animations";
import schoolImage from "../../../assets/images/EuroToddlerLogo.png";

const AboutSchool = () => {
  return (
    <Section>
      <div className="grid items-center gap-16 lg:grid-cols-2">
        {/* Left Image */}
        <motion.div {...slideIn("left")}>
          <img
            src={schoolImage}
            alt={school.shortName}
            className="rounded-[35px] shadow-2xl"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div {...slideIn("right")}>
          <SectionHeader
            badge="Our Story"
            title="Welcome To"
            highlight={school.shortName}
            align="left"
          />

          <p className="mt-6 inline-flex rounded-full bg-blue-50 px-4 py-1 text-sm font-semibold text-blue-600">
            Established in {school.establishedYear}
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {school.name} provides a joyful learning environment where every
            child develops academically, socially and emotionally. We believe
            every child is unique and deserves individual attention, love and
            encouragement.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Through activity-based learning, experienced teachers and modern
            classrooms, we prepare children for a bright future.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {storyHighlights.map((item) => (
              <Highlight key={item.title} {...item} />
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

function Highlight({ icon: Icon, title }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl bg-slate-50 p-5 shadow">
      <div className="rounded-full bg-red-100 p-4 text-2xl text-red-500">
        <Icon />
      </div>
      <h3 className="font-semibold text-slate-800">{title}</h3>
    </div>
  );
}

export default AboutSchool;
