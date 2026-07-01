import { Link } from "react-router-dom";
import Container from "../shared/Container";

export default function ConsultationCTA() {
  return (
    <section className="border-t border-zinc-900 py-32">
      <Container>
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
              Consultation
          </p>

          <h2 className="text-4xl font-light leading-tight tracking-tight md:text-6xl">
            Modernization starts with understanding how your
            business is currently experienced.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            Every business communicates trust through its
            presentation, digital presence, and operational
            systems. The first step is understanding where
            friction exists and where modernization can create
            meaningful transformation.
          </p>

          <Link
            to="/consultation"
            className="
              mt-14
              inline-flex
              items-center
              rounded-full
              border
              border-[var(--accent)]
              px-8
              py-4
              text-sm
              uppercase
              tracking-[0.2em]
              transition-all
              duration-300
              hover:bg-[var(--accent)]
              hover:text-black
            "
          >
            Request Consultation
          </Link>
        </div>
      </Container>
    </section>
  );
}