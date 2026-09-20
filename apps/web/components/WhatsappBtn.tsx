import Link from "next/link";
import { LuMessageCircle } from "react-icons/lu";
export function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/2348000000000"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with ResearchLight on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-lift transition-transform hover:scale-105"
    >
      <LuMessageCircle className="size-5 text-gold" />
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </Link>
  );
}
