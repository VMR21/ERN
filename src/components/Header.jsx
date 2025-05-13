import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between bg-black/60 backdrop-blur border-b border-white/10">
      <div className="text-2xl font-heading text-primary">ErnTmz</div>
      <nav className="flex gap-6 text-white text-sm font-medium">
        <Link to="/" className="hover:text-primary transition">Home</Link>
        <Link to="/leaderboard" className="hover:text-primary transition">Leaderboard</Link>
        <a href="https://roobet.com/?ref=ernn" target="_blank" className="hover:text-primary transition">Roobet</a>
        <a href="https://kick.com/erntmz" target="_blank" className="hover:text-primary transition">Kick Stream</a>
      </nav>
    </header>
  );
}
