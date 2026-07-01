import Container from "../shared/Container";

export default function FrameworkPhilosophy() {
  return (
    <section className="border-t border-zinc-900 py-32">
      <Container>
        <div className="max-w-4xl">
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Philosophy
          </p>

          <h2 className="text-4xl font-light leading-tight md:text-5xl">
            Modernization is not redesign.
          </h2>

          <p className="mt-8 text-lg leading-8 text-zinc-400">
            Businesses lose trust when presentation, systems,
            and digital experiences create unnecessary friction.
            Modernization removes that friction and builds
            credibility through clarity.
          </p>
        </div>
      </Container>
    </section>
  );
}