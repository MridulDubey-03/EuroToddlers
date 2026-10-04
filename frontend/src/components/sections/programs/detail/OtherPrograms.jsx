import Section from "../../../common/Section";
import SectionHeader from "../../../common/SectionHeader";
import ProgramCard from "../../../common/ProgramCard";
import { programs } from "../../../../data/programs";

const OtherPrograms = ({ program }) => {
  const others = programs.filter((p) => p.slug !== program.slug);

  return (
    <Section bg="bg-slate-50">
      <SectionHeader
        badge="Explore More"
        title="Other Programs"
        description="Looking for a different age group? Explore our other programs."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {others.map((other, index) => (
          <ProgramCard key={other.slug} program={other} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default OtherPrograms;
