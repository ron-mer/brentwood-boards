export const SITE = {
  name: "Brentwood Boards",
  tagline: "Grazing Tables & Charcuterie Boards for every occasion",
  description:
    "Artisan charcuterie boards and grazing tables crafted with love in Los Angeles. Custom-designed for every occasion -- from intimate gatherings to large celebrations.",
  email: "hello@brentwoodboards.com",
  location: "Los Angeles, CA",
  url: "https://brentwoodboards.com",
  social: {
    instagram: "https://www.instagram.com/brentwoodboards",
    tiktok: "https://www.tiktok.com/@brentwoodboards",
  },
} as const;

export const NAV_LINKS = [
  { label: "Grazing Tables", href: "#services" },
  { label: "Charcuterie Boards", href: "#services" },
  { label: "Contact Us", href: "#contact" },
] as const;

export const GALLERY_IMAGES = [
  {
    src: "/images/gallery/board-02.jpg",
    alt: "Custom branded 4A Arts charcuterie display with eucalyptus",
    width: 600,
    height: 800,
  },
  {
    src: "/images/gallery/board-04.jpg",
    alt: "Vibrant classic charcuterie board with fresh fruits and artisan cheeses",
    width: 600,
    height: 800,
  },
  {
    src: "/images/gallery/board-03.jpg",
    alt: "Tropical fruit grazing table with dragonfruit and edible flowers",
    width: 600,
    height: 800,
  },
  {
    src: "/images/gallery/board-06.jpg",
    alt: "Fourth of July patriotic charcuterie board with red white and blue accents",
    width: 800,
    height: 517,
  },
  {
    src: "/images/gallery/board-01.jpg",
    alt: "Halloween themed charcuterie board with skeleton decoration",
    width: 600,
    height: 800,
  },
  {
    src: "/images/gallery/board-05.jpg",
    alt: "MILZCHELLA music festival themed grazing table with piano key details",
    width: 579,
    height: 799,
  },
  {
    src: "/images/gallery/board-07.jpg",
    alt: "Spooky Halloween charcuterie board with ghost pretzels and candy",
    width: 600,
    height: 800,
  },
  {
    src: "/images/gallery/board-08.jpg",
    alt: "Halloween BOO brie board with pumpkin accents and festive candy",
    width: 600,
    height: 800,
  },
] as const;
