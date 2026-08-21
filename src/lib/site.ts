// Single source of truth for the surviving canonical host (Issue 1 & 6).
// Every absolute URL on the site must derive from SITE_URL.
export const SITE_URL = "https://www.seamirror.co";

export const SITE_NAME = "Sea Mirror Villas";

// TODO: Replace the XXXX placeholders with the real RERA ORN and Trakheesi
// advertising permit numbers before deploying (Issue 2 — do not guess them).
export const BROKERAGE = {
  name: "Platform Real Estate",
  relationship: "Official Sales Partner of Lamar Development",
  address: "Al Saqr Business Tower, Office 1102, Sheikh Zayed Road, Dubai, UAE",
  phone: "+971581514623",
  phoneDisplay: "+971 58 151 4623",
  email: "info@seamirror.co",
  reraOrn: "XXXXX",
  trakheesiPermit: "XXXXXXX",
};

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
    question: "Where is Sea Mirror located?",
    answer:
      "Sea Mirror is located on Jumeirah Bay Island on the Dubai Water Canal and is connected to the entire city of Dubai through King Salman bin Abdulaziz Al Saud Street. Downtown Dubai is around 10 minutes away by car and Dubai International Airport around 15 minutes.",
  },
  {
    question: "Is Sea Mirror good for investment?",
    answer:
      "Given its prime location on the waterfront of the Dubai Water Canal, as well as the elevated lifestyle it promises, Sea Mirror constitutes a great investment for those who wish to add luxurious high-end real estate options to their portfolio. The collection is limited to 18 villas, with handover targeted for Q4 2026.",
  },
  {
    question: "Can a foreigner buy property in Sea Mirror?",
    answer:
      "Yes, foreigners can buy property in Sea Mirror. It is located in a freehold area, which means non-UAE nationals can own the property completely. This applies to both the villas and residences, making it a great option for international buyers who want to invest in Dubai.",
  },
  {
    question: "Is Sea Mirror a freehold property?",
    answer:
      "Yes. Sea Mirror sits on Jumeirah Bay Island, a designated freehold zone, so buyers of any nationality can register full ownership title with the Dubai Land Department. Qualifying purchases are also eligible for the UAE Golden Visa long-term residency program.",
  },
  {
    question: "Which schools are located near Sea Mirror?",
    answer:
      "There are several highly rated schools near Sea Mirror in the Jumeirah 2 and City Walk area. These include Horizon English School Dubai (British Curriculum), JSS Private School LLC (Indian Curriculum), Japanese School Dubai (Japanese Curriculum), and Al Ittihad Private School Jumeirah (American Curriculum).",
  },
  {
    question: "What options are there for nurseries near Sea Mirror?",
    answer:
      "Parents looking for nurseries near Sea Mirror can consider Blossom Downtown Nursery Dubai, Learning Tree Nursery, and Little Angel Nursery, all a short drive from Jumeirah Bay Island.",
  },
  {
    question:
      "What amenities can one expect at Sea Mirror, Jumeirah Bay Island?",
    answer:
      "Sea Mirror offers its residents a wide range of well-maintained amenities that include a balcony, a BBQ area, a private garage, a children's play area, a shopping mall, a swimming pool, a sports court, 24/7 security, and a gym, plus complimentary membership to the neighbouring BVLGARI Hotel and Resort.",
  },
];

// JSON-LD graph (Issue 10): brokerage, the development, one Product per unit
// type (Price on Request — Offer kept, price omitted) and the FAQ content.
export function buildJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "RealEstateAgent",
        "@id": `${SITE_URL}/#organization`,
        name: BROKERAGE.name,
        url: `${SITE_URL}/`,
        telephone: BROKERAGE.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "Al Saqr Business Tower, Office 1102, Sheikh Zayed Road",
          addressLocality: "Dubai",
          addressCountry: "AE",
        },
      },
      {
        "@type": "ApartmentComplex",
        "@id": `${SITE_URL}/#development`,
        name: "Sea Mirror Villas",
        description:
          "18 designer waterfront villas on Jumeirah Bay Island by Lamar Development, with architecture by Jacobsen Arquitetura and Studio MK27 and interiors by Patricia Urquiola.",
        url: `${SITE_URL}/`,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Jumeirah Bay Island, Dubai",
          addressCountry: "AE",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "25.2155",
          longitude: "55.2293",
        },
        numberOfAccommodationUnits: 18,
      },
      ...UNIT_TYPES.map((unit) => ({
        "@type": "Product",
        name: `${unit.category} — ${unit.type.replace("Bedrooms", "Bedroom")} Villa`,
        description: `${unit.size.replace("sq.ft.", "sq ft")} waterfront villa on Jumeirah Bay Island. RERA Permit No. ${BROKERAGE.trakheesiPermit}.`,
        image: `${SITE_URL}${unit.image}`,
        offers: {
          "@type": "Offer",
          priceCurrency: "AED",
          availability: "https://schema.org/InStock",
          seller: { "@id": `${SITE_URL}/#organization` },
        },
      })),
      {
        "@type": "FAQPage",
        mainEntity: FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };
}
