import Container from "../shared/Container";

export default function AboutBelief() {
  return (
    <section className="border-t border-zinc-900 py-32">
      <Container>
        <div className="max-w-4xl">
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Our Belief
          </p>

          <h2 className="text-4xl font-light leading-tight md:text-5xl">
            Trust is not built by marketing alone.
          </h2>

          <p className="mt-8 text-lg leading-8 text-zinc-400">
            Trust emerges when identity, systems, and experiences
            consistently communicate competence. Businesses become
            easier to understand, easier to engage with, and easier
            to believe in.
          </p>
        </div>
      </Container>
    </section>
  );
}