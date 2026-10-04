import { motion } from "framer-motion";
import { FaChalkboardTeacher } from "react-icons/fa";

import Section from "../../common/Section";
import SectionHeader from "../../common/SectionHeader";
import { teachers } from "../../../data/about";
import { staggerReveal, hoverLift } from "../../../utils/animations";

const Teachers = () => {
  return (
    <Section bg="bg-slate-50">
      <SectionHeader
        badge="Our Teachers"
        badgeColor="green"
        title="Caring Teachers, Happy Children"
        description="Our qualified and loving teachers give every child the attention and encouragement they need."
      />

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {teachers.map((teacher, index) => (
          <motion.div
            key={`${teacher.role}-${index}`}
            {...staggerReveal(index)}
            whileHover={hoverLift}
            className="rounded-3xl bg-white p-8 text-center shadow-lg"
          >
            <div
              className={`mx-auto flex h-24 w-24 items-center justify-center rounded-full text-4xl ${teacher.color}`}
            >
              <FaChalkboardTeacher />
            </div>
            <h3 className="mt-6 text-xl font-bold text-slate-800">
              {teacher.name}
            </h3>
            <p className="mt-1 font-semibold text-red-500">{teacher.role}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Teachers;
