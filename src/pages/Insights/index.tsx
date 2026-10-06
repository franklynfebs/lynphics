import InsightsHero from "../../components/insights/InsightsHero";
import InsightsIntroduction from "../../components/insights/InsightsIntroduction";
import InsightsCategories from "../../components/insights/InsightsCategories";
import InsightsFeatured from "../../components/insights/InsightsFeatured";
import InsightsNewsletter from "../../components/insights/InsightsNewsletter";
import InsightsCTA from "../../components/insights/InsightsCTA";
import Footer from "../../components/layout/Footer";
import SEO from "../../components/SEO";


export default function InsightsPage() {
  return (
    <>
    <SEO
  title="Business Modernization Insights | LYNPHICS"
  description="Insights from LYNPHICS on business modernization, business presentation, digital presence, operational systems, technology, and design."
  canonical="https://lynphics.com/insights"
/>
      <InsightsHero />
      <InsightsIntroduction />
      <InsightsCategories />
      <InsightsFeatured />
      <InsightsNewsletter />
      <InsightsCTA />
      <Footer />
    </>
  );
}