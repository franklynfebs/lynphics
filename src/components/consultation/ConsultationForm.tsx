import Container from "../shared/Container";

export default function ConsultationForm() {
  return (
    <section className="border-t border-zinc-900 py-32">
      <Container>
        <div className="mx-auto max-w-3xl">
          <p className="mb-10 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Request Consultation
          </p>

          <form className="space-y-8">
            <input
              type="text"
              placeholder="Name"
              className="
                w-full
                border-b
                border-zinc-800
                bg-transparent
                py-4
                text-lg
                outline-none
              "
            />

            <input
              type="email"
              placeholder="Email"
              className="
                w-full
                border-b
                border-zinc-800
                bg-transparent
                py-4
                text-lg
                outline-none
              "
            />

            <input
              type="text"
              placeholder="Business Name"
              className="
                w-full
                border-b
                border-zinc-800
                bg-transparent
                py-4
                text-lg
                outline-none
              "
            />

            <textarea
              rows={5}
              placeholder="Tell us about your business..."
              className="
                w-full
                border-b
                border-zinc-800
                bg-transparent
                py-4
                text-lg
                outline-none
                resize-none
              "
            />

            <button
              type="submit"
              className="
                rounded-full
                border
                border-white
                bg-white
                px-8
                py-4
                text-sm
                uppercase
                tracking-[0.15em]
                text-black
                transition-colors
                duration-300
                hover:bg-zinc-200
              "
            >
              Submit Request
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}