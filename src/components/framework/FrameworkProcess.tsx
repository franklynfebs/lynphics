import Container from "../shared/Container";

const steps = [
  "Diagnose",
  "Design",
  "Modernize",
  "Implement",
];

export default function FrameworkProcess() {
  return (
    <section className="border-t border-zinc-900 py-32">
      <Container>
        <div className="mb-20">
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Process
          </p>

          <h2 className="text-4xl font-light md:text-5xl">
            A structured path to modernization.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step}
              className="
                rounded-[32px]
                border
                border-zinc-900
                p-10
              "
            >
              <p className="text-sm tracking-[0.3em] text-[var(--accent)]">
                0{index + 1}
              </p>

              <h3 className="mt-6 text-2xl font-light">
                {step}
              </h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}