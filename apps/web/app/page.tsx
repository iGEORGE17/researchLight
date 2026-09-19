import Image from "next/image";
import Link from "next/link";
import heroImage from "@/assets/hero-research.jpg"

export default function Home() {
  return (
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
      <button  className="rounded-md bg-gold px-5 py-2.5 text-sm">
        <Link href="/contact">Book a Consultation</Link>
      </button>
      <button className="rounded-md border border-border text-secondary px-5 py-2.5 text-sm font-semibold">
        <Link href="/services">View Our Services</Link>
      </button>
      <button className="rounded-md border border-border text-secondary  px-5 py-2.5 text-sm font-semibold">
        <Link href="/contact">Contact Us</Link>
      </button>
    </div>
  </div>
</section>
  );
}
