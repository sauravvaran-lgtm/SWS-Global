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

Still to add (empty values are hidden on the page):

| What | Where to edit |
| --- | --- |
| Social media links, X/Twitter handle | `src/lib/site.ts` (empty links are hidden) |

Please also review the rest of the copy in `src/lib/content.ts` (hero, services,
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
    sections/             Hero, Expertise, WhyPartner, Approach, Stats, Services, About, Testimonials, Careers,
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

- The header and footer use the supplied logo unchanged: `public/images/logo/sws-logo-master.png`
  (`Logo` component in `src/components/ui/Logo.tsx`). In the header it hangs below the bar at the
  top of the page and shrinks to fit inside the bar once the page is scrolled.
- Favicons, the social share image and the logo in the search-engine data still use the earlier
  blue-globe artwork (`swsglobal-logo-dark-2.png`, `logo-mark.png`, `wordmark-light.png`, `logo-full.png`).

## Contact form (Web3Forms)

The form sends each inquiry by email through [Web3Forms](https://web3forms.com) (free plan: 250 submissions a
month). Career "Apply now" buttons use the same form.

1. Go to web3forms.com, enter the inbox that should receive inquiries (Foundation@swsglobalgroup.com) and
   copy the access key that is emailed to it.
2. In Vercel: Project → Settings → Environment Variables, add `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` with that key,
   then redeploy. (The key is public by design, so it can also be pasted into `src/lib/site.ts`.)

The email includes the visitor's name, email, phone, country, company and inquiry, and "Reply" goes straight
to the visitor. Without a key the form shows an error message with the email address instead.
The sending code is `submitContactForm()` in `src/lib/contact.ts`.

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
