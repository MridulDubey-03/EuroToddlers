import Section from "../../common/Section";
import SectionHeader from "../../common/SectionHeader";
import IconCard from "../../common/IconCard";
import { methods } from "../../../data/home";

const LearningMethodology = () => {
  return (
    <Section>
      <SectionHeader
        badge="Learning Methodology"
        badgeColor="blue"
        title="Learning Beyond The Classroom"
        description="We believe children learn best through exploration, creativity, play and real-life experiences."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {methods.map((method, index) => (
          <IconCard
            key={method.title}
            {...method}
            index={index}
            className="bg-slate-50"
          />
        ))}
      </div>
    </Section>
  );
};

export default LearningMethodology;
