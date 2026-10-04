import { FaWhatsapp } from "react-icons/fa";

import Button from "../../common/Button";
import FormField from "../../common/FormField";
import useWhatsAppForm from "../../../hooks/useWhatsAppForm";
import { programs } from "../../../data/programs";
import { inputClasses, isValidPhone, isValidEmail } from "../../../utils/form";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  program: "",
  message: "",
};

const validate = (form) => {
  const errors = {};

  if (!form.name.trim()) errors.name = "Please enter your name.";
  if (!isValidPhone(form.phone)) errors.phone = "Please enter a valid 10-digit phone number.";
  if (form.email && !isValidEmail(form.email)) errors.email = "Please enter a valid email address.";
  if (!form.program) errors.program = "Please select a program.";

  return errors;
};

const buildMessage = (form) =>
  [
    "New admission enquiry",
    `Name: ${form.name.trim()}`,
    `Phone: ${form.phone.trim()}`,
    form.email && `Email: ${form.email.trim()}`,
    `Program: ${form.program}`,
    form.message.trim() && `Message: ${form.message.trim()}`,
  ]
    .filter(Boolean)
    .join("\n");

const EnquiryForm = () => {
  const { form, errors, handleChange, handleSubmit } = useWhatsAppForm({
    initialForm,
    validate,
    buildMessage,
    successMessage: "Opening WhatsApp to send your enquiry!",
  });

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-3xl bg-white p-8 shadow-2xl lg:p-10"
    >
      <h3 className="text-3xl font-extrabold text-slate-800">
        Send An Enquiry
      </h3>
      <p className="mt-2 text-slate-600">
        Fill in your details and continue on WhatsApp.
      </p>

      <div className="mt-8 space-y-5">
        <FormField label="Parent Name" name="name" required error={errors.name}>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className={inputClasses(errors.name)}
          />
        </FormField>

        <div className="grid gap-5 sm:grid-cols-2">
          <FormField label="Phone" name="phone" required error={errors.phone}>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="10-digit mobile number"
              className={inputClasses(errors.phone)}
            />
          </FormField>

          <FormField label="Email" name="email" error={errors.email}>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={inputClasses(errors.email)}
            />
          </FormField>
        </div>

        <FormField label="Program" name="program" required error={errors.program}>
          <select
            id="program"
            name="program"
            value={form.program}
            onChange={handleChange}
            className={inputClasses(errors.program)}
          >
            <option value="">Select a program</option>
            {programs.map((program) => (
              <option key={program.title} value={program.title}>
                {program.title} ({program.age})
              </option>
            ))}
          </select>
        </FormField>

        <FormField label="Message" name="message">
          <textarea
            id="message"
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            placeholder="Anything you'd like to ask us?"
            className={inputClasses()}
          />
        </FormField>
      </div>

      <Button type="submit" size="lg" icon={FaWhatsapp} className="mt-8 w-full justify-center">
        Send On WhatsApp
      </Button>
    </form>
  );
};

export default EnquiryForm;
