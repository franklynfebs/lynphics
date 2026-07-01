import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";

export default function MainLayout() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />
      <Outlet />
    </main>
  );
}