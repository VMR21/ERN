import { motion } from "framer-motion";

const fakeData = [
  { username: "ErnTop1", amount: 72510 },
  { username: "ErnFan", amount: 60120 },
  { username: "DIDGuy", amount: 55300 },
];

export default function Leaderboard() {
  return (
    <div className="bg-dark text-white px-4 py-20 min-h-screen text-center">
      <motion.h1
        className="text-4xl md:text-6xl font-heading glow-text mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🏆 ErnTmz Leaderboard
      </motion.h1>

      <div className="max-w-3xl mx-auto space-y-6">
        {fakeData.map((p, i) => (
          <motion.div
            key={i}
            className="bg-white/5 border border-white/10 backdrop-blur p-6 rounded-xl shadow-xl hover:scale-[1.03] transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <h2 className="text-xl font-bold text-primary mb-1">#{i + 1} {p.username}</h2>
            <p className="text-white/80 font-mono text-sm">Wagered: ${p.amount.toLocaleString()}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
