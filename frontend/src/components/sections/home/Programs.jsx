import Section from "../../common/Section";
import SectionHeader from "../../common/SectionHeader";
import IconCard from "../../common/IconCard";
import Button from "../../common/Button";
import { programs } from "../../../data/home";

const Programs = () => {
  return (
    <Section bg="bg-slate-50">
      <SectionHeader
        badge="Our Programs"
        title="Learning Designed For Every Stage"
        description="Our curriculum is carefully designed to help every child learn, explore and grow with confidence."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {programs.map(({ age, ...program }, index) => (
          <IconCard key={program.title} {...program} index={index}>
            <p className="mt-2 font-semibold text-red-500">Age : {age}</p>
            <Button to="/programs" className="mt-8">
              Learn More
            </Button>
          </IconCard>
        ))}
      </div>
    </Section>
  );
};

export default Programs;
