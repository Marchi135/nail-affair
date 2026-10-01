import nailsImage from "../assets/nails.jpg";
import toesImage from "../assets/toes.jpg";
import lashesImage from "../assets/lashes.jpg";
import microbladingImage from "../assets/microblading.jpg";

const services = [
  {
    category: "Nails",
    icon: "💅",
    image: nailsImage,
    services: [
      { name: "Acrylic Full Set", price: "R300" },
      { name: "Acrylic Fill", price: "R200" },
      { name: "Gel Nails", price: "R250" },
      { name: "BIAB", price: "R300" },
      { name: "Nail Art", price: "R50+" },
    ],
  },

  {
    category: "Toes",
    icon: "🦶",
    image: toesImage,
    services: [
      { name: "Acrylic Toes", price: "R180" },
      { name: "Gel Toes", price: "R150" },
      { name: "Toe Nail Polish", price: "R100" },
      { name: "French Toes", price: "R200" },
      { name: "Nail Art (Toes)", price: "R50+" },
    ],
  },

  {
    category: "Lashes",
    icon: "👁",
    image: lashesImage,
    services: [
      { name: "Classic Lashes", price: "R200" },
      { name: "Hybrid Lashes", price: "R250" },
      { name: "Volume Lashes", price: "R300" },
      { name: "Lash Fill", price: "R150" },
    ],
  },

  {
    category: "Microblading",
    icon: "✨",
    image: microbladingImage,
    services: [
      { name: "Microblading", price: "R600" },
      { name: "Touch Up", price: "R500" },
    ],
  },
];

export default services;