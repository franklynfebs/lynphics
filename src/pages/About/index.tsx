import AboutHero from "../../components/about/AboutHero";
import AboutThesis from "../../components/about/AboutThesis";
import AboutTrustSection from "../../components/about/AboutTrustSection";
import AboutBelief from "../../components/about/AboutBelief";
import AboutModernization from "../../components/about/AboutModernization";
import AboutCTA from "../../components/about/AboutCTA";
import Footer from "../../components/layout/Footer";

export default function AboutPage() {
  return (
    <>
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