import React, { useEffect } from "react";
import { useLocation, BrowserRouter } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import About from "./Pages/About.jsx";
import Projects from "./Pages/Projects.jsx";
import Contact from "./Pages/Contact.jsx";
import FullscreenIntro from "./Components/FullscreenIntro.jsx";
// import CustomCursor from "./Components/CustomCursor.jsx";

function InnerComponent() {
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    };

    handleScroll();
    window.addEventListener('load', handleScroll);

    return () => {
      window.removeEventListener('load', handleScroll);
    };
  }, [location.pathname]);

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
