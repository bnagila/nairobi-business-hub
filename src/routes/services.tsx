import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Printer, Landmark, Wrench, GraduationCap, ShoppingBag, FileText, Camera, Sofa, Sparkles, Wifi, BatteryCharging, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site";
import { ServiceCTA } from "@/components/ServiceCTA";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — Lloyds Business Solution Nairobi" },
      { name: "description", content: "Explore all services offered by Lloyds Business Solution in Nairobi: printing, KRA, NTSA, computer repair, CV writing, training, and more." },
      { property: "og:title", content: "Services — Lloyds Business Solution" },
      { property: "og:description", content: "All-in-one digital, government and business services in Nairobi." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const groups = [
  {
    icon: Printer,
    title: "Printing & Document Services",
    desc: "Black & white and color printing, photocopying, scanning, and lamination.",
    href: "/services/printing",
    cta: "View printing services",
  },
  {
    icon: Camera,
    title: "Passport Photos",
    desc: "Instant passport, visa and ID photos that meet all international standards.",
    href: "/services/passport-photos",
    cta: "View passport photo services",
  },
  {
    icon: FileText,
    title: "Professional CV Writing",
    desc: "ATS-friendly CVs, cover letters and LinkedIn optimization for the Kenyan job market.",
    href: "/services/cv-writing",
    cta: "View CV writing services",
  },
  {
    icon: Landmark,
    title: "KRA Services",
    desc: "PIN registration, iTax filing, returns, compliance certificates and KRA help.",
    href: "/services/kra",
    cta: "View KRA services",
  },
  {
    icon: Landmark,
    title: "NTSA Services",
    desc: "Logbook transfer, driving license renewal, TIMS queries and number plate orders.",
    href: "/services/ntsa",
    cta: "View NTSA services",
  },
  {
    icon: Wrench,
    title: "Computer & Phone Repairs",
    desc: "Laptops, desktops and smartphones — diagnostics, repair, software installation.",
    href: "/services/computer-repair",
    cta: "View repair services",
  },
  {
    icon: GraduationCap,
    title: "Training",
    desc: "Computer packages, QuickBooks, and digital skills training for beginners & pros.",
    href: "/contact",
    cta: "Enroll today",
  },
  {
    icon: ShoppingBag,
    title: "Retail Shop",
    desc: "Flash disks, phone accessories, computer accessories and quality stationery.",
    href: "/contact",
    cta: "Visit the shop",
  },
];

function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-hero text-primary-foreground">
        <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Our Services</p>
          <h1 className="mt-3 font-display text-3xl font-bold md:text-5xl">
            Every service your home, business or studies might need
          </h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/85 md:text-lg">
            We've spent years building Nairobi's most reliable one-stop service hub.
            Browse the categories below or chat with us on WhatsApp for anything custom.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => {
            const Icon = g.icon;
            return (
              <Link
                key={g.title}
                to={g.href}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="font-display text-lg font-bold text-foreground">{g.title}</h2>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{g.desc}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                  {g.cta} <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <ServiceCTA />
    </>
  );
}
