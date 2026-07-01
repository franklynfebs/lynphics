import { Link } from "react-router-dom";
import logo from "../../assets/logo/symbolLynphics.png";

export default function ConsultationSignature() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="border-t border-zinc-900 pt-16">
          <div className="flex flex-col items-center text-center">
            <Link
              to="/"
              className="
                transition-opacity
                duration-300
                hover:opacity-100
                opacity-80
              "
            >
              <img
                src={logo}
                alt="LYNPHICS"
                className="h-6 w-auto"
              />
            </Link>

            <p
              className="
                mt-5
                text-sm
                uppercase
                tracking-[0.25em]
                text-zinc-500
              "
            >
              Modernization Begins With Trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}