import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

export default function TypewriterComponent() {
  const [showTypewriter, setShowTypewriter] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowTypewriter(true);
    }, 4500);
  }, []);

  return (
    <motion.h4 className="text-6xl xl:text-8xl font-bold my-14">
      {/* Hi! */}
      <span style={{ display: "inline-block" }}>
        {showTypewriter && (
          <Typewriter
            options={{
              cursor: "|",
              delay: 100,
            }}
            onInit={(typewriter) => {
              typewriter
                .pauseFor(1000)
                .typeString("Hi! 👋")
                .pauseFor(1000)
                .deleteAll()
                // .typeString("\xa0I'▓ ")
                // .typeString("█▀▄▌░▒▓")
                // .deleteChars(7)
                // .typeString("D█▒▄▀")
                // .typeString("▀▓e")
                .pauseFor(1000)
                // .deleteChars(8)
                .typeString("I'm Derek ")
                // .typeString("▓▒░")
                // .deleteChars(3)
                // .pauseFor(500)
                // .deleteChars(3)
                .typeString("Gee")
                .start();
            }}
          />
        )}
      </span>
    </motion.h4>
  );
}
