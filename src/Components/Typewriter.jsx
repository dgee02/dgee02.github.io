import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import GraphemeSplitter from "grapheme-splitter";

export default function TypewriterComponent() {
  const [showTypewriter, setShowTypewriter] = useState(false);

  const stringSplitter = (string) => {
    const splitter = new GraphemeSplitter();
    return splitter.splitGraphemes(string);
  };

  useEffect(() => {
    setTimeout(() => {
      setShowTypewriter(true);
    }, 4500);
  }, []);

  return (
    <motion.h4 className="text-5xl xl:text-7xl font-bold my-10 z-40">
      <span
        style={{ display: "inline-block", position: "relative", zIndex: 40 }}
      >
        {showTypewriter && (
          <Typewriter
            options={{
              loop: true,
              autoStart: true,
              cursor: "|",
              delay: 125,
              pauseFor: 1500,
              stringSplitter,
              strings: ["Hi! 👋", "I'm Derek Gee", "👨‍💻 • 🎨 • 🎮"],
            }}
          />
        )}
      </span>
    </motion.h4>
  );
}
