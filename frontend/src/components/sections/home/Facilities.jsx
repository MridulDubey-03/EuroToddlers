import Section from "../../common/Section";
import SectionHeader from "../../common/SectionHeader";
import IconCard from "../../common/IconCard";
import { facilities } from "../../../data/home";

const Facilities = () => {
  return (
    <Section bg="bg-slate-50">
      <SectionHeader
        badge="Campus Facilities"
        badgeColor="green"
        title="Everything Your Child Needs"
        description="We provide a safe, modern and joyful learning environment where children can grow with confidence every day."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {facilities.map((facility, index) => (
          <IconCard key={facility.title} {...facility} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default Facilities;
