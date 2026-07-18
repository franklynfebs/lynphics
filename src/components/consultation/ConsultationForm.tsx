import { useState } from "react";
import Container from "../shared/Container";

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    full_name: "",
    business_name: "",
    email: "",
    phone: "",

    industry: "",
    company_size: "",
    website: "",

    business_challenge: "",

    investment_range: "",
    timeline: "",

    preferred_contact_method: "",

    referral_source: "",

    consultation_interests: [] as {
      category: string;
      interest: string;
    }[],
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);


const handleChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  >
) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};

const handleInterestChange = (
  category: string,
  interest: string,
  checked: boolean
) => {
  setFormData((prev) => {
    if (checked) {
      return {
        ...prev,
        consultation_interests: [
          ...prev.consultation_interests,
          { category, interest },
        ],
      };
    }

    return {
      ...prev,
      consultation_interests: prev.consultation_interests.filter(
        (item) =>
          !(
            item.category === category &&
            item.interest === interest
          )
      ),
    };
  });
};

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);
setSuccessMessage("");
setErrorMessage("");

  try {
const API_URL = import.meta.env.VITE_API_URL;
    console.log("MODE:", import.meta.env.MODE);
    console.log("ENV:", import.meta.env);
    console.log("API URL:", import.meta.env.VITE_API_URL);

    console.log("Submitting:");
    console.log(JSON.stringify(formData, null, 2));


const response = await fetch(
  `${API_URL}/consultations`,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  }
);
    
    const data = await response.json();

    console.log("Response Status:", response.status);
    console.log("Response Body:", data);

  
if (!response.ok) {
  console.error("Server Error:", data);

  setErrorMessage(
    data.message || "Unable to submit your consultation request. Please try again later."
  );

  return;
}
setErrorMessage("");
setSuccessMessage(
  "Thank you! Your consultation request has been received. We'll contact you within 24 hours."
);

setFormData({
  full_name: "",
  business_name: "",
  email: "",
  phone: "",
  industry: "",
  company_size: "",
  website: "",
  business_challenge: "",
  investment_range: "",
  timeline: "",
  preferred_contact_method: "",
  referral_source: "",
  consultation_interests: [],
});

