import Container from "../shared/Container";

export default function FrameworkHero() {
  return (
    <section className="pt-40 pb-32">
      <Container>
        <div className="max-w-5xl">
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500 ">
            Framework
          </p>

          <h1 className="text-5xl font-light leading-tight tracking-tight md:text-6xl lg:text-7xl">
            A system for modernizing how <br />businesses are trusted.
          </h1>

          <p className="mt-10 max-w-3xl text-lg leading-8 text-zinc-400">
            LYNPHICS modernizes business presentation, digital presence,
            and operational systems so trust is established before the
            first conversation happens.
          </p>
        </div>
      </Container>
    </section>
  );
}