import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import desksAsset from "@/assets/coworking-desks.jpg.asset.json";
import privateAsset from "@/assets/coworking-private.jpg.asset.json";
import officeAsset from "@/assets/coworking-office.jpg.asset.json";

const gallery = [
  { src: desksAsset.url, alt: "Open-plan co-working desks at Lloyds Business Solutions Nairobi" },
  { src: officeAsset.url, alt: "Private workstation with natural light at Lloyds co-working space" },
  { src: privateAsset.url, alt: "Quiet executive desk for focused work at Lloyds co-working space" },
];

export const Route = createFileRoute("/services/coworking")({
  head: () => ({
    meta: [
      { title: "Co-working Space in Nairobi — Serene, Comfortable & Affordable | Lloyds" },
      { name: "description", content: "Serene and comfortable co-working space in Nairobi at very competitive rates. Fast Wi-Fi, quiet desks, power backup and meeting space — perfect for freelancers, students and SMEs." },
      { property: "og:title", content: "Co-working Space in Nairobi — Lloyds" },
      { property: "og:description", content: "Quiet, comfortable co-working desks in Nairobi at unbeatable rates." },
      { property: "og:image", content: desksAsset.url },
      { property: "og:url", content: "/services/coworking" },
    ],
    links: [{ rel: "canonical", href: "/services/coworking" }],
  }),
  component: CoworkingPage,
});

function CoworkingPage() {
  return (
    <>
      {/* Gallery */}
      <section className="mx-auto max-w-6xl px-4 pt-10">
        <div className="grid gap-4 md:grid-cols-3">
          {gallery.map((img, i) => (
            <div
              key={img.src}
              className={`overflow-hidden rounded-2xl shadow-elegant ring-1 ring-border ${
                i === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading={i === 0 ? "eager" : "lazy"}
                className="h-64 w-full object-cover transition-transform duration-700 hover:scale-105 md:h-full"
              />
            </div>
          ))}
        </div>
        <p className="mt-3 text-center text-xs text-muted-foreground">
          Inside our Nairobi co-working space — bright, quiet and built for focus.
        </p>
      </section>

      <ServicePage
        eyebrow="Workspace"
        title="Serene & Comfortable Co-working Space in Nairobi"
        intro="Focus, create and grow in our calm, professional co-working space — designed for freelancers, remote workers, students and small business owners in Nairobi. Enjoy fast internet, comfortable seating and a productive atmosphere at very competitive rates."
        serviceName="co-working space"
        whatsappMessage="Hello Lloyds, I'm interested in your co-working space. I saw the KES 1,000/day rate and would like to ask about availability and booking."
        benefits={[
          "Serene, quiet and comfortable working environment",
          "Very competitive hourly, daily and monthly rates",
          "Fast, reliable Wi-Fi with power backup",
          "Ergonomic desks and comfortable seating",
          "Access to printing, scanning and office services on site",
          "Ideal for freelancers, remote workers, students and SMEs",
        ]}
        process={[
          { step: "Reach out on WhatsApp", detail: "Tell us when you'd like to come in — hourly, daily, weekly or monthly." },
          { step: "Pick your plan", detail: "Choose a flexible rate that fits your schedule and budget." },
          { step: "Walk in and get to work", detail: "Settle in, connect to Wi-Fi and enjoy a focused, comfortable workday." },
        ]}
        faqs={[
          { q: "How much does the co-working space cost?", a: "We offer some of the most competitive rates in Nairobi, with hourly, daily and monthly plans. WhatsApp us for the latest pricing." },
          { q: "Is there fast Wi-Fi and power backup?", a: "Yes — high-speed internet and reliable power backup so your work never stops." },
          { q: "Can I book a desk for a few hours?", a: "Absolutely. We offer flexible hourly bookings as well as daily, weekly and monthly plans." },
          { q: "Do you have meeting or quiet space?", a: "Yes, our space is designed to be serene and distraction-free, with room for focused work and small meetings." },
        ]}
      />
    </>
  );
}
