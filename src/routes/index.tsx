import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Printer, Landmark, Wrench, GraduationCap, ShoppingBag,
  Zap, ShieldCheck, BadgeCheck, MessageCircle, MapPin, ArrowRight,
  Camera, FileText, Palette, IdCard, FileCheck, Smartphone, Cable,
  BookOpen, Calculator, HardDrive,
} from "lucide-react";
import { waLink } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lloyds Business Solution — Printing, KRA, NTSA & Digital Services in Nairobi" },
      { name: "description", content: "Your complete business & digital services hub in Nairobi. Printing, government services, computer repairs, training and more — fast, reliable, affordable." },
      { property: "og:title", content: "Lloyds Business Solution — Nairobi" },
      { property: "og:description", content: "Printing • Government Services • Repairs • Training • Business Solutions in Nairobi." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const categories = [
  {
    id: "digital",
    title: "Digital & Office Services",
    icon: Printer,
    items: [
      { icon: Printer, label: "Printing & Scanning" },
      { icon: FileCheck, label: "Lamination" },
      { icon: Camera, label: "Passport Photos" },
      { icon: FileText, label: "CV Writing" },
      { icon: Palette, label: "Graphic Design" },
    ],
    link: "/services/printing",
  },
  {
    id: "gov",
    title: "Government Services",
    icon: Landmark,
    items: [
      { icon: IdCard, label: "eCitizen Services" },
      { icon: BadgeCheck, label: "NTSA Services" },
      { icon: FileCheck, label: "KRA Services" },
      { icon: Landmark, label: "BRS Registration" },
      { icon: FileText, label: "Tender Applications" },
    ],
    link: "/services/kra",
  },
  {
    id: "tech",
    title: "Tech & Repairs",
    icon: Wrench,
    items: [
      { icon: Wrench, label: "Computer Repairs" },
      { icon: HardDrive, label: "Software Installation" },
      { icon: Smartphone, label: "Mobile Phone Repairs" },
      { icon: Cable, label: "Device Accessories" },
    ],
    link: "/services/computer-repair",
  },
  {
    id: "training",
    title: "Training & Business Skills",
    icon: GraduationCap,
    items: [
      { icon: BookOpen, label: "Computer Packages" },
      { icon: Calculator, label: "QuickBooks Training" },
      { icon: GraduationCap, label: "Digital Skills" },
    ],
    link: "/services",
  },
  {
    id: "retail",
    title: "Retail Shop",
    icon: ShoppingBag,
    items: [
      { icon: HardDrive, label: "Flash Disks" },
      { icon: Smartphone, label: "Phone Accessories" },
      { icon: Cable, label: "Computer Accessories" },
      { icon: FileText, label: "Stationery" },
    ],
    link: "/services",
  },
];

const trust = [
  { icon: Zap, title: "Fast Turnaround", text: "Walk-in jobs delivered in minutes, not hours." },
  { icon: ShieldCheck, title: "Secure & Confidential", text: "Your documents and data are handled with care." },
  { icon: BadgeCheck, title: "Professional Quality", text: "Years of experience serving Nairobi customers." },
  { icon: MessageCircle, title: "Always Reachable", text: "Quick replies on WhatsApp every day of the week." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-secondary/30 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-3 py-1 text-xs font-medium backdrop-blur">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
            Open today in Nairobi
          </span>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.1] md:text-6xl">
            Your Complete Business & Digital Services Hub —{" "}
            <span className="text-gold">In One Place.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base text-primary-foreground/85 md:text-lg">
            Printing • Government Services • Repairs • Training • Business Solutions.
            Trusted by individuals, students and SMEs across Nairobi.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-sm font-semibold text-whatsapp-foreground shadow-elegant transition-transform hover:scale-[1.02]"
            >
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3.5 text-sm font-semibold text-primary hover:bg-background/90"
            >
              <MapPin className="h-4 w-4" /> Visit Our Branch
            </Link>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10"
            >
              Explore Services <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-12 grid max-w-2xl grid-cols-3 gap-6 text-sm">
            {[
              { k: "20+", v: "Services offered" },
              { k: "1000s", v: "Happy customers" },
              { k: "6 days", v: "Open weekly" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-2xl font-bold text-gold">{s.k}</div>
                <div className="text-primary-foreground/70">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary">What we offer</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
            Everything you need, under one roof
          </h2>
          <p className="mt-3 text-muted-foreground">
            From a single passport photo to a full company registration — we handle it all.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">{cat.title}</h3>
                <ul className="mt-4 flex-1 space-y-2">
                  {cat.items.map((it) => {
                    const ItIcon = it.icon;
                    return (
                      <li key={it.label} className="flex items-center gap-2 text-sm text-foreground/80">
                        <ItIcon className="h-4 w-4 text-secondary" />
                        {it.label}
                      </li>
                    );
                  })}
                </ul>
                <Link
                  to={cat.link}
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* TRUST */}
      <section className="bg-accent">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Fast. Reliable. Affordable. <span className="text-secondary">Trusted.</span>
            </h2>
            <p className="mt-3 text-muted-foreground">Why thousands of Nairobi customers choose Lloyds.</p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {trust.map((t) => {
              const Icon = t.icon;
              return (
                <div key={t.title} className="rounded-2xl bg-card p-6 shadow-soft">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold text-foreground">{t.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{t.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="overflow-hidden rounded-3xl bg-gradient-brand p-10 text-primary-foreground shadow-elegant md:p-16">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-bold leading-tight md:text-4xl">
                Need urgent help? Talk to us on WhatsApp or visit us today.
              </h2>
              <p className="mt-3 text-primary-foreground/80">
                Get a fast quote, book a service, or simply ask a question — we reply in minutes.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-sm font-semibold text-whatsapp-foreground hover:opacity-90"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Now
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3.5 text-sm font-semibold text-primary hover:bg-background/90"
              >
                <MapPin className="h-4 w-4" /> Get Directions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
