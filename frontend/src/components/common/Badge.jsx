const colors = {
  red: "bg-red-100 text-red-600",
  blue: "bg-blue-100 text-blue-600",
  green: "bg-green-100 text-green-600",
  yellow: "bg-yellow-100 text-yellow-700",
};

const Badge = ({ color = "red", className = "", children }) => {
  return (
    <span
      className={`inline-flex rounded-full px-5 py-2 text-sm font-semibold ${colors[color]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
