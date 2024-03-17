import React, { useState } from "react";
import { motion } from "framer-motion";

function ContactLink({ Image, href, alt }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={href}
      target="_blank"
      transition={{ duration: 0.3, ease: "linear" }}
      whileHover={{ scale: 1.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ display: "inline-block" }}
    >
      <motion.img
        className="max-h-28 px-8 pt-8"
        src={Image}
        alt={alt}
        style={{
          pointerEvents: "none",
          filter: isHovered
            ? "drop-shadow(0 0 10px rgba(184, 61, 186, 0.8))"
            : "none",
          transition: "filter 0.3s linear",
        }}
      />
    </motion.a>
  );
}

export default ContactLink;
