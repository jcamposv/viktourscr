import heroImg from "../assets/images/hero.png";
import volcanoImg from "../assets/images/volcano.jpg";
import rioCelesteImg from "../assets/images/rio-celeste.jpg";
import miravallesImg from "../assets/images/miravalles.jpg";
import monteverdeImg from "../assets/images/monteverde.jpg";
import tamarindoImg from "../assets/images/tamarindo.jpg";
import playaGrandeImg from "../assets/images/playa-grande.jpg";
import lasCatalinasImg from "../assets/images/las-catalinas.jpg";
import sunsetImg from "../assets/images/sunset.jpg";
import aboutImg from "../assets/images/about-waterfall.jpg";
import catamaranImg from "../assets/images/catamaran.jpg";
import tortugueroImg from "../assets/images/tortuguero.jpg";
import tortugueroBeachImg from "../assets/images/tortuguero-beach.jpg";
import nicaraguaImg from "../assets/images/nicaragua.png";
import guatemalaImg from "../assets/images/guatemala.png";
import irazuImg from "../assets/images/irazu.jpg";
import bajosDelToroImg from "../assets/images/bajos-del-toro.jpg";
import manuelAntonioImg from "../assets/images/manuel-antonio.jpg";
import rentalCarImg from "../assets/images/rental-car.png";
import privateTransfersImg from "../assets/images/private-transfers.jpeg";
import groupTourImg from "../assets/images/group-tour.jpeg";
import xtrailImg from "../assets/images/xtrail-nissan.png";
import toyotaRushImg from "../assets/images/toyota-rush.png";
import stariaVanImg from "../assets/images/staria-van.png";

export const siteConfig = {
  name: "Viktours Costa Rica",
  shortName: "Viktours",
  tagline: "Pura Vida Costa Rica · 100% Authentic",
  title: "Viktours Costa Rica | One-Day Tours, Rent a Car & Transfers",
  description:
    "Viktours — your Costa Rica travel agency. One-day tours to Arenal, Monteverde, Manuel Antonio, Poás, Tortuguero, Río Celeste and more. 4x4 rent a car from $57 and private transfers from $97. Also operating in Nicaragua and Guatemala.",
  url: "https://viktours.tours",
};

export const booking = {
  whatsapp: {
    number: "50689537777",
    defaultMessage: "Hi Viktours! I'd like more information about your tours, rent a car and transfers.",
  },
  googleCalendar: { enabled: false, calendarId: "primary" },
};

export const navigation = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#experiences" },
  { label: "Day Tours", href: "#tours" },
  { label: "Rent a Car", href: "#rent" },
  { label: "Transfers", href: "#transfers" },
  { label: "About", href: "#about" },
];

export const hero = {
  badge: "Pura Vida · 10+ Years · 4,000+ Travelers",
  headline: {
    line1: "Know the True",
    accent: "Pura Vida",
    line2: "Experience",
  },
  description:
    "Your Costa Rica travel agency for one-day tours, 4x4 rent a car and airport transfers. Based in Guanacaste · Liberia Airport (LIR), operating across Costa Rica, Nicaragua and Guatemala.",
  cta: { primary: "Plan My Trip", secondary: "See Services" },
  image: heroImg.src,
  stats: [
    { value: "4,000+", label: "Travelers" },
    { value: "10+", label: "Years Guiding" },
    { value: "8", label: "Day Tours" },
    { value: "3", label: "Countries" },
  ],
};

