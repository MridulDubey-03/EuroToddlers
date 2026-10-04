// Helpers shared by the site's forms

export const isValidPhone = (value) => /^\d{10}$/.test(value.replace(/\D/g, ""));

export const isValidEmail = (value) => /^\S+@\S+\.\S+$/.test(value);

// Tailwind classes for inputs, selects and textareas
export const inputClasses = (error) =>
  `w-full rounded-2xl border bg-slate-50 px-5 py-3 text-slate-800 outline-none transition focus:bg-white focus:ring-2 ${
    error
      ? "border-red-400 focus:ring-red-200"
      : "border-slate-200 focus:border-red-300 focus:ring-red-100"
  }`;
