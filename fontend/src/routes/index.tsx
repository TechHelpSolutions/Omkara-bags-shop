import { ArrowRight, Phone, MessageCircle, ShieldCheck, Sparkles, Wrench, Truck, BadgeCheck, Star, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-shop.jpg";
import repairImg from "@/assets/repair.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import { CATEGORIES, SITE, defaultEnquiry, waLink } from "@/lib/site";
import { InquiryForm } from "@/components/InquiryForm";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});
function Home() {
  return (
    <>
      <Hero />
      <Highlights />
      <Categories />
      <RepairSection />
      <WhyUs />
      <GalleryStrip />
      <Testimonials />
      <ContactCTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={heroImg} alt="Premium Indian bag and luggage showroom" className="size-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-[var(--gradient-hero)]/0" style={{ background: "linear-gradient(120deg, rgba(8,12,30,.92) 0%, rgba(8,12,30,.7) 45%, rgba(8,12,30,.3) 100%)" }} />
      </div>
      <div className="container-page py-24 md:py-36 text-[var(--cream)]">
        <div className="max-w-2xl animate-fade-up">
          <span className="eyebrow">Wholesale · Retail · Repairs</span>
          <h1 className="mt-4 font-display text-5xl md:text-7xl leading-[1.02] font-semibold">
            <span className="gold-text">OMKARA</span>
            <span className="block text-[var(--cream)] text-3xl md:text-4xl mt-2 font-medium tracking-tight">Bhatia Attachi House</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/85 max-w-xl leading-relaxed">
            {SITE.tagline}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#categories" className="btn-primary"><Sparkles className="size-4" /> Explore Products</a>
            <a href={`tel:${SITE.phoneIntl}`} className="btn-outline"><Phone className="size-4" /> Call Now</a>
            <a href={waLink(defaultEnquiry())} className="btn-whatsapp"><MessageCircle className="size-4" /> WhatsApp</a>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/80">
            {[
              ["Wholesale & Retail", BadgeCheck],
              ["Premium Quality", ShieldCheck],
              ["All Types of Repairs", Wrench],
              ["Trusted Local Store", Star],
            ].map(([label, Icon]: any) => (
              <span key={label} className="inline-flex items-center gap-2">
                <Icon className="size-4 text-accent" /> {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Highlights() {
  const items = [
    { icon: Truck, t: "Wholesale & Retail", d: "Buy single pieces or full bulk orders." },
    { icon: ShieldCheck, t: "Premium Quality", d: "Hand-picked, durable, branded products." },
    { icon: Wrench, t: "Expert Repairs", d: "Restoration for every type of bag & luggage." },
    { icon: Star, t: "Trusted Locally", d: "Generations of customers across the district." },
  ];
  return (
    <section className="bg-[var(--cream)] border-y border-border">
      <div className="container-page py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map(({ icon: Icon, t, d }) => (
          <div key={t} className="flex items-start gap-3">
            <div className="size-11 rounded-xl grid place-items-center bg-primary text-primary-foreground shrink-0">
              <Icon className="size-5 text-accent" />
            </div>
            <div>
              <div className="font-semibold text-sm">{t}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{d}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Categories() {
  return (
    <section id="categories" className="section-pad">
      <div className="container-page">
        <SectionHeader eyebrow="Shop by Category" title={<>Explore Our <span className="gold-text">Collection</span></>} subtitle="From school bags to trolley luggage, we stock every kind of bag you need." />
        <div className="mt-12 grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {CATEGORIES.map((c, i) => (
            <a
              key={c.slug}
              href={`/categories/${c.slug}`}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border shadow-[var(--shadow-card)] hover:-translate-y-1 transition-transform"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img src={c.image} alt={c.name} loading="lazy" className="size-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-[var(--ink)]/95 via-[var(--ink)]/60 to-transparent text-white">
                <div className="font-display text-xl font-semibold">{c.name}</div>
                <div className="mt-1 text-xs text-white/75 line-clamp-1">{c.tagline}</div>
                <div className="mt-2 inline-flex items-center gap-1.5 text-xs text-accent font-medium">
                  View Products <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function RepairSection() {
  const services = [
    "Trolley Wheel Repair", "Handle Repair", "Zip Replacement",
    "Stitching Work", "Bag Restoration", "Travel Luggage Repair",
    "School Bag Repair", "Purse Repair", "All Types of Bag Repairing",
  ];
  return (
    <section className="relative bg-[var(--ink)] text-[var(--cream)] section-pad overflow-hidden">
      <div className="absolute -top-32 -right-32 size-[480px] rounded-full bg-[var(--gradient-gold)] opacity-10 blur-3xl" />
      <div className="container-page grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <span className="eyebrow">Special USP</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold leading-tight">
            Expert <span className="gold-text">Bag & Luggage</span> Repair Center
          </h2>
          <p className="mt-5 text-white/75 text-lg leading-relaxed">
            We are among the few businesses in the entire district providing
            professional repair services for all types of bags and luggage.
          </p>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {services.map((s) => (
              <div key={s} className="text-xs sm:text-sm py-2.5 px-3 rounded-lg bg-white/5 border border-white/10 text-white/85">
                {s}
              </div>
            ))}
          </div>
          <div className="mt-8 p-5 rounded-xl border border-accent/30 bg-[var(--gradient-gold)]/10">
            <div className="text-sm font-semibold gold-text">Under One Roof</div>
            <div className="text-white/85">Wholesale & Retail Products + Professional Repairing</div>
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="/repairs" className="btn-primary">Repair Services <ArrowRight className="size-4" /></a>
            <a href={waLink("Hello OMKARA, I need bag/luggage repair help.")} className="btn-whatsapp"><MessageCircle className="size-4" /> Get Repair Quote</a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-[var(--shadow-luxe)]">
            <img src={repairImg} alt="Indian craftsman repairing a trolley wheel" loading="lazy" className="size-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-card text-foreground rounded-2xl p-5 shadow-[var(--shadow-luxe)] max-w-[240px]">
            <div className="text-3xl font-display gold-text font-semibold">25+</div>
            <div className="text-xs text-muted-foreground mt-1">Types of repairs handled with precision and care.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    "Wholesale & Retail Availability", "Large Product Variety", "Trusted Local Store",
    "Affordable Pricing", "Premium Quality", "Professional Repair Services",
    "Experienced Team", "100% Customer Satisfaction",
  ];
  return (
    <section className="section-pad">
      <div className="container-page">
        <SectionHeader eyebrow="Why Choose Us" title={<>Trusted for <span className="gold-text">Quality & Service</span></>} subtitle="Eight reasons families and businesses across the district choose OMKARA." />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((t, i) => (
            <div key={t} className="rounded-2xl bg-card border border-border p-6 hover:border-accent/60 transition-colors">
              <div className="size-10 rounded-full grid place-items-center bg-[var(--gradient-gold)] text-[var(--ink)] font-display font-semibold">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="mt-4 font-display text-lg font-semibold leading-snug">{t}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryStrip() {
  const imgs = [gallery1, gallery2, gallery3, gallery4];
  return (
    <section className="section-pad bg-[var(--cream)]">
      <div className="container-page">
        <SectionHeader eyebrow="Inside Our Store" title={<>A Glimpse of <span className="gold-text">OMKARA</span></>} subtitle="Photographs from our showroom and repair workshop." />
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {imgs.map((src, i) => (
            <div key={i} className="aspect-square overflow-hidden rounded-2xl group">
              <img src={src} alt={`OMKARA store photo ${i + 1}`} loading="lazy" className="size-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href="/gallery" className="btn-outline !text-foreground !border-foreground/30 hover:!bg-foreground/5">View Full Gallery <ArrowRight className="size-4" /></a>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    { n: "Rajesh Sharma", r: "Bought trolley bags for the whole family. Great quality and best prices in the district.", s: 5 },
    { n: "Priya Verma", r: "Got my favourite handbag stitched back to perfect condition. Amazing repair service!", s: 5 },
    { n: "Amit Kumar", r: "Bulk order for our school — delivered on time with premium quality. Highly recommend.", s: 5 },
  ];
  return (
    <section className="section-pad">
      <div className="container-page">
        <SectionHeader eyebrow="Testimonials" title={<>What Our <span className="gold-text">Customers Say</span></>} subtitle="Real reviews from people who trust OMKARA." />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.n} className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)]">
              <div className="flex gap-1 text-accent">
                {Array.from({ length: r.s }).map((_, i) => <Star key={i} className="size-4 fill-current" />)}
              </div>
              <p className="mt-4 text-foreground/85 leading-relaxed">"{r.r}"</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="size-10 rounded-full bg-[var(--gradient-gold)] grid place-items-center font-semibold text-[var(--ink)]">{r.n[0]}</div>
                <div>
                  <div className="font-semibold text-sm">{r.n}</div>
                  <div className="text-xs text-muted-foreground">Verified Customer</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <section className="section-pad bg-[var(--cream)]">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <span className="eyebrow">Get in Touch</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold">
            Have a question? <span className="gold-text">Let's talk.</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Send us your details and we'll respond instantly on WhatsApp.
          </p>
          <div className="mt-7 space-y-4 text-sm">
            <div className="flex items-start gap-3"><MapPin className="size-5 text-accent mt-0.5" /><span>{SITE.address}</span></div>
            <div className="flex items-start gap-3"><Phone className="size-5 text-accent mt-0.5" /><a href={`tel:${SITE.phoneIntl}`}>{SITE.phone}</a></div>
            <div className="flex items-start gap-3"><MessageCircle className="size-5 text-accent mt-0.5" /><a href={waLink(defaultEnquiry())}>Chat on WhatsApp</a></div>
          </div>
        </div>
        <div className="rounded-3xl bg-card border border-border p-6 md:p-8 shadow-[var(--shadow-card)]">
          <InquiryForm />
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: React.ReactNode; subtitle?: string }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold leading-tight">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
