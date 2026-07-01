import FrameworkHero from "../../components/framework/FrameworkHero";
import FrameworkPhilosophy from "../../components/framework/FrameworkPhilosophy";
import FrameworkPillars from "../../components/framework/FrameworkPillars";
import FrameworkProcess from "../../components/framework/FrameworkProcess";
import FrameworkOutcomes from "../../components/framework/FrameworkOutcomes";
import FrameworkCTA from "../../components/framework/FrameworkCTA";
import Footer from "../../components/layout/Footer";

export default function FrameworkPage() {
  return (
    <>
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