/**
 * Global site settings used for SEO, structured data and contact details.
 *
 * Set NEXT_PUBLIC_SITE_URL in your environment to the live domain (no trailing
 * slash) so canonical URLs, the sitemap and social cards are correct.
 *
 * Contact details and social links are empty until SWS Global's real details
 * are added below. Empty values show a placeholder on the page and are left out
 * of the search-engine structured data.
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

  // TODO: add SWS Global's real contact details.
  email: "", // e.g. "info@swsglobal.co.in"
  phones: [] as { label: string; display: string; href: string }[], // e.g. { label: "India", display: "+91 …", href: "tel:+91…" }
  address: {
    lines: [] as string[], // e.g. ["Street", "City, State PIN", "India"]
    street: "",
    locality: "",
    region: "",
    postalCode: "",
    country: "",
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
