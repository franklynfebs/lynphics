import Container from "../../components/shared/Container";

export default function PrivacyPage() {
  return (
    <section className="border-t border-zinc-900 py-32">
      <Container>
        <div className="mx-auto max-w-4xl">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Legal
          </p>

          <h1 className="mt-6 text-5xl font-light">
            Privacy Policy
          </h1>

          <p className="mt-8 leading-8 text-zinc-400">
            Effective Date: June 2026
          </p>

          <div className="mt-20 space-y-16">

            <section>
              <h2 className="text-2xl font-light">
                Introduction
              </h2>

              <p className="mt-6 leading-8 text-zinc-400">
                LYNPHICS respects your privacy and is committed to protecting
                any information you share through this website. This policy
                explains how information is collected, used and protected.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light">
                Information We Collect
              </h2>

              <ul className="mt-6 space-y-4 text-zinc-400 leading-8 list-disc pl-6">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Business information</li>
                <li>Consultation request details</li>
                <li>Technical information such as browser and device type</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light">
                How We Use Your Information
              </h2>

              <ul className="mt-6 space-y-4 text-zinc-400 leading-8 list-disc pl-6">
                <li>Respond to enquiries.</li>
                <li>Schedule consultations.</li>
                <li>Deliver requested services.</li>
                <li>Improve our website.</li>
                <li>Communicate regarding projects.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light">
                Data Protection
              </h2>

              <p className="mt-6 leading-8 text-zinc-400">
                Reasonable administrative and technical safeguards are used to
                protect your information against unauthorized access, alteration
                or disclosure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light">
                Third-Party Services
              </h2>

              <p className="mt-6 leading-8 text-zinc-400">
                LYNPHICS may use trusted third-party providers for website
                analytics, communication and scheduling. These providers only
                receive information necessary to perform their services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light">
                Your Rights
              </h2>

              <p className="mt-6 leading-8 text-zinc-400">
                You may request access, correction or deletion of your personal
                information by contacting LYNPHICS directly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light">
                Contact
              </h2>

              <p className="mt-6 leading-8 text-zinc-400">
                For privacy enquiries, please contact LYNPHICS using the contact
                information provided on this website.
              </p>
            </section>

          </div>
        </div>
      </Container>
    </section>
  );
}