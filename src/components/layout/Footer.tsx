import { SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="py-12 bg-cream">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] tracking-[0.3em] uppercase text-soft">
            &copy; {new Date().getFullYear()} {SITE.name}
          </p>
          <p className="text-[10px] tracking-[0.2em] text-soft/60">
            Made with love in Los Angeles
          </p>
        </div>
      </div>
    </footer>
  );
}
