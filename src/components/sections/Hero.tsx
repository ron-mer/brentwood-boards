import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full">
      <div className="relative w-full aspect-[3/2] md:aspect-[16/7]">
        <Image
          src="/images/hero.jpg"
          alt="MILZCHELLA themed grazing table by Brentwood Boards"
          fill
          priority
          quality={90}
          className="object-cover"
          sizes="100vw"
        />
      </div>
    </section>
  );
}
