import { motion } from "framer-motion";

import Section from "../../common/Section";
import SectionHeader from "../../common/SectionHeader";
import IconCard from "../../common/IconCard";
import EnquiryForm from "./EnquiryForm";
import { contactCards } from "../../../data/contact";
import { slideIn } from "../../../utils/animations";

const ContactInfo = () => {
  return (
    <Section>
      <div className="grid gap-16 lg:grid-cols-2">
        {/* Contact Details */}
        <motion.div {...slideIn("left")}>
          <SectionHeader
            badge="Get In Touch"
            title="Reach Out To"
            highlight="Euro Toddlers"
            description="Call, email or visit us. You can also send an enquiry and we will get back to you on WhatsApp."
            align="left"
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {contactCards.map(({ lines, href, ...card }, index) => (
              <IconCard key={card.title} {...card} index={index}>
                <div className="mt-3 space-y-1 leading-7 break-words text-slate-600">
                  {lines.map((line) =>
                    href ? (
                      <a key={line} href={href} className="block hover:text-red-500">
                        {line}
                      </a>
                    ) : (
                      <p key={line}>{line}</p>
                    )
                  )}
                </div>
              </IconCard>
            ))}
          </div>
        </motion.div>

        {/* Enquiry Form */}
        <motion.div {...slideIn("right")}>
          <EnquiryForm />
        </motion.div>
      </div>
    </Section>
  );
};

export default ContactInfo;
