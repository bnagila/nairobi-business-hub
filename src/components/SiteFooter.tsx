import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SITE, waLink } from "@/lib/site";
import logo from "@/assets/lloyds-logo.png";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="rounded-xl bg-background p-3 inline-block">
            <img src={logo} alt="Lloyds Business Solution" width={200} height={64} className="h-12 w-auto" />
          </div>
          <p className="mt-4 max-w-sm text-sm text-primary-foreground/75">
            Nairobi's all-in-one hub for printing, government services, computer repairs,
            training, and business solutions. Fast, reliable, affordable.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">Services</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/services/printing" className="hover:text-gold">Printing & Scanning</Link></li>
            <li><Link to="/services/kra" className="hover:text-gold">KRA Services</Link></li>
            <li><Link to="/services/ntsa" className="hover:text-gold">NTSA Services</Link></li>
            <li><Link to="/services/cv-writing" className="hover:text-gold">CV Writing</Link></li>
            <li><Link to="/services/passport-photos" className="hover:text-gold">Passport Photos</Link></li>
            <li><Link to="/services/computer-repair" className="hover:text-gold">Computer Repairs</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">Visit / Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-gold" /> {SITE.address}</li>
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-gold" /> {SITE.phone}</li>
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-gold" /> {SITE.email}</li>
            <li className="flex items-start gap-2"><Clock className="mt-0.5 h-4 w-4 text-gold" /> {SITE.hours}</li>
          </ul>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex rounded-full bg-gold px-4 py-2 text-xs font-semibold text-gold-foreground hover:opacity-90"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-6xl px-4 py-5 text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
