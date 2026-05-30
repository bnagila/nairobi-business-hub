import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { SITE, waLink } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Visit — Lloyds Business Solution Nairobi" },
      { name: "description", content: "Visit Lloyds Business Solution in Nairobi or reach us on WhatsApp, phone or email. We're open six days a week for printing, government and tech services." },
      { property: "og:title", content: "Contact Lloyds Business Solution" },
      { property: "og:description", content: "Visit our Nairobi branch or chat with us on WhatsApp." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="bg-gradient-hero text-primary-foreground">
        <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Get in Touch</p>
          <h1 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
            Visit our branch or chat with us right now.
          </h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/85 md:text-lg">
            WhatsApp is the fastest way to reach us — usually under 5 minutes during open hours.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="group rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-whatsapp text-whatsapp-foreground">
              <MessageCircle className="h-6 w-6" />
            </div>
            <h2 className="mt-4 font-display text-lg font-bold text-foreground">WhatsApp</h2>
            <p className="mt-1 text-sm text-muted-foreground">Tap to start a chat — fastest replies.</p>
            <p className="mt-3 font-semibold text-primary">{SITE.phone}</p>
          </a>

          <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="group rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Phone className="h-6 w-6" />
            </div>
            <h2 className="mt-4 font-display text-lg font-bold text-foreground">Call us</h2>
            <p className="mt-1 text-sm text-muted-foreground">Speak directly with our team.</p>
            <p className="mt-3 font-semibold text-primary">{SITE.phone}</p>
          </a>

          <a href={`mailto:${SITE.email}`} className="group rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
              <Mail className="h-6 w-6" />
            </div>
            <h2 className="mt-4 font-display text-lg font-bold text-foreground">Email</h2>
            <p className="mt-1 text-sm text-muted-foreground">For inquiries and large jobs.</p>
            <p className="mt-3 font-semibold text-primary">{SITE.email}</p>
          </a>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold/20 text-gold-foreground">
              <Clock className="h-6 w-6" />
            </div>
            <h2 className="mt-4 font-display text-lg font-bold text-foreground">Opening Hours</h2>
            <p className="mt-1 text-sm text-muted-foreground">{SITE.hours}</p>
            <p className="mt-3 text-sm text-foreground/80">Closed on major public holidays.</p>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
          <div className="flex items-start gap-3 border-b border-border bg-accent px-6 py-4">
            <MapPin className="mt-0.5 h-5 w-5 text-secondary" />
            <div>
              <div className="font-display font-bold text-foreground">Our Branch</div>
              <p className="text-sm text-muted-foreground">{SITE.address}</p>
            </div>
          </div>
          <iframe
            title="Lloyds Business Solution map"
            src="https://www.google.com/maps?q=Nairobi+CBD&output=embed"
            className="h-72 w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
