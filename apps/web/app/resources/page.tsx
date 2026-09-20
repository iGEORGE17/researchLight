import type { Metadata } from "next";
import { ResourcesPageClient } from "@/components/resources";

export const metadata: Metadata = {
  title: "Free Research Resources | Templates, Guides & Checklists",
  description:
    "Download free academic research resources: proposal template, chapter one template, APA guide, research timeline planner and defense checklist.",
  openGraph: {
    title: "Free Research Resources",
    description:
      "Proposal templates, APA guides, timeline planners and defense checklists for students.",
  },
};

export default function ResourcesPage() {
  return <ResourcesPageClient />;
}