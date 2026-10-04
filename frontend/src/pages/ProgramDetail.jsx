import { useParams } from "react-router-dom";

import PublicLayout from "../layouts/PublicLayout";
import NotFound from "./NotFound";

import ProgramDetailHero from "../components/sections/programs/detail/ProgramDetailHero";
import ProgramOverview from "../components/sections/programs/detail/ProgramOverview";
import ProgramCurriculum from "../components/sections/programs/detail/ProgramCurriculum";
import ProgramFees from "../components/sections/programs/detail/ProgramFees";
import OtherPrograms from "../components/sections/programs/detail/OtherPrograms";
import AdmissionCTA from "../components/sections/admissions/AdmissionCTA";
import { getProgramBySlug } from "../data/programs";

const ProgramDetail = () => {
  const { slug } = useParams();
  const program = getProgramBySlug(slug);

  if (!program) return <NotFound />;

  return (
    <PublicLayout>
      <ProgramDetailHero program={program} />
      <ProgramOverview program={program} />
      <ProgramCurriculum program={program} />
      <ProgramFees program={program} />
      <OtherPrograms program={program} />
      <AdmissionCTA />
    </PublicLayout>
  );
};

export default ProgramDetail;
