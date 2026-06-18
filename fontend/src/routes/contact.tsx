import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, MessageCircle, Navigation } from "lucide-react";
import { SITE, waLink, defaultEnquiry } from "@/lib/site";
import { InquiryForm } from "@/components/InquiryForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact OMKARA — Bhatia Attachi House" },
      { name: "description", content: "Visit, call or WhatsApp OMKARA Bhatia Attachi House on Pandit Raja Ram Gali, Railway Road, India." },
      { property: "og:title", content: "Contact OMKARA" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const mapsQuery = encodeURIComponent(`${SITE.business}, ${SITE.address}`);
  return (
    <>
      <section className="bg-[var(--ink)] text-[var(--cream)] py-20 md:py-28">
        <div className="container-page max-w-2xl">
          <span className="eyebrow">Contact Us</span>
          <h1 className="mt-3 font-display text-5xl md:text-6xl font-semibold">
            Let's <span className="gold-text">Connect</span>
          </h1>
          <p className="mt-4 text-white/80 text-lg">
            Visit our store, call us, or send a quick WhatsApp message — we'll be happy to help.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-3xl font-semibold">{SITE.business}</h2>
            <div className="mt-2 text-accent font-semibold tracking-[0.18em] uppercase text-xs">Brand: {SITE.brand}</div>
            <div className="mt-7 space-y-5">
              <Info icon={MapPin} title="Visit Us" lines={[SITE.address]} />
              <Info icon={Phone} title="Call Us" lines={[SITE.phone]} href={`tel:${SITE.phoneIntl}`} />
              <Info icon={MessageCircle} title="WhatsApp" lines={["Chat with us instantly"]} href={waLink(defaultEnquiry())} />
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`tel:${SITE.phoneIntl}`} className="btn-primary"><Phone className="size-4" /> Call Now</a>
              <a href={waLink(defaultEnquiry())} className="btn-whatsapp"><MessageCircle className="size-4" /> WhatsApp</a>
              <a href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`} target="_blank" rel="noreferrer" className="btn-outline !text-foreground !border-foreground/30 hover:!bg-foreground/5">
                <Navigation className="size-4" /> Get Directions
              </a>
            </div>
          </div>

          <div className="rounded-3xl bg-card border border-border p-6 md:p-8 shadow-[var(--shadow-card)]">
            <h3 className="font-display text-2xl font-semibold">Send an Inquiry</h3>
            <p className="text-sm text-muted-foreground mt-1">Your message will open in WhatsApp.</p>
            <div className="mt-5">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-page">
          <div className="rounded-3xl overflow-hidden border border-border h-[380px]">
            <iframe
              title="OMKARA Bhatia Attachi House location"
              src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function Info({ icon: Icon, title, lines, href }: { icon: any; title: string; lines: string[]; href?: string }) {
  const body = (
    <div className="flex gap-4">
      <div className="size-11 rounded-xl grid place-items-center bg-[var(--gradient-gold)] text-[var(--ink)] shrink-0">
        <Icon className="size-5" />
      </div>
      <div>
        <div className="font-semibold">{title}</div>
        {lines.map((l) => <div key={l} className="text-muted-foreground text-sm">{l}</div>)}
      </div>
    </div>
  );
  return href ? <a href={href} className="block hover:opacity-80">{body}</a> : body;
}
