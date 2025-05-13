import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur border-b border-white/10">
      <div className="px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-heading text-primary">ErnTmz</div>

        {/* Hamburger */}
        <button
          className="text-white md:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-white text-sm font-medium">
          <Link to="/" className="hover:text-primary transition">Home</Link>
          <Link to="/leaderboard" className="hover:text-primary transition">Leaderboard</Link>
          <a href="https://roobet.com/?ref=ernn" target="_blank" className="hover:text-primary transition">Roobet</a>
          <a href="https://kick.com/erntmz" target="_blank" className="hover:text-primary transition">Kick Stream</a>
        </nav>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 space-y-3 text-white text-sm font-medium">
          <Link to="/" className="block hover:text-primary transition" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/leaderboard" className="block hover:text-primary transition" onClick={() => setOpen(false)}>Leaderboard</Link>
          <a href="https://roobet.com/?ref=ernn" target="_blank" className="block hover:text-primary transition">Roobet</a>
          <a href="https://kick.com/erntmz" target="_blank" className="block hover:text-primary transition">Kick Stream</a>
        </div>
      )}
    </header>
  );
}
