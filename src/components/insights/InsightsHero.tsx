import Container from "../shared/Container";

export default function InsightsHero() {
  return (
    <section className="pt-40 pb-32">
      <Container>
        <div className="max-w-5xl">
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Insights
          </p>

          <h1 className="text-5xl font-light leading-tight tracking-tight md:text-6xl lg:text-7xl">
            Observations on trust, systems, and modernization.
          </h1>

          <p className="mt-10 max-w-3xl text-lg leading-8 text-zinc-400">
            Strategic perspectives on how businesses build
            credibility, reduce friction, and modernize the
            systems that shape perception and growth.
          </p>
        </div>
      </Container>
    </section>
  );
}