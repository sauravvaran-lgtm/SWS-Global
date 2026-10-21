# SWS Global — Landing Page

A single-page marketing site for **SWS Global** (offshore recruitment services), built with
Next.js 16 (App Router), React 19, Tailwind CSS 4 and Motion for animations.

Colour palette (matte versions of the logo colours): brand blue/navy `#3B6AA0` → `#121F31` and the
matte orange accent `#E0773D` (see the `--color-brand-*` and `--color-accent-*` tokens in `src/app/globals.css`).

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
| Email address (address and phone numbers are already set) | `src/lib/site.ts` |
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
    sections/             Hero, About, Stats, Services, Expertise, WhyPartner, Testimonials,
                          Contact (+ ContactForm)
    seo/JsonLd.tsx        schema.org structured data (Organization / EmploymentAgency, WebSite, WebPage)
    ui/                   Logo, reveal animations, buttons, counters…
  lib/
    content.ts            ALL page copy — edit text here
    site.ts               Site URL, contact details, social links, SEO keywords
    contact.ts            Contact form validation + submit function (see below)
    countries.ts          Country list for the form
public/
  images/logo/            SWS Global logo master file + generated variants
  images/…                Section photos
```

## Logo

Header and footer logos are generated from the master file `public/images/logo/sws-logo-master.png`:

- `sws-emblem-light.png` / `sws-emblem-dark.png` — globe emblem (light = for dark backgrounds, dark = keeps its navy disc for white backgrounds)
- `sws-wordmark-light.png` / `sws-wordmark-dark.png` — the "SWS GLOBAL" lettering
- `sws-logo-stacked.png` — full logo with tagline, used in the footer
- Components: `Logo` (header) and `LogoFull` (footer) in `src/components/ui/Logo.tsx`
- Favicons and the social share image still use the earlier blue-globe artwork
  (`swsglobal-logo-dark-2.png`, `logo-mark.png`, `wordmark-light.png`, `logo-full.png`)

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
