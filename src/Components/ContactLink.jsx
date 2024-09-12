import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ContactLink({ Image, href, alt }) {
  const [isHovered, setIsHovered] = useState(false);
  const [jiggle, setJiggle] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setJiggle(true);
      setTimeout(() => setJiggle(false), 1000);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.a
      href={href}
      target="_blank"
      transition={{ duration: 0.3, ease: "linear" }}
      whileHover={{ scale: 1.15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.img
        className="max-h-28 px-8 pt-8"
        src={Image}
        alt={alt}
        style={{
          pointerEvents: "none",
          filter:
            isHovered || jiggle
              ? "drop-shadow(0 0 10px rgba(184, 61, 186, 0.8))"
              : "none",
          transition: "filter 0.3s linear",
        }}
        animate={isHovered || jiggle ? { rotate: [0, 5, -5, 5, -5, 0] } : {}}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
    </motion.a>
  );
}
