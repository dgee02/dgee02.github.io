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
      Hi!
      <span style={{ display: "inline-block" }}>
        {showTypewriter && (
          <Typewriter
            options={{
              cursor: "",
            }}
            onInit={(typewriter) => {
              typewriter.typeString("\xa0I'm Derek Gee").pauseFor(2000).start();
            }}
          />
        )}
      </span>
    </motion.h4>
  );
}
