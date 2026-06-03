"use client";

import { useState, FormEvent } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { SITE } from "@/lib/constants";
import { InstagramIcon, TikTokIcon } from "@/components/icons";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
      }
    } catch {
      // Fallback: open mailto
      const name = data.get("name") as string;
      const email = data.get("email") as string;
      const message = data.get("message") as string;
      window.location.href = `mailto:${SITE.email}?subject=Custom Board Inquiry from ${name}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-28 md:py-36 bg-midnight">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="w-12 h-px bg-gold/40 mx-auto mb-8" />
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-wider text-cream">
              Get in Touch
            </h2>
            <p className="text-cream/40 mt-4 tracking-wider text-sm">
              Fill out the form and we&rsquo;ll get back to you promptly
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-16">
          <AnimatedSection className="lg:col-span-3" delay={0.1}>
            {submitted ? (
              <div className="text-center py-16">
                <div className="w-12 h-px bg-gold/40 mx-auto mb-8" />
                <h3 className="font-serif text-2xl text-cream mb-4">
                  Thank You
                </h3>
                <p className="text-cream/50">
                  We&rsquo;ve received your inquiry and will get back to you
                  shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs tracking-[0.2em] uppercase text-cream/40 mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full bg-transparent border-b border-cream/20 text-cream py-3 focus:border-gold focus:outline-none transition-colors placeholder:text-cream/20"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs tracking-[0.2em] uppercase text-cream/40 mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full bg-transparent border-b border-cream/20 text-cream py-3 focus:border-gold focus:outline-none transition-colors placeholder:text-cream/20"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs tracking-[0.2em] uppercase text-cream/40 mb-2"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full bg-transparent border-b border-cream/20 text-cream py-3 focus:border-gold focus:outline-none transition-colors placeholder:text-cream/20"
                      placeholder="(optional)"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="event-date"
                      className="block text-xs tracking-[0.2em] uppercase text-cream/40 mb-2"
                    >
                      Event Date
                    </label>
                    <input
                      type="date"
                      id="event-date"
                      name="event_date"
                      className="w-full bg-transparent border-b border-cream/20 text-cream py-3 focus:border-gold focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="event-type"
                      className="block text-xs tracking-[0.2em] uppercase text-cream/40 mb-2"
                    >
                      Type of Board
                    </label>
                    <select
                      id="event-type"
                      name="event_type"
                      className="w-full bg-transparent border-b border-cream/20 text-cream py-3 focus:border-gold focus:outline-none transition-colors"
                    >
                      <option value="" className="bg-midnight">Select...</option>
                      <option value="grazing-table" className="bg-midnight">
                        Grazing Table
                      </option>
                      <option value="charcuterie-board" className="bg-midnight">
                        Charcuterie Board
                      </option>
                      <option value="not-sure" className="bg-midnight">
                        Not Sure Yet
                      </option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="guest-count"
                      className="block text-xs tracking-[0.2em] uppercase text-cream/40 mb-2"
                    >
                      Guest Count
                    </label>
                    <input
                      type="number"
                      id="guest-count"
                      name="guest_count"
                      min="1"
                      className="w-full bg-transparent border-b border-cream/20 text-cream py-3 focus:border-gold focus:outline-none transition-colors placeholder:text-cream/20"
                      placeholder="Approximate number"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs tracking-[0.2em] uppercase text-cream/40 mb-2"
                  >
                    Tell Us About Your Event *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full bg-transparent border-b border-cream/20 text-cream py-3 focus:border-gold focus:outline-none transition-colors resize-none placeholder:text-cream/20"
                    placeholder="What's the occasion? Any themes, dietary preferences, or special requests?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto border border-gold/50 text-gold tracking-[0.2em] uppercase text-sm px-12 py-4 hover:bg-gold hover:text-midnight transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                >
                  {submitting ? "Sending..." : "Send Inquiry"}
                </button>
              </form>
            )}
          </AnimatedSection>

          <AnimatedSection className="lg:col-span-2" delay={0.3}>
            <div className="lg:pl-8 lg:border-l border-gold/10">
              <h3 className="font-serif text-xl tracking-wider text-cream mb-6">
                Contact Info
              </h3>

              <div className="space-y-6">
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-cream/30 mb-1">
                    Email
                  </p>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-gold/80 hover:text-gold transition-colors"
                  >
                    {SITE.email}
                  </a>
                </div>

                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-cream/30 mb-1">
                    Location
                  </p>
                  <p className="text-cream/60">{SITE.location}</p>
                </div>

                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-cream/30 mb-3">
                    Follow Us
                  </p>
                  <div className="flex gap-4">
                    <a
                      href={SITE.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cream/40 hover:text-gold transition-colors duration-300"
                      aria-label="Instagram"
                    >
                      <InstagramIcon className="w-5 h-5" />
                    </a>
                    <a
                      href={SITE.social.tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cream/40 hover:text-gold transition-colors duration-300"
                      aria-label="TikTok"
                    >
                      <TikTokIcon className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 border border-gold/10 bg-charcoal/30">
                <p className="font-serif text-lg text-cream/70 mb-2">
                  Quick Inquiry?
                </p>
                <p className="text-cream/40 text-sm leading-relaxed">
                  Feel free to email us directly or DM us on Instagram. We
                  typically respond within 24 hours.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
