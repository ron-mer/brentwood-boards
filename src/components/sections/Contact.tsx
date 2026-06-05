"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
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
      const name = data.get("name") as string;
      const email = data.get("email") as string;
      const message = data.get("message") as string;
      window.location.href = `mailto:${SITE.email}?subject=Custom Board Inquiry from ${name}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-32 md:py-48 bg-cream">
      <div className="max-w-3xl mx-auto px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[11px] tracking-[0.3em] uppercase text-muted mb-10">
            Contact
          </p>

          <h2 className="font-serif font-light text-3xl md:text-4xl text-espresso leading-snug tracking-wide mb-16">
            Let&rsquo;s create something beautiful.
          </h2>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-16"
          >
            <h3 className="font-serif font-light text-2xl text-espresso mb-4">
              Thank you.
            </h3>
            <p className="text-muted">
              We&rsquo;ll be in touch shortly.
            </p>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-10"
          >
            <div className="grid sm:grid-cols-2 gap-10">
              <div>
                <label htmlFor="name" className="block text-[10px] tracking-[0.25em] uppercase text-soft mb-3">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-transparent border-b border-stone text-espresso py-2 focus:border-espresso focus:outline-none transition-colors text-sm placeholder:text-stone"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[10px] tracking-[0.25em] uppercase text-soft mb-3">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-transparent border-b border-stone text-espresso py-2 focus:border-espresso focus:outline-none transition-colors text-sm placeholder:text-stone"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-10">
              <div>
                <label htmlFor="event-date" className="block text-[10px] tracking-[0.25em] uppercase text-soft mb-3">
                  Event Date
                </label>
                <input
                  type="date"
                  id="event-date"
                  name="event_date"
                  className="w-full bg-transparent border-b border-stone text-espresso py-2 focus:border-espresso focus:outline-none transition-colors text-sm"
                />
              </div>
              <div>
                <label htmlFor="guest-count" className="block text-[10px] tracking-[0.25em] uppercase text-soft mb-3">
                  Guest Count
                </label>
                <input
                  type="number"
                  id="guest-count"
                  name="guest_count"
                  min="1"
                  className="w-full bg-transparent border-b border-stone text-espresso py-2 focus:border-espresso focus:outline-none transition-colors text-sm placeholder:text-stone"
                  placeholder="Approximate number"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-[10px] tracking-[0.25em] uppercase text-soft mb-3">
                Tell us about your event
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={3}
                className="w-full bg-transparent border-b border-stone text-espresso py-2 focus:border-espresso focus:outline-none transition-colors resize-none text-sm placeholder:text-stone"
                placeholder="The occasion, themes, dietary preferences, or special requests"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="text-[11px] tracking-[0.25em] uppercase text-espresso/60 hover:text-espresso transition-colors duration-500 border-b border-espresso/20 hover:border-espresso/40 pb-1 disabled:opacity-30"
            >
              {submitting ? "Sending..." : "Send inquiry"}
            </button>
          </motion.form>
        )}

        {/* Contact info — whispered */}
        <div className="mt-24 pt-16 border-t border-stone/50 flex flex-col sm:flex-row sm:items-center justify-between gap-8">
          <div className="space-y-2">
            <a href={`mailto:${SITE.email}`} className="block text-sm text-muted hover:text-espresso transition-colors">
              {SITE.email}
            </a>
            <p className="text-sm text-soft">{SITE.location}</p>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={SITE.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-soft hover:text-espresso transition-colors duration-500"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href={SITE.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="text-soft hover:text-espresso transition-colors duration-500"
              aria-label="TikTok"
            >
              <TikTokIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