// ── One-Day Tours across Costa Rica ──
export const tours = {
  headline: "One-Day Tours Across Costa Rica",
  subtitle: "Pick a destination — we handle the transport, the entrance, the guide and the memories.",
  includes: [
    "Point-to-point transfer",
    "National park / attraction entrance",
    "Insurance policy",
    "Bottled water",
    "Certified local guide",
    "Optional meal add-on",
  ],
  items: [
    {
      index: "01",
      title: "Arenal Volcano · La Fortuna",
      subtitle: "La Fortuna · Alajuela",
      category: "Volcano",
      duration: "Full Day",
      groupSize: "Small groups",
      price: 95,
      description: "Hike the legendary Arenal Volcano trails, soak in natural hot springs and enjoy panoramic views of Costa Rica's most iconic volcano.",
      highlights: ["1968 Lava Trail guided hike", "Natural hot springs", "Traditional Costa Rican meal (optional)", "Hotel pickup included"],
      image: volcanoImg.src,
    },
    {
      index: "02",
      title: "Monteverde Cloud Forest",
      subtitle: "Cloud Forest Reserve",
      category: "Nature",
      duration: "Full Day",
      groupSize: "Small groups",
      price: 95,
      description: "Walk above the rainforest canopy on suspended bridges. Spot toucans, sloths and monkeys with a certified naturalist.",
      highlights: ["Hanging bridges experience", "Wildlife viewing", "Naturalist guide", "Reserve entrance"],
      image: monteverdeImg.src,
    },
    {
      index: "03",
      title: "Manuel Antonio National Park",
      subtitle: "Central Pacific",
      category: "Wildlife",
      duration: "Full Day",
      groupSize: "Small groups",
      price: 115,
      description: "White-sand beaches framed by jungle. Sloths, monkeys and toucans roam free in one of Costa Rica's most loved parks.",
      highlights: ["Guided park walk", "Beach time", "Wildlife spotting", "Park entrance"],
      image: manuelAntonioImg.src,
    },
    {
      index: "04",
      title: "Poás Volcano",
      subtitle: "Central Valley",
      category: "Volcano",
      duration: "Full Day",
      groupSize: "Small groups",
      price: 85,
      description: "One of the world's most accessible active craters. Walk to the main viewpoint and discover the lush cloud forest around it.",
      highlights: ["Active crater viewpoint", "Cloud forest trails", "Coffee country stop", "Park entrance"],
      image: miravallesImg.src,
    },
    {
      index: "05",
      title: "Tortuguero Canals",
      subtitle: "Caribbean Coast",
      category: "Wildlife",
      duration: "Full Day",
      groupSize: "Small groups",
      price: 145,
      description: "Boat through the jungle canals of Tortuguero — sometimes called 'Costa Rica's Amazon' — and meet the wildlife of the Caribbean.",
      highlights: ["Boat ride through canals", "Wildlife spotting", "Local community visit", "Optional lunch"],
      image: tortugueroImg.src,
    },
    {
      index: "06",
      title: "Río Celeste",
      subtitle: "Tenorio National Park",
      category: "Rainforest",
      duration: "Full Day",
      groupSize: "Small groups",
      price: 125,
      description: "Hike through the rainforest to reach the mystical turquoise waterfall — one of the most photographed spots in Costa Rica.",
      highlights: ["Rainforest hike", "The famous blue waterfall", "Blue lagoon viewpoint", "Park entrance"],
      image: rioCelesteImg.src,
    },
    {
      index: "07",
      title: "Irazú Volcano",
      subtitle: "Cartago Province",
      category: "Volcano",
      duration: "Full Day",
      groupSize: "Small groups",
      price: 85,
      description: "Stand on top of Costa Rica's highest active volcano. Panoramic craters, moon-like landscapes and views of two oceans on clear days.",
      highlights: ["Summit crater views", "High-altitude landscapes", "Cartago valley stop", "Park entrance"],
      image: irazuImg.src,
    },
    {
      index: "08",
      title: "Bajos del Toro Waterfalls",
      subtitle: "Poza Celeste · Alajuela",
      category: "Rainforest",
      duration: "Full Day",
      groupSize: "Small groups",
      price: 110,
      description: "Off-the-beaten-path hike to the stunning Bajos del Toro waterfall and its turquoise 'Poza Celeste' pool. A true hidden gem.",
      highlights: ["Waterfall guided hike", "Poza Celeste pool", "Cloud forest scenery", "Quiet, low-crowd experience"],
      image: bajosDelToroImg.src,
    },
  ],
  group: {
    title: "Weekly Family & Group Tours",
    description:
      "Multi-day itineraries for families and groups of families — we adapt the program, the pace and the stops. Stay at the hotel of your choice; we coordinate transport, guides, meals and activities end-to-end.",
    features: [
      "Family-friendly itineraries",
      "Hotel of your choice",
      "Private transport throughout",
      "Certified local guides",
      "Meals included (per plan)",
      "Flexible dates, weekly departures",
    ],
  },
};

// ── Top Destinations across Costa Rica ──
export const beaches = {
  headline: "Discover Every Corner of Costa Rica",
  subtitle: "From misty rainforests to turquoise coasts — we take you to the places that make Costa Rica unforgettable.",
  items: [
    {
      name: "La Fortuna & Arenal",
      description: "Home of the iconic Arenal Volcano, hot springs and lush rainforest trails.",
      image: volcanoImg.src,
      tag: "Most Popular",
    },
    {
      name: "Monteverde",
      description: "Misty cloud forest reserve with hanging bridges and unforgettable wildlife.",
      image: monteverdeImg.src,
      tag: "Cloud Forest",
    },
    {
      name: "Manuel Antonio",
      description: "White-sand beaches and a national park where sloths and monkeys roam free.",
      image: manuelAntonioImg.src,
      tag: "Wildlife",
    },
    {
      name: "Playa Hermosa · Guanacaste",
      description: "Golden-sand beach with calm waters — perfect for relaxing days by the Pacific.",
      image: tamarindoImg.src,
      tag: "Beach Paradise",
    },
    {
      name: "Tortuguero",
      description: "Jungle canals and turtle beaches on the wild Caribbean coast.",
      image: tortugueroBeachImg.src,
      tag: "Caribbean",
    },
  ],
};

