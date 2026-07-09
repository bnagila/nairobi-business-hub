// Update these with the real business details.
export const SITE = {
  name: "Lloyds Business Solution",
  tagline: "Your Complete Business & Digital Services Hub",
  city: "Nairobi, Kenya",
  address: "Nairobi CBD, Kenya",
  phone: "+254 116 111120",
  whatsapp: "254116111120", // digits only for wa.me link
  email: "info@lloydsbusinesssolutions.co.ke",
  hours: "Mon – Sat · 8:00 AM – 7:00 PM",
};

export const waLink = (msg = "Hello Lloyds, I'd like to inquire about your services.") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
