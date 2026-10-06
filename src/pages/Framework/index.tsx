import FrameworkHero from "../../components/framework/FrameworkHero";
import FrameworkPhilosophy from "../../components/framework/FrameworkPhilosophy";
import FrameworkPillars from "../../components/framework/FrameworkPillars";
import FrameworkProcess from "../../components/framework/FrameworkProcess";
import FrameworkOutcomes from "../../components/framework/FrameworkOutcomes";
import FrameworkCTA from "../../components/framework/FrameworkCTA";
import Footer from "../../components/layout/Footer";
import SEO from "../../components/SEO";

export default function FrameworkPage() {
  return (
    <>
  <SEO
  title="Business Modernization Framework | LYNPHICS"
  description="Explore the LYNPHICS business modernization framework: Presentation, Digital Presence, and Operational Systems working together to build a more trusted and professional business."
  canonical="https://lynphics.com/framework"
/>
      <FrameworkHero />
      <FrameworkPhilosophy />
      <FrameworkPillars />
      <FrameworkProcess />
      <FrameworkOutcomes />
      <FrameworkCTA />
      <Footer />
    </>
  );
}