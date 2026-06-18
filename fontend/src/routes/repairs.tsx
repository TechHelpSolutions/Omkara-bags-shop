import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Wrench } from "lucide-react";
import repairImg from "@/assets/repair.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import { waLink } from "@/lib/site";

export const Route = createFileRoute("/repairs")({
  head: () => ({
    meta: [
      { title: "Bag & Luggage Repair Services — OMKARA" },
      { name: "description", content: "Professional bag and luggage repair: trolley wheels, handles, zips, stitching, restoration and more at OMKARA Bhatia Attachi House." },
      { property: "og:title", content: "Bag & Luggage Repair Services — OMKARA" },
      { property: "og:url", content: "/repairs" },
    ],
    links: [{ rel: "canonical", href: "/repairs" }],
  }),
  component: RepairsPage,
});

const services = [
  { t: "Trolley Wheel Repair", d: "Replacement of broken or worn-out trolley wheels." },
  { t: "Handle Repair", d: "Fix telescopic handles, soft handles & grips." },
  { t: "Zip Replacement", d: "Full zip change with original-grade zippers." },
  { t: "Stitching Work", d: "Strong restitching for torn seams and panels." },
  { t: "Bag Restoration", d: "Bring old & damaged bags back to life." },
  { t: "Travel Luggage Repair", d: "Cracks, locks, wheels, frames — fully fixed." },
  { t: "School Bag Repair", d: "Strap, zip & body repairs for kids' bags." },
  { t: "Purse Repair", d: "Stitching, lining and hardware restoration." },
  { t: "All Types of Repairing", d: "If it's a bag, we can almost certainly fix it." },
];

function RepairsPage() {
  return (
    <>
      <section className="relative bg-[var(--ink)] text-[var(--cream)] overflow-hidden">
        <img src={repairImg} alt="" className="absolute inset-0 size-full object-cover opacity-30" />
        <div className="relative container-page py-24 md:py-32 max-w-2xl">
          <span className="eyebrow">Repair Center</span>
          <h1 className="mt-4 font-display text-5xl md:text-6xl font-semibold">
            Expert <span className="gold-text">Bag & Luggage</span> Repairs
          </h1>
          <p className="mt-5 text-white/80 text-lg leading-relaxed">
            One of the few centers in the entire district that professionally repairs all types of bags and luggage. Bring it in, we'll restore it.
          </p>
          <a href={waLink("Hello OMKARA, I need bag/luggage repair help.")} className="btn-whatsapp mt-7 inline-flex">
            <MessageCircle className="size-4" /> Get Repair Quote
          </a>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.t} className="rounded-2xl border border-border p-7 bg-card hover:border-accent/60 transition-colors">
              <div className="size-11 rounded-xl grid place-items-center bg-[var(--gradient-gold)] text-[var(--ink)]">
                <Wrench className="size-5" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad bg-[var(--cream)]">
        <div className="container-page grid lg:grid-cols-2 gap-10 items-center">
          <img src={gallery4} alt="Zip being replaced on a leather bag" loading="lazy" className="rounded-3xl w-full aspect-square object-cover" />
          <div>
            <span className="eyebrow">Why Repair With Us</span>
            <h2 className="mt-3 font-display text-4xl font-semibold">Save money. <span className="gold-text">Save your favourite bag.</span></h2>
            <ul className="mt-6 space-y-3 text-foreground/85">
              {["Experienced craftsmen with years of practice","Quality spare parts (zippers, wheels, handles)","Fast turnaround on most repairs","Honest pricing — quote before we start"].map((x) => (
                <li key={x} className="flex gap-3"><span className="mt-2 size-1.5 rounded-full bg-accent" />{x}</li>
              ))}
            </ul>
            <a href={waLink("Hello OMKARA, I'd like a repair estimate.")} className="btn-primary mt-7 inline-flex">
              <MessageCircle className="size-4" /> Send Repair Photos
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
