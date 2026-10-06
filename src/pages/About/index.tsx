import AboutHero from "../../components/about/AboutHero";
import AboutThesis from "../../components/about/AboutThesis";
import AboutTrustSection from "../../components/about/AboutTrustSection";
import AboutBelief from "../../components/about/AboutBelief";
import AboutModernization from "../../components/about/AboutModernization";
import AboutCTA from "../../components/about/AboutCTA";
import Footer from "../../components/layout/Footer";
import SEO from "../../components/SEO";

export default function AboutPage() {
  return (
    <>
  <SEO
  title="About LYNPHICS | Business Modernization Company"
  description="Learn how LYNPHICS helps businesses modernize their presentation, digital presence, and operational systems through technology, design, and systems."
  canonical="https://lynphics.com/about"
/>
      <AboutHero />
      <AboutThesis />
      <AboutTrustSection />
      <AboutBelief />
      <AboutModernization />
      <AboutCTA />
      <Footer />
    </>
  );
}