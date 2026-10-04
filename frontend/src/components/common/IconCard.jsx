import { motion } from "framer-motion";

import { staggerReveal, hoverLift } from "../../utils/animations";

// Card with a colored icon, title and description.
// `color` holds the icon's Tailwind classes, e.g. "bg-red-100 text-red-500".
// `children` renders below the description (extra info, buttons).
const IconCard = ({
  icon: Icon,
  title,
  description,
  color = "bg-red-100 text-red-500",
  index = 0,
  className = "bg-white",
  children,
}) => {
  return (
    <motion.div
      {...staggerReveal(index)}
      whileHover={hoverLift}
      className={`rounded-3xl p-8 shadow-lg ${className}`}
    >
      <div className={`inline-flex rounded-2xl p-4 text-4xl ${color}`}>
        <Icon />
      </div>

      <h3 className="mt-6 text-2xl font-bold text-slate-800">{title}</h3>

      {description && (
        <p className="mt-4 leading-7 text-slate-600">{description}</p>
      )}

      {children}
    </motion.div>
  );
};

export default IconCard;
