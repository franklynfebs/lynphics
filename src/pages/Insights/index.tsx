import InsightsHero from "../../components/insights/InsightsHero";
import InsightsIntroduction from "../../components/insights/InsightsIntroduction";
import InsightsCategories from "../../components/insights/InsightsCategories";
import InsightsFeatured from "../../components/insights/InsightsFeatured";
import InsightsNewsletter from "../../components/insights/InsightsNewsletter";
import InsightsCTA from "../../components/insights/InsightsCTA";
import Footer from "../../components/layout/Footer";


export default function InsightsPage() {
  return (
    <>
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