import Container from "../shared/Container";
import Card from "../shared/Card";

const expectations = [
  {
    title: "30–45 Minutes",
    description:
      "A focused discussion about your business, goals and current challenges.",
  },
  {
    title: "Business Assessment",
    description:
      "We'll review your presentation, website, branding and operational systems.",
  },
  {
    title: "Strategic Recommendations",
    description:
      "Receive practical modernization recommendations tailored to your business.",
  },
  {
    title: "No Obligation",
    description:
      "The consultation is designed to provide clarity whether or not we work together.",
  },
];

export default function ConsultationExpectations() {
  return (
    <section className="border-t border-zinc-900 py-32">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            What to Expect
          </p>

          <h2 className="mt-6 text-4xl font-light leading-tight lg:text-5xl">
            Every consultation begins with understanding your business before
            recommending solutions.
          </h2>

          <p className="mt-8 text-lg leading-8 text-zinc-400">
            The objective is to identify opportunities for modernization,
            discuss your goals and provide strategic direction that aligns with
            your business.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {expectations.map((item) => (
            <Card key={item.title}>
              <h3 className="text-2xl font-light">{item.title}</h3>

              <p className="mt-5 leading-8 text-zinc-400">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}