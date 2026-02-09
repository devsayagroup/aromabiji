export type Variant = {
  id: string;
  type: string;
  packaging: string;
  weight: string;
  price_idr: number;
  image: string;
};

export type Product = {
  id: string;
  name: string;
  origin: string;
  description: string;
  image: string;
  bg?: string;
  theme: "light" | "dark";
  variants: Variant[];
};

export const products: Product[] = 
[
  {
    "id": "aceh-gayo",
    "name": "Aceh Gayo",
    "origin": "West Indonesia Specialty",
    "description": "A celebrated coffee from West Indonesia with a strong, complex flavor profile and buttery mouthfeel. Tasting notes of sugar cane, fruits, caramel, and a hint of warm spice for a creamy, luxurious finish.",
    "image": "/products/1.jpg",
    "bg": "/background/bg-aceh.webp",
    "theme": "dark", 
    "variants": [
      {
        "id": "aceh-gayo-bean-1500",
        "type": "Bean 1500–1700 MSL",
        "packaging": "Box",
        "weight": "100 g",
        "price_idr": 210000,
        "image": "/products/ag-1.png"
      },
      {
        "id": "aceh-gayo-ground-1500",
        "type": "Ground 1500–1700 MSL",
        "packaging": "Pouch",
        "weight": "100 g",
        "price_idr": 210000,
        "image": "/products/ag-2.png"

      },
      {
        "id": "aceh-gayo-bean-1900",
        "type": "Bean 1900–2100 MSL",
        "packaging": "Box",
        "weight": "100 g",
        "price_idr": 262500,
        "image": "/products/ag-3.png"
      },
      {
        "id": "aceh-gayo-ground-1900",
        "type": "Ground 1900–2100 MSL",
        "packaging": "Pouch",
        "weight": "100 g",
        "price_idr": 262500,
        "image": "/products/ag-4.png"
      },
      {
        "id": "aceh-gayo-drip-7s",
        "type": "Drip 7 Sachet",
        "packaging": "Soft Box",
        "weight": "7 x 10 g",
        "price_idr": 240000,
        "image": "/products/ag-5.png"
      }
    ]
  },
  {
    "id": "mandailing",
    "name": "Mandailing",
    "origin": "West Indonesia Specialty",
    "description": "A smooth, full-bodied coffee with chocolate undertones and a clean finish. The pride of North Sumatra’s Mandailing region.",
    "image": "/products/6.jpg",
    "bg": "/background/bg-mandailing.webp",
    "theme": "dark", 
    "variants": [
      {
        "id": "mandailing-bean",
        "type": "Bean",
        "packaging": "Box",
        "weight": "100 g",
        "price_idr": 262500,
        "image": "/products/mg-1.png"
      },
      {
        "id": "mandailing-ground",
        "type": "Ground",
        "packaging": "Pouch",
        "weight": "100 g",
        "price_idr": 262500,
        "image": "/products/mg-2.png"
      },
      {
        "id": "mandailing-drip-7s",
        "type": "Drip 7 Sachet",
        "packaging": "Soft Box",
        "weight": "7 x 10 g",
        "price_idr": 240000,
        "image": "/products/mg-3.png"
      }
    ]
  },
  
  {
    "id": "java-preanger",
    "name": "Java Preanger",
    "origin": "West Java Specialty",
    "description": "Embark on a sensory journey with Java Preanger. A distinguished coffee paying homage to West Java’s volcanic highlands. Expect notes of baking chocolate, honey, and caramel.",
    "image": "/products/4.jpg",
    "bg": "/background/bg-preanger.webp",
    "theme": "light", 
    "variants": [
      {
        "id": "java-preanger-bean",
        "type": "Bean",
        "packaging": "Box",
        "weight": "100 g",
        "price_idr": 240000,
        "image": "/products/jp-1.png"
      },
      {
        "id": "java-preanger-ground",
        "type": "Ground",
        "packaging": "Pouch",
        "weight": "100 g",
        "price_idr": 240000,
        "image": "/products/jp-2.png"
      },
      {
        "id": "java-preanger-drip-6s",
        "type": "Drip 6 Sachet",
        "packaging": "Soft Box",
        "weight": "6 x 10 g",
        "price_idr": 165000,
        "image": "/products/jp-3.png"
      }
    ]
  },
  {
    "id": "lintong-nihuta",
    "name": "Lintong Nihuta",
    "origin": "Sumatera Specialty",
    "description": "Sumatera’s finest captivating taste of fresh earth, tobacco, herbs, and cedar balanced by dark chocolate tones. A clean mouthfeel and velvety finish elevate your coffee ritual.",
    "image": "/products/lintong-nihuta.jpg",
    "bg": "/background/bg-lintong.webp",
    "theme": "dark", 
    "variants": [
      {
        "id": "lintong-nihuta-bean",
        "type": "Bean",
        "packaging": "Box",
        "weight": "100 g",
        "price_idr": 285000,
        "image": "/products/ln-1.png"
      },
      {
        "id": "lintong-nihuta-ground",
        "type": "Ground",
        "packaging": "Pouch",
        "weight": "100 g",
        "price_idr": 285000,
        "image": "/products/ln-2.png"
      }
    ]
  },
  {
    "id": "andung-sari",
    "name": "Andung Sari",
    "origin": "Catimor Variety",
    "description": "Introducing Andung Sari, a distinguished special edition cultivated between 1400–1700 meters above sea level. Floral hints and subtle fruitiness lead to a velvety, well-balanced aftertaste.",
    "image": "/images/products/andung-sari.jpg",
    "bg": "/background/bg-andung.webp",
    "theme": "light", 
    "variants": [
      {
        "id": "andung-sari-bean",
        "type": "Bean",
        "packaging": "Box",
        "weight": "100 g",
        "price_idr": 285000,
        "image": "/products/as-1.png"
      },
      {
        "id": "andung-sari-ground",
        "type": "Ground",
        "packaging": "Pouch",
        "weight": "100 g",
        "price_idr": 285000,
        "image": "/products/as-2.png"
      }
    ]
  },
  {
    "id": "alur-badak",
    "name": "Alur Badak",
    "origin": "Sumatera Specialty",
    "description": "A prestigious, rare bean grown in the most remote area of Sumatera, on the edge of Pengaring by the Indian Ocean. An extraordinary coffee with taste of brown sugar, fruits, and a pleasant aftertaste.",
    "image": "/images/products/alur-badak.jpg",
    "bg": "/background/bg-sumatera.webp",
    "theme": "dark", 
    "variants": [
      {
        "id": "alur-badak-bean",
        "type": "Bean",
        "packaging": "Box",
        "weight": "100 g",
        "price_idr": 285000,
        "image": "/products/ab-1.png"
      },
      {
        "id": "alur-badak-ground",
        "type": "Ground",
        "packaging": "Pouch",
        "weight": "100 g",
        "price_idr": 285000,
        "image": "/products/ab-2.png"
      },
      {
        "id": "alur-badak-drip-6s",
        "type": "Drip 6 Sachet",
        "packaging": "Soft Box",
        "weight": "6 x 10 g",
        "price_idr": 135000,
        "image": "/products/ab-3.png"
      }
    ]
  },
  {
    "id": "collections",
    "name": "Collections",
    "origin": " ",
    "description": "Experience the best of Indonesia’s coffee regions. Earthy, floral, and fruity notes harmonized into a blend that delights every palate.",
    "image": "/images/products/collections.webp",
    "theme": "dark", 
    "bg": "/background/bg-collection.webp",
    "variants": [
      {
        "id": "collections-drip-6s",
        "type": "Drip 6 Sachet",
        "packaging": "Soft Box",
        "weight": "6 x 10 g",
        "price_idr": 165000,
        "image": "/products/co.png"
      }
    ]
  },
  {
    "id": "lampung",
    "name": "Lampung",
    "origin": "Southern Sumatra",
    "description": "Grown in the lush highlands of southern Sumatra, Lampung offers deep earthy notes with hints of dark chocolate and toasted spices. Smooth-bodied and low acidity yet balanced.",
    "image": "/images/products/lampung.jpg",
    "bg": "/background/bg-lampung.webp",
    "theme": "light", 
    "variants": [
      {
        "id": "lampung-bean",
        "type": "Bean",
        "packaging": "Box",
        "weight": "100 g",
        "price_idr": 127500,
        "image": "/products/la-1.png"
      },
      {
        "id": "lampung-ground",
        "type": "Ground",
        "packaging": "Pouch",
        "weight": "100 g",
        "price_idr": 127500,
        "image": "/products/la-2.png"
      }
    ]
  },
  {
    "id": "toraja",
    "name": "Toraja",
    "origin": "Sulawesi Specialty",
    "description": "From the highlands of Tana Toraja, this coffee reveals a rich body, low acidity, and hints of spice with a smooth lingering finish that embodies Sulawesi’s unique terroir.",
    "image": "/images/products/toraja.jpg",
    "bg": "/background/bg-toraja.webp",
    "theme": "dark", 
    "variants": [
      {
        "id": "toraja-bean",
        "type": "Bean",
        "packaging": "Box",
        "weight": "100 g",
        "price_idr": 262500,
        "image": "/products/ts-1.png"
      },
      {
        "id": "toraja-ground",
        "type": "Ground",
        "packaging": "Pouch",
        "weight": "100 g",
        "price_idr": 262500,
        "image": "/products/ts-2.png"
      },
      {
        "id": "toraja-drip-6s",
        "type": "Drip 6 Sachet",
        "packaging": "Soft Box",
        "weight": "6 x 10 g",
        "price_idr": 150000,
        "image": "/products/ts-3.png"
      }
    ]
  }
];

