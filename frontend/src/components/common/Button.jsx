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

// Pill button. Renders a router Link when `to` is given,
// an external link when `href` is given, otherwise a <button>.
// `disabled` always renders an inactive <button>.
const Button = ({
  to,
  href,
  variant = "primary",
  size = "md",
  icon: Icon,
  disabled = false,
  className = "",
  children,
  ...props
}) => {
  const variantClasses = disabled
    ? `${variants[variant].replace(/hover:\S+/g, "")} cursor-not-allowed opacity-50`
    : variants[variant];

  const classes = `inline-flex items-center gap-2 rounded-full font-semibold transition-all duration-300 ${variantClasses} ${sizes[size]} ${className}`;

  const content = (
    <>
      {children}
      {Icon && <Icon />}
    </>
  );

  if (disabled) {
    return (
      <button type="button" disabled className={classes}>
        {content}
      </button>
    );
  }

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }

  // External link or file download, opened in a new tab
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {content}
    </button>
  );
};

export default Button;
