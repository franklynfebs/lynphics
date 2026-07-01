import Container from "../shared/Container";

export default function InsightsNewsletter() {
  return (
    <section className="border-t border-zinc-900 py-32">
      <Container>
        <div className="max-w-4xl">
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Journal
          </p>

          <h2 className="text-4xl font-light md:text-5xl">
            More perspectives coming soon.
          </h2>

          <p className="mt-8 text-lg leading-8 text-zinc-400">
            We regularly publish observations on business
            modernization, trust, digital experiences,
            and operational clarity.
          </p>
        </div>
      </Container>
    </section>
  );
}