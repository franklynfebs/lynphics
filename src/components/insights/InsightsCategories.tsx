import Container from "../shared/Container";

const categories = [
  "Trust",
  "Modernization",
  "Digital Presence",
  "Business Systems",
];

export default function InsightsCategories() {
  return (
    <section className="border-t border-zinc-900 py-32">
      <Container>
        <div className="mb-20">
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Topics
          </p>

          <h2 className="text-4xl font-light md:text-5xl">
            Areas of exploration.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((item) => (
            <div
              key={item}
              className="
                rounded-[32px]
                border
                border-zinc-900
                p-10
                text-xl
                font-light
              "
            >
              {item}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}