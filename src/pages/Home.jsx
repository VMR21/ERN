import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 bg-dark text-white overflow-hidden">
      <motion.img
        src="https://files.kick.com/images/user/1549030/profile_image/conversion/e65879b5-3878-4a4b-81a7-15387185baef-fullsize.webp"
        alt="ErnTmz Logo"
        className="w-32 h-32 rounded-full border border-white/20 shadow-xl mb-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      <motion.h1
        className="text-4xl md:text-6xl font-heading glow-text mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Welcome to ErnTmz
      </motion.h1>

      <motion.p
        className="text-white/70 max-w-xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Your source for premium content. Join the stream, check the leaderboard, and follow Ern across the platforms.
      </motion.p>

      <motion.div
        className="flex flex-wrap gap-4 justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <a href="https://kick.com/erntmz" target="_blank" className="bg-primary text-black font-bold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition">🎥 Kick</a>
        <a href="https://tiktok.com/@arentopg" target="_blank" className="bg-white/10 border border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-primary hover:text-black transition">TikTok</a>
        <a href="https://instagram.com/ern.did" target="_blank" className="bg-white/10 border border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-primary hover:text-black transition">Instagram</a>
        <a href="https://youtube.com/ern_did" target="_blank" className="bg-white/10 border border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-primary hover:text-black transition">YouTube</a>
        <a href="https://discord.gg/erndid" target="_blank" className="bg-white/10 border border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-primary hover:text-black transition">Discord</a>
      </motion.div>
    </div>
  );
}
