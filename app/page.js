"use client";

import { useState, useCallback, useMemo } from "react";
import { AnimatePresence } from "framer-motion";
import PHOTOS from "../data/photos";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ScrollBridge from "../components/ScrollBridge";
import FilterBar from "../components/FilterBar";
import Gallery from "../components/Gallery";
import Lightbox from "../components/Lightbox";
import About from "../components/About";
import Footer from "../components/Footer";

export default function Home() {
  const [activeCat, setActiveCat] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const visiblePhotos = useMemo(
    () =>
      activeCat === "all"
        ? PHOTOS
        : PHOTOS.filter((p) => p.cat === activeCat),
    [activeCat]
  );

  const handleFilter = useCallback((cat) => {
    setActiveCat(cat);
  }, []);

  const openLightbox = useCallback((i) => {
    setLightboxIndex(i);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const prevPhoto = useCallback(() => {
    setLightboxIndex((prev) =>
      (prev - 1 + visiblePhotos.length) % visiblePhotos.length
    );
  }, [visiblePhotos.length]);

  const nextPhoto = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % visiblePhotos.length);
  }, [visiblePhotos.length]);

  return (
    <>
      <Navbar />
      <Hero photo={PHOTOS[0]} />
      <ScrollBridge />
      <FilterBar activeCat={activeCat} onFilter={handleFilter} />
      <Gallery photos={visiblePhotos} onOpenLightbox={openLightbox} />

      <AnimatePresence>
        {lightboxOpen && (
          <Lightbox
            photos={visiblePhotos}
            index={lightboxIndex}
            onClose={closeLightbox}
            onPrev={prevPhoto}
            onNext={nextPhoto}
          />
        )}
      </AnimatePresence>

      <About />
      <Footer />
    </>
  );
}
