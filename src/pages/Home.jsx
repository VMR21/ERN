import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative w-full h-screen bg-black text-white overflow-hidden flex flex-col justify-center items-center">
      {/* Background glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00fff0]/10 via-[#0fffc3]/5 to-[#3fffc0]/10 blur-2xl" />

      {/* Headline */}
      <motion.h1
        className="text-4xl md:text-7xl font-heading glow-text text-center z-10 leading-tight px-4"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        ErnTmz Leaderboard Arena
      </motion.h1>

      <motion.p
        className="text-white/70 text-lg md:text-2xl mt-6 max-w-2xl text-center px-4 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        Use code <span className="text-primary font-bold">b4ng</span> on Stake to enter. Compete. Dominate. Top 10 earn cash, glory & rewards.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="flex flex-wrap gap-4 mt-10 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <a href="/leaderboard" className="bg-primary text-black font-bold px-8 py-4 rounded-full hover:scale-105 transition shadow-xl text-lg">
          View Leaderboard
        </a>
        <a href="/rewards" className="border border-white text-white px-8 py-4 rounded-full hover:bg-primary hover:text-black transition shadow text-lg">
          Rewards
        </a>
      </motion.div>

      {/* Footer Links */}
      <div className="absolute bottom-4 text-sm text-white/60 text-center px-4">
        <div className="flex flex-wrap justify-center gap-4">
          <a href="https://tiktok.com/@arentopg" target="_blank" className="hover:text-primary transition">TikTok</a>
          <a href="https://youtube.com/ern_did" target="_blank" className="hover:text-primary transition">YouTube</a>
          <a href="https://instagram.com/ern.did" target="_blank" className="hover:text-primary transition">Instagram</a>
          <a href="https://kick.com/erntmz" target="_blank" className="hover:text-primary transition">Kick</a>
          <a href="https://discord.gg/erndid" target="_blank" className="hover:text-primary transition">Discord</a>
        </div>
      </div>
    </div>
  );
}
