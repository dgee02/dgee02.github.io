import React, { useEffect } from "react";
import ReactGA from "react-ga";
import { useLocation, BrowserRouter } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import About from "./Pages/About.jsx";
import Projects from "./Pages/Projects.jsx";
import Contact from "./Pages/Contact.jsx";
import FullscreenIntro from "./Components/FullscreenIntro.jsx";
ReactGA.initialize("G-B9JW5S9MVF");

function InnerComponent() {
  const location = useLocation();
  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);
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
      <InnerComponent />
    </BrowserRouter>
  );
}
