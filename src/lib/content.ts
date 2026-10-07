/**
 * All website copy lives here so it can be edited in one place.
 *
 * Anything in [square brackets] is a placeholder for SWS Global's own facts
 * (figures and client testimonials). Replace it before going live, or
 * remove the section if it does not apply yet.
 *
 * Photos are free-to-use images from Unsplash (see README for credits).
 */

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
] as const;

export const hero = {
  badge: "RPO",
  eyebrow: "Offshore Recruitment Services",
  titleLead: "Offshore recruitment that works like",
  titleAccent: "your own team",
  description:
    "SWS Global helps staffing firms and growing businesses source, screen and onboard great talent — with dedicated offshore recruiters who plug straight into your process.",
  primaryCta: { label: "Our Services", href: "#services" },
  secondaryCta: { label: "Contact us", href: "#contact" },
  image: {
    src: "/images/hero/team-collaboration.jpg",
    alt: "Recruitment team collaborating around a laptop",
  },
  chip: { label: "How we work", value: "Dedicated offshore recruiters" },
  ring: "Hire smarter • Scale faster • ",
};

export const about = {
  eyebrow: "Who we are",
  title: "A recruitment partner that grows with you",
  paragraphs: [
    "SWS Global is an offshore recruitment and staffing support partner for businesses that need to hire well, hire fast and keep costs under control.",
    "Our recruiters work as an extension of your in-house team — sourcing and screening candidates, keeping your database up to date and taking care of the admin that slows hiring down.",
    "Whether you need help with one stage of the process or the full recruitment cycle, we shape the engagement around your goals, your tools and your time zone.",
  ],
  quoteLead: "Great hiring starts with",
  quoteAccent: "the right partner.",
  cta: { label: "Get in touch", href: "#contact" },
  image: {
    src: "/images/about/recruitment-conversation.jpg",
    alt: "Recruiter in conversation with a candidate at a round table",
  },
};

/** TODO: replace `value: null` with SWS Global's real figures. */
export const stats: { value: number | null; suffix: string; label: string }[] = [
  { value: null, suffix: "+", label: "Clients served" },
  { value: null, suffix: "+", label: "Years of experience" },
  { value: null, suffix: "+", label: "Recruiters" },
  { value: null, suffix: "%", label: "Client satisfaction" },
];

export const servicesIntro = {
  eyebrow: "What we do",
  title: "Our Services",
  description: "Flexible recruitment support — from a single task to the complete hiring cycle.",
};

export const services = [
  {
    id: "database-management",
    title: "Database Management",
    description:
      "Keep your candidate and client database clean, current and complete, so your team can find the right people quickly and make better decisions.",
    image: "/images/services/database-management.jpg",
    alt: "Analytics dashboard on a laptop screen",
  },
  {
    id: "market-mapping",
    title: "Market Mapping",
    description:
      "Understand your market with competitor analysis, talent-pool research and organisation mapping that shows you exactly where to focus.",
    image: "/images/services/market-mapping.jpg",
    alt: "Two colleagues mapping ideas on a whiteboard",
  },
  {
    id: "lead-generation",
    title: "Lead Generation",
    description:
      "Targeted outreach that finds and engages potential candidates and clients, keeping your pipeline full of the right opportunities.",
    image: "/images/services/lead-generation.jpg",
    alt: "Smiling recruiter wearing a headset at her computer",
  },
  {
    id: "sourcing",
    title: "Sourcing",
    description:
      "Candidates sourced and screened against your exact criteria, so you only spend time on people worth meeting.",
    image: "/images/services/sourcing-screening.jpg",
    alt: "Recruiter reading a candidate's résumé",
  },
  {
    id: "credential-and-compliance-management",
    title: "Credential and Compliance Management",
    description:
      "Verification, validation, monitoring and renewal of the credentials your healthcare professionals need — handled accurately and on time.",
    image: "/images/services/credential-compliance-management.jpg",
    alt: "Compliance documents being reviewed and signed",
  },
  {
    id: "onboarding-and-consultant-care",
    title: "Onboarding & Consultant Care",
    description:
      "Smooth onboarding and ongoing consultant support, so every placement starts well and stays on track.",
    image: "/images/services/onboarding.jpg",
    alt: "New hire shaking hands with a recruiter",
  },
  {
    id: "full-cycle-recruitment",
    title: "Full-Cycle Recruitment",
    description:
      "From the first job requirement to the offer and day one — we manage the entire hiring journey for you.",
    image: "/images/services/full-cycle-recruitment.jpg",
    alt: "“We are hiring — apply today” sign",
  },
  {
    id: "administrative-support",
    title: "Administrative Support",
    description:
      "Back-office help with the everyday tasks that eat up time, so your team can stay focused on clients and candidates.",
    image: "/images/services/admin-support.jpg",
    alt: "Hands typing on a laptop",
  },
] as const;

/** TODO: replace with real quotes from SWS Global clients (with their permission). */
export const testimonialsIntro = {
  eyebrow: "What clients say",
  title: "Client Testimonials",
  description: "Hear from the businesses we support.",
  image: {
    src: "/images/testimonials/client-partnership.jpg",
    alt: "Two business partners shaking hands across an office desk",
  },
};

export const testimonials = [
  {
    quote: "[Client testimonial — add a short quote from an SWS Global client here.]",
    name: "[Client name]",
    role: "[Job title, Company]",
  },
  {
    quote: "[Client testimonial — add a short quote from an SWS Global client here.]",
    name: "[Client name]",
    role: "[Job title, Company]",
  },
  {
    quote: "[Client testimonial — add a short quote from an SWS Global client here.]",
    name: "[Client name]",
    role: "[Job title, Company]",
  },
] as const;

export const whyPartner = {
  eyebrow: "Why SWS Global",
  title: "Why Partner With Us?",
  points: [
    "Trained, dedicated recruiters",
    "A single point of contact for your account",
    "Interview and choose your own team",
    "Support that matches your time zone",
    "Secure, reliable IT set-up",
    "Flexible engagement models",
    "Scale your team up or down",
    "Clear, regular reporting",
  ],
  image: {
    src: "/images/why-us/team-at-work.jpg",
    alt: "Three colleagues laughing together while working at a table",
  },
  imageCard: { label: "Your team, extended", value: "Recruiters who work your way" },
} as const;

export const contact = {
  eyebrow: "Contact",
  title: "Get in touch today!",
  description: "Tell us what you need and we'll get back to you.",
  privacyNote:
    "By submitting this form, you agree that SWS Global may contact you by email or phone about your inquiry.",
};
