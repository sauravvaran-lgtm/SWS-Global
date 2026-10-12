import { services } from "@/lib/content";
import { absoluteUrl, siteConfig } from "@/lib/site";

/**
 * Structured data (schema.org) describing the organisation, website and page.
 * Contact details, address and social profiles are only included once they are
 * filled in src/lib/site.ts.
 */
export function JsonLd() {
  const orgId = absoluteUrl("/#organization");
  const websiteId = absoluteUrl("/#website");
  const webpageId = absoluteUrl("/#webpage");
  const logoId = absoluteUrl("/#logo");
  const { address, phones, email } = siteConfig;
  const sameAs = Object.values(siteConfig.social).filter(Boolean);

  const organization: Record<string, unknown> = {
    "@type": ["Organization", "EmploymentAgency"],
    "@id": orgId,
    name: siteConfig.name,
    alternateName: "swsglobal",
    description: siteConfig.description,
    slogan: siteConfig.tagline,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      "@id": logoId,
      url: absoluteUrl("/images/logo/logo-full.png"),
      contentUrl: absoluteUrl("/images/logo/logo-full.png"),
      width: 960,
      height: 705,
      caption: siteConfig.name,
    },
    image: { "@id": logoId },
    knowsAbout: ["Offshore recruitment", "Recruitment process outsourcing", ...services.map((s) => s.title)],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Offshore Recruitment Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.description,
          serviceType: "Offshore recruitment",
          provider: { "@id": orgId },
        },
      })),
    },
  };

  if (email) organization.email = email;
  if (phones.length > 0) {
    organization.telephone = phones[0].href.replace("tel:", "");
    organization.contactPoint = phones.map((phone) => ({
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: phone.href.replace("tel:", ""),
      ...(email ? { email } : {}),
      availableLanguage: ["English"],
    }));
  }
  if (address.street) {
    organization.address = {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.locality,
      addressRegion: address.region,
      postalCode: address.postalCode,
      addressCountry: address.country,
    };
  }
  if (sameAs.length > 0) organization.sameAs = sameAs;

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteConfig.url,
        name: siteConfig.name,
        description: "Offshore Recruitment Services",
        inLanguage: "en-US",
        publisher: { "@id": orgId },
      },
      {
        "@type": "WebPage",
        "@id": webpageId,
        url: absoluteUrl("/"),
        name: siteConfig.title,
        description: siteConfig.description,
        inLanguage: "en-US",
        isPartOf: { "@id": websiteId },
        about: { "@id": orgId },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: absoluteUrl("/opengraph-image"),
          width: 1200,
          height: 630,
        },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") }],
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
