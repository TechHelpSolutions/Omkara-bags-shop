import { createFileRoute } from "@tanstack/react-router";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import h from "@/assets/hero-shop.jpg";
import r from "@/assets/repair.jpg";
import s from "@/assets/cat-school.jpg";
import p from "@/assets/cat-purse.jpg";
import t from "@/assets/cat-trolley.jpg";

const imgs = [h, g1, t, g2, p, r, g3, s, g4];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — OMKARA Bhatia Attachi House" },
      { name: "description", content: "Photos from our showroom and bag repair workshop." },
      { property: "og:title", content: "Gallery — OMKARA" },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <section className="bg-[var(--ink)] text-[var(--cream)] py-20">
        <div className="container-page max-w-2xl text-center mx-auto">
          <span className="eyebrow">Gallery</span>
          <h1 className="mt-3 font-display text-5xl md:text-6xl font-semibold">
            Inside <span className="gold-text">OMKARA</span>
          </h1>
          <p className="mt-4 text-white/75">A look at our showroom, products and repair workshop.</p>
        </div>
      </section>
      <section className="section-pad">
        <div className="container-page columns-2 md:columns-3 gap-4 [column-fill:_balance]">
          {imgs.map((src, i) => (
            <div key={i} className="mb-4 break-inside-avoid overflow-hidden rounded-2xl">
              <img src={src} alt={`Gallery ${i + 1}`} loading="lazy" className="w-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
