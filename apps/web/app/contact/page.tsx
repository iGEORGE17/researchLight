import type { Metadata } from "next";
import { ContactPageClient } from "@/components/contact";

export const metadata: Metadata = {
  title: "Contact ResearchLight | Book a Research Consultation",
  description:
    "Book a consultation with ResearchLight. Reach us by phone, WhatsApp or email for academic research guidance, data analysis and defense preparation.",
  openGraph: {
    title: "Contact ResearchLight",
    description: "Book a consultation and get professional guidance for your research project.",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}