// Shared Framer Motion presets. Spread onto a motion element: <motion.div {...fadeUp}>

const viewport = { once: true };

// Section headings and single blocks fading up into view
export const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7 },
  viewport,
};

export const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 0.6, delay: 0.3 },
  viewport,
};

// Two-column layouts: "left" slides in from the left, "right" from the right
export const slideIn = (direction = "left") => ({
  initial: { opacity: 0, x: direction === "left" ? -60 : 60 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.8 },
  viewport,
});

// Grid items revealed one after another
export const staggerReveal = (index = 0) => ({
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: index * 0.1 },
  viewport,
});

// Lift effect for cards on hover
export const hoverLift = { y: -10, scale: 1.03 };
