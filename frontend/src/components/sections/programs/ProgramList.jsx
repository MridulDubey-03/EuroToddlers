import Section from "../../common/Section";
import SectionHeader from "../../common/SectionHeader";
import ProgramCard from "../../common/ProgramCard";
import { programs } from "../../../data/programs";

const ProgramList = () => {
  return (
    <Section bg="bg-slate-50">
      <SectionHeader
        badge="Choose A Program"
        title="Find The Right Fit For Your Child"
        description="Tap a program to see its curriculum, daily timing, fee structure and download the syllabus."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {programs.map((program, index) => (
          <ProgramCard key={program.slug} program={program} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default ProgramList;
