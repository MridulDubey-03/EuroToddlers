// Link that opens a WhatsApp chat with `number` and a pre-filled message.
// `number` must be digits only, including the country code (e.g. "919876543210").
export const buildWhatsAppUrl = (number, message) =>
  `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
