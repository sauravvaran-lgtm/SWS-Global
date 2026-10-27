/**
 * Global site settings used for SEO, structured data and contact details.
 *
 * Set NEXT_PUBLIC_SITE_URL in your environment to the live domain (no trailing
 * slash) so canonical URLs, the sitemap and social cards are correct.
 *
 * Social links are empty until SWS Global's profiles are added below. Empty
 * values are hidden on the page and left out of the search-engine structured data.
 */
export const siteConfig = {
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://swsglobal.co.in").replace(/\/$/, ""),
  name: "SWS Global",
  shortName: "SWS Global",
  title: "SWS Global | Offshore Recruitment Services",
  tagline: "Powering Businesses Beyond Boundaries",
  description:
    "SWS Global is an offshore recruitment partner offering sourcing, full-cycle recruitment, database management, lead generation, compliance and administrative support for growing businesses.",
  ogDescription:
    "Offshore recruitment that works like your own team — sourcing, screening, onboarding and back-office support from SWS Global.",
  keywords: [
    "SWS Global",
    "swsglobal",
    "offshore recruitment services",
    "offshore recruitment partner",
    "offshore staffing support",
    "recruitment process outsourcing",
    "RPO",
    "offshore sourcing",
    "candidate screening",
    "full-cycle recruitment",
    "lead generation for staffing firms",
    "market mapping",
    "recruitment database management",
    "credential and compliance management",
    "onboarding and consultant care",
    "recruitment administrative support",
  ],
  locale: "en_US",

  // Contact details
  email: "Foundation@swsglobalgroup.com",
  phones: [
    { label: "UK", display: "+44 7717 184991", href: "tel:+447717184991" },
    { label: "UK", display: "+44 7737 170565", href: "tel:+447737170565" },
  ] as { label: string; display: string; href: string }[],
  address: {
    lines: ["18, New Park Close,", "Shrewsbury, Shropshire,", "England, SY1 2SQ"],
    street: "18, New Park Close",
    locality: "Shrewsbury",
    region: "Shropshire",
    postalCode: "SY1 2SQ",
    country: "GB",
  },

  // TODO: add SWS Global's social profile URLs. Empty ones are hidden.
  social: {
    linkedin: "",
    facebook: "",
    instagram: "",
    twitter: "",
    youtube: "",
  },
  twitterHandle: "", // e.g. "@swsglobal"
};

export const absoluteUrl = (path = "/") =>
  `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
