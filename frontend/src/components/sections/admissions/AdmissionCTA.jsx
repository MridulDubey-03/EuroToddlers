import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

import CTABanner from "../../common/CTABanner";
import Button from "../../common/Button";
import { phoneHref, whatsappChatUrl } from "../../../data/contact";

const AdmissionCTA = () => {
  return (
    <CTABanner
      title="Still Have Questions?"
      description="Our admissions team is happy to help. Call us or chat with us on WhatsApp."
    >
      <Button href={phoneHref} variant="light" size="lg" icon={FaPhoneAlt}>
        Call Us
      </Button>
      <Button href={whatsappChatUrl} variant="outline-light" size="lg" icon={FaWhatsapp}>
        Chat On WhatsApp
      </Button>
    </CTABanner>
  );
};

export default AdmissionCTA;
