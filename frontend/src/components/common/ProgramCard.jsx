import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import IconCard from "./IconCard";

// Clickable program card that opens the program's detail page
const ProgramCard = ({ program, index = 0, showDescription = true }) => {
  const { slug, icon, title, age, description, color } = program;

  return (
    <Link to={`/programs/${slug}`} className="group block h-full">
      <IconCard
        icon={icon}
        title={title}
        description={showDescription ? description : undefined}
        color={color}
        index={index}
        className="h-full bg-white"
      >
        <p className="mt-2 font-semibold text-red-500">Age : {age}</p>
        <p className="mt-6 inline-flex items-center gap-2 font-semibold text-slate-800 transition group-hover:gap-3 group-hover:text-red-500">
          View Details <FaArrowRight />
        </p>
      </IconCard>
    </Link>
  );
};

export default ProgramCard;
