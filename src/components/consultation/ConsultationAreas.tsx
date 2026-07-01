import Container from "../shared/Container";

const areas = [
  "Business Presentation",
  "Digital Presence",
  "Operational Systems",
];

export default function ConsultationAreas() {
  return (
    <section className="border-t border-zinc-900 py-32">
      <Container>
        <div className="grid gap-8 md:grid-cols-3">
          {areas.map((item, index) => (
            <div
              key={item}
              className="rounded-[32px] border border-zinc-900 p-10"
            >
              <p className="text-sm tracking-[0.3em] text-[var(--accent)]">
                0{index + 1}
              </p>

              <h3 className="mt-6 text-2xl font-light">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}