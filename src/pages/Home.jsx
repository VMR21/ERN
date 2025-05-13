import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 text-white overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
      >
        <source src="https://cdn.coverr.co/videos/coverr-space-walk-4047/1080p.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/70 z-10" />

      <div className="relative z-20">
        <motion.img
          src="https://files.kick.com/images/user/1549030/profile_image/conversion/e65879b5-3878-4a4b-81a7-15387185baef-fullsize.webp"
          alt="logo"
          className="w-24 h-24 rounded-full mb-6 border border-white/10 shadow-xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.h1
          className="text-4xl md:text-6xl font-heading glow-text mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to ErnTmz
        </motion.h1>

        <motion.p
          className="text-white/70 mb-10 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Follow Ern across the net. Join the stream, check the leaderboard, and vibe with the community.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-4">
          <a href="https://kick.com/erntmz" target="_blank" className="bg-primary text-black font-bold px-6 py-3 rounded-full hover:scale-105 transition shadow-xl">Kick</a>
          <a href="https://tiktok.com/@arentopg" target="_blank" className="btn">TikTok</a>
          <a href="https://instagram.com/ern.did" target="_blank" className="btn">Instagram</a>
          <a href="https://youtube.com/ern_did" target="_blank" className="btn">YouTube</a>
          <a href="https://discord.gg/erndid" target="_blank" className="btn">Discord</a>
        </div>
      </div>
    </div>
  );
}
