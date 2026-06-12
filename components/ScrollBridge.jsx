"use client";

import { motion } from "framer-motion";

export default function ScrollBridge() {
  return (
    <motion.div
      className="bridge"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <span>
        scroll to explore
        <span className="bridge-arrow">↓</span>
      </span>
    </motion.div>
  );
}
