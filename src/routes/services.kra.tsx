import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";

export const Route = createFileRoute("/services/kra")({
  head: () => ({
    meta: [
      { title: "KRA Services in Kenya — PIN, iTax Returns & Compliance | Lloyds Nairobi" },
      { name: "description", content: "KRA services in Nairobi: PIN registration, iTax filing of returns (NIL & employed), tax compliance certificates and KRA password resets. Trusted help in Nairobi." },
      { property: "og:title", content: "KRA Services in Kenya — Lloyds Nairobi" },
      { property: "og:description", content: "KRA PIN, returns filing & tax compliance certificates in Nairobi." },
      { property: "og:url", content: "/services/kra" },
    ],
    links: [{ rel: "canonical", href: "/services/kra" }],
  }),
  component: () => (
    <ServicePage
      eyebrow="Government Services"
      title="KRA Services in Kenya"
      intro="Skip the queues and the confusion. We help individuals, employees and businesses with all KRA iTax services in Nairobi — from getting a KRA PIN to filing returns and obtaining a Tax Compliance Certificate."
      serviceName="KRA services"
      benefits={[
        "KRA PIN registration for individuals and companies",
        "Filing NIL returns and employed (P9) returns",
        "Tax Compliance Certificate (TCC) applications",
        "KRA iTax password retrieval and account recovery",
        "VAT, PAYE and turnover tax filing for SMEs",
        "Friendly assistance — we explain every step",
      ]}
      process={[
        { step: "Share your details", detail: "Bring your ID and KRA PIN, or send a clear photo on WhatsApp." },
        { step: "We file or apply", detail: "We log into iTax securely and process the request while you wait." },
        { step: "Receive your document", detail: "Get your PIN certificate, TCC or filing acknowledgement via WhatsApp or print." },
      ]}
      faqs={[
        { q: "Can you file my KRA returns today?", a: "Yes — most individual returns (NIL or P9) are completed within minutes at our Nairobi branch." },
        { q: "What do I need to file returns?", a: "Your KRA PIN, ID, and (if employed) your P9 form from your employer." },
        { q: "How long does a Tax Compliance Certificate take?", a: "Usually instant if your returns are up to date. If not, we'll file the missing returns first." },
        { q: "Do you help with KRA password reset?", a: "Yes. Bring your ID and PIN and we'll recover your iTax account access." },
      ]}
    />
  ),
});
