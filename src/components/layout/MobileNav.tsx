import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ConsultationButton from "./ConsultationButton";

const links = [
  { label: "Home", path: "/" },
  { label: "Framework", path: "/framework" },
  { label: "About", path: "/about" },
  { label: "Insights", path: "/insights" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="text-white"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {open && (
        <div
          className="
            absolute
            left-0
            right-0
            top-20
            border-b
            border-zinc-900
            bg-black/95
            backdrop-blur-xl
          "
        >
          <nav className="flex flex-col p-8">
            {links.map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                onClick={() => setOpen(false)}
                className="
                  py-4
                  text-lg
                  text-zinc-400
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                {link.label}
              </NavLink>
            ))}

            <div className="mt-6 border-t border-zinc-800 pt-6">
              <ConsultationButton className="flex w-full justify-center" />
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}