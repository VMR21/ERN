import { motion } from "framer-motion";

const data = [
  { username: "ErnTop1", amount: 92500 },
  { username: "DripFan", amount: 79210 },
  { username: "DIDMaster", amount: 65100 },
];

export default function Leaderboard() {
  return (
    <div className="bg-black text-white px-6 py-20 min-h-screen text-center">
      <motion.h1
        className="text-4xl md:text-6xl font-heading glow-text mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🏆 Leaderboard
      </motion.h1>

      <div className="max-w-2xl mx-auto space-y-6">
        {data.map((user, i) => (
          <motion.div
            key={i}
            className="bg-white/5 p-6 rounded-xl backdrop-blur-lg shadow-lg hover:scale-[1.02] transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <h2 className="text-xl font-bold text-primary mb-1">#{i + 1} {user.username}</h2>
            <p className="text-white/80 font-mono">Wagered: ${user.amount.toLocaleString()}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
