import PublicLayout from "../layouts/PublicLayout";

import ContactHero from "../components/sections/contact/ContactHero";
import ContactInfo from "../components/sections/contact/ContactInfo";
import Maps from "../components/sections/contact/Maps";
import FAQ from "../components/sections/contact/FAQ";

const Contact = () => {
  return (
    <PublicLayout>
      <ContactHero />
      <ContactInfo />
      <Maps />
      <FAQ />
    </PublicLayout>
  );
};

export default Contact;
