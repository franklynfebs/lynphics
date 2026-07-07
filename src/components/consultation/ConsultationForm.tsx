import Container from "../shared/Container";

export default function ConsultationForm() {
  return (
    <section className="border-t border-zinc-900 py-32">
      <Container>
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Request Consultation
          </p>

          <h2 className="mb-4 text-4xl font-light">
            Let's Discuss Your Business
          </h2>

          <p className="mb-14 leading-8 text-zinc-400">
            Complete the form below and we'll review your business needs before
            arranging a consultation.
          </p>

          <form className="space-y-10">

            {/* Contact Information */}

            <div className="space-y-8">

              <input
                type="text"
                placeholder="Full Name *"
                required
                className="w-full border-b border-zinc-800 bg-transparent py-4 text-lg outline-none transition-colors focus:border-cyan-400"
              />

              <input
                type="text"
                placeholder="Business Name *"
                required
                className="w-full border-b border-zinc-800 bg-transparent py-4 text-lg outline-none transition-colors focus:border-cyan-400"
              />

              <input
                type="email"
                placeholder="Business Email *"
                required
                className="w-full border-b border-zinc-800 bg-transparent py-4 text-lg outline-none transition-colors focus:border-cyan-400"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border-b border-zinc-800 bg-transparent py-4 text-lg outline-none transition-colors focus:border-cyan-400"
              />

            </div>

            {/* Business Information */}

            <div className="grid gap-8 md:grid-cols-2">

              <select
                defaultValue=""
                className="border-b border-zinc-800 bg-black py-4 text-lg text-zinc-300 outline-none transition-colors focus:border-cyan-400"
              >
                <option value="" disabled>
                  Industry
                </option>
                <option>Restaurant</option>
                <option>Retail</option>
                <option>Construction</option>
                <option>Healthcare</option>
                <option>Education</option>
                <option>Professional Services</option>
                <option>Hospitality</option>
                <option>Technology</option>
                <option>Non-Profit</option>
                <option>Other</option>
              </select>

              <select
                defaultValue=""
                className="border-b border-zinc-800 bg-black py-4 text-lg text-zinc-300 outline-none transition-colors focus:border-cyan-400"
              >
                <option value="" disabled>
                  Company Size
                </option>
                <option>Just Me</option>
                <option>2–10 Employees</option>
                <option>11–50 Employees</option>
                <option>51–200 Employees</option>
                <option>200+ Employees</option>
              </select>

            </div>

            {/* Areas of Improvement */}

            <div>

              <p className="mb-8 text-sm uppercase tracking-[0.2em] text-zinc-500">
                What area would you like LYNPHICS to help improve?
              </p>

              <div className="space-y-10">

                <div>
                  <h3 className="mb-4 text-lg text-white">Presentation</h3>

                  <div className="grid gap-4 sm:grid-cols-2">

                    {[
                      "Brand identity and visual direction",
                      "Business presentations and professional materials",
                      "Brand messaging and positioning",
                      "Improving how customers perceive our business",
                    ].map((item) => (
                      <label
                        key={item}
                        className="flex items-center gap-3 text-zinc-300"
                      >
                        <input
                          type="checkbox"
                          className="h-4 w-4 accent-cyan-400"
                        />
                        {item}
                      </label>
                    ))}

                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-lg text-white">Digital Presence</h3>

                  <div className="grid gap-4 sm:grid-cols-2">

                    {[
                      "Website design and development",
                      "Improving online credibility",
                      "Digital platforms and customer experience",
                      "Strengthening online visibility",
                    ].map((item) => (
                      <label
                        key={item}
                        className="flex items-center gap-3 text-zinc-300"
                      >
                        <input
                          type="checkbox"
                          className="h-4 w-4 accent-cyan-400"
                        />
                        {item}
                      </label>
                    ))}

                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-lg text-white">Operational Systems</h3>

                  <div className="grid gap-4 sm:grid-cols-2">

                    {[
                      "Business process automation",
                      "Internal management systems",
                      "Improving workflow efficiency",
                      "Custom software solutions",
                    ].map((item) => (
                      <label
                        key={item}
                        className="flex items-center gap-3 text-zinc-300"
                      >
                        <input
                          type="checkbox"
                          className="h-4 w-4 accent-cyan-400"
                        />
                        {item}
                      </label>
                    ))}

                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-lg text-white">Strategic Direction</h3>

                  <label className="flex items-center gap-3 text-zinc-300">
                    <input
                      type="checkbox"
                      className="h-4 w-4 accent-cyan-400"
                    />
                    I am unsure what we need and would like strategic guidance.
                  </label>

                </div>

              </div>

            </div>

            {/* Budget & Timeline */}

            <div className="grid gap-8 md:grid-cols-2">

              <select
                defaultValue=""
                className="border-b border-zinc-800 bg-black py-4 text-lg text-zinc-300 outline-none transition-colors focus:border-cyan-400"
              >
                <option value="" disabled>
                  Expected Investment Range
                </option>
                <option>Under Le3,000</option>
                <option>Le3,000 – Le5,000</option>
                <option>Le5,000 – Le8,000</option>
                <option>Le12,000 – Le15,000</option>
                <option>Le18,000 – Le24,000</option>
                <option>Let's Discuss</option>
              </select>

              <select
                defaultValue=""
                className="border-b border-zinc-800 bg-black py-4 text-lg text-zinc-300 outline-none transition-colors focus:border-cyan-400"
              >
                <option value="" disabled>
                  Desired Timeline
                </option>
                <option>Immediately</option>
                <option>Within 1 Month</option>
                <option>1–3 Months</option>
                <option>3–6 Months</option>
                <option>Flexible</option>
              </select>

            </div>

            {/* Referral Source */}

            <div>

              <select
                defaultValue=""
                className="w-full border-b border-zinc-800 bg-black py-4 text-lg text-zinc-300 outline-none transition-colors focus:border-cyan-400"
              >
                <option value="" disabled>
                  How did you hear about LYNPHICS?
                </option>

                <option>Google Search</option>
                <option>Instagram</option>
                <option>Facebook</option>
                <option>Returning Client</option>
                <option>Other</option>

              </select>

            </div>

            {/* Business Challenge */}

            <div>

              <textarea
                rows={6}
                placeholder="Describe your business, the challenges you're currently facing, and what success would look like after this project."
                className="w-full resize-none border-b border-zinc-800 bg-transparent py-4 text-lg leading-8 outline-none transition-colors focus:border-cyan-400"
              />

            </div>

            {/* Submit */}

            <div className="pt-4">

              <button
                type="submit"
                className="rounded-full border border-white bg-white px-10 py-4 text-sm uppercase tracking-[0.15em] text-black transition-all duration-300 hover:bg-zinc-200"
              >
                Request Consultation
              </button>

            </div>

          </form>
        </div>
      </Container>
    </section>
  );
}