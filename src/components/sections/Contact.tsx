"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";

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
    <section id="contact" className="py-20 md:py-28 bg-warm">
      <div className="max-w-2xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl text-espresso mb-4">
            Contact Us
          </h2>
          <p className="font-serif text-muted">
            Tell us about your event and we&rsquo;ll get back to you with a custom quote.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <h3 className="font-display text-2xl text-espresso mb-3">
              Thank you!
            </h3>
            <p className="font-serif text-muted">
              We&rsquo;ll be in touch shortly.
            </p>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-cream rounded-lg p-8 md:p-10 space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block font-serif text-sm text-muted mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-warm border border-soft/30 rounded px-4 py-3 text-espresso font-serif text-sm focus:border-gold focus:outline-none transition-colors placeholder:text-soft/60"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-serif text-sm text-muted mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-warm border border-soft/30 rounded px-4 py-3 text-espresso font-serif text-sm focus:border-gold focus:outline-none transition-colors placeholder:text-soft/60"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="event-date" className="block font-serif text-sm text-muted mb-2">
                  Event Date
                </label>
                <input
                  type="date"
                  id="event-date"
                  name="event_date"
                  className="w-full bg-warm border border-soft/30 rounded px-4 py-3 text-espresso font-serif text-sm focus:border-gold focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="guest-count" className="block font-serif text-sm text-muted mb-2">
                  Guest Count
                </label>
                <input
                  type="number"
                  id="guest-count"
                  name="guest_count"
                  min="1"
                  className="w-full bg-warm border border-soft/30 rounded px-4 py-3 text-espresso font-serif text-sm focus:border-gold focus:outline-none transition-colors placeholder:text-soft/60"
                  placeholder="Approximate number"
                />
              </div>
            </div>

            <div>
              <label htmlFor="event-type" className="block font-serif text-sm text-muted mb-2">
                Event Type
              </label>
              <select
                id="event-type"
                name="event_type"
                className="w-full bg-warm border border-soft/30 rounded px-4 py-3 text-espresso font-serif text-sm focus:border-gold focus:outline-none transition-colors"
              >
                <option value="">Select one...</option>
                <option value="birthday">Birthday Party</option>
                <option value="wedding">Wedding / Engagement</option>
                <option value="corporate">Corporate Event</option>
                <option value="holiday">Holiday Party</option>
                <option value="baby-shower">Baby Shower</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block font-serif text-sm text-muted mb-2">
                Tell us about your event *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full bg-warm border border-soft/30 rounded px-4 py-3 text-espresso font-serif text-sm focus:border-gold focus:outline-none transition-colors resize-none placeholder:text-soft/60"
                placeholder="The occasion, themes, dietary preferences, or special requests..."
              />
            </div>

            <div className="text-center pt-2">
              <button
                type="submit"
                disabled={submitting}
                className="bg-espresso text-cream font-serif text-sm tracking-wide px-8 py-3 rounded hover:bg-espresso/90 transition-colors disabled:opacity-40"
              >
                {submitting ? "Sending..." : "Send Inquiry"}
              </button>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  );
}
