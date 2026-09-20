import Link from "next/link";
import { FaGraduationCap } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { BsChatDots } from "react-icons/bs";

export function Footer() {
  return (
    <footer className="mt-24 bg-primary-deep text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-md bg-gold">
              <FaGraduationCap className="size-5 text-accent-foreground" />
            </span>
            <span className="font-display text-lg font-semibold">
              Research<span className="text-gold">Light</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
            Illuminating your academic research journey with professional guidance, methodological
            support and defense preparation.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Explore</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/70">
            {[
              { to: "/about", label: "About Us" },
              { to: "/services", label: "Services" },
              { to: "/resources", label: "Free Resources" },
              { to: "/blog", label: "Blog" },
              { to: "/faq", label: "FAQ" },
            ].map((l) => (
              <li key={l.to}>
                <Link href={l.to} className="transition-colors hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Get in touch</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/70">
            <li className="flex items-center gap-2">
              <HiOutlinePhone className="size-4 text-gold" /> +234 800 000 0000
            </li>
            <li className="flex items-center gap-2">
              <BsChatDots className="size-4 text-gold" /> WhatsApp support
            </li>
            <li className="flex items-center gap-2">
              <HiOutlineMail className="size-4 text-gold" /> hello@researchlight.com
            </li>
            <li>Mon – Sat, 9:00am – 6:00pm</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto max-w-6xl px-5 py-5 text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} ResearchLight. Academic research support, ethically
          delivered.
        </div>
      </div>
    </footer>
  );
}