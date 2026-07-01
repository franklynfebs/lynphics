import Container from "../shared/Container";

export default function InsightsIntroduction() {
  return (
    <section className="border-t border-zinc-900 py-32">
      <Container>
        <div className="max-w-4xl">
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Perspective
          </p>

          <h2 className="text-4xl font-light leading-tight md:text-5xl">
            Businesses are often evaluated before they are understood.
          </h2>

          <p className="mt-8 text-lg leading-8 text-zinc-400">
            Trust is shaped by presentation, experiences,
            and operational clarity. These insights explore
            the patterns that influence how businesses are
            perceived and where modernization creates leverage.
          </p>
        </div>
      </Container>
    </section>
  );
}