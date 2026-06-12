"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero({ photo }) {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const blur = useTransform(scrollYProgress, [0, 0.6, 1], [0, 0, 14]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.85, 0.35]);
  const brightness = useTransform(scrollYProgress, [0, 1], [0.78, 0.9]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <motion.section
      className="hero"
      id="hero-section"
      ref={sectionRef}
      style={{
        filter: useTransform(blur, (v) => `blur(${v.toFixed(1)}px)`),
        opacity,
      }}
    >
      <motion.img
        src={photo.src}
        alt={photo.title}
        style={{
          filter: useTransform(
            brightness,
            (b) => `grayscale(100%) contrast(1.1) brightness(${b.toFixed(2)})`
          ),
          y,
        }}
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      <div className="hero-overlay" />
      <motion.div
        className="hero-caption"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.5 }}
      >
        <p className="hero-index">001 / {photo.cat} series</p>
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          GHOST
        </motion.h1>
      </motion.div>
    </motion.section>
  );
}
