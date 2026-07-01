import ConsultationHero from "../../components/consultation/ConsultationHero";
import ConsultationExpectations from "../../components/consultation/ConsultationExpectations";
import WorkflowTimeline from "../../components/consultation/WorkflowTimeline";
import ConsultationForm from "../../components/consultation/ConsultationForm";
import ConsultationFAQ from "../../components/consultation/ConsultationFAQ";
import ConsultationCTA from "../../components/consultation/ConsultationCTA";

export default function ConsultationPage() {
  return (
    <>
      <ConsultationHero />
      <ConsultationExpectations />
      <WorkflowTimeline />
      <ConsultationForm />
      <ConsultationFAQ />
      <ConsultationCTA />
    </>
  );
}