import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Eye, Heart, Zap, ShieldCheck, Users } from "lucide-react";
import { ServiceCTA } from "@/components/ServiceCTA";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Lloyds Business Solution — Nairobi's Trusted Service Hub" },
      { name: "description", content: "Lloyds Business Solution is Nairobi's all-in-one hub for digital, government and business services. Learn about our mission, vision and the team behind the brand." },
      { property: "og:title", content: "About Lloyds Business Solution" },
      { property: "og:description", content: "Nairobi's trusted hub for digital, government and business services." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: Zap, title: "Speed", text: "We respect your time — most services are completed while you wait." },
  { icon: ShieldCheck, title: "Reliability", text: "Consistent, professional results you can count on, every visit." },
  { icon: Heart, title: "Customer Care", text: "Friendly help, clear explanations and follow-up after every job." },
  { icon: Users, title: "Accessibility", text: "Fair, transparent pricing so quality services reach everyone." },
];

function AboutPage() {
  return (
    <>
      <section className="bg-gradient-hero text-primary-foreground">
        <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">About Us</p>
          <h1 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
            Built to simplify digital, business and government services in Nairobi.
          </h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/85 md:text-lg">
            Lloyds Business Solution started with one idea: people shouldn't have to
            visit five different shops to get one simple thing done. Today we are a
            trusted multi-service hub helping individuals, students and SMEs across Nairobi.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-soft">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
              <Target className="h-6 w-6" />
            </div>
            <h2 className="mt-4 font-display text-2xl font-bold text-foreground">Our Mission</h2>
            <p className="mt-3 text-muted-foreground">
              To simplify access to digital, business and government services for every
              Kenyan — by combining speed, professionalism and friendly support under one roof.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8 shadow-soft">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Eye className="h-6 w-6" />
            </div>
            <h2 className="mt-4 font-display text-2xl font-bold text-foreground">Our Vision</h2>
            <p className="mt-3 text-muted-foreground">
              To become Nairobi's most trusted all-in-one service hub — the first place
              people think of for anything digital, business or government-related.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-accent">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <h2 className="text-center font-display text-3xl font-bold text-foreground">
            What we stand for
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="rounded-2xl bg-card p-6 shadow-soft">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold text-foreground">{v.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{v.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 text-center">
        <h2 className="font-display text-3xl font-bold text-foreground">
          Ready to experience the Lloyds difference?
        </h2>
        <p className="mt-3 text-muted-foreground">
          Visit our Nairobi branch or send a quick WhatsApp message — we'll take it from there.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link to="/services" className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
            Explore Services
          </Link>
          <Link to="/contact" className="rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:bg-accent">
            Visit Our Branch
          </Link>
        </div>
      </section>

      <ServiceCTA />
    </>
  );
}
