import { motion } from "framer-motion";
import { FaBirthdayCake, FaClock, FaUsers, FaUserFriends } from "react-icons/fa";

import Section from "../../../common/Section";
import SectionHeader from "../../../common/SectionHeader";
import CheckList from "../../../common/CheckList";
import { slideIn } from "../../../../utils/animations";

const ProgramOverview = ({ program }) => {
  const facts = [
    { icon: FaBirthdayCake, label: "Age Group", value: program.age, color: "bg-pink-100 text-pink-500" },
    { icon: FaClock, label: "Timing", value: program.facts.timing, color: "bg-blue-100 text-blue-500" },
    { icon: FaUsers, label: "Class Size", value: program.facts.classSize, color: "bg-green-100 text-green-500" },
    { icon: FaUserFriends, label: "Teacher : Child Ratio", value: program.facts.ratio, color: "bg-yellow-100 text-yellow-500" },
  ];

  return (
    <Section>
      <div className="grid gap-16 lg:grid-cols-2">
        {/* Highlights */}
        <motion.div {...slideIn("left")}>
          <SectionHeader
            badge="Program Highlights"
            title="What Your Child"
            highlight="Will Learn"
            description={program.description}
            align="left"
          />

          <div className="mt-10">
            <CheckList items={program.highlights} />
          </div>
        </motion.div>

        {/* Quick Facts */}
        <motion.div {...slideIn("right")} className="self-center">
          <div className="rounded-3xl bg-white p-8 shadow-2xl lg:p-10">
            <h3 className="text-2xl font-bold text-slate-800">Quick Facts</h3>

            <dl className="mt-8 space-y-5">
              {facts.map(({ icon: Icon, label, value, color }) => (
                <div key={label} className="flex items-center gap-5">
                  <div className={`rounded-2xl p-4 text-2xl ${color}`}>
                    <Icon />
                  </div>
                  <div>
                    <dt className="text-sm text-slate-500">{label}</dt>
                    <dd className="text-lg font-bold text-slate-800">{value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default ProgramOverview;
