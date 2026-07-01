import Container from "../shared/Container";

const faqs = [
  {
    question: "How long does the consultation take?",
    answer:
      "Most consultations take between 30 and 45 minutes depending on your business and objectives.",
  },
  {
    question: "Do I need to prepare anything?",
    answer:
      "Having information about your business, website, branding or current challenges helps make the discussion more productive.",
  },
  {
    question: "Is there any obligation after the consultation?",
    answer:
      "No. The consultation is intended to provide clarity and recommendations. You are under no obligation to proceed.",
  },
  {
    question: "Do you work with businesses outside Sierra Leone?",
    answer:
      "Yes. Many modernization projects and consultations can be conducted remotely.",
  },
  {
    question: "What happens after the consultation?",
    answer:
      "Where appropriate, you'll receive recommended next steps and a proposal outlining how LYNPHICS can support your modernization journey.",
  },
];

export default function ConsultationFAQ() {
  return (
    <section className="border-t border-zinc-900 py-32">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Frequently Asked Questions
          </p>

          <h2 className="mt-6 text-4xl font-light lg:text-5xl">
            Answers before we begin.
          </h2>
        </div>

        <div className="mt-20 divide-y divide-zinc-900">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="py-10"
            >
              <h3 className="text-xl font-light">
                {faq.question}
              </h3>

              <p className="mt-5 max-w-3xl leading-8 text-zinc-400">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}