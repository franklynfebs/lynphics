import Container from "../shared/Container";

export default function ConsultationOverview() {
  return (
    <section className="border-t border-zinc-900 py-32">
      <Container>
        <div className="max-w-4xl">
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
            What To Expect
          </p>

          <h2 className="text-4xl font-light md:text-5xl">
            A strategic conversation focused on trust and modernization.
          </h2>

          <p className="mt-8 text-lg leading-8 text-zinc-400">
            The objective is not to sell services. The objective
            is to understand your business, identify friction,
            and uncover modernization opportunities.
          </p>
        </div>
      </Container>
    </section>
  );
}