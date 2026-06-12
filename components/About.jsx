"use client";

import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

export default function About() {
  return (
    <section className="about">
      <motion.p
        className="about-label"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        // about
      </motion.p>
      <div className="about-body">
        <motion.p
          custom={0}
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <span className="hi">
            I photograph what most people walk past.
          </span>{" "}
          A spider web catching morning light. A stray dog with a
          philosopher&apos;s gaze. Fog turning a radio tower into a ghost of
          itself.
        </motion.p>
        <motion.p
          custom={1}
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          Based in Bangalore, I&apos;ve been quietly building an archive of the
          city and its edges — the waterfalls an hour out, the birds on the
          windowsill, the street at 2am when the lights are on and no one is
          inside.
        </motion.p>
        <motion.p
          custom={2}
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          Everything here is shot on a phone. No DSLR, no studio — just
          noticing things at the right moment and being close enough to the
          ground.
        </motion.p>
        <motion.p
          custom={3}
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          Black and white isn&apos;t a filter. It&apos;s how I see — stripped
          of colour, what remains is texture, weight, and time.
        </motion.p>
      </div>
    </section>
  );
}
