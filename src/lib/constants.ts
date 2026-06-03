export const SITE = {
  name: "Brentwood Boards",
  tagline: "Grazing Tables & Charcuterie Boards for every occasion",
  description:
    "Artisan charcuterie boards and grazing tables crafted with love in Los Angeles. Custom-designed for every occasion — from intimate gatherings to large celebrations.",
  email: "hello@brentwoodboards.com",
  location: "Los Angeles, CA",
  url: "https://brentwoodboards.com",
  social: {
    instagram: "https://www.instagram.com/brentwoodboards",
    tiktok: "https://www.tiktok.com/@brentwoodboards",
  },
} as const;

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
] as const;

export const GALLERY_IMAGES = [
  {
    src: "/images/gallery/board-02.jpg",
    alt: "Custom branded 4A Arts charcuterie display with eucalyptus",
    category: "grazing-table",
    width: 600,
    height: 800,
  },
  {
    src: "/images/gallery/board-04.jpg",
    alt: "Vibrant classic charcuterie board with fresh fruits and artisan cheeses",
    category: "charcuterie-board",
    width: 600,
    height: 800,
  },
  {
    src: "/images/gallery/board-03.jpg",
    alt: "Tropical fruit grazing table with dragonfruit and edible flowers",
    category: "grazing-table",
    width: 600,
    height: 800,
  },
  {
    src: "/images/gallery/board-06.jpg",
    alt: "Fourth of July patriotic charcuterie board with red white and blue accents",
    category: "charcuterie-board",
    width: 800,
    height: 517,
  },
  {
    src: "/images/gallery/board-01.jpg",
    alt: "Halloween themed charcuterie board with skeleton decoration",
    category: "charcuterie-board",
    width: 600,
    height: 800,
  },
  {
    src: "/images/gallery/board-05.jpg",
    alt: "MILZCHELLA music festival themed grazing table with piano key details",
    category: "grazing-table",
    width: 579,
    height: 799,
  },
  {
    src: "/images/gallery/board-07.jpg",
    alt: "Spooky Halloween charcuterie board with ghost pretzels and candy",
    category: "charcuterie-board",
    width: 600,
    height: 800,
  },
  {
    src: "/images/gallery/board-08.jpg",
    alt: "Halloween BOO brie board with pumpkin accents and festive candy",
    category: "charcuterie-board",
    width: 600,
    height: 800,
  },
] as const;
