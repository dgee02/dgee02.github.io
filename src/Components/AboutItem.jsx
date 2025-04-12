import { motion } from "framer-motion";

export default function AboutItem({ children, className = "" }) {
    return (
        <motion.div
            className={`project-container-frosted-effect flex flex-col items-center border-2 border-purple-600 border-opacity-40 rounded-xl xl:mx-4 ${className}`}
            transition={{
                duration: 0.3,
                ease: "linear",
            }}
            whileHover={{
                scale: 1.02,
                boxShadow: "0px 30px 60px rgba(0, 0, 0, 0.7)",
            }}
            style={{
                boxShadow: "0px 10px 40px -5px rgba(0, 0, 0, 0.7)",
                transition: "box-shadow 0.3s linear",
            }}
        >
            {children}
        </motion.div>
    );
}
