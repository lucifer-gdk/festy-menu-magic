
export interface MenuItem {
  id: number;
  name: string;
  price: number;
  image: string;
  category: 'milkshakes' | 'specials' | 'combos';
  description?: string;
}

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Badam Shake",
    price: 69,
    image: "/milkshakes/badam.png",
    category: "milkshakes",
    description: "Creamy almond shake topped with crushed nuts"
  },
  {
    id: 2,
    name: "Rose Milk",
    price: 69,
    image: "/milkshakes/rose.png",
    category: "milkshakes",
    description: "Sweet and fragrant rose flavored milk"
  },
  {
    id: 3,
    name: "Oreo Milkshake",
    price: 89,
    image: "/milkshakes/oreo.png",
    category: "milkshakes", 
    description: "Classic milkshake with crushed Oreo cookies"
  },
  {
    id: 4,
    name: "Chocolate Milkshake",
    price: 89,
    image: "/milkshakes/chocolate.png",
    category: "milkshakes",
    description: "Rich chocolate flavored milkshake"
  },
  {
    id: 5,
    name: "Vanilla Milkshake",
    price: 89,
    image: "/milkshakes/vanilla.png",
    category: "milkshakes",
    description: "Smooth and creamy vanilla milkshake"
  },
  {
    id: 6,
    name: "Strawberry Milkshake",
    price: 89,
    image: "/milkshakes/strawberry.png",
    category: "milkshakes",
    description: "Sweet strawberry flavored milkshake"
  },
  {
    id: 7,
    name: "Black Currant Milkshake",
    price: 99,
    image: "/milkshakes/blackcurrant.png",
    category: "milkshakes",
    description: "Tangy black currant flavored milkshake"
  },
  {
    id: 8,
    name: "Pista Milkshake",
    price: 99,
    image: "/milkshakes/pista.png",
    category: "milkshakes",
    description: "Pistachio flavored creamy milkshake"
  },
  {
    id: 9,
    name: "KitKat Milkshake",
    price: 99,
    image: "/milkshakes/kitkat.png",
    category: "milkshakes",
    description: "Milkshake with crushed KitKat chocolate"
  },
  {
    id: 10,
    name: "Vanilla Chocolate Milkshake",
    price: 99,
    image: "/milkshakes/vanillachocolate.png",
    category: "milkshakes",
    description: "Perfect blend of vanilla and chocolate"
  },
  {
    id: 11,
    name: "Falooda",
    price: 89,
    image: "/specials/falooda.png",
    category: "specials",
    description: "Traditional falooda with rose syrup and vermicelli"
  },
  {
    id: 12,
    name: "Dairy Milk Milkshake",
    price: 119,
    image: "/specials/dairymilk.png",
    category: "specials",
    description: "Milkshake with Dairy Milk chocolate"
  },
  {
    id: 13,
    name: "Bubble Milkshake",
    price: 149,
    image: "/specials/bubble.png",
    category: "specials",
    description: "Milkshake with bubble tea pearls"
  },
  {
    id: 14,
    name: "Any 3 Milkshakes @249",
    price: 249,
    image: "/combos/combo1.png",
    category: "combos",
    description: "Choose any 3 milkshakes from our menu"
  },
  {
    id: 15,
    name: "Any 3 Milkshakes @279",
    price: 279,
    image: "/combos/combo2.png",
    category: "combos",
    description: "Choose any 3 premium milkshakes from our menu"
  }
];

export const contactInfo = {
  phone1: "8976444400",
  phone2: "8905350883",
  phone3: "9491940290",
  phone4: "9050582643"
};
