import Image from "next/image";
import Link from "next/link";
import heroImage from "@/assets/hero-research.jpg"

import type { Metadata } from "next";
import {
  HiOutlineBookOpen,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiOutlineLockClosed,
  HiOutlineClock,
  HiOutlineCurrencyDollar,
  HiOutlineCollection,
  HiOutlineUserGroup,
  HiOutlineOfficeBuilding,
  HiOutlineBriefcase,
  HiOutlineArrowRight,
  HiStar,
} from "react-icons/hi";
import { FaGraduationCap, FaMicroscope } from "react-icons/fa";
import { ProcessSlideshow } from "@/components/ProcessSlideShow";
import defenseImage from "@/assets/defense.jpg";

export const metadata: Metadata = {
  title: "ResearchLight — Academic Research Support & Project Guidance",
  description:
    "Professional academic research support: topic selection, proposal writing, methodology, data analysis, editing and defense preparation for students and researchers.",
  openGraph: {
    title: "ResearchLight — Illuminating Your Research Journey",
    description:
      "Expert guidance for every stage of your research: proposal, methodology, data analysis, editing and defense preparation.",
  },
};

const whyUs = [
  {
    icon: HiOutlineShieldCheck,
    title: "100% Original Work",
    body: "Every project is developed with academic integrity in mind.",
  },
  {
    icon: HiOutlineSparkles,
    title: "Personalized Guidance",
    body: "Every research project receives individual attention.",
  },
  { icon: HiOutlineLockClosed, title: "Confidentiality", body: "Client information remains private." },
  { icon: HiOutlineClock, title: "Timely Delivery", body: "Deadlines are respected, always." },
  { icon: HiOutlineCurrencyDollar, title: "Affordable Pricing", body: "Student-friendly packages." },
  {
    icon: HiOutlineCollection,
    title: "Multi-disciplinary Support",
    body: "From Engineering and Medicine to Law, Education and the Arts.",
  },
];

const disciplines = [
  "Engineering",
  "Medicine",
  "Agriculture",
  "Management",
  "Education",
  "Law",
  "Social Sciences",
  "Environmental Sciences",
  "Computer Science",
  "Natural Sciences",
  "Health Sciences",
  "Arts",
];

const process = [
  { step: "01", title: "Book Consultation", body: "Reach out and pick a time that works for you." },
  {
    step: "02",
    title: "Discuss Research Needs",
    body: "We map your topic, timeline and department requirements.",
  },
  { step: "03", title: "Receive Project Plan", body: "A clear scope, milestones and deliverables." },
  { step: "04", title: "Progress Updates", body: "Regular check-ins as each chapter develops." },
  { step: "05", title: "Review & Feedback", body: "Supervisor corrections handled together." },
  { step: "06", title: "Final Delivery", body: "Formatted, referenced and Turnitin-reviewed." },
  { step: "07", title: "Defense Support", body: "Mock defense, slides and speaking confidence." },
];

const audiences = [
  { icon: FaGraduationCap, label: "Undergraduate Students" },
  { icon: HiOutlineBookOpen, label: "Postgraduate Students" },
  { icon: FaMicroscope, label: "Researchers" },
  { icon: HiOutlineUserGroup, label: "Lecturers" },
  { icon: HiOutlineBriefcase, label: "Academic Professionals" },
  { icon: HiOutlineOfficeBuilding, label: "NGOs & Institutions" },
];

const testimonials = [
  "ResearchLight helped me organize my research process and prepare confidently for my defense.",
  "Their guidance on methodology and data analysis made my project much stronger.",
  "Professional, responsive, and supportive from start to finish.",
];

const values = [
  "Excellence",
  "Integrity",
  "Originality",
  "Confidentiality",
  "Professionalism",
  "Innovation",
  "Timely Delivery",
  "Student Success",
];