console.log("Consultation submitted successfully:", data);
  } catch (error) {
    console.error("Error submitting consultation:", error);
     setSuccessMessage("");

     setErrorMessage(
    "Unable to connect to the server. Please try again later."
  );
  } finally { setIsSubmitting(false);
  }
};

  return (
    <section className="border-t border-zinc-900 py-32">
      <Container>
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
           {isSubmitting ? "Submitting..." : "Request Consultation"}
          </p>

          <h2 className="mb-4 text-4xl font-light">
            Let's Discuss Your Business
          </h2>

          <p className="mb-14 leading-8 text-zinc-400">
            Complete the form below and we'll review your business needs before
            arranging a consultation.
          </p>

          {successMessage && (
  <div className="mb-8 rounded-lg border border-green-500/30 bg-green-500/10 px-6 py-4 text-green-300">
    {successMessage}
  </div>
)}

{errorMessage && (
  <div className="mb-8 rounded-lg border border-red-500/30 bg-red-500/10 px-6 py-4 text-red-300">
    {errorMessage}
  </div>
)}

          <form
  onSubmit={handleSubmit}
  className="space-y-12"
>
            {/* =========================
                Contact Information
            ========================== */}

            <div className="space-y-8">

              <input
                type="text"
                name="full_name"
                 value={formData.full_name}
                   onChange={handleChange}
                placeholder="Full Name *"
                required
                className="w-full border-b border-zinc-800 bg-transparent py-4 text-lg outline-none transition-colors focus:border-cyan-400"
              />

              <input
                type="text"
                name="business_name"
                value={formData.business_name}
                  onChange={handleChange}
                placeholder="Business Name *"
                required
                className="w-full border-b border-zinc-800 bg-transparent py-4 text-lg outline-none transition-colors focus:border-cyan-400"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address *"
                required
                className="w-full border-b border-zinc-800 bg-transparent py-4 text-lg outline-none transition-colors focus:border-cyan-400"
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone / WhatsApp Number *"
                required
                className="w-full border-b border-zinc-800 bg-transparent py-4 text-lg outline-none transition-colors focus:border-cyan-400"
              />

            </div>

            {/* =========================
                Business Information
            ========================== */}

            <div className="grid gap-8 md:grid-cols-2">

              <select
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                className="border-b border-zinc-800 bg-black py-4 text-lg text-zinc-300 outline-none transition-colors focus:border-cyan-400"
              >
                <option value="" disabled>
                  Industry
                </option>

                <option value="Restaurant">Restaurant</option>
                <option value="Retail">Retail</option>
                <option value="Construction">Construction</option>
                <option value="Agriculture">Agriculture</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Education">Education</option>
                <option value="Professional Services">Professional Services</option>
                <option value="Hospitality">Hospitality</option>
                <option value="Technology">Technology</option>
                <option value="Finance">Finance</option>
                <option value="Real Estate">Real Estate</option>
                <option value="Media & Entertainment">Media & Entertainment</option>
                <option value="Government">Government</option>
                <option value="NGO / Development">NGO / Development</option>
                <option value="Other">Other</option>

              </select>

              <select
                name="company_size"
                value={formData.company_size}
                onChange={handleChange}
                className="border-b border-zinc-800 bg-black py-4 text-lg text-zinc-300 outline-none transition-colors focus:border-cyan-400"
              >
                <option value="" disabled>
                  Company Size
                </option>

                <option value="Just Me">Just Me</option>
                <option value="2-10 Employees">2–10 Employees</option>
                <option value="11-50 Employees">11–50 Employees</option>
                <option value="51-200 Employees">51–200 Employees</option>
                <option value="200+ Employees">200+ Employees</option>

              </select>

              <input
                type="url"
                name="website"
                placeholder="Website or Social Media (Optional)"
                className="w-full border-b border-zinc-800 bg-transparent py-4 text-lg outline-none transition-colors focus:border-cyan-400 md:col-span-2"
                value={formData.website}
                onChange={handleChange}
              />

            </div>

            {/* =========================
                Areas of Improvement
            ========================== */}

            <div>

              <p className="mb-8 text-sm uppercase tracking-[0.2em] text-zinc-500">
                What area would you like LYNPHICS to help improve?
              </p>

              <div className="space-y-10">

                {/* Presentation */}

                <div>

                  <h3 className="mb-4 text-lg text-white">
                    Presentation
                  </h3>

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
  checked={formData.consultation_interests.some(
    (interest) =>
      interest.category === "Presentation" &&
      interest.interest === item
  )}
  onChange={(e) =>
    handleInterestChange(
      "Presentation",
      item,
      e.target.checked
    )
  }
  className="h-4 w-4 accent-cyan-400"
/>
                        {item}
                      </label>
                    ))}

                  </div>

                </div>

                {/* Digital Presence */}

                <div>

                  <h3 className="mb-4 text-lg text-white">
                    Digital Presence
                  </h3>

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
  checked={formData.consultation_interests.some(
    (interest) =>
      interest.category === "Digital Presence" &&
      interest.interest === item
  )}
  onChange={(e) =>
    handleInterestChange(
      "Digital Presence",
      item,
      e.target.checked
    )
  }
  className="h-4 w-4 accent-cyan-400"
/>
                        {item}
                      </label>
                    ))}

                  </div>

                </div>

                {/* Operational Systems */}

                <div>

                  <h3 className="mb-4 text-lg text-white">
                    Operational Systems
                  </h3>

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
  checked={formData.consultation_interests.some(
    (interest) =>
      interest.category === "Operational Systems" &&
      interest.interest === item
  )}
  onChange={(e) =>
    handleInterestChange(
      "Operational Systems",
      item,
      e.target.checked
    )
  }
  className="h-4 w-4 accent-cyan-400"
/>
                        {item}
                      </label>
                    ))}

                  </div>

                </div>

                {/* Strategic Direction */}

                <div>

                  <h3 className="mb-4 text-lg text-white">
                    Strategic Direction
                  </h3>

                  <label className="flex items-center gap-3 text-zinc-300">

                   <input
  type="checkbox"
  checked={formData.consultation_interests.some(
    (interest) =>
      interest.category === "Strategic Direction" &&
      interest.interest === "Strategic Guidance"
  )}
  onChange={(e) =>
    handleInterestChange(
      "Strategic Direction",
      "Strategic Guidance",
      e.target.checked
    )
  }
  className="h-4 w-4 accent-cyan-400"
