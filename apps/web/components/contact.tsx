"use client";

import { useState } from "react";
import { toast } from "sonner";
import { HiOutlinePhone, HiOutlineMail, HiOutlineLocationMarker, HiOutlineClock } from "react-icons/hi";
import { BsChatDots } from "react-icons/bs";

const details = [
  { icon: HiOutlinePhone, label: "Phone", value: "+234 800 000 0000" },
  { icon: BsChatDots, label: "WhatsApp", value: "+234 800 000 0000" },
  { icon: HiOutlineMail, label: "Email", value: "hello@researchlight.com" },
  { icon: HiOutlineLocationMarker, label: "Office", value: "Consultations held online, nationwide" },
  { icon: HiOutlineClock, label: "Business Hours", value: "Mon – Sat, 9:00am – 6:00pm" },
];

const fieldClasses =
  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm " +
  "placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

export function ContactPageClient() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const set = (key: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  return (
    <section className="relative bg-background lg:h-screen h-full flex justify-center items-center">
        <div className="mx-auto lg:min-w-6xl px-6 mt-20">
      <p className="eyebrow">Contact</p>
      <h1 className="mt-3 rule-gold max-w-3xl font-display text-4xl sm:text-5xl">Book a consultation</h1>
      <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
        Tell us where you are in your research and what you need. We usually respond within one
        business day.
      </p>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4">
          {details.map((d) => (
            <div
              key={d.label}
              className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-soft"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gold-soft">
                <d.icon className="size-5 text-primary" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {d.label}
                </p>
                <p className="mt-1 font-medium">{d.value}</p>
              </div>
            </div>
          ))}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            toast.success("Message sent", {
              description: "Thank you — we'll get back to you within one business day.",
            });
            setForm({ name: "", email: "", subject: "", message: "" });
          }}
          className="rounded-xl border border-border bg-card p-6 shadow-soft sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium leading-none text-foreground">
                Full name
              </label>
              <input
                id="name"
                required
                value={form.name}
                onChange={set("name")}
                className={fieldClasses}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium leading-none text-foreground">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={set("email")}
                className={fieldClasses}
              />
            </div>
          </div>

          <div className="mt-5 space-y-2">
            <label htmlFor="subject" className="text-sm font-medium leading-none text-foreground">
              What do you need help with?
            </label>
            <input
              id="subject"
              required
              placeholder="e.g. Chapter three and data analysis"
              value={form.subject}
              onChange={set("subject")}
              className={fieldClasses}
            />
          </div>

          <div className="mt-5 space-y-2">
            <label htmlFor="message" className="text-sm font-medium leading-none text-foreground">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={6}
              placeholder="Share your topic, department and deadline."
              value={form.message}
              onChange={set("message")}
              className={`${fieldClasses} h-auto resize-y`}
            />
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-md bg-primary px-7 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
          >
            Send message
          </button>
        </form>
      </div>
      </div>
    </section>
  );
}