import { motion } from "framer-motion";

export default function Leaderboard() {
  return (
    <div className="relative w-full h-screen text-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1f004d] via-[#3f007f] to-[#0f001f] animate-pulse z-0" />

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-white/20 rounded-full blur-md animate-float"
          style={{
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            animationDuration: `${6 + Math.random() * 6}s`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}

      {/* Overlay blur */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md z-10" />

      {/* Centered Coming Soon Message */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-heading glow-text mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Monthly Leaderboard
        </motion.h1>

        <motion.p
          className="text-white/80 text-lg md:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Coming soon. Be ready to rise to the top.
        </motion.p>
      </div>
    </div>
  );
}
