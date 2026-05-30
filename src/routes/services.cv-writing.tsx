import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";

export const Route = createFileRoute("/services/cv-writing")({
  head: () => ({
    meta: [
      { title: "Professional CV Writing Services in Kenya | Lloyds Nairobi" },
      { name: "description", content: "ATS-friendly CV writing services in Kenya. Professional CVs, cover letters and LinkedIn optimization for the Kenyan job market. Fast turnaround in Nairobi." },
      { property: "og:title", content: "CV Writing Services in Kenya — Lloyds" },
      { property: "og:description", content: "Professional ATS-friendly CVs and cover letters for the Kenyan job market." },
      { property: "og:url", content: "/services/cv-writing" },
    ],
    links: [{ rel: "canonical", href: "/services/cv-writing" }],
  }),
  component: () => (
    <ServicePage
      eyebrow="Career Services"
      title="Professional CV Writing in Kenya"
      intro="Stand out in a competitive job market with a sharp, ATS-friendly CV written by professionals. We tailor each CV to your industry, experience level and target role — and we deliver fast."
      serviceName="CV writing"
      benefits={[
        "ATS-friendly formatting that passes recruiter filters",
        "Tailored to the Kenyan job market and your industry",
        "Professional cover letters included on request",
        "Entry-level, mid-career and executive CVs",
        "LinkedIn profile optimization available",
        "Editable Word + polished PDF delivered",
      ]}
      process={[
        { step: "Tell us about yourself", detail: "Send your old CV, certificates, or just bullet points of your experience." },
        { step: "We write and design", detail: "Our writers craft your CV and you review the draft on WhatsApp." },
        { step: "Final delivery", detail: "Receive a polished PDF + editable Word document, ready to apply." },
      ]}
      faqs={[
        { q: "How long does CV writing take?", a: "Standard turnaround is 24–48 hours. Express same-day service is available." },
        { q: "Do you write cover letters?", a: "Yes — we offer matching cover letters and LinkedIn profile rewrites as add-ons." },
        { q: "Is the CV ATS-friendly?", a: "Yes. We use clean structures and the right keywords so your CV gets past automated screening." },
        { q: "Can you help fresh graduates?", a: "Absolutely. We specialize in entry-level CVs that highlight your education, skills and potential." },
      ]}
    />
  ),
});
