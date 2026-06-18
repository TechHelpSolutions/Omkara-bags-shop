import { MessageCircle } from "lucide-react";
import { waLink, defaultEnquiry } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={waLink(defaultEnquiry())}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 size-14 rounded-full grid place-items-center bg-[var(--whatsapp)] text-white shadow-[0_18px_40px_-12px_rgba(0,0,0,.4)] animate-float hover:scale-105 transition-transform"
    >
      <MessageCircle className="size-7" />
    </a>
  );
}
