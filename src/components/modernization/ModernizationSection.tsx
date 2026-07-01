import Container from "../shared/Container";

const items = [
  "Presentation",
  "Digital Presence",
  "Operations",
  "Customer Experience",
  "Infrastructure",
];

export default function ModernizationSection() {
  return (
    <section className="border-t border-zinc-900 py-32">
      <Container>
        <div className="max-w-4xl">
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
            What We Modernize
          </p>

          <h2 className="text-4xl font-light leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Modernization goes beyond websites and branding.
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            Businesses are experienced through every interaction,
            system, and touchpoint. We modernize the areas that
            most influence trust, perception, and operational
            effectiveness.
          </p>
        </div>

        <div className="mt-24">
          {items.map((item, index) => (
            <div
              key={item}
              className="
                group
                flex
                items-center
                justify-between
                border-t
                border-zinc-900
                py-10
                transition-all
                duration-300
              "
            >
              <div className="flex items-center gap-8">
                <span
                  className="
                    text-sm
                    tracking-[0.25em]
                    text-zinc-500
                  "
                >
                  {(index + 1).toString().padStart(2, "0")}
                </span>

                <h3
                  className="
                    text-3xl
                    font-light
                    md:text-5xl
                    transition-colors
                    duration-300
                    group-hover:text-[#26A9C3]
                  "
                >
                  {item}
                </h3>
              </div>

              <div
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-zinc-700
                  transition-all
                  duration-300
                  group-hover:bg-[#26A9C3]
                  group-hover:scale-150
                "
              />
            </div>
          ))}

          <div className="border-t border-zinc-900" />
        </div>
      </Container>
    </section>
  );
}