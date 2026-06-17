export interface ChocolateProduct {
  id: string;
  slug: string;
  name: string;
  type: string;
  origin: string;
  category: "chocolate"; // 👈 Added category type
  weight: string;
  price_idr: number;
  cocoa: string;
  color: string;
  image: string;
  seoImage: string;
  tagline: string;
  description: string;
  notes: string[];
}

export const chocolateProducts: ChocolateProduct[] = [
  {
    id: "java-preanger-chocolate", // 👈 ID updated to prevent cart conflicts
    slug: "java-preanger",
    name: "Java Preanger",
    type: "Dark Chocolate",
    origin: "Java, West Java",
    category: "chocolate", // 👈 Added tag
    weight: "80g",
    price_idr: 95000,
    cocoa: "55%",
    color: "#2D5A3D",
    image: "/products/3d-javapreanger.png",
    seoImage: "/products/chocolate/3d-javapreanger.webp",
    tagline: "Earthy. Herbal. Unapologetic.",
    description: "Silky and fragrant Arabica from Java's most storied growing region, seamlessly blended with 55% dark cocoa. A classic, comforting profile with deep roots.",
    notes: ["Herbal", "Caramel", "Warm Spice"],
  },
  {
    id: "alur-badak-chocolate",
    slug: "alur-badak",
    name: "Alur Badak",
    type: "Dark Chocolate",
    origin: "North Sumatra",
    category: "chocolate",
    weight: "80g",
    price_idr: 105000,
    cocoa: "55%",
    color: "#4A2C6E",
    image: "/products/3d-alurbadak.png",
    seoImage: "/products/chocolate/3d-alurbadak.webp",
    tagline: "Bold body. Wild finish.",
    description: "Untamed Aceh terroir. Complex, bold, and unyielding wild Luwak fermentation that cuts straight through the dark chocolate canvas.",
    notes: ["Wild Luwak", "Dark Fruit", "Earth"],
  },
  {
    id: "lintong-nihuta-chocolate",
    slug: "lintong-nihuta",
    name: "Lintong Nihuta",
    type: "Dark Chocolate",
    origin: "North Sumatra",
    category: "chocolate",
    weight: "80g",
    price_idr: 95000,
    cocoa: "55%",
    color: "#1E3A5F",
    image: "/products/3d-lintongnihuta.png",
    seoImage: "/products/chocolate/3d-lintongnihuta.webp",
    tagline: "Cedar notes. Highland soul.",
    description: "Grown along the volcanic rim of Lake Toba. This bar channels deep-earth minerals, resulting in a complex and defiant tasting experience.",
    notes: ["Cedar", "Blueberry", "Clove"],
  },
  {
    id: "red-bourbon-chocolate",
    slug: "red-bourbon",
    name: "Red Bourbon",
    type: "Dark Chocolate",
    origin: "South Sumatra",
    category: "chocolate",
    weight: "80g",
    price_idr: 115000,
    cocoa: "55%",
    color: "#8B1A1A",
    image: "/products/3d-redbourbon.png",
    seoImage: "/products/chocolate/3d-redbourbon.webp",
    tagline: "Berry-bright. Rarely found.",
    description: "A rare Kerinci varietal that burns with red fruit intensity. Paired with dark cocoa, it leaves a sparkling, smoky finish.",
    notes: ["Red Cherry", "Smoke", "Dark Cocoa"],
  },
  {
    id: "toraja-chocolate",
    slug: "toraja",
    name: "Toraja",
    type: "Dark Chocolate",
    origin: "Sulawesi",
    category: "chocolate",
    weight: "80g",
    price_idr: 95000,
    cocoa: "55%",
    color: "#2C4A1E",
    image: "/products/3d-toraja.png",
    seoImage: "/products/chocolate/3d-toraja.webp",
    tagline: "Ancient terroir. Dark velvet.",
    description: "Born in the sacred highlands of Sulawesi. Deep, ancient, and unmistakably Indonesian. An intense, full-bodied chocolate.",
    notes: ["Bitter Cocoa", "Wet Stone", "Cedar"],
  },
  {
    id: "aceh-gayo-chocolate",
    slug: "aceh-gayo",
    name: "Aceh Gayo",
    type: "Dark Chocolate",
    origin: "Aceh, Sumatra",
    category: "chocolate",
    weight: "80g",
    price_idr: 105000,
    cocoa: "55%",
    color: "#D4C5A9",
    image: "/products/3d-acehgayo.png",
    seoImage: "/products/chocolate/3d-acehgayo.webp",
    tagline: "Clean. Bright. Fearless.",
    description: "The rarest expression of highland terroir. Bone-dry clean with a honeyed floral lift that cuts perfectly through the bitterness of the cocoa.",
    notes: ["Wild Honey", "Jasmine", "Vanilla"],
  },
  {
    id: "andung-sari-chocolate",
    slug: "andung-sari",
    name: "Andung Sari",
    type: "Dark Chocolate",
    origin: "East Java",
    category: "chocolate",
    weight: "80g",
    price_idr: 90000,
    cocoa: "55%",
    color: "#8B7355",
    image: "/products/3d-andungsari.png",
    seoImage: "/products/chocolate/3d-andungsari.webp",
    tagline: "Floral depth. Quiet power.",
    description: "A highly refined, elegant profile from East Java. Soft floral notes give way to a deeply satisfying, resonant chocolate finish.",
    notes: ["White Rose", "Almond", "Soft Cocoa"],
  },
  {
    id: "mandailing-chocolate",
    slug: "mandailing",
    name: "Mandailing",
    type: "Dark Chocolate",
    origin: "North Sumatra",
    category: "chocolate",
    weight: "80g",
    price_idr: 95000,
    cocoa: "55%",
    color: "#C4B99A",
    image: "/products/3d-mandailing.png",
    seoImage: "/products/chocolate/3d-mandailing.webp",
    tagline: "Full-bodied. Tobacco warmth.",
    description: "Grown in the rugged Bukit Barisan mountains. A heavy, full-bodied profile defined by deep cocoa and exotic sweet spice.",
    notes: ["Sweet Spice", "Tobacco", "Dark Cocoa"],
  }
];