import Container from "../shared/Container";

import HeroContent from "./HeroContent";
import HeroActions from "./HeroActions";
import SystemDiagram from "./SystemDiagram";

export default function Hero() {
  return (
    <section className="pt-32 pb-24">
      <Container>
        <div
          className="
            relative
            overflow-hidden
            rounded-[40px]
            border
            border-zinc-900
            bg-zinc-950
            px-8
            py-20
            md:px-16
          "
        >

          <div className="relative z-10 grid gap-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <HeroContent />
              <HeroActions />
            </div>

            <div className="hidden lg:flex justify-center">
              <SystemDiagram />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}