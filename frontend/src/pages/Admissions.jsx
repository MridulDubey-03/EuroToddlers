import PublicLayout from "../layouts/PublicLayout";

import AdmissionsHero from "../components/sections/admissions/AdmissionsHero";
import AdmissionProcess from "../components/sections/admissions/AdmissionProcess";
import Eligibility from "../components/sections/admissions/Eligibility";
import DocumentsRequired from "../components/sections/admissions/DocumentsRequired";
import AdmissionForm from "../components/sections/admissions/AdmissionForm";
import AdmissionFAQ from "../components/sections/admissions/AdmissionFAQ";
import AdmissionCTA from "../components/sections/admissions/AdmissionCTA";

const Admissions = () => {
  return (
    <PublicLayout>
      <AdmissionsHero />
      <AdmissionProcess />
      <Eligibility />
      <DocumentsRequired />
      <AdmissionForm />
      <AdmissionFAQ />
      <AdmissionCTA />
    </PublicLayout>
  );
};

export default Admissions;
