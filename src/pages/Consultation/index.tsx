import ConsultationHero from "../../components/consultation/ConsultationHero";
import ConsultationExpectations from "../../components/consultation/ConsultationExpectations";
import WorkflowTimeline from "../../components/consultation/WorkflowTimeline";
import ConsultationForm from "../../components/consultation/ConsultationForm";
import ConsultationFAQ from "../../components/consultation/ConsultationFAQ";
import ConsultationCTA from "../../components/consultation/ConsultationCTA";
import SEO from "../../components/SEO";

export default function ConsultationPage() {
  return (
    <>
  <SEO
  title="Business Modernization Consultation | LYNPHICS"
  description="Talk to LYNPHICS about modernizing your business presentation, digital presence, and operational systems."
  canonical="https://lynphics.com/consultation"
/>
      <ConsultationHero />
      <ConsultationExpectations />
      <WorkflowTimeline />
      <ConsultationForm />
      <ConsultationFAQ />
      <ConsultationCTA />
    </>
  );
}