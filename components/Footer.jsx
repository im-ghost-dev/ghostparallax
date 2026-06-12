"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <>
      <div className="rule" />
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <a href="mailto:pingme@ghostparallax.qzz.io">
          pingme@ghostparallax.qzz.io
        </a>
        <span className="copy">© 2026 GHOST</span>
      </motion.footer>
    </>
  );
}
