import { Link } from "react-router-dom";

import Container from "../shared/Container";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import ConsultationButton from "./ConsultationButton";
import useNavbarScroll from "../../hooks/useNavbarScroll";

import logo from "../../assets/logo/lynphics-logo.png";

export default function Navbar() {
  const scrolled = useNavbarScroll();

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${
          scrolled
            ? "bg-black/70 border-b border-zinc-900 backdrop-blur-xl"
            : "bg-transparent"
        }
      `}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="LYNPHICS" className="h-10 w-auto" />
          </Link>

          <div className="flex items-center gap-8">
            <DesktopNav />
            <ConsultationButton />
            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  );
}