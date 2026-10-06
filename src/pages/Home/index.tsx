import Hero from "../../components/hero/Hero";
import TrustStatement from "../../components/trust/TrustStatement";
import ProblemSection from "../../components/problem/ProblemSection";
import ModernizationSection from "../../components/modernization/ModernizationSection";
import TransformationSection from "../../components/transformation/TransformationSection";
import InsightsPreview from "../../components/insights/InsightsPreview";
import RequestCTA from "../../components/home/RequestCTA";
import Footer from "../../components/layout/Footer";
import MethodologyPreview from "../../components/framework/MethodologyPreview";
import BusinessesServed from "../../components/home/BusinessesServed";
import SEO from "../../components/SEO";


export default function HomePage() {
  return (
  <>
    <SEO
  title="Business Modernization Company | LYNPHICS"
  description="LYNPHICS is a business modernization company helping businesses modernize their presentation, digital presence, and operational systems through technology, design, and systems."
  canonical="https://lynphics.com/"
/>
  
      <Hero />
      <TrustStatement />
      <ProblemSection />
      <ModernizationSection />
      <BusinessesServed />
      <TransformationSection />
      <MethodologyPreview />
      <InsightsPreview />
      <RequestCTA />
      <Footer />
      
    </>
  );
}