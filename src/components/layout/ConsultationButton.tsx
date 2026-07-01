import { Link } from "react-router-dom";

export default function ConsultationButton() {
  return (
    <Link
      to="/consultation"
      className="
        inline-flex
        items-center
        rounded-full
        border
        border-zinc-800
        px-5
        py-2.5
        text-sm
        font-medium
        transition-all
        duration-300
        hover:border-zinc-600
      "
    >
      Consultation
    </Link>
  );
}