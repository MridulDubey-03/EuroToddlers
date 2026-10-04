import { motion } from "framer-motion";

import Section from "../../common/Section";
import SectionHeader from "../../common/SectionHeader";
import CheckList from "../../common/CheckList";
import { documents } from "../../../data/admissions";
import { slideIn } from "../../../utils/animations";

const DocumentsRequired = () => {
  return (
    <Section>
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <motion.div {...slideIn("left")}>
          <SectionHeader
            badge="Documents Required"
            badgeColor="green"
            title="Keep These"
            highlight="Documents Ready"
            description="Please bring the following documents to the school office when submitting the admission form. Originals may be requested for verification."
            align="left"
          />
        </motion.div>

        <motion.div {...slideIn("right")} className="rounded-3xl bg-white p-8 shadow-lg">
          <CheckList items={documents} />
        </motion.div>
      </div>
    </Section>
  );
};

export default DocumentsRequired;
