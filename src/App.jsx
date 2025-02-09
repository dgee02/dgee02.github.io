import React, { useEffect } from "react";
import { useLocation, BrowserRouter } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import About from "./Pages/About.jsx";
import Projects from "./Pages/Projects.jsx";
import Contact from "./Pages/Contact.jsx";
import FullscreenIntro from "./Components/FullscreenIntro.jsx";
// import CustomCursor from "./Components/CustomCursor.jsx";

function InnerComponent() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div>
        <AnimatePresence>
          <FullscreenIntro />
          <motion.main
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4, duration: 1.75, ease: "easeIn" }}
          >
            <About />
            <Projects />
            <Contact />
          </motion.main>
        </AnimatePresence>
      </div>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      {/* <CustomCursor /> */}
      <InnerComponent />
    </BrowserRouter>
  );
}