// ── Our Services: Rent-a-Car, Transfers, Day Tours, Group Tours ──
export const experiences = {
  headline: "Our Services",
  subtitle: "Everything you need for the perfect Costa Rica adventure — under one trusted name.",
  items: [
    {
      title: "Rent a Car",
      duration: "4x4 SUVs & Vans · Full insurance",
      price: 57,
      unit: "day",
      description: "Nissan X-Trail 5 & 7 pax, Toyota Rush 7 pax and 8-12 pax vans. Kid seats available. Free additional driver, 24/7 roadside assistance.",
      image: rentalCarImg.src,
      icon: "car",
    },
    {
      title: "Private Transfers",
      duration: "Door-to-door · Nationwide",
      price: 97,
      unit: "trip",
      description: "Safe, comfortable transport across Costa Rica. Airport pickup and drop-off from SJO or LIR to Fortuna, Manuel Antonio, Guanacaste and more.",
      image: privateTransfersImg.src,
      icon: "transfer",
    },
    {
      title: "Day & Group Tours",
      duration: "8 one-day tours · Weekly group departures",
      price: 85,
      unit: "person",
      description: "From Arenal and Monteverde to Tortuguero and Bajos del Toro — plus multi-day family packages with hotel of your choice.",
      image: groupTourImg.src,
      icon: "group",
    },
  ],
};

// ── Airport Transfers Price List ──
export const transfers = {
  headline: "Your Journey Starts at the Airport",
  subtitle: "Private door-to-door transfers from San José (SJO) and Liberia (LIR) to every corner of Costa Rica.",
  note: "Make more connections and receive discounts — the more you travel, the more you save!",
  routes: [
    { from: "SJO", to: "La Fortuna", price: 127 },
    { from: "SJO", to: "Puerto Viejo", price: 197 },
    { from: "SJO", to: "Manuel Antonio", price: 157 },
    { from: "SJO", to: "Uvita & Guanacaste", price: 197 },
    { from: "SJO", to: "Nosara", price: 237 },
    { from: "SJO", to: "Monteverde", price: 167 },
  ],
};

// ── Rent a Car ──
export const rentACar = {
  headline: "Rent a Car · 4x4 SUVs & Vans",
  subtitle: "All-terrain vehicles ready for every Costa Rica road. Full insurance, 24/7 roadside assistance and no hidden fees.",
  seasons: {
    low: { label: "Low season", months: "May – November" },
    high: { label: "High season", months: "December – April" },
  },
  vehicles: [
    {
      name: "Nissan X-Trail",
      type: "SUV 4x4 · 5 passengers",
      image: xtrailImg.src,
      low: 57,
      high: 87,
      deposit: 200,
      features: ["5 passengers", "Automatic", "A/C", "Full insurance"],
    },
    {
      name: "Nissan X-Trail / Toyota Rush",
      type: "SUV 4x4 · 7 passengers",
      image: toyotaRushImg.src,
      low: 70,
      high: 97,
      deposit: 200,
      features: ["7 passengers", "Automatic", "Luggage space", "Full insurance"],
    },
    {
      name: "Toyota Hiace / Staria Van",
      type: "Van · 8 to 12 passengers",
      image: stariaVanImg.src,
      low: 0,
      high: 0,
      deposit: 400,
      features: ["8 – 12 passengers", "Ideal for groups", "Airport delivery", "Full insurance"],
      priceOnRequest: true,
    },
  ],
  extras: [
    { label: "Child car seat", price: 7, unit: "day" },
    { label: "Additional driver", price: 0, unit: "free" },
  ],
  payment: {
    headline: "Easy & transparent booking",
    items: [
      "50% of the contract paid at reservation via secure payment link",
      "Security deposit: $200 for SUVs, $400 for vans",
      "Remaining balance paid at vehicle delivery",
      "Free cancellation policy — ask for details",
    ],
  },
  includes: [
    "Full-risk insurance (third parties & occupants)",
    "24/7 roadside assistance",
    "Free additional driver",
    "No hidden taxes or fees",
    "Airport delivery (SJO or LIR)",
    "Kid seats available from $7 / day",
  ],
};

