"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Wind } from "react-feather";

export default function Footer() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="flex flex-col gap-y-3 items-center text-white select-none my-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <span className="text-xs">Anyway the wind blows</span>
        <Wind className="text-white" size={20} />
      </motion.div>
    </AnimatePresence>
  );
}
