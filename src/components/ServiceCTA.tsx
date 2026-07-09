import { MessageCircle, MapPin } from "lucide-react";
import { waLink } from "@/lib/site";

export function ServiceCTA({ service, message }: { service?: string; message?: string }) {
  const msg = message ?? (service
    ? `Hello Lloyds, I'd like to inquire about ${service}.`
    : undefined);
  return (
    <section className="mx-auto mt-16 max-w-5xl px-4">
      <div className="overflow-hidden rounded-3xl bg-gradient-brand p-8 text-primary-foreground shadow-elegant md:p-12">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h3 className="font-display text-2xl font-bold md:text-3xl">
              Need urgent help? We're ready now.
            </h3>
            <p className="mt-2 max-w-xl text-primary-foreground/80">
              Talk to us on WhatsApp for a fast quote, or walk into our branch in Nairobi today.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={waLink(msg)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-semibold text-whatsapp-foreground shadow-soft hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-background px-5 py-3 text-sm font-semibold text-primary hover:bg-background/90"
            >
              <MapPin className="h-4 w-4" /> Visit Our Branch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
