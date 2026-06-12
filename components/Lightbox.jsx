"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.2 },
  },
};

const infoVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.15 } },
  exit: { opacity: 0, y: 8, transition: { duration: 0.15 } },
};

export default function Lightbox({ photos, index, onClose, onPrev, onNext }) {
  const photo = photos[index];

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <motion.div
      className="lightbox"
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <button className="lb-close" onClick={onClose}>
        ✕ close
      </button>
      <span className="lb-counter">
        {String(index + 1).padStart(2, "0")} /{" "}
        {String(photos.length).padStart(2, "0")}
      </span>
      <button className="lb-nav lb-prev" onClick={onPrev}>
        ← prev
      </button>

      <AnimatePresence mode="wait">
        <motion.img
          key={photo.id}
          className="lb-img"
          src={photo.src}
          alt={photo.title}
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        />
      </AnimatePresence>

      <button className="lb-nav lb-next" onClick={onNext}>
        next →
      </button>

      <AnimatePresence mode="wait">
        <motion.div
          key={photo.id}
          className="lb-info"
          variants={infoVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <p className="lb-title">{photo.title}</p>
          <p className="lb-caption">{photo.caption}</p>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
