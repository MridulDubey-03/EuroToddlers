import { motion } from "framer-motion";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

import Section from "../../common/Section";
import SectionHeader from "../../common/SectionHeader";
import ProgramCard from "../../common/ProgramCard";
import Button from "../../common/Button";
import { programs } from "../../../data/programs";
import { ageCutoffDate } from "../../../data/admissions";
import { phoneHref, whatsappChatUrl } from "../../../data/contact";
import { fadeUp } from "../../../utils/animations";

const Eligibility = () => {
  return (
    <Section bg="bg-slate-50">
      <SectionHeader
        badge="Programs & Eligibility"
        badgeColor="blue"
        title="Programs & Age Criteria"
        description={`Choose the right program for your child. Age is calculated as on ${ageCutoffDate}.`}
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {programs.map((program, index) => (
          <ProgramCard
            key={program.slug}
            program={program}
            index={index}
            showDescription={false}
          />
        ))}
      </div>

      {/* Fee Note */}
      <motion.div
        {...fadeUp}
        className="mt-12 flex flex-col items-center justify-between gap-6 rounded-3xl bg-white p-8 shadow-lg md:flex-row"
      >
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-slate-800">Fee Details</h3>
          <p className="mt-2 text-slate-600">
            The fee structure for each program is listed on its page. Tap a
            program above, or contact us with any questions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button href={phoneHref} icon={FaPhoneAlt}>
            Call Us
          </Button>
          <Button href={whatsappChatUrl} variant="outline" icon={FaWhatsapp}>
            WhatsApp
          </Button>
        </div>
      </motion.div>
    </Section>
  );
};

export default Eligibility;
