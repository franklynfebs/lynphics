import Container from "../shared/Container";

const workflow = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand your business, objectives and current challenges.",
  },
  {
    number: "02",
    title: "Assess",
    description:
      "Evaluate your branding, website, systems and customer experience.",
  },
  {
    number: "03",
    title: "Strategize",
    description:
      "Develop a modernization roadmap aligned with your business goals.",
  },
  {
    number: "04",
    title: "Implement",
    description:
      "Execute the agreed improvements across presentation and digital systems.",
  },
  {
    number: "05",
    title: "Refine",
    description:
      "Review performance, gather feedback and optimize where necessary.",
  },
  {
    number: "06",
    title: "Support",
    description:
      "Provide continued guidance as your business grows and evolves.",
  },
];

export default function WorkflowTimeline() {
  return (
    <section className="border-t border-zinc-900 py-32">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Our Process
          </p>

          <h2 className="mt-6 text-4xl font-light lg:text-5xl">
            A structured modernization journey.
          </h2>
        </div>

        <div className="mt-24">
          {workflow.map((step, index) => (
            <div key={step.number}>
              <div className="grid gap-8 md:grid-cols-[120px_1fr]">
                <div>
                  <span className="text-5xl font-light text-[var(--accent)]">
                    {step.number}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-light">
                    {step.title}
                  </h3>

                  <p className="mt-4 max-w-2xl leading-8 text-zinc-400">
                    {step.description}
                  </p>
                </div>
              </div>

              {index !== workflow.length - 1 && (
                <div className="ml-10 my-12 h-12 w-px bg-zinc-800" />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}