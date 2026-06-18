import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import gallery1 from "@/assets/gallery-1.jpg";
import { Award, Heart, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About OMKARA — Bhatia Attachi House" },
      { name: "description", content: "Learn the story of OMKARA, Bhatia Attachi House — a trusted destination for bags, luggage and repairs on Railway Road, India." },
      { property: "og:title", content: "About OMKARA — Bhatia Attachi House" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="bg-[var(--ink)] text-[var(--cream)] py-20 md:py-28">
        <div className="container-page max-w-3xl">
          <span className="eyebrow">Our Story</span>
          <h1 className="mt-4 font-display text-5xl md:text-6xl font-semibold leading-tight">
            About <span className="gold-text">OMKARA</span>
          </h1>
          <p className="mt-6 text-lg text-white/80 leading-relaxed">
            For years, {SITE.business} has been the go-to destination for bags, luggage and accessories on Railway Road. Under the brand OMKARA, we combine wholesale variety with retail care and a rare in-house repair expertise.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl overflow-hidden">
            <img src={gallery1} alt="Inside our bag shop" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div>
            <span className="eyebrow">Who We Are</span>
            <h2 className="mt-3 font-display text-4xl font-semibold">A trusted name in <span className="gold-text">bags & repairs</span></h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              From school bags and trolley luggage to office bags, purses, raincoats and umbrellas — our showroom carries a wide range of premium products for every need and budget. Wholesale buyers get bulk advantages while retail customers enjoy personal service.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              What truly sets us apart is our professional repair center. We restore trolley wheels, replace zips, fix handles, do stitching work, and bring damaged bags back to life — a service that very few stores in the district offer.
            </p>

            <div className="mt-8 grid sm:grid-cols-3 gap-5">
              {[
                { i: Award, t: "Premium Quality", d: "Hand-picked brands" },
                { i: Users, t: "Trusted Locally", d: "Loyal customers" },
                { i: Heart, t: "Crafted Care", d: "Expert repairs" },
              ].map(({ i: Icon, t, d }) => (
                <div key={t} className="rounded-xl border border-border p-4">
                  <Icon className="size-6 text-accent" />
                  <div className="mt-3 font-semibold">{t}</div>
                  <div className="text-xs text-muted-foreground">{d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
