import Container from "../shared/Container";

const problems = [
  "Outdated Presentation",
  "Disconnected Systems",
  "Inconsistent Experiences",
  "Operational Friction",
];

export default function ProblemSection() {
  return (
    <section className="border-t border-zinc-900 py-32">
      <Container>
        <div className="max-w-4xl">
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
            The Problem
          </p>

          <h2 className="text-4xl font-light leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Modern businesses lose opportunities through
            invisible friction.
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            Businesses are evaluated long before meetings,
            proposals, or sales conversations happen.
            Presentation, systems, and digital experiences
            quietly shape confidence and influence decisions.
          </p>
        </div>

        <div className="mt-24">
          {problems.map((problem, index) => (
            <div
              key={problem}
              className="
                flex
                items-center
                justify-between
                border-t
                border-zinc-900
                py-10
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

                <h3 className="text-2xl font-light md:text-4xl">
                  {problem}
                </h3>
              </div>

              <div
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-zinc-700
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