import type { SiteConfig } from "@/lib/types";

const IG = "https://www.instagram.com/p/";

export const site: SiteConfig = {
  name: "Finger Food By Dela",
  tagline: "Elegant finger food and event tables for birthdays, weddings, and corporate events in North York, Toronto.",
  category: "Event catering",
  schemaType: "FoodEstablishment",
  area: "North York, Toronto, ON",
  siteUrl: "https://finger-food-by-dela.vercel.app",

  theme: {
    preset: "catering-events",
    colors: { accent: "#6d5439" },
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Event catering in North York, Toronto",
    headline: "Beautiful finger food for every celebration",
    subhead: "Thoughtfully prepared, beautifully presented, and made with love for birthdays, weddings, and corporate events. Send a DM with your date and guest count to get started.",
    images: [
      { src: "/images/post-10-2.jpg", alt: "Candlelit finger food table by Finger Food By Dela" },
      { src: "/images/post-12-3.jpg", alt: "Outdoor event table with lavender florals" },
      { src: "/images/post-6.jpg", alt: "Dela styling an event table" },
    ],
    secondaryCta: { label: "See our tables", href: "#gallery" },
  },

  highlights: ["20+ years of experience", "All events and birthdays", "Corporate packages", "Orders by Instagram DM"],

  about: {
    title: "Made with passion, care, and elegance",
    body: [
      "Finger Food By Dela is led by Delaram Fatemian, who brings more than 20 years of experience to every table. From intimate birthdays to weddings, engagements, and corporate gatherings, each spread is thoughtfully prepared and beautifully presented.",
      "Because every special gathering deserves a table to remember, every detail is made with love. Thank you for letting us be part of your special moments.",
    ],
    image: { src: "/images/post-3.jpg", alt: "Finger Food By Dela event table" },
  },

  gallery: {
    title: "Recent event tables",
    items: [
      { src: "/images/post-10-2.jpg", width: 1080, height: 1440, alt: "Candlelit grazing table", caption: "A beautiful evening table", href: IG + "DeGY8qyHIae/" },
      { src: "/images/post-11.jpg", width: 1080, height: 784, alt: "Full finger food spread by the window", caption: "Delicious bites, elegant details", href: IG + "DeGXpePtiDh/" },
      { src: "/images/post-12-3.jpg", width: 1080, height: 1440, alt: "Outdoor wedding food table", caption: "Wedding and engagement tables", href: IG + "Dd4-Vr9ERZc/" },
      { src: "/images/post-10-3.jpg", width: 1080, height: 1440, alt: "Candles and platters", caption: "Thoughtfully prepared", href: IG + "DeGY8qyHIae/" },
      { src: "/images/post-12-4.jpg", width: 1080, height: 1440, alt: "Bite sized desserts and salad", caption: "Elegant bites", href: IG + "Dd4-Vr9ERZc/" },
      { src: "/images/post-3.jpg", width: 1080, height: 1440, alt: "Event table", caption: "Making every occasion unforgettable", href: IG + "DfEEF4SBYJA/" },
      { src: "/images/post-10-4.jpg", width: 1080, height: 1440, alt: "Platters with florals", caption: "Made with love", href: IG + "DeGY8qyHIae/" },
      { src: "/images/post-7.jpg", width: 1080, height: 1226, alt: "Luxury event table", caption: "Luxury events", href: IG + "DeaifeJESQl/" },
      { src: "/images/post-9.jpg", width: 1080, height: 858, alt: "Celebration spread", caption: "A special day", href: IG + "DeV0unqh-Hf/" },
      { src: "/images/post-12.jpg", width: 1080, height: 1440, alt: "Lavender floral display", caption: "Outdoor celebrations", href: IG + "Dd4-Vr9ERZc/" },
    ],
  },

  instagram: {
    handle: "fingerfoodsbydela",
    embeds: [],
  },

  order: {
    title: "Plan your event in a quick DM",
    intro: "Orders and event inquiries are taken through Instagram. Tap the button to copy a starter message, then paste it into the chat.",
    dmMessage: "Hi Dela! I would love finger food for my event.\nOccasion:\nEvent date:\nNumber of guests (servings):\nFlavours or dishes I love:\nTable design idea:\nPickup or delivery:",
    links: [],
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I order?", a: "Send us a DM on Instagram with your event date, guest count, and ideas. We will reply with details and a quote in the chat." },
    { q: "What events do you cater?", a: "All events: birthdays, weddings, engagements, and corporate packages." },
    { q: "Where are you located?", a: "We are based in North York, Toronto, Ontario." },
  ],

  contact: {
    area: "North York, Toronto, Ontario",
    socials: [],
  },

  seo: {
    title: "Finger Food By Dela | Event catering in North York, Toronto",
    description: "Elegant finger food and event tables in North York, Toronto for birthdays, weddings, and corporate events. 20+ years of experience. Order by Instagram DM.",
    keywords: ["finger food catering Toronto", "event catering North York", "catering Toronto", "corporate catering Toronto"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
