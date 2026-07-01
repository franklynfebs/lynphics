import Container from "../shared/Container";

export default function AboutHero() {
  return (
    <section className="pt-40 pb-32">
      <Container>
        <div className="max-w-5xl">

          <h1 className="text-5xl font-light leading-tight tracking-tight md:text-6xl lg:text-7xl">
            Modernization Begins With Trust.
          </h1>

          <p className="mt-10 max-w-3xl text-lg leading-8 text-zinc-400">
            LYNPHICS exists to help businesses present themselves
            more clearly, operate more intentionally, and build
            trust before conversations begin.
          </p>
        </div>
      </Container>
    </section>
  );
}