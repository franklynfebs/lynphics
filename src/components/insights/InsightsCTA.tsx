import { Link } from "react-router-dom";
import Container from "../shared/Container";

export default function InsightsCTA() {
  return (
    <section className="border-t border-zinc-900 py-32">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-light leading-tight md:text-5xl">
            Ready to modernize your business?
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
            Explore how presentation, digital experiences,
            and operational systems can work together to
            strengthen trust and credibility.
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