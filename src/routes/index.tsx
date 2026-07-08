import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Printer, Landmark, Wrench, GraduationCap, ShoppingBag,
  Zap, ShieldCheck, BadgeCheck, MessageCircle, MapPin, ArrowRight,
  Camera, FileText, Palette, IdCard, FileCheck, Smartphone, Cable,
  BookOpen, Calculator, HardDrive, Sofa, Wifi, BatteryCharging, Sparkles,
  Coffee, Clock,
} from "lucide-react";
import { waLink } from "@/lib/site";
import coworkingAsset from "@/assets/coworking-desks.jpg.asset.json";
import coworkingOfficeAsset from "@/assets/coworking-office.jpg.asset.json";
import coworkingPrivateAsset from "@/assets/coworking-private.jpg.asset.json";
const coworkingHero = coworkingAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Serene Co-working Space in Nairobi — Lloyds Business Solution" },
      { name: "description", content: "Nairobi's most serene and comfortable co-working space at unbeatable rates. Fast Wi-Fi, power backup, quiet desks. Plus printing, KRA, NTSA, repairs & more under one roof." },
      { property: "og:title", content: "Serene Co-working Space in Nairobi — Lloyds" },
      { property: "og:description", content: "Nairobi's serenest co-working space at unbeatable rates — plus every business & digital service you need." },
      { property: "og:image", content: coworkingAsset.url },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const categories = [
  {
    id: "coworking",
    title: "Co-working Space",
    icon: Sofa,
    items: [
      { icon: Sofa, label: "Serene & Comfortable Desks" },
      { icon: Wifi, label: "Fast Wi-Fi" },
      { icon: BatteryCharging, label: "Power Backup" },
      { icon: Sparkles, label: "Very Competitive Rates" },
    ],
    link: "/services/coworking",
  },
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
      {/* HERO — CO-WORKING FIRST */}
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold/25 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-secondary/30 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-gold backdrop-blur">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
              Now Open in Nairobi · Flagship Service
            </span>
            <h1 className="mt-5 font-display text-4xl font-black leading-[1.05] md:text-6xl lg:text-7xl">
              Nairobi's most{" "}
              <span className="bg-gradient-to-r from-gold via-gold to-yellow-200 bg-clip-text text-transparent">
                serene co-working
              </span>{" "}
              space.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-primary-foreground/90 md:text-xl">
              Quiet, comfortable and fully-equipped — at <strong className="text-gold">unbeatable rates</strong>.
              Built for freelancers, remote workers, students and SMEs who want to focus and ship.
            </p>

            <div className="mt-6 grid max-w-md grid-cols-2 gap-2 text-sm">
              <span className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 backdrop-blur"><Wifi className="h-4 w-4 text-gold" /> Fast Wi-Fi</span>
              <span className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 backdrop-blur"><BatteryCharging className="h-4 w-4 text-gold" /> Power backup</span>
              <span className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 backdrop-blur"><Coffee className="h-4 w-4 text-gold" /> Coffee on tap</span>
              <span className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 backdrop-blur"><Clock className="h-4 w-4 text-gold" /> Hourly · Daily · Monthly</span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/services/coworking"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-bold text-primary shadow-elegant transition-transform hover:scale-[1.03]"
              >
                Explore Co-working <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={waLink("Hello Lloyds, I'd like to book a co-working space.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-sm font-bold text-whatsapp-foreground shadow-elegant hover:opacity-90"
              >
                <MessageCircle className="h-4 w-4" /> Book on WhatsApp
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-5 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10"
              >
                Other services
              </a>
            </div>

            <div className="mt-10 grid max-w-md grid-cols-3 gap-6 text-sm">
              {[
                { k: "24/6", v: "Access days" },
                { k: "1 Gbps", v: "Wi-Fi speed" },
                { k: "KES", v: "Best rates in town" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-display text-2xl font-bold text-gold">{s.k}</div>
                  <div className="text-primary-foreground/70">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-gold/30 to-secondary/30 blur-2xl" />
            <div className="relative grid grid-cols-3 gap-3">
              <img
                src={coworkingHero}
                alt="Serene co-working space in Nairobi at Lloyds Business Solution"
                width={1600}
                height={1200}
                className="col-span-3 h-72 w-full rounded-3xl object-cover shadow-elegant ring-1 ring-primary-foreground/10 md:h-96"
              />
              <img
                src={coworkingOfficeAsset.url}
                alt="Private co-working workstation in Nairobi"
                loading="lazy"
                className="col-span-2 h-32 w-full rounded-2xl object-cover shadow-soft ring-1 ring-primary-foreground/10 md:h-40"
              />
              <img
                src={coworkingPrivateAsset.url}
                alt="Quiet executive desk at Lloyds co-working space"
                loading="lazy"
                className="h-32 w-full rounded-2xl object-cover shadow-soft ring-1 ring-primary-foreground/10 md:h-40"
              />
            </div>
            <div className="absolute -bottom-4 left-4 rotate-[-3deg] rounded-full bg-background px-4 py-2 text-xs font-black uppercase tracking-widest text-primary shadow-elegant">
              ★ Nairobi's serenest spot
            </div>
          </div>
        </div>
      </section>


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
