import React from "react";
import { motion } from "framer-motion";

export default function ProfileImage({ Image }) {
    return (
        <div className="flex justify-center items-center">
            <motion.img
                src={Image}
                alt="Derek Gee Profile Image"
                className="w-48 h-48 xl:w-64 xl:h-64"
                initial={{ scale: 0, boxShadow: "none" }}
                animate={{
                    scale: [0, 1.05, 0.95, 1],
                    boxShadow: [
                        "none",
                        "none",
                        "none",
                        "0px 10px 40px -5px rgba(0, 0, 0, 0.7)",
                    ],
                }}
                transition={{ duration: 1.5, delay: 4.25 }}
                style={{
                    borderRadius: "50%",
                    animation: "pulsate 5s infinite",
                }}
            />
        </div>
    );
}
