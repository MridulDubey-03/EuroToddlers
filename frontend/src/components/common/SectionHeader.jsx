import { motion } from "framer-motion";

import Badge from "./Badge";
import { fadeUp } from "../../utils/animations";

// Badge + heading + description shown at the top of most sections
const SectionHeader = ({
  badge,
  badgeColor = "red",
  title,
  highlight,
  description,
  align = "center",
}) => {
  const centered = align === "center";

  return (
    <motion.div {...fadeUp} className={centered ? "text-center" : ""}>
      {badge && <Badge color={badgeColor}>{badge}</Badge>}

      <h2 className="mt-6 text-4xl font-extrabold text-slate-800 lg:text-5xl">
        {title}
        {highlight && (
          <span className="block text-red-500">{highlight}</span>
        )}
      </h2>

      {description && (
        <p
          className={`mt-5 max-w-3xl text-lg leading-8 text-slate-600 ${
            centered ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
