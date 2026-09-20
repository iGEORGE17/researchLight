import type { Metadata } from "next";
import Link from "next/link";
import { HiOutlineCalendar, HiOutlineArrowUpRight } from "react-icons/hi2";

export const metadata: Metadata = {
  title: "Research Blog | Guides on Topics, Methodology & Defense",
  description:
    "Practical articles on choosing a research topic, writing chapter one, literature reviews, SPSS basics, APA 7th edition and preparing for your project defense.",
  openGraph: {
    title: "ResearchLight Blog",
    description: "Guides and tips to help you write stronger academic research.",
  },
};

const posts = [
  {
    title: "How to Choose a Good Research Topic",
    excerpt:
      "A workable topic is narrow, researchable and supported by available data. Here is how to test yours before you commit.",
    tag: "Topic Selection",
    date: "Weekly guide",
  },
  {
    title: "10 Common Mistakes in Chapter One",
    excerpt:
      "Vague problem statements, objectives that don't match research questions, and background sections that read like essays.",
    tag: "Writing",
    date: "Weekly guide",
  },
  {
    title: "How to Write a Literature Review",
    excerpt:
      "Move from summarising papers to organising themes and building a critical argument that justifies your study.",
    tag: "Literature",
    date: "Weekly guide",
  },
  {
    title: "SPSS Explained for Beginners",
    excerpt:
      "Coding a questionnaire, cleaning your dataset, and running the tests your methodology actually promised.",
    tag: "Data Analysis",
    date: "Weekly guide",
  },
  {
    title: "Difference Between Quantitative and Qualitative Research",
    excerpt:
      "Choosing your approach based on your questions rather than on which one looks easier to finish.",
    tag: "Methodology",
    date: "Weekly guide",
  },
  {
    title: "APA 7th Edition Guide",
    excerpt: "In-text citations, reference list formatting and the details supervisors flag most.",
    tag: "Referencing",
    date: "Weekly guide",
  },
  {
    title: "How to Prepare for Project Defense",
    excerpt:
      "Structure your slides, anticipate the panel's questions, and speak about your work with confidence.",
    tag: "Defense",
    date: "Weekly guide",
  },
  {
    title: "Common Supervisor Corrections",
    excerpt: "The recurring corrections we see, and how to fix them before your next submission.",
    tag: "Writing",
    date: "Weekly guide",
  },
  {
    title: "How to Avoid Plagiarism",
    excerpt: "Paraphrasing properly, citing consistently and reading a Turnitin report correctly.",
    tag: "Integrity",
    date: "Weekly guide",
  },
  {
    title: "How to Write an Abstract",
    excerpt:
      "Purpose, method, results and conclusion in under 300 words — without losing the substance.",
    tag: "Writing",
    date: "Weekly guide",
  },
];

export default function Blog() {
  return (
    <>
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <p className="eyebrow">Blog</p>
          <h1 className="mt-3 rule-gold max-w-3xl text-4xl sm:text-5xl">
            Research guides, written for students
          </h1>
          <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
            One or two practical articles every week on the parts of academic research that trip
            students up most.
          </p>
        </div>
      </section>

      <section className="bg-muted pb-16 pt-0 sm:pb-20 sm:pt-0">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <article
                key={p.title}
                className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-soft transition-shadow hover:shadow-lift"
              >
                <span className="w-fit rounded-full bg-gold-soft px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent-foreground">
                  {p.tag}
                </span>
                <h2 className="mt-4 text-lg leading-snug">{p.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.excerpt}
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <HiOutlineCalendar className="size-3.5" /> {p.date}
                  </span>
                  <HiOutlineArrowUpRight className="size-4 text-primary transition-transform group-hover:-translate-y-0.5" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Newsletter</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Get new guides in your inbox</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Subscribe on the Resources page to receive templates and new articles as they
              publish.
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
