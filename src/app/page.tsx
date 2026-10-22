import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { BackToTop } from "@/components/layout/BackToTop";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Approach } from "@/components/sections/Approach";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { Expertise } from "@/components/sections/Expertise";
import { Testimonials } from "@/components/sections/Testimonials";
import { Careers } from "@/components/sections/Careers";
import { WhyPartner } from "@/components/sections/WhyPartner";
import { Contact } from "@/components/sections/Contact";
import { JsonLd } from "@/components/seo/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd />
      <ScrollProgress />
      <Header />
      <main id="main">
        <Hero />
        <WhyPartner />
        <Expertise />
        <Approach />
        <Stats />
        <Services />
        <About />
        <Testimonials />
        <Careers />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
