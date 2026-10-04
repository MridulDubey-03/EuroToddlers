import Section from "../../common/Section";
import SectionHeader from "../../common/SectionHeader";
import IconCard from "../../common/IconCard";
import { whyChoose } from "../../../data/about";

const WhyChooseAbout = () => {
  return (
    <Section>
      <SectionHeader
        badge="Why Euro Toddlers"
        title="A Place Where Children Thrive"
        description="Parents choose us because their children are happy, safe and growing in confidence every day."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {whyChoose.map((item, index) => (
          <IconCard
            key={item.title}
            {...item}
            index={index}
            className="border border-gray-100 bg-white"
          />
        ))}
      </div>
    </Section>
  );
};

export default WhyChooseAbout;
