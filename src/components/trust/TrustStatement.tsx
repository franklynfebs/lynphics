import Container from "../shared/Container";

export default function TrustStatement() {
  return (
    <section className="py-32 border-t border-zinc-900">
      <Container>
        <div className="max-w-4xl">
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Why Modernization Matters
          </p>

          <h2 className="text-4xl font-light leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Trust is often lost before conversations begin.
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            Businesses are judged long before meetings,
            proposals, or sales calls happen. Outdated
            presentation, fragmented systems, and weak digital
            experiences quietly reduce confidence and create
            unnecessary friction.
          </p>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            Modernization is not about appearing modern. It is
            about building trust through clarity, credibility,
            and systems that reflect the quality of the
            business behind them.
          </p>
        </div>
      </Container>
    </section>
  );
}