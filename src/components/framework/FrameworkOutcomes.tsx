import Container from "../shared/Container";

const outcomes = [
  "Higher trust",
  "Clearer positioning",
  "Better customer experiences",
  "Operational confidence",
];

export default function FrameworkOutcomes() {
  return (
    <section className="border-t border-zinc-900 py-32">
      <Container>
        <div className="max-w-4xl">
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Outcomes
          </p>

          <h2 className="text-4xl font-light md:text-5xl">
            What modernization produces.
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {outcomes.map((item) => (
              <div
                key={item}
                className="
                  rounded-[24px]
                  border
                  border-zinc-900
                  p-8
                  text-xl
                  text-zinc-300
                "
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}