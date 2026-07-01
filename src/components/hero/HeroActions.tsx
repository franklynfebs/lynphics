import { Link } from "react-router-dom";

export default function HeroActions() {
  return (
    <div className="mt-12 flex flex-col gap-4 sm:flex-row">
      <Link
        to="/consultation"
        className="
          inline-flex
          items-center
          justify-center
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
        Consultation
      </Link>

      <Link
        to="/framework"
        className="
          inline-flex
          items-center
          justify-center
          rounded-full
          border
          border-zinc-800
          px-8
          py-4
          text-sm
          uppercase
          tracking-[0.15em]
          text-white
          transition-colors
          duration-300
          hover:border-white
        "
      >
        Explore Framework
      </Link>
    </div>
  );
}