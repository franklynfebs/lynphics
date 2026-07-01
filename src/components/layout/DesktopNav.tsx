import { NavLink } from "react-router-dom";

const links = [
  { label: "Home", path: "/" },
  { label: "Framework", path: "/framework" },
  { label: "About", path: "/about" },
  { label: "Insights", path: "/insights" },
];

export default function DesktopNav() {
  return (
    <nav className="hidden items-center gap-10 lg:flex">
      {links.map((link) => (
        <NavLink
  key={link.label}
  to={link.path}
  className={({ isActive }) =>
    `
    relative
    pb-2
    text-sm
    uppercase
    tracking-[0.12em]
    transition-colors
    duration-300
    ${
      isActive
        ? "text-white"
        : "text-zinc-400 hover:text-white"
    }

    after:absolute
    after:left-0
    after:-bottom-0.5
    after:h-px
    after:w-0
    after:bg-[var(--accent)]
    after:transition-all
    after:duration-300

    hover:after:w-full
    ${isActive ? "after:w-full" : ""}
    `
  }
>
  {link.label}
</NavLink>
      ))}
    </nav>
  );
}