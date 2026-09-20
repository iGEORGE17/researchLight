import type { Metadata } from "next";
import {
  HiOutlineLightBulb,
  HiOutlineDocumentText,
  HiOutlineCollection,
  HiOutlineLibrary,
  HiOutlineChartBar,
  HiOutlinePencilAlt,
  HiOutlineSearch,
  HiOutlinePresentationChartBar,
  HiOutlineChatAlt2,
} from "react-icons/hi";
import { FaFlask, FaQuoteRight } from "react-icons/fa";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Research Topics, Methodology, Data Analysis & Defense",
  description:
    "Topic development, proposal writing, methodology consultation, chapters 1-5 support, literature review, SPSS data analysis, editing, referencing and defense preparation.",
  openGraph: {
    title: "ResearchLight Services",
    description:
      "Full academic research support: proposals, methodology, literature review, data analysis, editing, referencing and defense coaching.",
  },
};

const services = [
  {
    icon: HiOutlineLightBulb,
    title: "Research Topic Development",
    body: "Helping students choose relevant, unique and researchable topics.",
    items: [],
  },
  {
    icon: HiOutlineDocumentText,
    title: "Proposal Writing Support",
    body: "A complete, defensible proposal structure.",
    items: [
      "Background",
      "Statement of Problem",
      "Objectives",
      "Research Questions",
      "Scope",
      "Significance",
    ],
  },
  {
    icon: FaFlask,
    title: "Research Methodology Consultation",
    body: "Understand the choices behind your method.",
    items: [
      "Research design",
      "Sampling",
      "Population",
      "Data collection",
      "Reliability",
      "Validity",
    ],
  },
  {
    icon: HiOutlineCollection,
    title: "Project Development Support",
    body: "Guided support across the full project.",
    items: ["Chapter One", "Chapter Two", "Chapter Three", "Chapter Four", "Chapter Five"],
  },
  {
    icon: HiOutlineLibrary,
    title: "Literature Review Assistance",
    body: "Turn scattered reading into a coherent argument.",
    items: ["Finding scholarly sources", "Organizing themes", "Critical analysis", "Proper referencing"],
  },
  {
    icon: HiOutlineChartBar,
    title: "Data Analysis Support",
    body: "SPSS, Excel, R and Python.",
    items: [
      "Questionnaire coding",
      "Data cleaning",
      "Statistical analysis",
      "Charts and tables",
      "Interpretation",
    ],
  },
  {
    icon: HiOutlinePencilAlt,
    title: "Editing & Proofreading",
    body: "Polish that meets academic standards.",
    items: ["Grammar", "Structure", "Formatting", "Academic writing style"],
  },
  {
    icon: FaQuoteRight,
    title: "Referencing",
    body: "Consistent citations in your required style.",
    items: ["APA", "MLA", "Chicago", "Harvard", "IEEE"],
  },
  {
    icon: HiOutlineSearch,
    title: "Turnitin Review",
    body: "Review originality reports and improve citation practices.",
    items: [],
  },
  {
    icon: HiOutlinePresentationChartBar,
    title: "Defense Preparation",
    body: "Be ready for the panel.",
    items: [
      "Mock defense",
      "Likely questions",
      "Presentation slides",
      "Speaking confidence",
      "PowerPoint coaching",
    ],
  },
  {
    icon: HiOutlineChatAlt2,
    title: "Research Consultation",
    body: "One-on-one online sessions at any stage of your work.",
    items: [],
  },
];

export default function Services() {
  return (
    <>
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <p className="eyebrow">Services</p>
          <h1 className="mt-3 rule-gold max-w-3xl text-4xl sm:text-5xl">
            Complete support for every stage of your research
          </h1>
          <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
            From choosing a topic to standing in front of your panel — original, tailored and
            delivered on time.
          </p>
        </div>
      </section>

      <section className="bg-muted pb-16 pt-0 sm:pb-20 sm:pt-0">
        <div className="mx-auto max-w-6xl p-5">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article
                key={s.title}
                className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-soft transition-shadow hover:shadow-lift"
              >
                <span className="flex size-11 items-center justify-center rounded-lg bg-primary/5">
                  <s.icon className="size-5 text-primary" />
                </span>
                <h2 className="mt-4 text-lg">{s.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                {s.items.length > 0 && (
                  <ul className="mt-4 space-y-1.5 border-t border-border pt-4 text-sm text-muted-foreground">
                    {s.items.map((i) => (
                      <li key={i} className="flex gap-2.5">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                        {i}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Competitive Edge</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Why students keep coming back</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We combine quality, speed and originality — and we make sure you understand your
              own work well enough to defend it.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-primary py-16">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <h2 className="text-3xl text-primary-foreground sm:text-4xl">
            Ready to make your research journey easier?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/75">
            Book a consultation today and receive professional guidance tailored to your academic
            goals.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-md bg-gold px-7 text-base font-medium text-accent-foreground transition-colors hover:bg-gold/90"
            >
              Book a Consultation
            </Link>
            <Link
              href="/services"
              className="inline-flex h-12 items-center justify-center rounded-md border border-primary-foreground/30 px-7 text-base font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}