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
            Effective Date: July 2026
          </p>

          <div className="mt-20 space-y-16">

            <section>
              <h2 className="text-2xl font-light">
                Introduction
              </h2>

              <p className="mt-6 leading-8 text-zinc-400">
                At LYNPHICS, protecting your information is part of building
                trust. This Privacy Policy explains what information we collect,
                how we use it, how we protect it, and the choices available to
                you when you use our website or request our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light">
                Information We Collect
              </h2>

              <p className="mt-6 leading-8 text-zinc-400">
                Depending on how you interact with our website, we may collect
                information including:
              </p>

              <ul className="mt-6 space-y-4 pl-6 text-zinc-400 leading-8 list-disc">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Business name</li>
                <li>Industry and company information</li>
                <li>Consultation requests and project requirements</li>
                <li>Communication history with LYNPHICS</li>
                <li>
                  Technical information such as browser type, device
                  information, pages visited and general usage statistics
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light">
                How We Use Your Information
              </h2>

              <p className="mt-6 leading-8 text-zinc-400">
                Information collected through this website may be used to:
              </p>

              <ul className="mt-6 space-y-4 pl-6 text-zinc-400 leading-8 list-disc">
                <li>Respond to enquiries and consultation requests.</li>
                <li>Evaluate potential projects.</li>
                <li>Communicate throughout engagements.</li>
                <li>Deliver our services.</li>
                <li>Improve the performance and usability of our website.</li>
                <li>Maintain business records and internal administration.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light">
                Cookies & Analytics
              </h2>

              <p className="mt-6 leading-8 text-zinc-400">
                LYNPHICS uses cookies and similar technologies to improve the
                browsing experience and understand how visitors interact with
                our website.
              </p>

              <p className="mt-6 leading-8 text-zinc-400">
                We currently use Google Analytics and Google Tag Manager to
                collect anonymous website usage information, such as pages
                visited, traffic sources, device types and general engagement.
                This information helps us improve the quality and effectiveness
                of our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light">
                Information Sharing
              </h2>

              <p className="mt-6 leading-8 text-zinc-400">
                LYNPHICS does not sell, rent or trade your personal information.
                Information may only be shared with trusted third-party service
                providers where necessary to operate our website, provide
                services, analyse website performance or communicate with
                clients.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light">
                Data Security
              </h2>

              <p className="mt-6 leading-8 text-zinc-400">
                We implement reasonable administrative, technical and
                organisational safeguards designed to protect your information
                from unauthorised access, disclosure, alteration or destruction.
                While we take security seriously, no method of internet
                transmission or electronic storage can be guaranteed to be
                completely secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light">
                Data Retention
              </h2>

              <p className="mt-6 leading-8 text-zinc-400">
                Personal information is retained only for as long as reasonably
                necessary to respond to enquiries, deliver services, maintain
                business records, comply with legal obligations or resolve
                disputes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light">
                Your Rights
              </h2>

              <p className="mt-6 leading-8 text-zinc-400">
                You may request access to the personal information we hold about
                you, request corrections where information is inaccurate, or
                request deletion of your information where applicable. We will
                respond to reasonable requests in accordance with applicable
                laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light">
                Changes to This Policy
              </h2>

              <p className="mt-6 leading-8 text-zinc-400">
                This Privacy Policy may be updated periodically to reflect
                changes to our services, technologies or legal obligations. Any
                updates will be published on this page together with the revised
                effective date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light">
                Contact
              </h2>

              <p className="mt-6 leading-8 text-zinc-400">
                If you have any questions regarding this Privacy Policy or how
                your information is handled, please contact LYNPHICS using the
                contact information provided on this website. Once our business
                email is active, privacy enquiries may also be directed to
                <span className="text-white"> info@lynphics.com</span>.
              </p>
            </section>

          </div>
        </div>
      </Container>
    </section>
  );
}