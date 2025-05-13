import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative w-full h-screen text-white overflow-hidden">
      {/* Shiny, motion background gradient + particles */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1f004d] via-[#3f007f] to-[#0f001f] animate-pulse z-0" />

      {/* Floating particles */}
      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-white/20 rounded-full blur-md animate-float"
          style={{
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            animationDuration: `${8 + Math.random() * 6}s`,
            animationDelay: `${Math.random() * 4}s`
          }}
        />
      ))}

      {/* Overlay blur */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md z-10" />

      {/* Main content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-heading glow-text mb-6"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          WELCOME TO ERNTMZ
        </motion.h1>

        <motion.p
          className="text-white/80 text-lg md:text-xl max-w-2xl mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Use code <span className="text-primary font-bold">ernn</span> to earn instant rakeback & rewards on Roobet. Compete in the leaderboard and stream with us live!
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-6 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a
            href="https://kick.com/erntmz"
            target="_blank"
            className="bg-primary text-black font-bold px-8 py-4 rounded-full hover:scale-105 transition text-lg shadow-xl"
          >
            🎥 Watch Stream on Kick
          </a>
          <a
            href="https://roobet.com/?ref=ernn"
            target="_blank"
            className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-full hover:bg-primary hover:text-black transition text-lg backdrop-blur-md flex items-center gap-2"
          >
            <img src="https://roobet.com/assets/r-NQNxh0.svg" alt="Roobet" className="w-6 h-6" />
            Sign Up on Roobet
          </a>
        </motion.div>

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
