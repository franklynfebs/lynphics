import Container from "../shared/Container";

const systems = [
  "Presentation",
  "Digital Presence",
  "Operational Systems",
];

export default function AboutModernization() {
  return (
    <section className="border-t border-zinc-900 py-32">
      <Container>
        <div className="mb-20">
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
            What We Modernize
          </p>

          <h2 className="text-4xl font-light md:text-5xl">
            Modernization happens across connected systems.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {systems.map((item, index) => (
            <div
              key={item}
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
                {item}
              </h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}