/>

                    I am unsure what we need and would like strategic guidance.

                  </label>

                </div>

              </div>

            </div>

            {/* =========================
                Business Challenge
            ========================== */}

            <div>

              <textarea
                name="business_challenge"
                rows={6}
                  value={formData.business_challenge}
                  onChange={handleChange}
                placeholder="Describe your business, the challenges you're currently facing, and what success would look like after this project."
                className="w-full resize-none border-b border-zinc-800 bg-transparent py-4 text-lg leading-8 outline-none transition-colors focus:border-cyan-400"
              />

            </div>

            {/* =========================
                Project Details
            ========================== */}

            <div className="grid gap-8 md:grid-cols-2">

              <select
                name="investment_range"
                value={formData.investment_range}
                onChange={handleChange}
                className="border-b border-zinc-800 bg-black py-4 text-lg text-zinc-300 outline-none transition-colors focus:border-cyan-400"
              >
               <option value="" disabled>
                  Expected Investment Range
                </option>  
<option value="Under Le3,000 ($130)">
  Under Le3,000 ($130)
</option>

<option value="Le3,000 - Le5,000 ($130-$217)">
  Le3,000 – Le5,000 ($130–$217)
</option>

<option value="Le5,000 - Le8,000 ($217-$348)">
  Le5,000 – Le8,000 ($217–$348)
</option>

<option value="Le8,000 - Le12,000 ($348-$522)">
  Le8,000 – Le12,000 ($348–$522)
</option>

<option value="Le12,000 - Le18,000 ($522-$783)">
  Le12,000 – Le18,000 ($522–$783)
</option>

<option value="Le18,000 - Le24,000 ($783-$1,044)">
  Le18,000 – Le24,000 ($783–$1,044)
</option>

<option value="Let's Discuss">
  Let's Discuss
</option>
              </select>

              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="border-b border-zinc-800 bg-black py-4 text-lg text-zinc-300 outline-none transition-colors focus:border-cyan-400"
              >
                <option value="" disabled>
                  Desired Timeline
                </option>

                <option value="Start Work Now">Start Work Now</option>
                <option value="Within 1 Week">Within 1 Week</option>
                <option value="Within 1 Month">Within 1 Month</option>
                <option value="1-3 Months">1–3 Months</option>
                <option value="3-6 Months">3–6 Months</option>
                <option value="Flexible">Flexible</option>

              </select>

            </div>

            {/* =========================
                Preferred Contact Method
            ========================== */}

            <div>

              <select
                name="preferred_contact_method"
                value={formData.preferred_contact_method}
                onChange={handleChange}
                className="w-full border-b border-zinc-800 bg-black py-4 text-lg text-zinc-300 outline-none transition-colors focus:border-cyan-400"
              >
                <option value="" disabled>
                  Preferred Contact Method
                </option>

                <option value="Email">Email</option>
                <option value="WhatsApp">WhatsApp</option>
                <option value="Phone Call">Phone Call</option>

              </select>

            </div>

            {/* =========================
                Referral Source
            ========================== */}

            <div>

              <select
                name="referral_source"
                value={formData.referral_source}
                onChange={handleChange}
                className="w-full border-b border-zinc-800 bg-black py-4 text-lg text-zinc-300 outline-none transition-colors focus:border-cyan-400"
              >
                <option value="" disabled>
                  How did you hear about LYNPHICS?
                </option>

                <option value="Google Search">Google Search</option>
                <option value="Instagram">Instagram</option>
                <option value="Facebook">Facebook</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="Referral">Referral</option>
                <option value="Returning Client">Returning Client</option>
                <option value="Other">Other</option>

              </select>

            </div>

            {/* =========================
                Submit
            ========================== */}

            <div className="pt-4">

              <button
    type="submit"
    disabled={isSubmitting}
    className="rounded-full border border-white bg-white px-10 py-4 text-sm uppercase tracking-[0.15em] text-black transition-all duration-300 hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-60"
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