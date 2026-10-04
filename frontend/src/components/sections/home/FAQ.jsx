import Section from "../../common/Section";
import SectionHeader from "../../common/SectionHeader";
import Accordion from "../../common/Accordion";
import { faqs } from "../../../data/home";

const FAQ = () => {
  return (
    <Section container="max-w-4xl">
      <SectionHeader
        badge="Frequently Asked Questions"
        badgeColor="blue"
        title="Have Questions?"
        description="Find answers to some of the most common questions parents ask about Euro Toddlers."
      />

      <div className="mt-14">
        <Accordion items={faqs} />
      </div>
    </Section>
  );
};

export default FAQ;
