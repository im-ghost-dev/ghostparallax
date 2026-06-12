"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav>
      <motion.a
        className="nav-name"
        href="#"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Ghost
      </motion.a>
      <motion.span
        className="nav-right"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Bangalore, India
      </motion.span>
    </nav>
  );
}
