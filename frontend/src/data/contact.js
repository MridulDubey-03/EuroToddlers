import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

import { buildWhatsAppUrl } from "../utils/whatsapp";

// School contact details.
// Values in [brackets] are placeholders: replace them with the real details.
export const contact = {
  address: "[School Address, Area, City - PIN]", // TODO: replace
  phone: "+91 98817 90263",
  email: "[email@eurotoddlers.com]", // TODO: replace

  // Digits only, with country code, e.g. "919876543210".
  // The enquiry form sends to this number.
  whatsapp: "919881790263",

  hours: ["Mon - Fri: [9:00 AM - 1:00 PM]", "Saturday: [9:00 AM - 12:00 PM]"], // TODO: replace

  // Shown on the embedded map: the school's exact pin (latitude,longitude)
  // from its Google Maps listing. The map stays hidden if this is empty.
  mapQuery: "19.1504987,73.2481394",

  // The school's Google Maps listing, opened by the "Get Directions" button
  mapLink: "https://maps.app.goo.gl/S3UMrnh9ZGdSSRue9",
};

// Ready-made links for "Call" and "Chat on WhatsApp" buttons
export const phoneHref = `tel:${contact.phone.replace(/[^\d+]/g, "")}`;
export const whatsappChatUrl = buildWhatsAppUrl(
  contact.whatsapp,
  "Hello! I would like to know more about admissions at Euro Toddlers."
);

export const contactCards = [
  {
    icon: FaMapMarkerAlt,
    title: "Visit Us",
    lines: [contact.address],
    color: "bg-red-100 text-red-500",
  },
  {
    icon: FaPhoneAlt,
    title: "Call Us",
    lines: [contact.phone],
    href: phoneHref,
    color: "bg-green-100 text-green-500",
  },
  {
    icon: FaEnvelope,
    title: "Email Us",
    lines: [contact.email],
    href: `mailto:${contact.email}`,
    color: "bg-blue-100 text-blue-500",
  },
  {
    icon: FaClock,
    title: "Office Hours",
    lines: contact.hours,
    color: "bg-yellow-100 text-yellow-500",
  },
];

export const contactFaqs = [
  {
    question: "Can we visit the campus before taking admission?",
    answer:
      "Yes. Parents are welcome to visit during office hours. Please call or send an enquiry so we can schedule a convenient time to show you around.",
  },
  {
    question: "When do admissions open?",
    answer:
      "Admissions for the 2026–27 academic year are open now. Seats are limited in each program, so we recommend enquiring early.",
  },
  {
    question: "Do you provide transport?",
    answer:
      "Yes, we offer safe transport with trained drivers and attendants for selected routes. Contact the office to check if your area is covered.",
  },
  {
    question: "How soon will the school respond to my enquiry?",
    answer:
      "Our team usually replies within one working day. For urgent questions, please call the school directly during office hours.",
  },
];
