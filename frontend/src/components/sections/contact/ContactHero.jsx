import PageHero from "../../common/PageHero";
import heroImage from "../../../assets/images/EuroToddlerLogo.png";

const ContactHero = () => {
  return (
    <PageHero
      badge="Contact Us"
      title="We'd Love To"
      highlight="Hear From You"
      description="Have a question about admissions, programs or visiting our campus? Reach out to us and our team will be happy to help."
      breadcrumb="Contact"
      image={heroImage}
    />
  );
};

export default ContactHero;
