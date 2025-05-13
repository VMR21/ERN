import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative w-full h-screen text-white overflow-hidden">
      {/* Dynamic Background */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center scale-105 animate-slowZoom"
        style={{ backgroundImage: "url('/abstract-technological-background.jpg')" }}
      />

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <motion.h1
          className="text-4xl md:text-7xl font-heading glow-text leading-tight"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          ErnTmz Leaderboard Arena
        </motion.h1>

        <motion.p
          className="text-white/80 text-lg md:text-2xl mt-6 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Use code <span className="text-primary font-bold">b4ng</span> to compete. Top 10 win real rewards. Glory awaits.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <a
            href="/leaderboard"
            className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-full hover:bg-primary hover:text-black transition shadow backdrop-blur-md"
          >
            View Leaderboard
          </a>
          <a
            href="/rewards"
            className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-full hover:bg-primary hover:text-black transition shadow backdrop-blur-md"
          >
            Rewards
          </a>
        </motion.div>

        {/* Social Links */}
        <div className="absolute bottom-6 w-full text-white/60 text-sm">
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://tiktok.com/@arentopg" target="_blank" className="hover:text-primary transition">TikTok</a>
            <a href="https://youtube.com/ern_did" target="_blank" className="hover:text-primary transition">YouTube</a>
            <a href="https://instagram.com/ern.did" target="_blank" className="hover:text-primary transition">Instagram</a>
            <a href="https://kick.com/erntmz" target="_blank" className="hover:text-primary transition">Kick</a>
            <a href="https://discord.gg/erndid" target="_blank" className="hover:text-primary transition">Discord</a>
          </div>
        </div>
      </div>
    </div>
  );
}
