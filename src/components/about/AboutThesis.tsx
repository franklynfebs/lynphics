import Container from "../shared/Container";

export default function AboutThesis() {
  return (
    <section className="border-t border-zinc-900 py-32">
      <Container>
        <div className="max-w-4xl">
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
            The Problem
          </p>

          <h2 className="text-4xl font-light leading-tight md:text-5xl">
            Many businesses deliver exceptional work yet appear
            fragmented, outdated, or difficult to trust.
          </h2>

          <p className="mt-8 text-lg leading-8 text-zinc-400">
            Customers often form opinions before meetings,
            proposals, or conversations happen. Weak presentation,
            inconsistent systems, and poor digital experiences
            quietly reduce confidence.
          </p>
        </div>
      </Container>
    </section>
  );
}