import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FullscreenIntro() {
    const logoGif = `https://raw.githubusercontent.com/dgee02/portfolio-content/main/intro/logo.gif`;
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black z-50"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                >
                    <motion.img
                        className="max-w-32 md:max-w-48"
                        src={logoGif}
                        alt="Derek Gee Logo"
                        initial={{ scale: 1, opacity: 0.25 }}
                        animate={{ scale: 2, opacity: 1 }}
                        exit={{ scale: 3, opacity: 0 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        style={{
                            filter:
                                "drop-shadow(0 0 20px rgba(184, 61, 186, 0.5)) " +
                                "drop-shadow(0 0 40px rgba(184, 61, 186, 0.4)) " +
                                "drop-shadow(0 0 60px rgba(184, 61, 186, 0.3)) " +
                                "drop-shadow(0 0 80px rgba(184, 61, 186, 0.2))",
                        }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
