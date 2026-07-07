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
                className="border-b border-zinc-800 bg-black py-4 text-lg text-zinc-300 outline-none transition-colors focus:border-cyan-400"
                defaultValue=""
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
                className="border-b border-zinc-800 bg-black py-4 text-lg text-zinc-300 outline-none transition-colors focus:border-cyan-400"
                defaultValue=""
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

            {/* Services */}

            <div>

              <p className="mb-5 text-sm uppercase tracking-[0.2em] text-zinc-500">
                Services Required
              </p>

              <div className="grid gap-4 sm:grid-cols-2">

                {[
                  "Branding",
                  "Website",
                  "Business Presentation",
                  "Operational Systems",
                  "Digital Presence",
                  "Business Strategy",
                  "Complete Business Modernization",
                ].map((service) => (
                  <label
                    key={service}
                    className="flex items-center gap-3 text-zinc-300"
                  >
                    <input
                      type="checkbox"
                      className="h-4 w-4 accent-cyan-400"
                    />
                    {service}
                  </label>
                ))}

              </div>

            </div>

            {/* Budget & Timeline */}

            <div className="grid gap-8 md:grid-cols-2">

              <select
                className="border-b border-zinc-800 bg-black py-4 text-lg text-zinc-300 outline-none transition-colors focus:border-cyan-400"
                defaultValue=""
              >
                <option value="" disabled>
                  Estimated Budget
                </option>
                <option>Under $500</option>
                <option>$500 – $1,000</option>
                <option>$1,000 – $3,000</option>
                <option>$3,000 – $10,000</option>
                <option>Let's Discuss</option>
              </select>

              <select
                className="border-b border-zinc-800 bg-black py-4 text-lg text-zinc-300 outline-none transition-colors focus:border-cyan-400"
                defaultValue=""
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

            {/* Business Challenge */}

            <div>

              <textarea
                rows={6}
                placeholder="Tell us about your business, your current challenges, and what you'd like to improve."
                className="w-full border-b border-zinc-800 bg-transparent py-4 text-lg leading-8 outline-none resize-none transition-colors focus:border-cyan-400"
              />

            </div>

            {/* Submit */}

            <div className="pt-4">

              <button
                type="submit"
                className="
                  rounded-full
                  border
                  border-white
                  bg-white
                  px-10
                  py-4
                  text-sm
                  uppercase
                  tracking-[0.15em]
                  text-black
                  transition-all
                  duration-300
                  hover:bg-zinc-200
                "
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