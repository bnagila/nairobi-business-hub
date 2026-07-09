import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Printer, Landmark, Wrench, GraduationCap, ShoppingBag, FileText, Camera, Sofa, Sparkles, Wifi, BatteryCharging, MessageCircle, Coffee, Zap } from "lucide-react";
import { waLink } from "@/lib/site";
import { ServiceCTA } from "@/components/ServiceCTA";
import coworkingAsset from "@/assets/coworking-desks.jpg.asset.json";
const coworkingImg = coworkingAsset.url;
import printingAsset from "@/assets/service-printing-new.jpg.asset.json";
const printingImg = printingAsset.url;
import passportAsset from "@/assets/service-passport-new.jpg.asset.json";
const passportImg = passportAsset.url;
import cvAsset from "@/assets/service-cv-new.jpg.asset.json";
const cvImg = cvAsset.url;
import kraImg from "@/assets/service-kra.jpg";
import ntsaImg from "@/assets/service-ntsa.jpg";
import repairAsset from "@/assets/service-repair-new.jpg.asset.json";
const repairImg = repairAsset.url;
import trainingImg from "@/assets/service-training.jpg";
import shopImg from "@/assets/service-shop.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — Lloyds Business Solution Nairobi" },
      { name: "description", content: "Explore all services offered by Lloyds Business Solution in Nairobi: co-working, printing, KRA, NTSA, computer repair, CV writing, training, and more." },
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
    image: printingImg,
  },
  {
    icon: Camera,
    title: "Passport Photos",
    desc: "Instant passport, visa and ID photos that meet all international standards.",
    href: "/services/passport-photos",
    cta: "View passport photo services",
    image: passportImg,
  },
  {
    icon: FileText,
    title: "Professional CV Writing",
    desc: "ATS-friendly CVs, cover letters and LinkedIn optimization for the Kenyan job market.",
    href: "/services/cv-writing",
    cta: "View CV writing services",
    image: cvImg,
  },
  {
    icon: Landmark,
    title: "KRA Services",
    desc: "PIN registration, iTax filing, returns, compliance certificates and KRA help.",
    href: "/services/kra",
    cta: "View KRA services",
    image: kraImg,
  },
  {
    icon: Landmark,
    title: "NTSA Services",
    desc: "Logbook transfer, driving license renewal, TIMS queries and number plate orders.",
    href: "/services/ntsa",
    cta: "View NTSA services",
    image: ntsaImg,
  },
  {
    icon: Wrench,
    title: "Computer & Phone Repairs",
    desc: "Laptops, desktops and smartphones — diagnostics, repair, software installation.",
    href: "/services/computer-repair",
    cta: "View repair services",
    image: repairImg,
  },
  {
    icon: GraduationCap,
    title: "Training",
    desc: "Computer packages, QuickBooks, and digital skills training for beginners & pros.",
    href: "/contact",
    cta: "Enroll today",
    image: trainingImg,
  },
  {
    icon: ShoppingBag,
    title: "Retail Shop",
    desc: "Flash disks, phone accessories, computer accessories and quality stationery.",
    href: "/contact",
    cta: "Visit the shop",
    image: shopImg,
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

      {/* CO-WORKING SHOWSTOPPER */}
      <section className="relative mx-auto mt-12 max-w-6xl px-4">
        <div className="absolute -top-3 left-6 z-10 rotate-[-3deg] rounded-full bg-gold px-4 py-1.5 text-xs font-black uppercase tracking-widest text-primary shadow-elegant animate-pulse">
          ★ Now Open · Nairobi's serenest spot
        </div>
        <Link
          to="/services/coworking"
          className="group relative block overflow-hidden rounded-3xl shadow-elegant ring-1 ring-gold/40"
        >
          <div className="grid md:grid-cols-2">
            {/* Image side */}
            <div className="relative h-72 md:h-auto md:min-h-[460px]">
              <img
                src={coworkingImg}
                alt="Serene co-working space in Nairobi by Lloyds Business Solution"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                width={1920}
                height={1080}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent md:bg-gradient-to-r" />
              <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 md:hidden">
                <span className="rounded-full bg-background/90 px-3 py-1 text-xs font-bold text-primary">Hourly</span>
                <span className="rounded-full bg-background/90 px-3 py-1 text-xs font-bold text-primary">Daily</span>
                <span className="rounded-full bg-background/90 px-3 py-1 text-xs font-bold text-primary">Monthly</span>
              </div>
            </div>

            {/* Copy side */}
            <div className="relative bg-gradient-brand p-8 text-primary-foreground md:p-12">
              <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gold/25 blur-3xl" />
              <div className="absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-secondary/30 blur-3xl" />
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
                  <Sparkles className="h-3.5 w-3.5" /> Featured · Best value in town
                </span>
                <h2 className="mt-4 font-display text-3xl font-black leading-tight md:text-5xl">
                  Serene Co-working at
                  <span className="block bg-gradient-to-r from-gold via-gold to-yellow-200 bg-clip-text text-transparent">
                    unbeatable rates.
                  </span>
                </h2>
                <p className="mt-4 max-w-md text-primary-foreground/90 md:text-lg">
                  Quiet, comfortable, fully-equipped. Built for freelancers, students and SMEs who want to <em>focus and ship</em>.
                </p>

                <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                  <span className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 backdrop-blur"><Wifi className="h-4 w-4 text-gold" /> Fast Wi-Fi</span>
                  <span className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 backdrop-blur"><BatteryCharging className="h-4 w-4 text-gold" /> Power backup</span>
                  <span className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 backdrop-blur"><Coffee className="h-4 w-4 text-gold" /> Coffee on tap</span>
                  <span className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 backdrop-blur"><Zap className="h-4 w-4 text-gold" /> Printing on-site</span>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-background px-5 py-3 text-sm font-bold text-primary shadow-soft">
                    Explore co-working <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <a
                    href={waLink("Hello Lloyds, I'd like to book a co-working space.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-bold text-whatsapp-foreground shadow-soft hover:opacity-90"
                  >
                    <MessageCircle className="h-4 w-4" /> Book on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">More services we offer</h2>
          <p className="hidden text-sm text-muted-foreground md:block">Tap any card to learn more</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => {
            const Icon = g.icon;
            return (
              <Link
                key={g.title}
                to={g.href}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="relative h-44 overflow-hidden bg-muted">
                  <img
                    src={g.image}
                    alt={g.title}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute left-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground shadow-elegant">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-bold text-foreground">{g.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{g.desc}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-all group-hover:gap-2">
                    {g.cta} <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <ServiceCTA />
    </>
  );
}
