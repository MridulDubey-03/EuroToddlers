// Label + input (children) + error message
const FormField = ({ label, name, required, error, children }) => {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block font-semibold text-slate-700">
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>
      {children}
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default FormField;
