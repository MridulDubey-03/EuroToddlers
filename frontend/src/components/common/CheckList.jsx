import { FaCheckCircle } from "react-icons/fa";

// List of items, each with a check icon
const CheckList = ({ items, icon: Icon = FaCheckCircle, color = "text-green-500" }) => {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4">
          <Icon className={`mt-1 shrink-0 text-xl ${color}`} />
          <span className="font-medium text-slate-700">{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default CheckList;