// ── International: Nicaragua & Guatemala ──
export const international = {
  headline: "Beyond Costa Rica",
  eyebrow: "Latin America",
  subtitle:
    "We also operate across Latin America — insured vehicles, hotels, private transfers and meals (flights not included). Pick up a 4x4 in Nicaragua or Guatemala and continue your adventure.",
  locations: [
    {
      country: "Nicaragua",
      flag: "🇳🇮",
      pickups: ["Peñas Blancas (border with Costa Rica)", "Managua International Airport"],
      image: nicaraguaImg.src,
    },
    {
      country: "Guatemala",
      flag: "🇬🇹",
      pickups: ["Guatemala City · La Aurora Airport", "Petén · Mundo Maya Airport"],
      image: guatemalaImg.src,
    },
  ],
  offerings: [
    "Multi-country tour packages",
    "Insured 4x4 vehicle rental",
    "Hotels + private transfers",
    "Meals per itinerary (flights not included)",
  ],
};

// ── About ──
export const about = {
  headline: "Discover the Paradise of Costa Rica, Worry-Free",
  paragraphs: [
    "Viktours is a Costa Rican travel agency based in Guanacaste, at Liberia International Airport (LIR). For more than 10 years we have shown travelers the real Pura Vida — the hidden waterfalls, quiet beaches and authentic moments you won't find in a brochure.",
    "We take care of everything: customized itineraries, rent a car with full insurance, safe private transfers and expert local guides. Over 4,000 travelers across Costa Rica, Nicaragua and Guatemala have trusted us to turn their trip into a story worth telling.",
  ],
  stats: [
    { value: "4,000+", label: "Happy Travelers" },
    { value: "10+", label: "Years Guiding" },
    { value: "3", label: "Countries" },
    { value: "24/7", label: "Support" },
  ],
  image: aboutImg.src,
};

// ── Testimonials ──
export const testimonials = [
  {
    name: "Jennifer M.",
    location: "Austin, TX",
    tour: "Arenal + Río Celeste Day Tours",
    review:
      "The most incredible trip of our lives! Viktours took care of everything — transfers, guides, entrances. We saw Arenal, Río Celeste and ended on the beach. Absolutely unforgettable.",
    rating: 5,
  },
  {
    name: "David & Sarah K.",
    location: "New York, NY",
    tour: "Rent a Car + Private Transfers",
    review:
      "We rented a 4x4 through Viktours and it was flawless. Great price, full insurance, and the team was responsive the whole trip. Best travel agency in Costa Rica.",
    rating: 5,
  },
  {
    name: "Michael R.",
    location: "Chicago, IL",
    tour: "LIR → Manuel Antonio Transfer",
    review:
      "On-time pickup at Liberia, super comfortable van and a friendly driver who gave us travel tips. Exactly what you want after a long flight. Highly recommend Viktours.",
    rating: 5,
  },
];

// ── Why Us ──
export const whyUs = {
  headline: "Why Travel with Viktours",
  items: [
    { title: "Local Experts", description: "10+ years showing travelers the real Costa Rica — Pura Vida, not tourist traps.", icon: "guide" },
    { title: "Eco-Friendly", description: "All-terrain vehicles, eco-conscious driving and certified operators. Good for you, good for Costa Rica.", icon: "leaf" },
    { title: "Customized Itineraries", description: "Every traveler is unique — we tailor every detail to your pace, style and budget.", icon: "check" },
    { title: "Safe & Insured", description: "Full-risk insurance, 24/7 roadside assistance and no hidden fees on every service.", icon: "shield" },
  ],
};

// ── CTA ──
export const ctaSection = {
  headline: "Let Us Take Care of Everything",
  description:
    "One-day tours, rent a car, private transfers and family packages — pick a date, we handle the rest. Free quote, flexible cancellation.",
  cta: "Plan My Trip",
  secondary: "Or WhatsApp us at +506 8953-7777",
};

// ── Footer ──
export const footer = {
  tours: ["Arenal Volcano", "Monteverde", "Manuel Antonio", "Río Celeste", "Tortuguero", "Poás / Irazú", "Bajos del Toro"],
  beaches: ["Guanacaste", "Fortuna", "Manuel Antonio", "Monteverde", "Tortuguero", "Nicaragua", "Guatemala"],
  experiences: ["Rent a Car", "Airport Transfers", "Day Tours", "Family Group Tours", "Latin America"],
  contact: {
    address: "Guanacaste · Liberia International Airport (LIR)\nCosta Rica",
    phone: "+506 8953-7777",
    email: "info@viktours.co",
  },
  hours: "Open Daily: 7:00 AM – 9:00 PM",
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/viktourscr?igsh=YXY4eXhycjRidDE3&utm_source=qr" },
    { label: "Facebook", href: "https://www.facebook.com/share/1Crz34hdrt/?mibextid=wwXIfr" },
    { label: "TikTok", href: "https://www.tiktok.com/@viktours?_r=1&_t=ZS-95cJ702CBzZ" },
    { label: "WhatsApp", href: "https://wa.me/50689537777" },
    { label: "Email", href: "mailto:info@viktours.co" },
  ],
};
