import PublicLayout from "../layouts/PublicLayout";

import ProgramsHero from "../components/sections/programs/ProgramsHero";
import ProgramList from "../components/sections/programs/ProgramList";
import LearningMethodology from "../components/sections/home/LearningMethodology";
import ProgramsCTA from "../components/sections/programs/ProgramsCTA";

const Programs = () => {
  return (
    <PublicLayout>
      <ProgramsHero />
      <ProgramList />
      <LearningMethodology />
      <ProgramsCTA />
    </PublicLayout>
  );
};

export default Programs;
