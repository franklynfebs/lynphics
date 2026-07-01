import { Link } from "react-router-dom";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const links = [
  { name: "Home", path: "/" },
  { name: "Framework", path: "/framework" },
  { name: "About", path: "/about" },
  { name: "Insights", path: "/insights" },
  { name: "Consultation", path: "/consultation" },
];

export default function MobileMenu({
  open,
  onClose,
}: MobileMenuProps) {
  if (!open) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        bg-black/95
        backdrop-blur-xl
        lg:hidden
      "
    >
      <div className="flex h-full flex-col justify-center px-8">
        <nav className="space-y-8">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={onClose}
              className="
                block
                text-3xl
                font-light
                text-white
                transition-colors
                duration-300
                hover:text-[var(--accent)]
              "
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}