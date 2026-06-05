import { SITE } from "@/lib/constants";
import { InstagramIcon, TikTokIcon } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="py-16 bg-chocolate text-ivory">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="font-display text-lg tracking-wide text-ivory/70">
            Brentwood Boards
          </p>

          <div className="flex items-center gap-6">
            <a
              href={SITE.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ivory/30 hover:text-gold transition-colors duration-500"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href={SITE.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ivory/30 hover:text-gold transition-colors duration-500"
              aria-label="TikTok"
            >
              <TikTokIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="text-[11px] tracking-wider text-ivory/30 hover:text-gold transition-colors duration-500"
            >
              {SITE.email}
            </a>
          </div>

          <p className="text-[10px] tracking-[0.25em] text-ivory/20 uppercase">
            &copy; {new Date().getFullYear()} &middot; Made with love in LA
          </p>
        </div>
      </div>
    </footer>
  );
}
