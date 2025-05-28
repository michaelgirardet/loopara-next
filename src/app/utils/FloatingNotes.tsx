import { motion } from "framer-motion";

const noteVariants = {
  float: {
    y: [-20, -40, -20],
    x: [0, 10, -5, 0],
    rotate: [0, 5, -3, 0],
    transition: {
      duration: 4,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
};

const FloatingNote = ({ left, top, delay }: { left: string; top: string; delay: number }) => {
  const symbols = ["\u266A", "\u266B", "\u266C", "\u2669"];
  const note = symbols[Math.floor(Math.random() * symbols.length)];

  return (
    <motion.div
      className="absolute text-2xl text-white/10"
      style={{ left, top }}
      variants={noteVariants}
      animate="float"
      transition={{ delay, duration: 4 + Math.random() * 2 }}
    >
      {note}
    </motion.div>
  );
};

export default FloatingNote;
