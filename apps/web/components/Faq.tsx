"use client";

import { useState } from "react";
import Link from "next/link";
import { HiChevronDown } from "react-icons/hi";

const faqs = [
  {
    q: "How long does a project take?",
    a: "It depends on scope and your deadline. A full chapters 1–5 project typically runs four to eight weeks, while proposals, editing or data analysis are often completed in a few days to two weeks. We agree a milestone plan at the consultation stage.",
  },
  {
    q: "Do you offer online consultations?",
    a: "Yes. All consultations can be held online via video call or WhatsApp, so you can work with us from any institution.",
  },
  {
    q: "Can you help with data analysis?",
    a: "Yes. We support questionnaire coding, data cleaning, statistical analysis, charts, tables and interpretation using SPSS, Excel, R and Python.",
  },
  {
    q: "Do you assist postgraduate students?",
    a: "Yes. We work with undergraduates, postgraduates, researchers, lecturers and institutions across a wide range of faculties.",
  },
  {
    q: "What referencing styles do you support?",
    a: "APA, MLA, Chicago, Harvard and IEEE, formatted to your department's specific requirements.",
  },
  {
    q: "How do consultations work?",
    a: "You book a session, we discuss your research needs and current stage, and you receive a written project plan with scope, milestones and timelines before any work begins.",
  },
];

export function FaqPageClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <>
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <p className="eyebrow">FAQ</p>
          <h1 className="mt-3 rule-gold max-w-3xl text-4xl sm:text-5xl">
            Frequently asked questions
          </h1>

          <div className="mt-10 max-w-3xl divide-y divide-border border-b border-border">
            {faqs.map((f, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={f.q}>
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-semibold"
                  >
                    {f.q}
                    <HiChevronDown
                      className={`size-5 shrink-0 text-muted-foreground transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <p className="pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                  )}
                </div>
              );
            })}
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