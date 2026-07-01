import Container from "../shared/Container";

const reasons = [
  {
    title: "Presentation",
    description:
      "Outdated identity and inconsistent communication reduce perceived credibility.",
  },
  {
    title: "Digital Experience",
    description:
      "Fragmented websites and weak digital touchpoints create unnecessary friction.",
  },
  {
    title: "Operational Friction",
    description:
      "Disconnected systems make businesses appear disorganized and difficult to engage with.",
  },
];

export default function AboutTrustSection() {
  return (
    <section className="border-t border-zinc-900 py-32">
      <Container>
        <div className="mb-20">
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Why Trust Is Lost
          </p>

          <h2 className="text-4xl font-light md:text-5xl">
            Trust erodes through friction.
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {reasons.map((item) => (
            <div
              key={item.title}
              className="
                rounded-[32px]
                border
                border-zinc-900
                bg-black/40
                p-10
              "
            >
              <h3 className="text-2xl font-light">
                {item.title}
              </h3>

              <p className="mt-6 leading-8 text-zinc-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}