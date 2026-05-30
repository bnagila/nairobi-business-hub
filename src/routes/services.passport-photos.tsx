import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";

export const Route = createFileRoute("/services/passport-photos")({
  head: () => ({
    meta: [
      { title: "Passport Photo Services in Nairobi — Instant Print | Lloyds" },
      { name: "description", content: "Instant passport photos in Nairobi for visa, ID, eCitizen, KRA, school and job applications. Multiple sizes, printed and digital copies. Walk in today." },
      { property: "og:title", content: "Passport Photos in Nairobi — Lloyds" },
      { property: "og:description", content: "Instant passport and visa photos in Nairobi — printed and digital." },
      { property: "og:url", content: "/services/passport-photos" },
    ],
    links: [{ rel: "canonical", href: "/services/passport-photos" }],
  }),
  component: () => (
    <ServicePage
      eyebrow="Photo Services"
      title="Passport Photo Services in Nairobi"
      intro="High-quality passport and visa photos taken and printed on the spot at our Nairobi branch. We provide all standard sizes plus digital copies for online eCitizen, KRA and visa applications."
      serviceName="passport photos"
      benefits={[
        "Instant printing — done in minutes",
        "Compliant with Kenyan and international standards",
        "All sizes: passport, visa, ID, school, job",
        "Digital copies sent via WhatsApp for online applications",
        "Clean white-background studio setup",
        "Affordable rates with multi-copy discounts",
      ]}
      process={[
        { step: "Walk into our branch", detail: "No appointment needed. Come in clean, neat attire." },
        { step: "We capture & adjust", detail: "We take the photo, check compliance and edit for crisp clarity." },
        { step: "Pick up your prints", detail: "Receive your printed copies plus a digital copy on WhatsApp." },
      ]}
      faqs={[
        { q: "Do you take Schengen and US visa photos?", a: "Yes — we shoot to the exact size and background required by each embassy." },
        { q: "Can I get a digital copy?", a: "Yes, we send a softcopy via WhatsApp or email for online uploads (eCitizen, visa portals, etc.)." },
        { q: "How long does it take?", a: "Usually under 5 minutes from start to finished prints." },
        { q: "How many copies will I get?", a: "Standard packages come with 4 or 8 copies. Larger quantities are available at a discount." },
      ]}
    />
  ),
});
