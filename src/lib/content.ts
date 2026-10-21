/**
 * All website copy lives here so it can be edited in one place.
 *
 *
 * Photos are free-to-use images from Unsplash (see README for credits).
 */

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Expertise", href: "#expertise" },
  { label: "Why Us", href: "#why-us" },
  { label: "Success Stories", href: "#testimonials" },
] as const;

export const hero = {
  badge: "RPO",
  eyebrow: "Offshore Recruitment Services",
  titleLead: "Offshore recruitment that works like",
  titleAccent: "your own team",
  description:
    "SWS Global helps staffing firms and growing businesses source, screen and onboard great talent — with dedicated offshore recruiters who plug straight into your process.",
  primaryCta: { label: "Our Services", href: "#services" },
  secondaryCta: { label: "Book a Consultation", href: "#contact" },
  image: {
    src: "/images/hero/hand-network.jpg",
    alt: "Open hand holding a glowing network of people, with one candidate selected",
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

/** Key figures shown in the stats band (set `value: null` to show an "XX" placeholder). */
export const stats: { value: number | null; suffix: string; label: string }[] = [
  { value: 6, suffix: "", label: "Clients Served" },
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 60, suffix: "+", label: "Extended Teammate" },
  { value: 96, suffix: "%", label: "Client Satisfaction (NPS)" },
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

export const testimonialsIntro = {
  eyebrow: "What clients say",
  title: "Success Stories",
  description: "Hear from the businesses we support.",
  image: {
    src: "/images/testimonials/client-partnership.jpg",
    alt: "Two business partners shaking hands across an office desk",
  },
};

/** Client testimonials (shown by initials and job title). */
export const testimonials = [
  {
    quote:
      "Since partnering with SWS Global, the experience has been really positive. We started with one team member on a trial basis, and within five months, we’ve grown to a team of four based on the results delivered. What really stands out is the honest communication and the way their leadership approaches the partnership. The conversations are always focused on how we can improve our business, strengthen our brand, and create long-term growth, rather than simply adding more headcount. It genuinely feels like having a partner who is invested in our success.",
    name: "CP",
    role: "Managing Director",
  },
  {
    quote:
      "The team at SWS Global has been great to work with. They’re professional, approachable, and always ready to help. Their understanding of our requirements and focus on delivering results have helped us streamline processes, improve efficiency, and achieve better business outcomes. It’s been a pleasure having them as a trusted partner, and we look forward to growing together.",
    name: "JT",
    role: "Managing Director",
  },
  {
    quote:
      "Working with SWS Global has been a great experience. Their team is professional, responsive, and highly reliable. They quickly understood our requirements and consistently delivered quality support, helping us improve efficiency and focus on our core business. We truly value SWS Global as a trusted partner.",
    name: "CB",
    role: "Operations Manager",
  },
] as const;

export const expertise = {
  eyebrow: "Sectors we recruit for",
  title: "Our Expertise",
  description:
    "Specialist recruiters who understand the roles, the language and the compliance needs of each sector.",
  items: [
    {
      id: "recruitment",
      title: "Recruitment",
      description:
        "Offshore support for staffing agencies and in-house talent teams — sourcing, screening and the admin in between.",
    },
    {
      id: "it",
      title: "IT",
      description:
        "Developers, engineers, analysts and support specialists across modern tech stacks.",
    },
    {
      id: "engineering",
      title: "Engineering",
      description:
        "Civil, mechanical, electrical and project engineering roles, from technicians to team leads.",
    },
    {
      id: "finance-and-legal",
      title: "Finance and Legal",
      description:
        "Accounting, finance, compliance and legal professionals for roles that demand precision and discretion.",
    },
    {
      id: "education",
      title: "Education",
      description:
        "Teachers, support staff and education professionals for schools, colleges and training providers.",
    },
    {
      id: "healthcare",
      title: "Healthcare",
      description:
        "Nurses, allied health and care professionals, with credentials checked and kept up to date.",
    },
  ],
} as const;

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
