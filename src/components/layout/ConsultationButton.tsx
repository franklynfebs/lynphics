import { Link } from "react-router-dom";

interface ConsultationButtonProps {
  className?: string;
}

export default function ConsultationButton({
  className = "",
}: ConsultationButtonProps) {
  return (
    <Link
      to="/consultation"
      className={`
        inline-flex
        items-center
        justify-center
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
        ${className}
      `}
    >
      Consultation
    </Link>
  );
}