import Section from "../../common/Section";
import SectionHeader from "../../common/SectionHeader";
import Accordion from "../../common/Accordion";
import { admissionFaqs } from "../../../data/admissions";

const AdmissionFAQ = () => {
  return (
    <Section container="max-w-4xl">
      <SectionHeader
        badge="Admission FAQs"
        badgeColor="blue"
        title="Questions About Admission?"
        description="Answers to the questions parents ask most often about joining Euro Toddlers."
      />

      <div className="mt-14">
        <Accordion items={admissionFaqs} />
      </div>
    </Section>
  );
};

export default AdmissionFAQ;
