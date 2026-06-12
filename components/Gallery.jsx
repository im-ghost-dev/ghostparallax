"use client";

import { motion, AnimatePresence } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.07,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.97,
    transition: { duration: 0.25 },
  },
};

export default function Gallery({ photos, onOpenLightbox }) {
  return (
    <div className="gallery" id="gallery">
      <AnimatePresence mode="popLayout">
        {photos.map((photo, i) => (
          <motion.div
            key={photo.id}
            className="gallery-item"
            custom={i}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            layout
            onClick={() => onOpenLightbox(i)}
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <img src={photo.src} alt={photo.title} loading="lazy" />
            <div className="item-meta">
              <p className="item-title">{photo.title}</p>
              <p className="item-cat">{photo.cat}</p>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
