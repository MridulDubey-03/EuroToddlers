import Section from "../../common/Section";
import SectionHeader from "../../common/SectionHeader";
import Accordion from "../../common/Accordion";
import { contactFaqs } from "../../../data/contact";

const FAQ = () => {
  return (
    <Section container="max-w-4xl">
      <SectionHeader
        badge="Common Questions"
        badgeColor="blue"
        title="Before You Contact Us"
        description="Quick answers to questions parents often ask about visits, admissions and transport."
      />

      <div className="mt-14">
        <Accordion items={contactFaqs} />
      </div>
    </Section>
  );
};

export default FAQ;
