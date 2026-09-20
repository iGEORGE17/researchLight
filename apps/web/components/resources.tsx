"use client";

import { useState } from "react";
import { toast } from "sonner";
import Link from "next/link";
import {
  HiOutlineDocumentText,
  HiOutlineBookmark,
  HiOutlineDownload,
  HiOutlineCalendar,
  HiOutlineClipboardList,
} from "react-icons/hi";

const resources = [
  {
    icon: HiOutlineDocumentText,
    title: "Proposal Template",
    body: "A structured outline for a complete, defensible proposal.",
  },
  {
    icon: HiOutlineBookmark,
    title: "Chapter One Template",
    body: "Background, problem, objectives, questions, scope, significance.",
  },
  {
    icon: HiOutlineDownload,
    title: "APA Guide",
    body: "Quick-reference formatting and citation rules (7th edition).",
  },
  {
    icon: HiOutlineCalendar,
    title: "Research Timeline Planner",
    body: "Plan chapters and milestones around your deadline.",
  },
  {
    icon: HiOutlineClipboardList,
    title: "Defense Checklist",
    body: "Everything to confirm before you face the panel.",
  },
];

export function ResourcesPageClient() {
  const [email, setEmail] = useState("");

  return (
    <>
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <p className="eyebrow">Free Resources</p>
          <h1 className="mt-3 rule-gold max-w-3xl text-4xl sm:text-5xl">
            Templates and guides to get you started
          </h1>
          <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
            Enter your email to receive the download links, plus new research guides as they
            publish.
          </p>
        </div>
      </section>

      <section className="bg-muted pb-16 pt-0 sm:pb-20 sm:pt-0">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((r) => (
              <div key={r.title} className="rounded-xl border border-border bg-card p-6 shadow-soft">
                <span className="flex size-11 items-center justify-center rounded-lg bg-gold-soft">
                  <r.icon className="size-5 text-primary" />
                </span>
                <h2 className="mt-4 text-lg">{r.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
              </div>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              toast.success("You're on the list", {
                description: `We'll send the download links to ${email}.`,
              });
              setEmail("");
            }}
            className="mt-12 rounded-xl border border-border bg-card p-6 shadow-soft sm:p-8"
          >
            <div className="max-w-2xl">
              <p className="eyebrow">Newsletter</p>
              <h2 className="mt-3 text-3xl sm:text-4xl">Get the full resource pack</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                One email with every template, then occasional research tips. Unsubscribe
                anytime.
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <div className="flex-1">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder="you@university.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-7 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Send me the pack
              </button>
            </div>
          </form>
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