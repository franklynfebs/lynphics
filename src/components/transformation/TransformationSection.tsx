import Container from "../shared/Container";

const transformations = [
  {
    before: "Generic Email Accounts",
    after: "Professional Business Infrastructure",
  },
  {
    before: "Outdated Digital Presence",
    after: "Modern Digital Experiences",
  },
  {
    before: "Disconnected Processes",
    after: "Connected Operational Systems",
  },
  {
    before: "Inconsistent Presentation",
    after: "Trusted Brand Experiences",
  },
];

export default function TransformationSection() {
  return (
    <section className="border-t border-zinc-900 py-32">
      <Container>
        <div className="max-w-4xl">
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Transformation Examples
          </p>

          <h2 className="text-4xl font-light leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Modernization changes how businesses are experienced.
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            The objective is not simply replacing tools or
            redesigning websites. It is creating experiences,
            systems, and infrastructure that inspire confidence.
          </p>
        </div>

        <div className="mt-24 space-y-8">
          {transformations.map((item) => (
            <div
              key={item.before}
              className="
                grid
                gap-8
                rounded-[32px]
                border
                border-zinc-900
                bg-zinc-950
                p-10
                lg:grid-cols-[1fr_auto_1fr]
                lg:items-center
              "
            >
              <div>
                <p className="mb-4 text-xs uppercase tracking-[0.3em] text-zinc-500">
                  Before
                </p>

                <h3 className="text-2xl font-light text-zinc-400">
                  {item.before}
                </h3>
              </div>

              <div
                className="
                  text-center
                  text-3xl
                  text-[var(--accent)]
                "
              >
                →
              </div>

              <div>
                <p className="mb-4 text-xs uppercase tracking-[0.3em] text-zinc-500">
                  After
                </p>

                <h3 className="text-2xl font-light">
                  {item.after}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}