import { Link } from "react-router-dom";
import Container from "../shared/Container";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Mail } from "lucide-react";
import logo from "../../assets/logo/symbolLynphics.png";

const navigation = [
  { name: "Home", path: "/" },
  { name: "Framework", path: "/framework" },
  { name: "About", path: "/about" },
  { name: "Insights", path: "/insights" },
  { name: "Consultation", path: "/consultation" },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 py-24">
      <Container>
        <div className="grid gap-20 lg:grid-cols-[1.5fr_1.5fr]">
          {/* Left Side */}
          <div>
        
          <Link to="/" className="flex h-20 items-center justify-between">
            <img src={logo} alt="LYNPHICS" className="h-15 w-auto" />
          </Link>

            <p className="mt-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
              Business Modernization Company
            </p>

            <p className="mt-8 max-w-lg text-lg leading-8 text-zinc-400">
              Strengthening trust through systems, presentation, and
              modernization.
            </p>
          </div>

          {/* Right Side */}
          <div className="grid gap-16 sm:grid-cols-2">
            {/* Navigation */}
            <div>
              <p className="mb-8 text-sm uppercase tracking-[0.3em] text-zinc-500">
                Navigation
              </p>

              <nav className="flex flex-col gap-5">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="
                      text-lg
                      text-zinc-400
                      transition-colors
                      duration-300
                      hover:text-white
                    "
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Connect */}
            <div>
              <p className="mb-8 text-sm uppercase tracking-[0.3em] text-zinc-500">
                Connect
              </p>

              <div className="flex flex-col gap-5">
                <a
                  href="https://instagram.com/lynphics"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    flex
                    items-center
                    gap-3
                    text-lg
                    text-zinc-400
                    transition-colors
                    duration-300
                    hover:text-white
                  "
                >
                  <FaInstagram size={18} />
                  <span>Instagram</span>
                </a>

                <a
                  href="https://wa.me/23272831086"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    flex
                    items-center
                    gap-3
                    text-lg
                    text-zinc-400
                    transition-colors
                    duration-300
                    hover:text-white
                  "
                >
                  <FaWhatsapp size={18} />
                  <span>WhatsApp</span>
                </a>

                <a
                  href="mailto:infolynphics@gmail.com"
                  className="
                    flex
                    items-center
                    gap-3
                    text-lg
                    text-zinc-400
                    transition-colors
                    duration-300
                    hover:text-white
                  "
                >
                  <Mail size={18} />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div
          className="
            mt-20
            border-t
            border-zinc-900
            pt-8
            flex
            flex-col
            gap-4
            text-sm
            text-zinc-500
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <p>© 2026 LYNPHICS. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-zinc-500">
  <Link
    to="/privacy"
    className="transition-colors hover:text-white"
  >
    Privacy Policy
  </Link>

  <Link
    to="/terms"
    className="transition-colors hover:text-white"
  >
    Terms of Use
  </Link>
</div>
          <p>Modernization Begins With Trust.</p>
        </div>
      </Container>
    </footer>
  );
}