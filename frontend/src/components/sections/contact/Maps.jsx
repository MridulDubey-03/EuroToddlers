import { motion } from "framer-motion";
import { FaMapMarkedAlt, FaDirections } from "react-icons/fa";

import Section from "../../common/Section";
import SectionHeader from "../../common/SectionHeader";
import Button from "../../common/Button";
import { contact } from "../../../data/contact";
import { fadeUp } from "../../../utils/animations";

const Maps = () => {
  const query = encodeURIComponent(contact.mapQuery);

  return (
    <Section bg="bg-slate-50">
      <SectionHeader
        badge="Our Location"
        badgeColor="green"
        title="Visit Our Campus"
        description={contact.address}
      />

      <motion.div
        {...fadeUp}
        className="mt-14 overflow-hidden rounded-[35px] bg-white shadow-lg"
      >
        {contact.mapQuery ? (
          <iframe
            title="Euro Toddlers location"
            src={`https://www.google.com/maps?q=${query}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[450px] w-full border-0"
          />
        ) : (
          <div className="flex h-[350px] flex-col items-center justify-center gap-4 p-8 text-center">
            <div className="rounded-full bg-green-100 p-6 text-5xl text-green-500">
              <FaMapMarkedAlt />
            </div>
            <p className="text-xl font-bold text-slate-800">Map coming soon</p>
            <p className="max-w-md text-slate-600">{contact.address}</p>
          </div>
        )}
      </motion.div>

      {contact.mapQuery && (
        <div className="mt-10 text-center">
          <Button
            href={
              contact.mapLink ||
              `https://www.google.com/maps/search/?api=1&query=${query}`
            }
            size="lg"
            icon={FaDirections}
          >
            Get Directions
          </Button>
        </div>
      )}
    </Section>
  );
};

export default Maps;
