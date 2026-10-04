import Section from "../../common/Section";
import SectionHeader from "../../common/SectionHeader";
import IconCard from "../../common/IconCard";
import { values } from "../../../data/about";

const VisionMission = () => {
  return (
    <Section bg="bg-slate-50">
      <SectionHeader
        badge="Vision & Mission"
        badgeColor="blue"
        title="What Guides Us Every Day"
        description="Our vision, mission and values shape how we teach, care for and inspire every child."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {values.map((value, index) => (
          <IconCard key={value.title} {...value} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default VisionMission;
