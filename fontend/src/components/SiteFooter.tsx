import { Facebook, Instagram, MapPin, Phone, MessageCircle } from "lucide-react";
import { SITE, CATEGORIES, waLink, defaultEnquiry } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--ink)] text-[var(--cream)] mt-16">
      <div className="container-page py-16 grid gap-12 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="size-11 rounded-full grid place-items-center bg-[var(--gradient-gold)] text-[var(--ink)] font-display font-bold">ॐ</div>
            <div>
              <div className="font-display text-2xl gold-text font-semibold">{SITE.brand}</div>
              <div className="text-xs tracking-[0.22em] uppercase text-white/60">{SITE.business}</div>
            </div>
          </div>
          <p className="mt-5 text-sm text-white/70 leading-relaxed">
            Wholesale & retail bag store and professional repair center, trusted across the district for quality, variety and service.
          </p>
          <div className="mt-5 flex gap-3">
            <a aria-label="Facebook" href="#" className="size-9 grid place-items-center rounded-full border border-white/15 hover:bg-white/10"><Facebook className="size-4" /></a>
            <a aria-label="Instagram" href="#" className="size-9 grid place-items-center rounded-full border border-white/15 hover:bg-white/10"><Instagram className="size-4" /></a>
            <a aria-label="WhatsApp" href={waLink(defaultEnquiry())} className="size-9 grid place-items-center rounded-full border border-white/15 hover:bg-white/10"><MessageCircle className="size-4" /></a>
          </div>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] text-white/60 mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              ["/", "Home"], ["/about", "About"], ["/repairs", "Repair Services"], ["/gallery", "Gallery"], ["/contact", "Contact"],
            ].map(([to, l]) => (
              <li key={to}><a href={to} className="text-white/80 hover:text-accent">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] text-white/60 mb-4">Categories</h4>
          <ul className="space-y-2 text-sm">
            {CATEGORIES.slice(0, 6).map((c) => (
              <li key={c.slug}>
                <a href={`/categories/${c.slug}`} className="text-white/80 hover:text-accent">
                  {c.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] text-white/60 mb-4">Reach Us</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex gap-3"><MapPin className="size-4 mt-0.5 text-accent shrink-0" /> {SITE.address}</li>
            <li className="flex gap-3"><Phone className="size-4 mt-0.5 text-accent shrink-0" /> <a href={`tel:${SITE.phoneIntl}`}>{SITE.phone}</a></li>
            <li className="flex gap-3"><MessageCircle className="size-4 mt-0.5 text-accent shrink-0" /> <a href={waLink(defaultEnquiry())}>WhatsApp Us</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-5 text-xs text-white/50 flex flex-col md:flex-row gap-2 justify-between">
          <span>© {new Date().getFullYear()} {SITE.business}. All rights reserved.</span>
          <span>Brand: OMKARA · Wholesale · Retail · Repairs</span>
        </div>
      </div>
    </footer>
  );
}
