"use client";

import { motion } from "framer-motion";

const CATEGORIES = ["all", "fog", "water", "flora", "birds", "macro", "sky", "city", "animals"];

export default function FilterBar({ activeCat, onFilter }) {
  return (
    <motion.div
      className="filter-bar"
      id="filter-bar"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
    >
      {CATEGORIES.map((cat, i) => (
        <motion.button
          key={cat}
          className={`filter-btn${activeCat === cat ? " active" : ""}`}
          onClick={() => onFilter(cat)}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {cat}
        </motion.button>
      ))}
    </motion.div>
  );
}
