import { Link } from "react-router-dom";
import Container from "../shared/Container";

export default function MethodologyPreview() {
  return (
    <section className="border-t border-zinc-900 py-32">
      <Container>
        <div className="max-w-5xl">
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Methodology
          </p>

          <h2 className="text-4xl font-light leading-tight md:text-5xl lg:text-6xl">
            Modernization requires more than redesign.
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            Businesses are trusted when presentation,
            digital experiences, and operational systems
            work together. Our framework modernizes these
            systems as one connected ecosystem rather than
            isolated improvements.
          </p>

          <Link
            to="/framework"
            className="
              mt-12
              inline-flex
              items-center
              justify-center
              rounded-full
              border
              border-zinc-800
              px-8
              py-4
              text-sm
              uppercase
              tracking-[0.15em]
              text-white
              transition-colors
              duration-300
              hover:border-white
            "
          >
            Explore The Framework
          </Link>
        </div>
      </Container>
    </section>
  );
}