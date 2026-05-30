import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";

export const Route = createFileRoute("/services/computer-repair")({
  head: () => ({
    meta: [
      { title: "Computer Repair Services in Nairobi — Laptops, Desktops & Software | Lloyds" },
      { name: "description", content: "Trusted computer repair services in Nairobi: laptop & desktop diagnostics, screen and keyboard replacement, OS installation, virus removal and data recovery." },
      { property: "og:title", content: "Computer Repair Services in Nairobi — Lloyds" },
      { property: "og:description", content: "Laptop & desktop repair, software installation and data recovery in Nairobi." },
      { property: "og:url", content: "/services/computer-repair" },
    ],
    links: [{ rel: "canonical", href: "/services/computer-repair" }],
  }),
  component: () => (
    <ServicePage
      eyebrow="Tech & Repairs"
      title="Computer Repair Services in Nairobi"
      intro="Bring your slow, broken or infected computer back to life. Our Nairobi-based technicians handle laptops, desktops and mobile phones — with honest diagnostics and fair pricing."
      serviceName="computer repair"
      benefits={[
        "Free initial diagnostic on most machines",
        "Screen, keyboard and battery replacements",
        "Windows, macOS and Linux installation & upgrades",
        "Virus and malware removal with antivirus setup",
        "Office, Adobe and accounting software installation",
        "Data recovery and backup setup",
      ]}
      process={[
        { step: "Drop off or describe the issue", detail: "Walk into the branch or send a message on WhatsApp explaining the problem." },
        { step: "Diagnosis & quote", detail: "We assess and share a clear quote before any work begins — no surprise costs." },
        { step: "Repair & test", detail: "Once you approve, we fix, test and hand the device back fully working." },
      ]}
      faqs={[
        { q: "How long does a computer repair take?", a: "Simple fixes (software, virus removal) are same-day. Hardware repairs depend on spare-part availability." },
        { q: "Do you sell genuine spare parts?", a: "Yes — we use quality replacement parts and offer warranty on most repairs." },
        { q: "Can you recover lost data?", a: "In most cases, yes. Bring the device and we'll attempt recovery before any reformatting." },
        { q: "Do you repair phones too?", a: "Yes — screen, battery and software issues on Android and iPhone." },
      ]}
    />
  ),
});
