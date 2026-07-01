import Container from "../shared/Container";

const industries = [
  "Restaurants",
  "Retail",
  "Professional Services",
  "Hospitality",
  "Education",
  "Healthcare",
  "Emerging Brands",
];

export default function BusinessesServed() {
  return (
    <section className="border-y border-zinc-900 py-24">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Businesses We Serve
          </p>

          <h2 className="mt-6 text-4xl font-light leading-tight lg:text-5xl">
            Built for businesses that value professionalism,
            trust, and long-term growth.
          </h2>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <div
              key={industry}
              className="
                rounded-[24px]
                border
                border-zinc-900
                bg-zinc-950
                px-6
                py-8
                text-center
                text-lg
                text-zinc-300
                transition-all
                duration-300
                ease-[cubic-bezier(.16,1,.3,1)]
                hover:-translate-y-1
                hover:border-zinc-800
                hover:shadow-[0_14px_32px_rgba(0,0,0,0.22)]
              "
            >
              {industry}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}