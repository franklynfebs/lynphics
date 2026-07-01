import Container from "../shared/Container";

const insights = [
  "Most businesses lose trust before customers contact them.",
  "A modern website is not the same as a modern business.",
  "Operational friction quietly damages credibility.",
];

export default function InsightsFeatured() {
  return (
    <section className="border-t border-zinc-900 py-32">
      <Container>
        <div className="mb-20">
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Featured Insights
          </p>

          <h2 className="text-4xl font-light md:text-5xl">
            Strategic observations.
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {insights.map((item) => (
            <div
              key={item}
              className="
                rounded-[32px]
                border
                border-zinc-900
                bg-black/40
                p-10
              "
            >
              <p className="text-xl leading-9 text-zinc-300">
                {item}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}