import { Link } from "react-router-dom";

const variants = {
  primary: "bg-red-500 text-white hover:bg-red-600 hover:scale-105",
  outline: "border-2 border-red-500 text-red-500 hover:bg-red-50",
  // For use on colored backgrounds
  light: "bg-white text-red-500 hover:bg-red-50 hover:scale-105",
  "outline-light": "border-2 border-white text-white hover:bg-white/10",
};

const sizes = {
  md: "px-6 py-3",
  lg: "px-8 py-4",
};

// Pill button. Renders a router Link when `to` is given.
const Button = ({
  to,
  variant = "primary",
  size = "md",
  icon: Icon,
  className = "",
  children,
  ...props
}) => {
  const classes = `inline-flex items-center gap-2 rounded-full font-semibold transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {children}
      {Icon && <Icon />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {content}
    </button>
  );
};

export default Button;
