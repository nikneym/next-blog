"use client";
import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode } from "react";
import Footer from "./Footer";

interface Props {
  children?: ReactNode;
}

export default function MainWrapper({ children }: Props) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="main-wrapper"
        initial={{ opacity: 0, bottom: 25 }}
        animate={{ opacity: 1, bottom: 0 }}
        transition={{ type: "spring", bounce: 0.2 }}
        key="modal"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
