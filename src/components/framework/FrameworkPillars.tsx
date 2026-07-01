import Container from "../shared/Container";

const pillars = [
  {
    title: "Presentation",
    description:
      "Strengthening how businesses communicate credibility through identity, messaging, and positioning.",
  },
  {
    title: "Digital Presence",
    description:
      "Creating digital experiences that reflect professionalism and build confidence before engagement.",
  },
  {
    title: "Operational Systems",
    description:
      "Designing processes and systems that reduce friction and improve business efficiency.",
  },
];

export default function FrameworkPillars() {
  return (
    <section className="border-t border-zinc-900 py-32">
      <Container>
        <div className="mb-20">
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Three Pillars
          </p>

          <h2 className="text-4xl font-light md:text-5xl">
            Modernization happens across three systems.
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="
                rounded-[32px]
                border
                border-zinc-900
                bg-black/40
                p-10
              "
            >
              <h3 className="text-2xl font-light">
                {pillar.title}
              </h3>

              <p className="mt-6 leading-8 text-zinc-400">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}