import Section from "../../common/Section";
import SectionHeader from "../../common/SectionHeader";
import IconCard from "../../common/IconCard";
import { features } from "../../../data/home";

const WhyChooseUs = () => {
  return (
    <Section>
      <SectionHeader
        badge="Why Choose Us?"
        title="Why Parents Love Euro Toddlers"
        description="We provide a joyful, safe and inspiring environment where every child learns through play, creativity and exploration."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <IconCard
            key={feature.title}
            {...feature}
            index={index}
            className="border border-gray-100 bg-white"
          />
        ))}
      </div>
    </Section>
  );
};

export default WhyChooseUs;