const stats = [
  { value: "1,200+", label: "Researchers supported" },
  { value: "20+", label: "Countries served" },
  { value: "94%", label: "On-time chapter delivery" },
  { value: "4.9/5", label: "Average client rating" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-primary-deep">
        <Image
          src={heroImage}
          alt="Students researching together in a university library"
          priority
          sizes="100vw"
          placeholder="blur"
          className="absolute inset-0 size-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-deep via-primary-deep/85 to-primary-deep/40" />
        <div className="relative mx-auto max-w-6xl px-5 py-24 sm:py-32">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">
            Academic Research Support
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl leading-[1.1] text-primary-foreground sm:text-6xl">
            ResearchLight
            <span className="mt-3 block text-2xl font-normal text-gold sm:text-3xl">
              Illuminating Your Academic Research Journey
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
            We provide professional academic research support, guidance, editing, data analysis
            assistance and defense preparation to help students and researchers produce
            high-quality academic work.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
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
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-md border border-primary-foreground/30 px-7 text-base font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 py-12 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-3xl font-semibold md:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm text-primary-foreground/70">{s.label}</p>
            </div>
          ))}
        </div>
      </section>


      {/* About teaser */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <p className="eyebrow">About ResearchLight</p>
              <h2 className="mt-3 rule-gold text-3xl sm:text-4xl">
                Research support built around understanding, not shortcuts
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                ResearchLight is an academic research support and consulting brand committed to
                helping students and researchers navigate every stage of the research process
                with confidence.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Our goal is to simplify academic research through professional guidance,
                methodological support, quality review and personalized mentorship — while
                promoting originality, academic integrity and excellence.
              </p>
              <Link
                href="/about"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                Read our story <HiOutlineArrowRight className="size-4" />
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {values.map((v) => (
                <div
                  key={v}
                  className="rounded-lg border border-border bg-card p-4 text-sm font-semibold text-primary shadow-soft"
                >
                  <span className="mb-2 block h-1 w-6 rounded-full bg-gold" />
                  {v}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="bg-muted py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Why Choose ResearchLight</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">
              Quality, speed and originality in every project
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We focus on student understanding, not just delivering documents — you will be
              ready for your defense.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-card p-6 shadow-soft transition-shadow hover:shadow-lift"
              >
                <span className="flex size-11 items-center justify-center rounded-lg bg-gold-soft">
                  <item.icon className="size-5 text-primary" />
                </span>
                <h3 className="mt-4 text-lg">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {disciplines.map((d) => (
              <span
                key={d}
                className="rounded-full border border-border bg-background px-3.5 py-1.5 text-xs font-medium text-muted-foreground"
              >
                {d}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="max-w-2xl">
            <p className="eyebrow">Our Process</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">
              Seven steps from first idea to successful defense
            </h2>
          </div>
          <ProcessSlideshow steps={process} />
        </div>
      </section>

      {/* Defense */}
      <section className="bg-muted py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Image
              src={defenseImage}
              alt="Student presenting research during a project defense"
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="rounded-xl object-cover shadow-lift"
            />
            <div>
              <p className="eyebrow">Defense Preparation</p>
              <h2 className="mt-3 rule-gold text-3xl sm:text-4xl">Walk in ready to defend</h2>
              <ul className="mt-6 space-y-3 text-muted-foreground">
                {[
                  "Mock defense sessions with honest feedback",
                  "Likely questions from your panel, rehearsed",
                  "Presentation slides designed for clarity",
                  "Speaking confidence and PowerPoint coaching",
                ].map((i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                    {i}
                  </li>
                ))}
              </ul>
              <Link
                href="/services"
                className="mt-8 inline-flex h-10 items-center justify-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Explore all services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Who We Serve</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Support at every academic level</h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map((a) => (
              <div
                key={a.label}
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 shadow-soft"
              >
                <span className="flex size-10 items-center justify-center rounded-lg bg-primary/5">
                  <a.icon className="size-5 text-primary" />
                </span>
                <span className="font-medium">{a.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Testimonials</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">What students say</h2>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t} className="rounded-xl border border-border bg-card p-6 shadow-soft">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <HiStar key={i} className="size-4 text-gold" />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  “{t}”
                </blockquote>
              </figure>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-muted-foreground">
            Illustrative testimonials, shown as examples of the feedback we work toward.
          </p>
        </div>
      </section>

      {/* CTA band */}
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
