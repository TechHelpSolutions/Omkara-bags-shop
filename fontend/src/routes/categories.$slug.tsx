import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { MessageCircle, ArrowLeft, ShieldCheck } from "lucide-react";
import { CATEGORIES, getCategory, waLink, type Product } from "@/lib/site";

export const Route = createFileRoute("/categories/$slug")({
  head: ({ params }) => {
    const c = getCategory(params.slug);
    const title = c ? `${c.name} — OMKARA Bhatia Attachi House` : "Category — OMKARA";
    return {
      meta: [
        { title },
        { name: "description", content: c?.tagline ?? "Browse products at OMKARA Bhatia Attachi House." },
        { property: "og:title", content: title },
        { property: "og:description", content: c?.tagline ?? "" },
        { property: "og:url", content: `/categories/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/categories/${params.slug}` }],
    };
  },
  loader: ({ params }) => {
    const c = getCategory(params.slug);
    if (!c) throw notFound();
    return c;
  },
  component: CategoryPage,
  notFoundComponent: () => (
    <div className="container-page py-24 text-center">
      <h1 className="font-display text-4xl">Category not found</h1>
      <Link to="/" className="btn-primary mt-6 inline-flex">Back to home</Link>
    </div>
  ),
});

function CategoryPage() {
  const c = Route.useLoaderData();
  return (
    <>
      <section className="relative bg-[var(--ink)] text-[var(--cream)] overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src={c.image} alt="" className="size-full object-cover" />
          <div className="absolute inset-0 bg-[var(--ink)]/70" />
        </div>
        <div className="relative container-page py-20 md:py-28">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-accent">
            <ArrowLeft className="size-4" /> Back to all categories
          </Link>
          <h1 className="mt-5 font-display text-5xl md:text-6xl font-semibold">
            <span className="gold-text">{c.name}</span>
          </h1>
          <p className="mt-3 text-white/80 max-w-xl text-lg">{c.tagline}</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {c.products.map((p: Product) => <ProductCard key={p.name} p={p} category={c.name} />)}
          </div>
          <p className="mt-10 text-sm text-muted-foreground text-center">
            More designs and sizes available in store. <a href={waLink(`Hello OMKARA, please share more options in ${c.name}.`)} className="text-accent font-semibold">Ask on WhatsApp →</a>
          </p>
        </div>
      </section>

      <section className="section-pad bg-[var(--cream)]">
        <div className="container-page text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold">Explore More <span className="gold-text">Categories</span></h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {CATEGORIES.filter((x) => x.slug !== c.slug).map((x) => (
              <Link key={x.slug} to="/categories/$slug" params={{ slug: x.slug }} className="px-4 py-2 rounded-full border border-border bg-card text-sm hover:border-accent hover:text-accent">
                {x.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ProductCard({ p, category }: { p: Product; category: string }) {
  const msg = `Hello OMKARA,\n\nI'm interested in:\nProduct: ${p.name}\nCategory: ${category}\nPrice: ${p.price}\n\nPlease share more details.`;
  return (
    <div className="group rounded-2xl overflow-hidden bg-card border border-border shadow-[var(--shadow-card)] flex flex-col">
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img src={p.image} alt={p.name} loading="lazy" className="size-full object-cover group-hover:scale-110 transition-transform duration-700" />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="font-display text-xl font-semibold">{p.name}</div>
        <div className="mt-1 gold-text font-semibold">{p.price}</div>
        <p className="mt-2 text-sm text-muted-foreground flex-1">{p.description}</p>
        <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
          <ShieldCheck className="size-4 text-accent" /> Quality assured
        </div>
        <a href={waLink(msg)} target="_blank" rel="noreferrer" className="btn-whatsapp mt-4 w-full">
          <MessageCircle className="size-4" /> Enquire on WhatsApp
        </a>
      </div>
    </div>
  );
}
