import type { Metadata } from "next";
import { HiOutlineEye } from "react-icons/hi";
import { FiTarget } from "react-icons/fi";

export const metadata: Metadata = {
  title: "About ResearchLight | Academic Research Consulting",
  description:
    "ResearchLight helps students and researchers navigate every stage of the research process with professional guidance, mentorship and academic integrity.",
  openGraph: {
    title: "About ResearchLight",
    description:
      "Our vision, mission and core values as an academic research support and consulting brand.",
  },
};

const values = [
  { name: "Excellence", body: "High standards in every deliverable, at every stage." },
  { name: "Integrity", body: "Ethical support that respects academic rules." },
  { name: "Originality", body: "Plagiarism-free, Turnitin-compliant work." },
  { name: "Confidentiality", body: "Your work and identity stay private." },
  { name: "Professionalism", body: "Clear communication and dependable service." },
  { name: "Innovation", body: "Modern tools and methods for stronger research." },
  { name: "Timely Delivery", body: "Deadlines met without compromising quality." },
  { name: "Student Success", body: "You finish understanding your own project." },
];

export default function About() {
  return (
    <>
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <p className="eyebrow">About Us</p>
          <h1 className="mt-3 rule-gold max-w-3xl text-4xl sm:text-5xl">About ResearchLight</h1>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <p className="leading-relaxed text-muted-foreground">
              ResearchLight is an academic research support and consulting brand committed to
              helping students and researchers navigate every stage of the research process with
              confidence. Our goal is to simplify academic research through professional
              guidance, methodological support, quality review and personalized mentorship, while
              promoting originality, academic integrity and excellence.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Whether you are selecting a research topic, preparing your proposal, analyzing data
              or getting ready for your defense, ResearchLight provides expert support tailored
              to your academic goals. We work across Science, Engineering, Social Sciences,
              Management, Education and more, with affordable packages designed for students.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-muted py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-8 shadow-soft">
              <span className="flex size-11 items-center justify-center rounded-lg bg-gold-soft">
                <HiOutlineEye className="size-5 text-primary" />
              </span>
              <h2 className="mt-5 text-2xl">Our Vision</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                To become Africa&apos;s leading academic research support brand, empowering students
                and researchers with knowledge, confidence and high-quality research solutions.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-8 shadow-soft">
              <span className="flex size-11 items-center justify-center rounded-lg bg-gold-soft">
                <FiTarget className="size-5 text-primary" />
              </span>
              <h2 className="mt-5 text-2xl">Our Mission</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                To provide reliable, ethical and professional academic research support through
                personalized guidance, innovative solutions and commitment to academic excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="max-w-2xl">
            <p className="eyebrow">Core Values</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">What guides our work</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.name} className="rounded-xl border border-border bg-card p-5 shadow-soft">
                <span className="mb-3 block h-1 w-7 rounded-full bg-gold" />
                <h3 className="text-base">{v.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="max-w-2xl">
            <p className="eyebrow">Long-Term Vision</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">
              Growing with you, from undergraduate to professional
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Beyond project support, ResearchLight is building toward research training
              workshops, data analysis consulting, journal manuscript editing, grant proposal
              support, conference presentation coaching and academic publishing guidance.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}