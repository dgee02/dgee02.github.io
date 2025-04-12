import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import DOMPurify from "dompurify";
import ContactLink from "../Components/ContactLink.jsx";
import linkedinIcon from "../Imgs/In-Blue-Logo.png.original.png";
import githubIcon from "../Imgs/GitHub-Mark-Light-120px-plus.png";
import emailIcon from "../Imgs/email.png";
import confetti from "canvas-confetti";

export default function Contact() {
    const [contactData, setContactData] = useState("");
    const [initialConfettiTriggered, setInitialConfettiTriggered] =
        useState(false);
    const [isWiggling, setIsWiggling] = useState(false);
    const [hoverCooldown, setHoverCooldown] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const cleanContactData = DOMPurify.sanitize(contactData);
    const logoImage = `https://raw.githubusercontent.com/dgee02/portfolio-content/main/contact/logo.png`;
    const logoRef = useRef(null);

    useEffect(() => {
        async function fetchData() {
            const result = await axios.get(
                `https://raw.githubusercontent.com/dgee02/portfolio-content/main/contact/contact.txt`
            );
            setContactData(result.data);
        }
        fetchData();
    }, []);

    const handleViewportEnter = () => {
        if (!initialConfettiTriggered) {
            setTimeout(() => {
                if (logoRef.current) {
                    const logoRect = logoRef.current.getBoundingClientRect();
                    const originX =
                        (logoRect.left + logoRect.width / 2) / window.innerWidth;
                    const originY =
                        (logoRect.top + logoRect.height / 2) / window.innerHeight;

                    confetti({
                        particleCount: 50,
                        spread: 180,
                        gravity: 2,
                        ticks: 100,
                        zIndex: 0,
                        colors: ["#b83dbacc"],
                        shapes: ["star"],
                        origin: { x: originX, y: originY },
                    });
                    setInitialConfettiTriggered(true);
                    // Enable hover interactions after initial animation
                    setTimeout(() => setIsLoading(false), 700);
                }
            }, 800);
        }
    };

    const handleMouseEnter = () => {
        if (!hoverCooldown && !isLoading) {
            const logoRect = logoRef.current.getBoundingClientRect();
            const originX = (logoRect.left + logoRect.width / 2) / window.innerWidth;
            const originY = (logoRect.top + logoRect.height / 2) / window.innerHeight;

            confetti({
                particleCount: 50,
                spread: 180,
                gravity: 2,
                ticks: 100,
                zIndex: 0,
                colors: ["#b83dbacc"],
                shapes: ["star"],
                origin: { x: originX, y: originY },
            });
            setIsWiggling(true);
            setHoverCooldown(true);

            setTimeout(() => {
                setIsWiggling(false);
                setHoverCooldown(false);
            }, 3000);
        }
    };

    return (
        <div className="min-h-screen w-full flex flex-col justify-center relative">
            <div className="py-7 px-7 md:px-20 lg:px-28 xl:px-40 2xl:px-72 z-30">
                <div className="flex justify-center items-center">
                    <motion.div
                        animate={isWiggling ? { rotate: [0, 5, -5, 5, -5, 0] } : {}}
                        whileInView={{
                            opacity: 1,
                            scale: [0.5, 1.2, 0.95, 1],
                            transition: {
                                duration: 1.5,
                                ease: "backInOut",
                                times: [0, 0.25, 0.45, 1],
                            },
                        }}
                        initial={{ opacity: 0, scale: 0.5 }}
                        onViewportEnter={handleViewportEnter}
                        viewport={{ once: true }}
                    >
                        <img
                            ref={logoRef}
                            src={logoImage}
                            alt="Derek Gee Logo"
                            className="h-44 xl:h-56"
                            style={{
                                animation: "pulsate 5s infinite",
                                maxHeight: "15.5em",
                            }}
                            onMouseEnter={handleMouseEnter}
                        />
                    </motion.div>
                </div>
                <motion.h4
                    className="text-5xl xl:text-7xl font-bold my-10 z-40"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 1, ease: "backInOut" },
                    }}
                    viewport={{ once: true }}
                >
                    Let's Connect
                </motion.h4>
                <motion.p
                    className="m-0 pt-2 pb-10 text-lg xl:text-xl"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 1, ease: "backInOut" },
                    }}
                    viewport={{ once: true }}
                >
                    {cleanContactData}
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 1, ease: "backInOut" },
                    }}
                    viewport={{ once: true }}
                >
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
                </motion.div>
            </div>
            <div className="w-full text-center py-4 mt-0 text-sm text-gray-400">
                <p>
                &copy; Derek Gee 🧑‍💻
                </p>
            </div>
        </div>
    );
}
