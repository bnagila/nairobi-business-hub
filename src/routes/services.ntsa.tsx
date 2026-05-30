import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";

export const Route = createFileRoute("/services/ntsa")({
  head: () => ({
    meta: [
      { title: "NTSA Logbook & TIMS Assistance in Nairobi | Lloyds Business Solution" },
      { name: "description", content: "NTSA TIMS help in Nairobi: logbook transfer, driving license renewal, smart DL, vehicle records, number plate reservations and PSV badges. Fast and reliable." },
      { property: "og:title", content: "NTSA Services in Nairobi — Lloyds" },
      { property: "og:description", content: "Logbook transfers, driving license renewals and TIMS support in Nairobi." },
      { property: "og:url", content: "/services/ntsa" },
    ],
    links: [{ rel: "canonical", href: "/services/ntsa" }],
  }),
  component: () => (
    <ServicePage
      eyebrow="Government Services"
      title="NTSA Logbook & TIMS Assistance"
      intro="We help motorists in Nairobi navigate NTSA TIMS without the headaches. Whether you're transferring a logbook, renewing a driving license or applying for a smart DL, we handle the paperwork and the portal."
      serviceName="NTSA services"
      benefits={[
        "TIMS account creation and verification",
        "Logbook transfer of ownership for vehicles and motorbikes",
        "Driving license renewal (1, 3 and smart DL)",
        "PSV badge applications",
        "Number plate reservations and replacements",
        "Vehicle records and search reports",
      ]}
      process={[
        { step: "Share what you need", detail: "Tell us the service on WhatsApp — we'll list the required documents." },
        { step: "Bring the documents", detail: "ID, KRA PIN, logbook or driving license copies as required." },
        { step: "We process & confirm", detail: "We process on TIMS and share the confirmation or receipt with you." },
      ]}
      faqs={[
        { q: "How long does a logbook transfer take?", a: "Once both parties confirm on TIMS and payment is done, NTSA typically processes the transfer within a few working days." },
        { q: "Can you renew my driving license?", a: "Yes — bring your old DL and ID and we'll renew it on TIMS the same day." },
        { q: "Do I need to be present?", a: "Most steps can be done with photos of your documents, but TIMS may require you to confirm on your own phone." },
        { q: "How much do NTSA services cost?", a: "Government fees + a small service charge. Send a WhatsApp message for the current breakdown." },
      ]}
    />
  ),
});
