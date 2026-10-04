import { FaArrowRight } from "react-icons/fa";

import CTABanner from "../../common/CTABanner";
import Button from "../../common/Button";

const ProgramsCTA = () => {
  return (
    <CTABanner
      title="Not Sure Which Program Is Right?"
      description="Tell us your child's age and we will help you choose. You are also welcome to visit our campus and meet our teachers."
    >
      <Button to="/admissions" variant="light" size="lg" icon={FaArrowRight}>
        Apply Now
      </Button>
      <Button to="/contact" variant="outline-light" size="lg">
        Talk To Us
      </Button>
    </CTABanner>
  );
};

export default ProgramsCTA;
