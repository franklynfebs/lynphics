import Container from "../../components/shared/Container";

export default function TermsPage() {
  return (
    <section className="border-t border-zinc-900 py-32">
      <Container>
        <div className="mx-auto max-w-4xl">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Legal
          </p>

          <h1 className="mt-6 text-5xl font-light">
            Terms of Use
          </h1>

          <p className="mt-8 leading-8 text-zinc-400">
            Effective Date: June 2026
          </p>

          <div className="mt-20 space-y-16">

            <section>
              <h2 className="text-2xl font-light">
                Acceptance
              </h2>

              <p className="mt-6 leading-8 text-zinc-400">
                By using this website you agree to these Terms of Use.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light">
                Website Content
              </h2>

              <p className="mt-6 leading-8 text-zinc-400">
                All content published on this website belongs to LYNPHICS unless
                otherwise stated and may not be copied or reproduced without
                permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light">
                Consultation Requests
              </h2>

              <p className="mt-6 leading-8 text-zinc-400">
                Submitting a consultation request does not create a client
                relationship or guarantee acceptance of a project.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light">
                Intellectual Property
              </h2>

              <p className="mt-6 leading-8 text-zinc-400">
                All branding, designs, written materials and proprietary
                frameworks remain the intellectual property of LYNPHICS unless
                otherwise agreed in writing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light">
                Limitation of Liability
              </h2>

              <p className="mt-6 leading-8 text-zinc-400">
                Information on this website is provided for general information
                only and should not be interpreted as legal, financial or
                business advice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light">
                Changes
              </h2>

              <p className="mt-6 leading-8 text-zinc-400">
                LYNPHICS reserves the right to update these terms without prior
                notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light">
                Contact
              </h2>

              <p className="mt-6 leading-8 text-zinc-400">
                Questions regarding these Terms may be submitted through the
                contact information available on this website.
              </p>
            </section>

          </div>
        </div>
      </Container>
    </section>
  );
}