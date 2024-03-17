import React, { useEffect } from "react";
import ReactGA from "react-ga";
import { useLocation, BrowserRouter } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ContactLink from "./Components/ContactLink.jsx";
import FullscreenIntro from "./Components/FullscreenIntro.jsx";
import ProfileImage from "./Components/ProfileImage.jsx";
import Projects from "./Components/Projects.jsx";
import Typewriter from "./Components/Typewriter.jsx";
import logoGif from "./Imgs/logo.gif";
import logoImage from "./Imgs/logo.png";
import profileImage from "./Imgs/profile.png";
import linkedinIcon from "./Imgs/In-Blue-Logo.png.original.png";
import githubIcon from "./Imgs/GitHub-Mark-Light-120px-plus.png";
import emailIcon from "./Imgs/email.png";
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
          <FullscreenIntro Image={logoGif} />

          <motion.main
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4, duration: 2, ease: "easeIn" }}
          >
            <div className="min-h-screen w-full flex justify-center items-center">
              <div className="py-7 px-7 md:px-20 lg:px-28 xl:px-40 2xl:px-80">
                <ProfileImage Image={profileImage} />
                <Typewriter />
                <p className="m-0 py-2 text-lg xl:text-xl">
                  I am Computer Science student at Simon Fraser University with
                  a passion for technology and innovation. My experience
                  encompasses <b>HTML/CSS</b>, <b>JavaScript</b>, <b>Python</b>,{" "}
                  <b>Java</b>, <b>C++</b>, and <b>MySQL</b>, along with design
                  tools such as <b>Figma</b>. I have also gained practical
                  experience as an <b>IT Support Technician</b> during a co-op
                  placement at <b>BC Cancer</b>.
                </p>
              </div>
            </div>

            <Projects />

            <div className="min-h-screen w-full flex justify-center items-center">
              <div className="py-7 px-7 md:px-20 lg:px-28 xl:px-40 2xl:px-80">
                <div className="flex justify-center items-center">
                  <img
                    src={logoImage}
                    alt="Derek Gee Logo"
                    style={{
                      animation: "pulsate 5s infinite",
                      maxHeight: "15.5em",
                    }}
                  />
                </div>
                <h4 className="text-6xl xl:text-8xl font-bold my-14">
                  Let's Connect
                </h4>
                <p className="m-0 pt-2 pb-10 text-lg xl:text-xl">
                  Got a question or just want to say hello? I am all ears and
                  would love to hear from you!
                </p>
                <ContactLink
                  Image={linkedinIcon}
                  href="https://www.linkedin.com/in/derek-gee"
                  alt="LinkedIn Icon"
                />
                <ContactLink
                  Image={githubIcon}
                  href="https://github.com/dgee02"
                  alt="GitHub Icon"
                />
                <ContactLink
                  Image={emailIcon}
                  href="mailto:dag7@sfu.ca"
                  alt="Email Icon"
                />
              </div>
            </div>
          </motion.main>
        </AnimatePresence>
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <InnerComponent />
    </BrowserRouter>
  );
}

export default App;
