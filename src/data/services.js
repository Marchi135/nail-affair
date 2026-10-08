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
      { name: "Acrylic Nails", price: "R150" },
      { name: "Re-Fill", price: "R120" },
      { name: "Gel Nails", price: "R150" },
      { name: "Polygel Nails", price: "R170" },
      { name: "Nail Art", price: "R10+" },
    ],
  },

  {
    category: "Toes",
    icon: "🦶",
    image: toesImage,
    services: [
      { name: "Acrylic Toes", price: "R150" },
      { name: "Gel Toes", price: "R120" },
      { name: "Toe Nail Polish", price: "R100" },
      { name: "French Toes", price: "R150" },
      { name: "Nail Art (Toes)", price: "R10+" },
    ],
  },

  {
    category: "Lashes",
    icon: "👁",
    image: lashesImage,
    services: [
      { name: "Classic Lashes", price: "R200" },
      { name: "Hybrid Lashes", price: "R250" },
      { name: "Cateye cluster lashes", price: "R150" },
      { name: "Lash Fill", price: "R150" },
      {name: "Cluster Lashes", price: "R120" },
    ],
  },

  {
    category: "Microblading",
    icon: "✨",
    image: microbladingImage,
    services: [
      { name: "Microblading", price: "R800" },
      { name: "Touch Up", price: "R400" },
    ],
  },
];

export default services;