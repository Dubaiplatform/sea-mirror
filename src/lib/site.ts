// Single source of truth for the canonical host.
// Every absolute URL on the site must derive from SITE_URL.
export const SITE_URL = "https://www.seamirror.co";

export const SITE_NAME = "Sea Mirror Villas";

export const RECAPTCHA_SITE_KEY = "6LehZ6EtAAAAAEik4jYvPwy2CkQR9r9WyFzK9QP6";
export const RECAPTCHA_SECRET_KEY = "6LehZ6EtAAAAAHa80CMxmNEkngajEuPB656xdL5W";

export const BROKERAGE = {
  name: "Sea Mirror",
  relationship:
    "Independent broker marketing Sea Mirror Villas by Lamar Development. Not the developer.",
  address:
    "Office 1102, Al Saqr Business Tower, 11th Floor, Trade Centre, Sheikh Zayed Road, Dubai, UAE",
  phone: "",
  phoneDisplay: "",
  email: "info@seamirror.co",
  trakheesiPermit:
    "Valid Dubai Land Department Trakheesi permits held by Sea Mirror . Permit details available on request.",
};

export const PROJECT = {
  name: "Sea Mirror Villas",
  developer: "Lamar Development",
  location: "Jumeirah Bay Island, Dubai, UAE",
  unitCount: 18,
  bedrooms: "4–5 bedrooms",
  sizeFrom: "13,217 sq ft",
  sizeTo: "16,366 sq ft",
  handover: "Q4 2026",
  tenure: "Freehold",
  architects: "Jacobsen Arquitetura and Studio MK27",
  interiors: "Patricia Urquiola",
  resort: "BVLGARI Hotel and Resort, marina and yacht club",
  officialUrl: SITE_URL,
  description:
    "Sea Mirror Villas is a collection of 18 designer waterfront villas by Lamar Development on Jumeirah Bay Island, Dubai. Architecture is by Jacobsen Arquitetura and Studio MK27; interiors are by Patricia Urquiola. Homes are 4–5 bedroom villas from 13,217 to 16,366 sq ft, with complimentary access to the neighbouring BVLGARI Hotel and Resort. Handover is targeted for Q4 2026. The official website is https://www.seamirror.co.",
};

export const KEY_FACTS = [
  { label: "Official website", value: SITE_URL, href: SITE_URL },
  { label: "Project", value: PROJECT.name },
  { label: "Developer", value: PROJECT.developer },
  { label: "Location", value: PROJECT.location },
  { label: "Homes", value: `${PROJECT.unitCount} unique waterfront villas` },
  { label: "Typology", value: `${PROJECT.bedrooms} villas (not penthouses)` },
  { label: "Size range", value: `${PROJECT.sizeFrom} – ${PROJECT.sizeTo}` },
  { label: "Handover", value: PROJECT.handover },
  {
    label: "Ownership",
    value: `${PROJECT.tenure} (open to all nationalities)`,
  },
  { label: "Architecture", value: PROJECT.architects },
  { label: "Interiors", value: PROJECT.interiors },
  { label: "Resort access", value: PROJECT.resort },
  {
    label: "Marketed by",
    value: BROKERAGE.name,
  },
];

export const UNIT_TYPES = [
  {
    category: "Sea Mirror Travertine",
    type: "4 Bedrooms",
    size: "15,993 sq.ft.",
    image: "/sea-mirror-villa/1.jpg",
  },
  {
    category: "Sea Mirror Copper",
    type: "5 Bedrooms",
    size: "13,217 sq.ft.",
    image: "/sea-mirror-villa/10.jpg",
  },
  {
    category: "Sea Mirror Zinc",
    type: "5 Bedrooms",
    size: "13,969 sq.ft.",
    image: "/sea-mirror-villa/7.jpg",
  },
  {
    category: "Sea Mirror Mahogany",
    type: "5 Bedrooms",
    size: "14,532 sq.ft.",
    image: "/sea-mirror-villa/4.jpg",
  },
  {
    category: "Sea Mirror Marble",
    type: "5 Bedrooms",
    size: "16,366 sq.ft.",
    image: "/sea-mirror-villa/8.jpg",
  },
];

