export const SITE = {
  brand: "OMKARA",
  business: "BHATIA ATTACHI HOUSE",
  tagline: "Your Trusted Destination for Bags, Luggage & Expert Repairs",
  phone: "9518880608",
  phoneIntl: "+919518880608",
  whatsapp: "919518880608",
  address: "Bhatia Attachi House, Pandit Raja Ram Gali, Railway Road, India",
};

export function waLink(message: string) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function defaultEnquiry(product?: string) {
  return `Hello OMKARA,\n\nI would like more information${product ? ` about ${product}` : ""}.`;
}

import schoolImg from "@/assets/cat-school.jpg";
import trolleyImg from "@/assets/cat-trolley.jpg";
import purseImg from "@/assets/cat-purse.jpg";
import slingImg from "@/assets/cat-sling.jpg";
import officeImg from "@/assets/cat-office.jpg";
import toolImg from "@/assets/cat-tool.jpg";
import shoppingImg from "@/assets/cat-shopping.jpg";
import raincoatImg from "@/assets/cat-raincoat.jpg";
import umbrellaImg from "@/assets/cat-umbrella.jpg";

export type Product = { name: string; price: string; description: string; image: string };
export type Category = {
  slug: string;
  name: string;
  tagline: string;
  image: string;
  products: Product[];
};

export const CATEGORIES: Category[] = [
  {
    slug: "school-bags",
    name: "School Bags",
    tagline: "Durable, stylish bags built for everyday school life.",
    image: schoolImg,
    products: [
      { name: "Junior Cartoon Backpack", price: "₹ 699", description: "Lightweight backpack with colorful prints for kids.", image: schoolImg },
      { name: "Teen Daily School Bag", price: "₹ 1,099", description: "Spacious bag with padded straps and laptop sleeve.", image: schoolImg },
      { name: "Premium Student Backpack", price: "₹ 1,499", description: "Water-resistant fabric with multiple compartments.", image: schoolImg },
      { name: "Trolley School Bag", price: "₹ 2,299", description: "Wheeled school bag for heavy books and easy carry.", image: schoolImg },
    ],
  },
  {
    slug: "trolley-luggage",
    name: "Trolley Luggage",
    tagline: "Premium hard & soft trolleys for every journey.",
    image: trolleyImg,
    products: [
      { name: "Cabin Hard Trolley 20\"", price: "₹ 2,499", description: "ABS hard-shell cabin trolley with TSA lock.", image: trolleyImg },
      { name: "Medium Check-in Trolley 24\"", price: "₹ 3,499", description: "Lightweight spinner wheels, expandable.", image: trolleyImg },
      { name: "Large Travel Trolley 28\"", price: "₹ 4,499", description: "Heavy-duty travel companion for long trips.", image: trolleyImg },
      { name: "Trolley Set of 3", price: "₹ 8,999", description: "Complete family trolley combo set.", image: trolleyImg },
    ],
  },
  {
    slug: "purse-collection",
    name: "Purse Collection",
    tagline: "Elegant ladies purses and handbags for every occasion.",
    image: purseImg,
    products: [
      { name: "Ethnic Embroidered Clutch", price: "₹ 899", description: "Festive clutch with intricate embroidery.", image: purseImg },
      { name: "Leather Handbag", price: "₹ 1,799", description: "Premium leather finish with gold accents.", image: purseImg },
      { name: "Office Tote Purse", price: "₹ 1,499", description: "Spacious tote suitable for office and shopping.", image: purseImg },
      { name: "Designer Sling Purse", price: "₹ 1,299", description: "Trendy sling purse for casual outings.", image: purseImg },
    ],
  },
  {
    slug: "sling-bags",
    name: "Sling Bags",
    tagline: "Compact crossbody bags for everyday essentials.",
    image: slingImg,
    products: [
      { name: "Unisex Mobile Sling", price: "₹ 599", description: "Compact sling for phone and wallet.", image: slingImg },
      { name: "Casual Crossbody Bag", price: "₹ 899", description: "Stylish everyday crossbody bag.", image: slingImg },
      { name: "Travel Sling Pack", price: "₹ 1,299", description: "Anti-theft sling with hidden pockets.", image: slingImg },
    ],
  },
  {
    slug: "office-bags",
    name: "Office Bags",
    tagline: "Professional bags for the modern workplace.",
    image: officeImg,
    products: [
      { name: "Leather Laptop Bag", price: "₹ 2,299", description: "Premium leather bag with laptop compartment.", image: officeImg },
      { name: "Executive Briefcase", price: "₹ 3,499", description: "Classic briefcase for professionals.", image: officeImg },
      { name: "Office Backpack", price: "₹ 1,899", description: "Modern office backpack with USB port.", image: officeImg },
      { name: "Slim Document Bag", price: "₹ 1,299", description: "Slim profile for files and documents.", image: officeImg },
    ],
  },
  {
    slug: "tool-bags",
    name: "Tool Bags",
    tagline: "Heavy-duty bags for professionals and technicians.",
    image: toolImg,
    products: [
      { name: "Electrician Tool Bag", price: "₹ 1,099", description: "Multi-compartment heavy-duty tool bag.", image: toolImg },
      { name: "Plumber Tool Kit Bag", price: "₹ 1,299", description: "Reinforced base for heavy tools.", image: toolImg },
      { name: "Contractor Pro Bag", price: "₹ 1,799", description: "Large capacity professional tool bag.", image: toolImg },
    ],
  },
  {
    slug: "shopping-bags",
    name: "Shopping Bags",
    tagline: "Reusable, eco-friendly bags for daily shopping.",
    image: shoppingImg,
    products: [
      { name: "Jute Shopping Bag", price: "₹ 199", description: "Eco-friendly jute bag with sturdy handles.", image: shoppingImg },
      { name: "Foldable Shopping Tote", price: "₹ 249", description: "Compact foldable design for easy carry.", image: shoppingImg },
      { name: "Heavy-Duty Carry Bag", price: "₹ 349", description: "Reinforced bag for groceries and more.", image: shoppingImg },
    ],
  },
  {
    slug: "raincoats",
    name: "Raincoats",
    tagline: "Stay dry with our monsoon-ready raincoats.",
    image: raincoatImg,
    products: [
      { name: "Adult Rain Jacket", price: "₹ 799", description: "Waterproof rain jacket with hood.", image: raincoatImg },
      { name: "Kids Raincoat", price: "₹ 549", description: "Colorful raincoats for school kids.", image: raincoatImg },
      { name: "Two-Piece Rain Suit", price: "₹ 1,199", description: "Top and bottom rain suit for bikers.", image: raincoatImg },
    ],
  },
  {
    slug: "umbrellas",
    name: "Umbrellas",
    tagline: "Strong, stylish umbrellas for sun and rain.",
    image: umbrellaImg,
    products: [
      { name: "Auto-Open Folding Umbrella", price: "₹ 449", description: "Compact 3-fold auto open umbrella.", image: umbrellaImg },
      { name: "Big Garden Umbrella", price: "₹ 999", description: "Large umbrella for full coverage.", image: umbrellaImg },
      { name: "Kids Cartoon Umbrella", price: "₹ 349", description: "Fun designs for children.", image: umbrellaImg },
    ],
  },
];

export function getCategory(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug);
}
