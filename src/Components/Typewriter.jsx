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
    <motion.h4 className="text-6xl xl:text-8xl font-bold my-14 z-40">
      {/* Hi! */}
      <span style={{ display: "inline-block", position: "relative", zIndex: 40 }}>
        {showTypewriter && (
          <Typewriter
            options={{
              cursor: "|",
              delay: 125,
              stringSplitter,
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
                .pauseFor(500)
                .typeString("I'm ")
                // .pauseFor(1000)
                // .typeString("D̷͖̩̆̔ȩ̵̐ŗ̶̓̉e̴͙̮͒̂k̵̗̓̈́ ̸̩̅̇͜G̸̡̓e̷̯̣̔e̷̬͐ͅ")
                // .typeString("Ḓ̴̺̭̳̤̳̓̐̂̉͘ͅe̵͍͇̜͎͛̃̇̈́r̵̹̤̣͈̉̎͗ḛ̷̙̙͔̊͒̏̄̉̑͋̊̌̆̍̕ǩ̵̡̘͕̟̱͇͉͍̱̮̙̳͕̘́̏̋͋͐͑̿̍̊͑̓̈́̕ ̴̨̨̧̡̛͇̻̹̲͈͔̝̟̪͌̍̒̑̄̇̓̿̀̎͘G̵̦̩̦̥̈́̀̇̔̃̿̎̆̀̾̅́̍͘ë̴̥̟́̆͊̎͑͑͗͝͝e̴̟̪̠̻͖͉͖̪̜͔̾̔ͅ")



                // .typeString("Ḓ̴̺̭̳̤̳̓̐̂̉͘ͅ▄r̵̹̤̣͈̉̎͗ḛ̷̙̙͔̊͒̏̄̉̑͋̊̌̆̍̕█ ̴̨̨̧̡̛͇̻̹̲͈͔̝̟̪͌̍̒̑̄̇̓̿̀̎͘G̵̦̩̦̥̈́̀̇̔̃̿̎̆̀̾̅́̍͘░e̴̟̪̠̻͖͉͖̪̜͔̾̔ͅ")
                // .pauseFor(1000)
                // .deleteChars(9)
                // .deleteChars(8)
                .typeString("Derek ")
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
