import PageHero from "../../common/PageHero";
import { admissionSession } from "../../../data/admissions";
import heroImage from "../../../assets/images/EuroToddlerLogo.png";

const AdmissionsHero = () => {
  return (
    <PageHero
      badge={`🎉 Admissions Open ${admissionSession}`}
      title="Begin Your Child's"
      highlight="Learning Journey"
      description="Give your child a joyful start in a safe and caring environment. Learn about our admission process, age criteria and apply online in minutes."
      breadcrumb="Admissions"
      image={heroImage}
    />
  );
};

export default AdmissionsHero;
