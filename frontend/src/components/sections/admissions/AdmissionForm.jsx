import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

import Section from "../../common/Section";
import SectionHeader from "../../common/SectionHeader";
import Button from "../../common/Button";
import FormField from "../../common/FormField";
import useWhatsAppForm from "../../../hooks/useWhatsAppForm";
import { programs } from "../../../data/programs";
import { admissionSession } from "../../../data/admissions";
import { inputClasses, isValidPhone, isValidEmail } from "../../../utils/form";
import { fadeUp } from "../../../utils/animations";

const initialForm = {
  childName: "",
  dob: "",
  program: "",
  parentName: "",
  phone: "",
  email: "",
  address: "",
  message: "",
};

// Today's local date as "YYYY-MM-DD" (the format date inputs use)
const today = new Date().toLocaleDateString("en-CA");

const validate = (form) => {
  const errors = {};

  if (!form.childName.trim()) errors.childName = "Please enter your child's name.";
  if (!form.dob) errors.dob = "Please enter your child's date of birth.";
  else if (form.dob > today) errors.dob = "Date of birth cannot be in the future.";
  if (!form.program) errors.program = "Please select a program.";
  if (!form.parentName.trim()) errors.parentName = "Please enter the parent's name.";
  if (!isValidPhone(form.phone)) errors.phone = "Please enter a valid 10-digit phone number.";
  if (form.email && !isValidEmail(form.email)) errors.email = "Please enter a valid email address.";

  return errors;
};

// "2022-05-03" -> "03/05/2022"
const formatDate = (value) => value.split("-").reverse().join("/");

// Optional fields are only included when filled in
const optional = (label, value) => (value.trim() ? `${label}: ${value.trim()}` : null);

const buildMessage = (form) =>
  [
    `New admission application (${admissionSession})`,
    "",
    `Child's Name: ${form.childName.trim()}`,
    `Date of Birth: ${formatDate(form.dob)}`,
    `Program: ${form.program}`,
    "",
    `Parent's Name: ${form.parentName.trim()}`,
    `Phone: ${form.phone.trim()}`,
    optional("Email", form.email),
    optional("Address", form.address),
    optional("Message", form.message),
  ]
    .filter((line) => line !== null)
    .join("\n");

const AdmissionForm = () => {
  // Pre-select the program when coming from a program page (?program=Nursery)
  const [searchParams] = useSearchParams();
  const requested = searchParams.get("program");
  const program = programs.some((p) => p.title === requested) ? requested : "";

  const { form, errors, handleChange, handleSubmit } = useWhatsAppForm({
    initialForm: { ...initialForm, program },
    validate,
    buildMessage,
    successMessage: "Opening WhatsApp to send your application!",
  });

  return (
    <Section id="apply" bg="bg-slate-50" container="max-w-4xl">
      <SectionHeader
        badge="Apply Online"
        title="Admission Form"
        description="Fill in the details below and send your application to the school on WhatsApp. Our team will contact you to schedule a campus visit."
      />

      <motion.form
        {...fadeUp}
        onSubmit={handleSubmit}
        noValidate
        className="mt-14 rounded-3xl bg-white p-8 shadow-2xl lg:p-12"
      >
        {/* Child Details */}
        <h3 className="text-2xl font-bold text-slate-800">Child Details</h3>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <FormField label="Child's Name" name="childName" required error={errors.childName}>
            <input
              id="childName"
              name="childName"
              value={form.childName}
              onChange={handleChange}
              placeholder="Child's full name"
              className={inputClasses(errors.childName)}
            />
          </FormField>

          <FormField label="Date of Birth" name="dob" required error={errors.dob}>
            <input
              id="dob"
              name="dob"
              type="date"
              max={today}
              value={form.dob}
              onChange={handleChange}
              className={inputClasses(errors.dob)}
            />
          </FormField>

          <div className="sm:col-span-2">
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
          </div>
        </div>

        {/* Parent Details */}
        <h3 className="mt-10 text-2xl font-bold text-slate-800">Parent Details</h3>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <FormField label="Parent's Name" name="parentName" required error={errors.parentName}>
            <input
              id="parentName"
              name="parentName"
              value={form.parentName}
              onChange={handleChange}
              placeholder="Parent's full name"
              className={inputClasses(errors.parentName)}
            />
          </FormField>

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

          <FormField label="Address" name="address">
            <input
              id="address"
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Area, City"
              className={inputClasses()}
            />
          </FormField>

          <div className="sm:col-span-2">
            <FormField label="Message" name="message">
              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="Anything you'd like us to know?"
                className={inputClasses()}
              />
            </FormField>
          </div>
        </div>

        <Button type="submit" size="lg" icon={FaWhatsapp} className="mt-10 w-full justify-center">
          Apply On WhatsApp
        </Button>
      </motion.form>
    </Section>
  );
};

export default AdmissionForm;
