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


export default function HomePage() {
  return (
    <>
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