import { SITE } from "@/lib/constants";
import { InstagramIcon, TikTokIcon } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream/80">
      {/* Quote */}
      <div className="py-16 md:py-20 text-center px-6">
        <blockquote className="max-w-2xl mx-auto">
          <p className="font-serif text-lg md:text-xl italic text-cream/60 leading-relaxed">
            &ldquo;A grazing table is more than food &mdash; it&rsquo;s an
            invitation to slow down, share, and savor the moment together.&rdquo;
          </p>
        </blockquote>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/10 py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <a
              href={SITE.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/40 hover:text-cream transition-colors"
              aria-label="TikTok"
            >
              <TikTokIcon className="w-5 h-5" />
            </a>
            <a
              href={SITE.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/40 hover:text-cream transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
          </div>

          <p className="font-serif text-sm text-cream/40">
            Made with love in Los Angeles
          </p>

          <a
            href={`mailto:${SITE.email}`}
            className="font-serif text-sm text-cream/40 hover:text-cream transition-colors"
          >
            {SITE.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
