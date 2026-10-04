const StatCard = ({ value, label, color = "text-red-500", className = "" }) => {
  return (
    <div className={`rounded-2xl bg-white p-5 text-center shadow-lg ${className}`}>
      <p className={`text-3xl font-bold ${color}`}>{value}</p>
      <p className="mt-2 text-sm text-slate-600">{label}</p>
    </div>
  );
};

export default StatCard;
