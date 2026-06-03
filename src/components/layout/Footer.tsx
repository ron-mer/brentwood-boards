import { SITE } from "@/lib/constants";
import { InstagramIcon, TikTokIcon } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="bg-midnight border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl tracking-[0.2em] uppercase text-cream">
              Brentwood
            </h3>
            <p className="font-serif text-sm tracking-[0.35em] uppercase text-gold -mt-0.5">
              Boards
            </p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-6">
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/50 hover:text-gold transition-colors duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href={SITE.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/50 hover:text-gold transition-colors duration-300"
                aria-label="TikTok"
              >
                <TikTokIcon className="w-5 h-5" />
              </a>
            </div>
            <a
              href={`mailto:${SITE.email}`}
              className="text-sm text-cream/40 hover:text-gold transition-colors duration-300 tracking-wider"
            >
              {SITE.email}
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-cream/30 tracking-wider">
              Made with love in {SITE.location}
            </p>
            <p className="text-xs text-cream/20 mt-1">
              &copy; {new Date().getFullYear()} {SITE.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
