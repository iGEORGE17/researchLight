import type { Metadata } from "next";
import { FaqPageClient } from "@/components/Faq";

export const metadata: Metadata = {
  title: "FAQ | ResearchLight Academic Research Support",
  description:
    "Answers on project timelines, online consultations, data analysis support, postgraduate assistance and supported referencing styles.",
  openGraph: {
    title: "ResearchLight FAQ",
    description: "Common questions about timelines, consultations, data analysis and referencing.",
  },
};

export default function FaqPage() {
  return <FaqPageClient />;
}