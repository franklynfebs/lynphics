import Container from "../shared/Container";

const insights = [
  {
    title: "Why businesses lose trust before conversations begin",
    category: "Perspective",
  },
  {
    title: "Modernization is a business strategy, not a design trend",
    category: "Modernization",
  },
  {
    title: "The hidden cost of fragmented business systems",
    category: "Systems",
  },
];

export default function InsightsPreview() {
  return (
    <section className="border-t border-zinc-900 py-32">
      <Container>
        <div className="max-w-4xl">
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Insights
          </p>

          <h2 className="text-4xl font-light leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Perspectives on modernization, trust, and business systems.
          </h2>
        </div>

        <div className="mt-24 space-y-8">
          {insights.map((item) => (
            <article
              key={item.title}
              className="
                group
                rounded-[32px]
                border
                border-zinc-900
                p-10
                transition-all
                duration-300
                hover:border-zinc-800
              "
            >
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                {item.category}
              </p>

              <h3
                className="
                  mt-6
                  text-2xl
                  font-light
                  transition-colors
                  duration-300
                  group-hover:text-[var(--accent)]
                  md:text-3xl
                "
              >
                {item.title}
              </h3>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}