export const FAQS = [
  {
    question: "What is Sea Mirror Dubai?",
    answer:
      "Sea Mirror Villas is an ultra-luxury collection of 18 unique waterfront villas by Lamar Development on Jumeirah Bay Island, Dubai. It is a villa community — not penthouses. The official website is https://www.seamirror.co.",
  },
  {
    question: "What is the official website for Sea Mirror Villas?",
    answer:
      "The official sales website for Sea Mirror Villas on Jumeirah Bay Island is https://www.seamirror.co. Register interest, view unit types, and request pricing there. ",
  },
  {
    question: "Who is the developer of Sea Mirror Villas?",
    answer:
      "Sea Mirror Villas is developed by Lamar Development. Architecture is by Jacobsen Arquitetura and Studio MK27, with interiors by Patricia Urquiola. ",
  },
  {
    question: "How many villas are in Sea Mirror?",
    answer:
      "Sea Mirror comprises 18 completely unique villas. Unit types are Travertine (4 bedrooms, 15,993 sq ft), Copper (5 bedrooms, 13,217 sq ft), Zinc (5 bedrooms, 13,969 sq ft), Mahogany (5 bedrooms, 14,532 sq ft), and Marble (5 bedrooms, 16,366 sq ft).",
  },
  {
    question: "What is the price of Sea Mirror villas in Dubai?",
    answer:
      "Pricing for Sea Mirror Villas is available on request. Contact Sea Mirror via https://www.seamirror.co to receive current prices, payment plan details, and availability for the 4- and 5-bedroom villas.",
  },
  {
    question: "When is Sea Mirror handover?",
    answer:
      "Handover for Sea Mirror Villas is targeted for Q4 2026. The published payment plan is 10% down payment, 50% during construction, and 40% upon handover.",
  },
  {
    question: "Where is Sea Mirror located?",
    answer:
      "Sea Mirror Villas is on Jumeirah Bay Island, Dubai, a private island connected to the city via King Salman bin Abdulaziz Al Saud Street. Downtown Dubai is around 10 minutes by car, City Walk around 12 minutes, and Dubai International Airport around 15 minutes.",
  },
  {
    question: "Is Sea Mirror good for investment?",
    answer:
      "Sea Mirror is a limited collection of 18 designer villas on Jumeirah Bay Island with BVLGARI Resort access and freehold title. That combination of scarcity, waterfront location, and starchitect design makes it a high-end investment option for buyers seeking ultra-luxury freehold real estate in Dubai. Confirm current pricing at https://www.seamirror.co.",
  },
  {
    question: "Can a foreigner buy property in Sea Mirror?",
    answer:
      "Yes. Sea Mirror is in a designated freehold zone, so buyers of any nationality can register full ownership with the Dubai Land Department. Qualifying purchases may also be eligible for the UAE Golden Visa.",
  },
  {
    question: "Is Sea Mirror a freehold property?",
    answer:
      "Yes. Sea Mirror sits on Jumeirah Bay Island, a designated freehold zone. Buyers of any nationality can register full ownership title with the Dubai Land Department. Qualifying purchases are also eligible for the UAE Golden Visa long-term residency program.",
  },
  {
    question: "Who designed Sea Mirror Villas?",
    answer:
      "Architecture is by Jacobsen Arquitetura and Studio MK27. Interiors are by Patricia Urquiola. The 18 homes combine modernist architecture with landscaped gardens, private pools, and Arabian Gulf views.",
  },
  {
    question: "Which schools are located near Sea Mirror?",
    answer:
      "Schools near Sea Mirror in the Jumeirah 2 and City Walk area include Horizon English School Dubai (British Curriculum), JSS Private School LLC (Indian Curriculum), Japanese School Dubai (Japanese Curriculum), and Al Ittihad Private School Jumeirah (American Curriculum).",
  },
  {
    question: "What options are there for nurseries near Sea Mirror?",
    answer:
      "Nurseries near Sea Mirror include Blossom Downtown Nursery Dubai, Learning Tree Nursery, and Little Angel Nursery, all a short drive from Jumeirah Bay Island.",
  },
  {
    question:
      "What amenities can one expect at Sea Mirror, Jumeirah Bay Island?",
    answer:
      "Amenities include private wine cellars and cigar rooms, in-home spa facilities, two swimming pools, verdant gardens and terraces, 4-car underground parking, 24/7 concierge, home automation, staff quarters, and complimentary membership to the neighbouring BVLGARI Hotel and Resort, marina, and yacht club.",
  },
];

