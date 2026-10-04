import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

import Section from "../../../common/Section";
import SectionHeader from "../../../common/SectionHeader";
import CheckList from "../../../common/CheckList";
import Button from "../../../common/Button";
import { feeIncludes } from "../../../../data/programs";
import { admissionSession } from "../../../../data/admissions";
import { slideIn } from "../../../../utils/animations";

const ProgramFees = ({ program }) => {
  const includes = program.feeIncludes ?? feeIncludes;

  return (
    <Section>
      <SectionHeader
        badge="Fee Structure"
        badgeColor="green"
        title={`${program.title} Fees`}
        description={`Fee structure for the ${admissionSession} academic year.`}
      />

      <div className="mt-16 grid gap-8 lg:grid-cols-2">
        {/* Fee Table */}
        <motion.div {...slideIn("left")} className="rounded-3xl bg-white p-8 shadow-2xl lg:p-10">
          <h3 className="text-2xl font-bold text-slate-800">Fee Details</h3>

          <table className="mt-8 w-full text-left">
            <thead>
              <tr className="border-b-2 border-slate-100 text-sm text-slate-500 uppercase">
                <th className="pb-3 font-semibold">Fee Type</th>
                <th className="pb-3 text-right font-semibold">Amount</th>
              </tr>
            </thead>
            <tbody>
              {program.fees.items.map((item) => (
                <tr key={item.label} className="border-b border-slate-100">
                  <td className="py-4 font-medium text-slate-700">{item.label}</td>
                  <td className="py-4 text-right text-lg font-bold text-red-500">
                    {item.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {program.fees.note && (
            <p className="mt-6 rounded-2xl bg-blue-50 p-4 text-sm text-blue-700">
              {program.fees.note}
            </p>
          )}
        </motion.div>

        {/* What's Included */}
        <motion.div {...slideIn("right")} className="rounded-3xl bg-white p-8 shadow-2xl lg:p-10">
          <h3 className="text-2xl font-bold text-slate-800">What&apos;s Included</h3>
          <div className="mt-8">
            <CheckList items={includes} />
          </div>
        </motion.div>
      </div>

      <div className="mt-14 text-center">
        <Button
          to={`/admissions?program=${encodeURIComponent(program.title)}#apply`}
          size="lg"
          icon={FaArrowRight}
        >
          Apply For {program.title}
        </Button>
      </div>
    </Section>
  );
};

export default ProgramFees;
