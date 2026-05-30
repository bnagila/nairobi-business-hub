import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";

export const Route = createFileRoute("/services/printing")({
  head: () => ({
    meta: [
      { title: "Printing Services in Nairobi — Color, B/W, Scanning & Lamination | Lloyds" },
      { name: "description", content: "Affordable printing services in Nairobi: high-quality color & black-and-white printing, photocopying, scanning and lamination. Walk in or order on WhatsApp." },
      { property: "og:title", content: "Printing Services in Nairobi — Lloyds" },
      { property: "og:description", content: "Color & B/W printing, scanning, lamination — fast turnaround in Nairobi." },
      { property: "og:url", content: "/services/printing" },
    ],
    links: [{ rel: "canonical", href: "/services/printing" }],
  }),
  component: () => (
    <ServicePage
      eyebrow="Document Services"
      title="Printing Services in Nairobi"
      intro="From a single A4 page to bulk business documents, we offer fast, sharp and affordable printing services in Nairobi. We handle color and black-and-white printing, photocopying, scanning, and lamination — all under one roof."
      serviceName="printing services"
      benefits={[
        "High-quality color and black-and-white printing",
        "Same-minute turnaround for walk-in customers",
        "A4, A3, business cards, posters and flyers",
        "Professional scanning to PDF / email / WhatsApp",
        "A3 and A4 lamination for IDs, certificates and menus",
        "Affordable rates with bulk discounts",
      ]}
      process={[
        { step: "Send or bring your file", detail: "Send via WhatsApp, email, or walk into our Nairobi branch with a flash disk." },
        { step: "We confirm specs & quote", detail: "Color, paper size, copies and lamination — we confirm everything upfront." },
        { step: "Print, finish & deliver", detail: "Most jobs ready in minutes. Pick up at the branch or arrange courier delivery." },
      ]}
      faqs={[
        { q: "How much is printing per page in Nairobi?", a: "Rates depend on color, paper size and quantity. Send us the document on WhatsApp for an instant quote." },
        { q: "Do you accept files on WhatsApp or email?", a: "Yes — share your PDF, Word or image file with us and we'll have it ready when you arrive." },
        { q: "Do you offer lamination?", a: "Yes, we laminate A3 and A4 documents including IDs, certificates and menus." },
        { q: "Can you handle bulk printing for businesses?", a: "Absolutely. We print receipts, invoices, brochures and tender documents in bulk with discounted rates." },
      ]}
    />
  ),
});
