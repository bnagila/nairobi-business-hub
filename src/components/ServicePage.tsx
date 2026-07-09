import { Check, HelpCircle } from "lucide-react";
import { ServiceCTA } from "./ServiceCTA";

export interface ServicePageProps {
  eyebrow: string;
  title: string;
  intro: string;
  benefits: string[];
  process: { step: string; detail: string }[];
  faqs: { q: string; a: string }[];
  serviceName: string;
  whatsappMessage?: string;
}

export function ServicePage({
  eyebrow,
  title,
  intro,
  benefits,
  process,
  faqs,
  serviceName,
  whatsappMessage,
}: ServicePageProps) {
  return (
    <div className="pb-10">
      <section className="bg-gradient-hero text-primary-foreground">
        <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">{eyebrow}</p>
          <h1 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-primary-foreground/85 md:text-lg">
            {intro}
          </p>
        </div>
      </section>

      <section className="mx-auto mt-12 grid max-w-5xl gap-10 px-4 md:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl font-bold text-foreground">Why choose us</h2>
          <ul className="mt-5 space-y-3">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-soft">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                <span className="text-sm text-foreground/85">{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-2xl font-bold text-foreground">How it works</h2>
          <ol className="mt-5 space-y-4">
            {process.map((p, i) => (
              <li key={p.step} className="flex gap-4 rounded-xl bg-accent p-4">
                <div className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full bg-primary font-display font-bold text-primary-foreground">
                  {i + 1}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{p.step}</div>
                  <p className="text-sm text-muted-foreground">{p.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-3xl px-4">
        <h2 className="font-display text-2xl font-bold text-foreground">Frequently asked questions</h2>
        <div className="mt-6 divide-y divide-border rounded-2xl border border-border bg-card">
          {faqs.map((f) => (
            <details key={f.q} className="group p-5">
              <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold text-foreground">
                <span className="flex items-start gap-2">
                  <HelpCircle className="mt-0.5 h-4 w-4 text-secondary" />
                  {f.q}
                </span>
                <span className="text-primary group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 pl-6 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <ServiceCTA service={serviceName} message={whatsappMessage} />
    </div>
  );
}
