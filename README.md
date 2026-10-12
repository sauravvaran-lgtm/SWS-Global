# SWS Global — Landing Page

A single-page marketing site for **SWS Global** (offshore recruitment services), built with
Next.js 16 (App Router), React 19, Tailwind CSS 4 and Motion for animations.

Colour palette: aqua `#3DD9D9`, teals `#2EA3A3` / `#248282` / `#104F4F` / `#083636`,
charcoal `#333333` / `#161616` and a red accent `#E01616`.

## Getting started

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev        # http://localhost:3000
```

Production build:

```bash
npm run build
npm run start
```

## Before going live — placeholders to replace

Text in **[square brackets]** on the page is a placeholder for SWS Global's own details:

| What | Where to edit |
| --- | --- |
| Client testimonials | `testimonials` in `src/lib/content.ts` (use real quotes, with permission) |
| Office address, phone numbers, email | `src/lib/site.ts` |
| Social media links, X/Twitter handle | `src/lib/site.ts` (empty links are hidden) |

Please also review the rest of the copy in `src/lib/content.ts` (hero, about, services,
"Why partner with us") to make sure every statement matches how SWS Global works.

## Project structure

```
src/
  app/
    layout.tsx            Fonts, global <head> metadata (title, description, Open Graph, Twitter, robots)
    page.tsx              The landing page: assembles all sections
    opengraph-image.tsx   Social share image (generated at build time)
    twitter-image.tsx
    sitemap.ts, robots.ts, manifest.ts
    icon.png, apple-icon.png
    globals.css           Colour tokens, animations and shared styles
  components/
    layout/               Header (sticky, mobile menu), Footer, scroll progress, back-to-top
    sections/             Hero, About, Stats, Services, WhyPartner, Testimonials,
                          Contact (+ ContactForm)
    seo/JsonLd.tsx        schema.org structured data (Organization / EmploymentAgency, WebSite, WebPage)
    ui/                   Logo, reveal animations, buttons, counters…
  lib/
    content.ts            ALL page copy — edit text here
    site.ts               Site URL, contact details, social links, SEO keywords
    contact.ts            Contact form validation + submit function (see below)
    countries.ts          Country list for the form
public/
  images/logo/            SWS Global logo (PNG, dark + light) and symbol (SVG)
  images/…                Section photos
```

## Logo

- `public/images/logo/swsglobal-mark.svg` — the globe symbol
- `public/images/logo/swsglobal-logo-dark.png` — full logo for light backgrounds
- `public/images/logo/swsglobal-logo-light.png` — full logo for dark backgrounds
- On the website the logo is drawn in code: `src/components/ui/Logo.tsx`

## Connecting the contact form

The form validates input and shows a thank-you message, but **does not send anything yet**.
To connect your email service or API, edit `submitContactForm()` in `src/lib/contact.ts` —
there is a commented example showing a `fetch` call. The function receives:

`firstName, lastName, email, phone, country, company, inquiry`

If it throws an error, the form shows an error message and keeps the visitor's input.

## SEO

- Set the live domain before deploying so canonical URLs, sitemap and social cards are correct:

  ```bash
  NEXT_PUBLIC_SITE_URL=https://swsglobal.co.in
  ```

  (see `.env.example`; it defaults to `https://swsglobal.co.in`).
- Included: title/description/keywords, canonical URL, Open Graph + Twitter cards with a generated
  1200×630 image, robots meta, `robots.txt`, `sitemap.xml`, web manifest, favicons, JSON-LD
  structured data, semantic headings (one `h1`), descriptive `alt` text on every image.

## Photo credits

All photos are from [Unsplash](https://unsplash.com) and free to use under the
[Unsplash License](https://unsplash.com/license) (attribution not required, but appreciated):

| Image | Photographer |
| --- | --- |
| `hero/hand-network.jpg` (people icons drawn in code) | Ratapan Anantawat |
| `about/recruitment-conversation.jpg` | Christina @ wocintechchat.com |
| `services/database-management.jpg` | Luke Chesser |
| `services/market-mapping.jpg` | ThisisEngineering |
| `services/lead-generation.jpg` | BaljkanN4 |
| `services/sourcing-screening.jpg` | Resume Genius |
| `services/credential-compliance-management.jpg` | Gabrielle Henderson |
| `services/onboarding.jpg` | Resume Genius |
| `services/full-cycle-recruitment.jpg` | Eric Prouzet |
| `services/admin-support.jpg` | Burst |
| `testimonials/client-partnership.jpg` | Md Ishak Rahman |
| `why-us/team-at-work.jpg` | Brooke Cagle |
