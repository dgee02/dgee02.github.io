import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

export default function TypewriterComponent() {
  const [showTypewriter, setShowTypewriter] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowTypewriter(true);
    }, 5000);
  }, []);

  return (
    <motion.h4 className="text-6xl xl:text-8xl font-bold my-14">
      Hello! I am{" "}
      <span style={{ display: "inline-block" }}>
        {showTypewriter && (
          <Typewriter
            options={{
              strings: [
                "Derek Gee.",
                "a dev.",
                "an artist.",
                "a gamer.",
                "a doer.",
              ],
              autoStart: true,
              loop: true,
              pauseFor: 2000,
              delay: 150,
              deleteSpeed: 150,
            }}
          />
        )}
      </span>
    </motion.h4>
  );
}
