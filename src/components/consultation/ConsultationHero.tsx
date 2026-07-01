import Container from "../shared/Container";

export default function ConsultationHero() {
  return (
    <section className="pt-40 pb-32">
      <Container>
        <div className="max-w-5xl">
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Consultation
          </p>

          <h1 className="text-5xl font-light leading-tight md:text-6xl lg:text-7xl">
            Modernization begins with understanding your business.
          </h1>

          <p className="mt-10 max-w-3xl text-lg leading-8 text-zinc-400">
            Explore where trust is being lost and identify
            opportunities to modernize your presentation,
            digital experiences, and operational systems.
          </p>
        </div>
      </Container>
    </section>
  );
}