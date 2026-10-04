import Section from "../../common/Section";
import SectionHeader from "../../common/SectionHeader";
import IconCard from "../../common/IconCard";
import { steps } from "../../../data/admissions";

const AdmissionProcess = () => {
  return (
    <Section>
      <SectionHeader
        badge="Admission Process"
        title="How To Apply"
        description="Joining Euro Toddlers is simple. Follow these four easy steps to secure your child's seat."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <IconCard key={step.title} {...step} index={index}>
            <p className="mt-6 text-sm font-bold tracking-wider text-red-500 uppercase">
              Step {index + 1}
            </p>
          </IconCard>
        ))}
      </div>
    </Section>
  );
};

export default AdmissionProcess;
