import React, { useEffect } from "react";
import { useLocation, BrowserRouter, Route, Routes } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import About from "./Pages/About.jsx";
import Experience from "./Pages/Experience.jsx";
import Projects from "./Pages/Projects.jsx";
import Contact from "./Pages/Contact.jsx";
import FullscreenIntro from "./Components/FullscreenIntro.jsx";
import ScrollToTop from "./Components/ScrollToTop.jsx";
// import CustomCursor from "./Components/CustomCursor.jsx";

function InnerComponent() {
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
            <Experience />
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
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<InnerComponent />} />
      </Routes>
    </BrowserRouter>
  );
}
