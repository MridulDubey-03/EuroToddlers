import { useState } from "react";
import toast from "react-hot-toast";

import { contact } from "../data/contact";
import { buildWhatsAppUrl } from "../utils/whatsapp";

// Form state + validation + "send via WhatsApp" submit.
// validate(form)     -> { field: "error message" } (empty object when valid)
// buildMessage(form) -> text pre-filled in the WhatsApp chat
const useWhatsAppForm = ({
  initialForm,
  validate,
  buildMessage,
  successMessage = "Opening WhatsApp to send your details!",
}) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validate(form);
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    if (!contact.whatsapp) {
      toast.error("WhatsApp number not configured yet. Please call the school.");
      return;
    }

    window.open(buildWhatsAppUrl(contact.whatsapp, buildMessage(form)), "_blank", "noopener");
    toast.success(successMessage);
    setForm(initialForm);
  };

  return { form, errors, handleChange, handleSubmit };
};

export default useWhatsAppForm;
