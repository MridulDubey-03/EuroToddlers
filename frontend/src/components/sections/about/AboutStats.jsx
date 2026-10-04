import { motion } from "framer-motion";

import Section from "../../common/Section";
import StatCard from "../../common/StatCard";
import { school, stats } from "../../../data/school";
import { staggerReveal } from "../../../utils/animations";

const AboutStats = () => {
  const items = [
    { value: school.establishedYear, label: "Year Established", color: "text-purple-500" },
    ...stats,
  ];

  return (
    <Section padding="py-16">
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
        {items.map((item, index) => (
          <motion.div key={item.label} {...staggerReveal(index)}>
            <StatCard {...item} className="p-8" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default AboutStats;