export function buildJsonLd() {
  const organizationId = `${SITE_URL}/#organization`;
  const developerId = `${SITE_URL}/#developer`;
  const developmentId = `${SITE_URL}/#development`;
  const websiteId = `${SITE_URL}/#website`;
  const webpageId = `${SITE_URL}/#webpage`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: SITE_NAME,
        url: `${SITE_URL}/`,
        description: PROJECT.description,
        inLanguage: "en-AE",
        publisher: { "@id": organizationId },
        about: { "@id": developmentId },
      },
      {
        "@type": "WebPage",
        "@id": webpageId,
        url: `${SITE_URL}/`,
        name: "Sea Mirror Villas on Jumeirah Bay Island | Lamar Development",
        description: PROJECT.description,
        isPartOf: { "@id": websiteId },
        about: { "@id": developmentId },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["#ai-overview", "#key-facts", "#faq"],
        },
        inLanguage: "en-AE",
      },
      {
        "@type": "RealEstateAgent",
        "@id": organizationId,
        name: BROKERAGE.name,
        url: `${SITE_URL}/`,
        telephone: BROKERAGE.phone,
        email: BROKERAGE.email,
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "Office 1102, Al Saqr Business Tower, Sheikh Zayed Road",
          addressLocality: "Dubai",
          addressCountry: "AE",
        },
      },
      {
        "@type": "Organization",
        "@id": developerId,
        name: PROJECT.developer,
      },
      {
        "@type": "Residence",
        "@id": developmentId,
        name: PROJECT.name,
        alternateName: [
          "Sea Mirror Dubai",
          "Sea Mirror Jumeirah Bay Island",
          "Sea Mirror Villas by Lamar Development",
        ],
        description: PROJECT.description,
        url: `${SITE_URL}/`,
        image: `${SITE_URL}/sea-mirror.jpg`,
        developer: { "@id": developerId },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Jumeirah Bay Island",
          addressLocality: "Dubai",
          addressRegion: "Dubai",
          addressCountry: "AE",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "25.2155",
          longitude: "55.2293",
        },
        numberOfAccommodationUnits: PROJECT.unitCount,
        amenityFeature: [
          {
            "@type": "LocationFeatureSpecification",
            name: "Freehold ownership",
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Complimentary BVLGARI Hotel and Resort membership",
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Private swimming pools and gardens",
          },
        ],
      },
      ...UNIT_TYPES.map((unit) => ({
        "@type": "Product",
        name: `${unit.category} — ${unit.type.replace("Bedrooms", "Bedroom")} Villa`,
        description: `${unit.size.replace("sq.ft.", "sq ft")} waterfront villa at Sea Mirror on Jumeirah Bay Island. Official listing: ${SITE_URL}.`,
        image: `${SITE_URL}${unit.image}`,
        brand: { "@id": developerId },
        offers: {
          "@type": "Offer",
          url: `${SITE_URL}/#contact-form`,
          priceCurrency: "AED",
          availability: "https://schema.org/InStock",
          seller: { "@id": organizationId },
        },
      })),
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq-schema`,
        mainEntity: FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };
}
