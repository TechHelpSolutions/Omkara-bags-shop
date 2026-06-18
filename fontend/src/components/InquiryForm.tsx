import { useState, type FormEvent } from "react";
import { CATEGORIES, SITE, waLink } from "@/lib/site";
import { Send } from "lucide-react";

export function InquiryForm({ defaultProduct }: { defaultProduct?: string }) {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [product, setProduct] = useState(defaultProduct ?? "");
  const [message, setMessage] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const text =
`Hello OMKARA,

Name: ${name || "-"}
Mobile: ${mobile || "-"}
Product: ${product || "-"}
Message: ${message || "-"}

I would like more information.`;
    window.open(waLink(text), "_blank");
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Your Name">
          <input required value={name} onChange={(e) => setName(e.target.value)} className="input" placeholder="Full name" />
        </Field>
        <Field label="Mobile Number">
          <input required value={mobile} onChange={(e) => setMobile(e.target.value)} className="input" placeholder="10-digit mobile" inputMode="tel" />
        </Field>
      </div>
      <Field label="Product Interested In">
        <select value={product} onChange={(e) => setProduct(e.target.value)} className="input">
          <option value="">Select a category</option>
          {CATEGORIES.map((c) => <option key={c.slug} value={c.name}>{c.name}</option>)}
          <option value="Bag Repair Service">Bag Repair Service</option>
          <option value="Other">Other</option>
        </select>
      </Field>
      <Field label="Message">
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={4} className="input" placeholder="Tell us what you need…" />
      </Field>
      <button type="submit" className="btn-whatsapp justify-self-start">
        <Send className="size-4" /> Send via WhatsApp
      </button>
      <p className="text-xs text-muted-foreground">
        Submitting will open WhatsApp with your message pre-filled to {SITE.phone}.
      </p>
      <style>{`.input{width:100%;border:1px solid var(--color-border);background:var(--color-card);border-radius:.75rem;padding:.85rem 1rem;font-size:.95rem;outline:none;transition:border-color .2s, box-shadow .2s}.input:focus{border-color:var(--color-accent);box-shadow:0 0 0 3px color-mix(in oklab,var(--color-accent) 25%,transparent)}`}</style>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="grid gap-1.5">
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}
