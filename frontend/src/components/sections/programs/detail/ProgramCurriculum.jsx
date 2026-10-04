import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

import Section from "../../../common/Section";
import SectionHeader from "../../../common/SectionHeader";
import IconCard from "../../../common/IconCard";
import Button from "../../../common/Button";
import { fadeIn } from "../../../../utils/animations";

const ProgramCurriculum = ({ program }) => {
  return (
    <Section bg="bg-slate-50">
      <SectionHeader
        badge="Curriculum & Syllabus"
        badgeColor="blue"
        title="What We Cover"
        description={`An overview of the ${program.title} curriculum. Download the syllabus for the complete term-wise plan.`}
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {program.curriculum.map((area, index) => (
          <IconCard
            key={area.title}
            icon={area.icon}
            title={area.title}
            color={area.color}
            index={index}
          >
            <ul className="mt-4 space-y-2 text-slate-600">
              {area.topics.map((topic) => (
                <li key={topic} className="flex gap-2">
                  <span className="text-red-400">•</span>
                  {topic}
                </li>
              ))}
            </ul>
          </IconCard>
        ))}
      </div>

      <motion.div {...fadeIn} className="mt-14 text-center">
        {program.syllabusFile ? (
          <Button
            href={program.syllabusFile}
            download={`${program.slug}-syllabus.pdf`}
            size="lg"
            icon={FaDownload}
          >
            Download {program.title} Syllabus
          </Button>
        ) : (
          <Button size="lg" icon={FaDownload} disabled>
            Syllabus Coming Soon
          </Button>
        )}
      </motion.div>
    </Section>
  );
};

export default ProgramCurriculum;
