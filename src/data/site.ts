import heroImg from "../assets/images/hero.jpg";
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

export const siteConfig = {
  name: "Viktours Costa Rica",
  shortName: "Viktours",
  tagline: "Pura Vida Costa Rica · 100% Authentic",
  title: "Viktours Costa Rica | Rent a Car, Transfers & Group Tours",
  description:
    "Know the true Pura Vida experience with Viktours. Rent a car from $57, private transfers across Costa Rica from $97 and 8-day group tours to Fortuna, Monteverde and Playa Hermosa Guanacaste.",
  url: "https://viktourscr.com",
};

export const booking = {
  whatsapp: {
    number: "50689537777",
    defaultMessage: "Hi Viktours! I'd like more information about your tours, transfers and rent a car.",
  },
  googleCalendar: { enabled: false, calendarId: "primary" },
};

export const navigation = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#experiences" },
  { label: "Tours", href: "#tours" },
  { label: "Transfers", href: "#transfers" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  badge: "Pura Vida · Eco-Friendly · Locally Owned",
  headline: {
    line1: "Know the True",
    accent: "Pura Vida",
    line2: "Experience",
  },
  description:
    "Your Costa Rica travel agency for rent a car, airport transfers and unforgettable group tours across Fortuna, Monteverde and the Pacific coast — 100% authentic, worry-free.",
  cta: { primary: "Plan Your Trip", secondary: "See Services" },
  image: heroImg.src,
  stats: [
    { value: "$57+", label: "Rent a Car" },
    { value: "$97+", label: "Transfers" },
    { value: "$2,200", label: "8-Day Tours" },
    { value: "100%", label: "Pura Vida" },
  ],
};

// ── Signature Group Tours & Packages ──
export const tours = {
  headline: "Signature Group Tours",
  subtitle: "Multi-day adventures across Costa Rica — transport, guides and unforgettable stops included.",
  items: [
    {
      index: "01",
      title: "8-Day Pura Vida Package",
      subtitle: "Fortuna · Monteverde · Playa Hermosa",
      category: "Group Tour",
      duration: "8 Days · 7 Nights",
      groupSize: "Small groups",
      price: 2200,
      description: "Our signature 8-day group tour covering Costa Rica's most iconic regions: Arenal Volcano in La Fortuna, the misty cloud forest of Monteverde and the golden beaches of Playa Hermosa in Guanacaste.",
      highlights: ["Arenal Volcano & hot springs", "Monteverde cloud forest & hanging bridges", "Playa Hermosa beach days", "Private transport throughout"],
      image: volcanoImg.src,
    },
    {
      index: "02",
      title: "Arenal Volcano Day Tour",
      subtitle: "La Fortuna · Alajuela",
      category: "Nature",
      duration: "Full Day · 8-10 hrs",
      groupSize: "Max 12 people",
      price: 95,
      description: "Hike the legendary Arenal Volcano trails, soak in natural hot springs and enjoy panoramic views of Costa Rica's most iconic volcano. Hotel pickup included.",
      highlights: ["1968 Lava Trail guided hike", "Natural hot springs soak", "Traditional Costa Rican lunch", "Hotel pickup in La Fortuna"],
      image: miravallesImg.src,
    },
    {
      index: "03",
      title: "Rio Celeste Adventure",
      subtitle: "Tenorio National Park",
      category: "Rainforest",
      duration: "Full Day · 9 hrs",
      groupSize: "Max 10 people",
      price: 125,
      description: "Discover the mystical turquoise river of Tenorio National Park. Hike through pristine rainforest to reach the iconic blue waterfall — one of the most photographed spots in Costa Rica.",
      highlights: ["Guided rainforest hike", "The famous blue waterfall", "Blue lagoon viewpoint", "Wildlife spotting (sloths, toucans)"],
      image: rioCelesteImg.src,
    },
    {
      index: "04",
      title: "Monteverde Cloud Forest",
      subtitle: "Cloud Forest Reserve",
      category: "Nature",
      duration: "Full Day · 8 hrs",
      groupSize: "Max 12 people",
      price: 85,
      description: "Walk above the rainforest canopy on suspended bridges. Spot toucans, sloths and monkeys in their natural habitat with a certified naturalist guide who knows every trail by heart.",
      highlights: ["6 hanging bridges experience", "Canopy-level wildlife viewing", "Professional naturalist guide", "Best photography stops"],
      image: monteverdeImg.src,
    },
  ],
};

// ── Top Destinations across Costa Rica ──
export const beaches = {
  headline: "Discover Every Corner of Costa Rica",
  subtitle: "From misty rainforests to turquoise coasts — we take you to the places that make Costa Rica unforgettable.",
  items: [
    {
      name: "La Fortuna & Arenal",
      description: "Home of the iconic Arenal Volcano, hot springs and lush rainforest trails.",
      image: "https://images.unsplash.com/photo-1580739194420-ab2e3c60e5e2?auto=format&fit=crop&w=1200&q=80",
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
      image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=800&q=80",
      tag: "Wildlife",
    },
    {
      name: "Playa Hermosa · Guanacaste",
      description: "Golden-sand beach with calm waters — perfect for relaxing days by the Pacific.",
      image: tamarindoImg.src,
      tag: "Beach Paradise",
    },
    {
      name: "Puerto Viejo",
      description: "Caribbean vibes, reggae rhythm and pristine jungle beaches on the east coast.",
      image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80",
      tag: "Caribbean",
    },
  ],
};

