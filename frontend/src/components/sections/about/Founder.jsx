import { motion } from "framer-motion";
import { FaQuoteLeft, FaUserTie, FaUserGraduate } from "react-icons/fa";

import Section from "../../common/Section";
import SectionHeader from "../../common/SectionHeader";
import { school } from "../../../data/school";
import { slideIn, staggerReveal } from "../../../utils/animations";

const Founder = () => {
  const { founder, principal, establishedYear } = school;

  return (
    <Section bg="bg-slate-50">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        {/* Founder Card */}
        <motion.div {...slideIn("left")} className="relative mx-auto w-full max-w-md">
          <div className="absolute inset-0 rounded-[40px] bg-red-200 opacity-30 blur-3xl"></div>

          <div className="relative rounded-[40px] bg-white p-10 text-center shadow-2xl">
            <span className="absolute -top-4 right-8 rounded-full bg-red-500 px-5 py-2 text-sm font-bold text-white shadow-lg">
              Est. {establishedYear}
            </span>

            <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-red-100 to-blue-100 text-6xl text-red-500">
              <FaUserTie />
            </div>

            <h3 className="mt-8 text-3xl font-extrabold text-slate-800">
              {founder.name}
            </h3>
            <p className="mt-2 font-semibold text-red-500">{founder.role}</p>
            <p className="mt-1 text-sm text-slate-500">{school.name}</p>
          </div>
        </motion.div>

        {/* Founder Message */}
        <motion.div {...slideIn("right")}>
          <SectionHeader
            badge="Meet Our Founder"
            title="The Heart Behind"
            highlight={school.shortName}
            align="left"
          />

          <div className="mt-8 rounded-3xl bg-white p-8 shadow-lg">
            <FaQuoteLeft className="text-4xl text-red-200" />
            <p className="mt-4 text-lg leading-8 text-slate-600 italic">
              {founder.message}
            </p>
            <p className="mt-6 font-bold text-slate-800">— {founder.name}</p>
          </div>

          {/* Principal */}
          <motion.div
            {...staggerReveal(1)}
            className="mt-6 flex items-center gap-5 rounded-3xl bg-white p-6 shadow-lg"
          >
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-100 text-3xl text-blue-500">
              <FaUserGraduate />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-800">
                {principal.name}
              </h4>
              <p className="text-sm font-semibold text-blue-500">
                {principal.role}
              </p>
              <p className="mt-2 leading-7 text-slate-600">{principal.message}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Founder;
