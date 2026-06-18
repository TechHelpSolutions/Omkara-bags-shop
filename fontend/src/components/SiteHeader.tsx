import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { SITE } from "@/lib/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "#categories", label: "Categories" }, // Single page view support k liye hash navigation best hai
  { to: "/repairs", label: "Repairs" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/85 border-b border-border/60">
      <div className="container-page flex items-center justify-between py-3.5">
        <a href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <div className="size-10 rounded-full grid place-items-center bg-[var(--gradient-hero)] text-[var(--cream)] font-display text-lg">
            <span className="gold-text font-semibold">ॐ</span>
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg font-semibold tracking-tight">{SITE.brand}</div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Bhatia Attachi House
            </div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {nav.map((n) => (
            <a
              key={n.to}
              href={n.to}
              className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors"
            >
              {n.label}
            </a>
          ))}
          <a href={`tel:${SITE.phoneIntl}`} className="btn-primary !py-2.5 !px-5 text-xs">
            <Phone className="size-4" /> {SITE.phone}
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-md border border-border"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container-page flex flex-col gap-1 py-4">
            {nav.map((n) => (
              <a
                key={n.to}
                href={n.to}
                onClick={() => setOpen(false)}
                className="py-2.5 text-base font-medium border-b border-border/60"
              >
                {n.label}
              </a>
            ))}
            <a href={`tel:${SITE.phoneIntl}`} className="btn-primary mt-3 w-full">
              <Phone className="size-4" /> Call {SITE.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