// ── Our Services: Rent-a-Car, Transfers, Group Tours ──
export const experiences = {
  headline: "Our Services",
  subtitle: "Everything you need for the perfect Costa Rica adventure — under one trusted name.",
  items: [
    {
      title: "Rent a Car",
      duration: "All-terrain · Full insurance",
      price: 57,
      unit: "day",
      description: "Eco-friendly, economical vehicles ready for every road in Costa Rica. Daily shuttle and airport delivery available.",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
      icon: "car",
    },
    {
      title: "Private Transfers",
      duration: "Door-to-door · Nationwide",
      price: 97,
      unit: "trip",
      description: "Safe, comfortable transport across Costa Rica. Airport pickup and drop-off to Fortuna, Manuel Antonio, Guanacaste and more.",
      image: "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?auto=format&fit=crop&w=1200&q=80",
      icon: "transfer",
    },
    {
      title: "8-Day Group Tours",
      duration: "Fortuna · Monteverde · Playa Hermosa",
      price: 2200,
      unit: "person",
      description: "Multi-day adventures with expert local guides: volcanoes, cloud forests and beaches — 100% authentic Pura Vida.",
      image: catamaranImg.src,
      icon: "group",
    },
  ],
};

// ── Airport Transfers Price List ──
export const transfers = {
  headline: "Your Journey Starts at the Airport",
  subtitle: "Private door-to-door transfers from San José (SJO) to every corner of Costa Rica.",
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

// ── About ──
export const about = {
  headline: "Discover the Paradise of Costa Rica, Worry-Free",
  paragraphs: [
    "Viktours is a Costa Rican travel agency built on one promise: to show travelers the real Pura Vida — the hidden waterfalls, quiet beaches and authentic moments you won't find in a brochure.",
    "We take care of everything: customized itineraries, safe and comfortable transportation, rent a car with full insurance and expert local guides who turn every trip into an unforgettable story.",
  ],
  stats: [
    { value: "100%", label: "Pura Vida" },
    { value: "5,000+", label: "Happy Travelers" },
    { value: "Eco", label: "Friendly" },
    { value: "24/7", label: "Support" },
  ],
  image: aboutImg.src,
};

// ── Testimonials ──
export const testimonials = [
  {
    name: "Jennifer M.",
    location: "Austin, TX",
    tour: "8-Day Pura Vida Package",
    review: "The most incredible trip of our lives! Viktours took care of everything — transfers, guides, hotels. We saw Arenal, Monteverde and ended on the beach. Absolutely unforgettable.",
    rating: 5,
  },
  {
    name: "David & Sarah K.",
    location: "New York, NY",
    tour: "Rent a Car + Transfers",
    review: "We rented a 4x4 through Viktours and it was flawless. Great price, full insurance, and the team was responsive the whole trip. Best travel agency in Costa Rica.",
    rating: 5,
  },
  {
    name: "Michael R.",
    location: "Chicago, IL",
    tour: "SJO → Manuel Antonio Transfer",
    review: "On-time pickup, super comfortable van and a friendly driver who gave us travel tips. Exactly what you want after a long flight. Highly recommend Viktours.",
    rating: 5,
  },
];

// ── Why Us ──
export const whyUs = {
  headline: "Why Travel with Viktours",
  items: [
    { title: "Local Experts", description: "Meet local travelers, reach places and towns with 100% authentic Costa Ricans.", icon: "guide" },
    { title: "Eco-Friendly", description: "All-terrain vehicles, ecological with the environment, economical with full insurance.", icon: "leaf" },
    { title: "Customized Itineraries", description: "Every traveler is unique — we tailor every detail to your pace, style and budget.", icon: "check" },
    { title: "Safe & Comfortable", description: "Expert guides and trusted drivers who will make your experience unforgettable.", icon: "shield" },
  ],
};

// ── CTA ──
export const ctaSection = {
  headline: "Let Us Take Care of Everything",
  description: "Would you like to explore the most stunning corners of Costa Rica? Book your rent a car, transfer or tour today — free quote, flexible dates.",
  cta: "Plan My Trip",
  secondary: "Or WhatsApp us at +506 8953-7777",
};

// ── Footer ──
export const footer = {
  tours: ["8-Day Pura Vida", "Arenal Volcano", "Rio Celeste", "Monteverde"],
  beaches: ["La Fortuna", "Monteverde", "Manuel Antonio", "Playa Hermosa", "Puerto Viejo"],
  experiences: ["Rent a Car", "Airport Transfers", "Group Tours", "Customized Itineraries"],
  contact: {
    address: "San José · Costa Rica\nOperating nationwide",
    phone: "+506 8953-7777",
    email: "info@viktourscr.com",
  },
  hours: "Open Daily: 7:00 AM – 9:00 PM",
  socials: [
    { label: "Instagram", href: "https://instagram.com/viktourscr" },
    { label: "Facebook", href: "https://facebook.com/viktourscr" },
    { label: "WhatsApp", href: "https://wa.me/50689537777" },
    { label: "Email", href: "mailto:info@viktourscr.com" },
  ],
};
