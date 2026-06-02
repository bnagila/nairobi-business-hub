import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";

export const Route = createFileRoute("/services/coworking")({
  head: () => ({
    meta: [
      { title: "Co-working Space in Nairobi — Serene, Comfortable & Affordable | Lloyds" },
      { name: "description", content: "Serene and comfortable co-working space in Nairobi at very competitive rates. Fast Wi-Fi, quiet desks, power backup and meeting space — perfect for freelancers, students and SMEs." },
      { property: "og:title", content: "Co-working Space in Nairobi — Lloyds" },
      { property: "og:description", content: "Quiet, comfortable co-working desks in Nairobi at unbeatable rates." },
      { property: "og:url", content: "/services/coworking" },
    ],
    links: [{ rel: "canonical", href: "/services/coworking" }],
  }),
  component: () => (
    <ServicePage
      eyebrow="Workspace"
      title="Serene & Comfortable Co-working Space in Nairobi"
      intro="Focus, create and grow in our calm, professional co-working space — designed for freelancers, remote workers, students and small business owners in Nairobi. Enjoy fast internet, comfortable seating and a productive atmosphere at very competitive rates."
      serviceName="co-working space"
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
  ),
});
