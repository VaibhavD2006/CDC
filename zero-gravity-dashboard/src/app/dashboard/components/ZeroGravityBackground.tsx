"use client";
import { motion } from "framer-motion";

export function ZeroGravityBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute left-1/2 top-1/3 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />
      <motion.div
        className="absolute left-1/4 top-2/3 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl"
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
      />
    </div>
  );
}


