import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";

const Toast = ({ message }: { message: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-lg border border-[#E2768A]/40 bg-[#1E1E1E] px-5 py-4 text-sm text-white shadow-lg backdrop-blur-md"
    >
      <BadgeCheck size={20} className="text-[#E2768A]" />
      <span className="font-medium text-white">{message}</span>
    </motion.div>
  );
};

export default Toast;
