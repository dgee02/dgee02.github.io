import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import DOMPurify from "dompurify";

export default function ProjectContainer({ Name }) {
    const ProjectName = Name.split(".txt")[0];
    const ProjectTitle = ProjectName.split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    const gifLink = `https://raw.githubusercontent.com/dgee02/portfolio-content/main/projects/${ProjectName}.gif`;
    const [projectData, setProjectData] = useState("");
    const cleanProjectData = DOMPurify.sanitize(projectData);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const result = await axios.get(
                `https://raw.githubusercontent.com/dgee02/portfolio-content/main/projects/${Name}`
            );
            setProjectData(result.data);
        }
        fetchData();
    }, []);

    return (
        <motion.div
            className="project-container-frosted-effect p-4 md:p-6 rounded-xl my-6 xl:mx-8 z-40 flex flex-col justify-between border-2 border-purple-600 border-opacity-40"
            transition={{
                duration: 0.3,
                ease: "linear",
            }}
            whileHover={{
                scale: 1.02,
                boxShadow: "0px 30px 60px rgba(0, 0, 0, 0.7)",
                // boxShadow: "0 0 40px rgba(184, 61, 186, 0.8)",
            }}
            style={{
                boxShadow: "0px 10px 40px -5px rgba(0, 0, 0, 0.7)",
                transition: "box-shadow 0.3s linear",
            }}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 1, ease: "backInOut" },
            }}
            viewport={{ once: true }}
        >
            <div>
                <h3 className="m-0 p-0 text-2xl xl:text-3xl font-bold">
                    {ProjectTitle}
                </h3>
                <div className="my-4 flex justify-center">
                    <img
                        className="rounded-xl"
                        src={gifLink}
                        alt={ProjectTitle + " Image"}
                    />
                </div>
                <p
                    className="m-0 text-lg xl:text-xl"
                    dangerouslySetInnerHTML={{ __html: cleanProjectData }}
                ></p>
            </div>
            <motion.div
                className="project-container-button b1 rounded-xl cursor-pointer text-white bg-purple-950 border-2 border-purple-600 border-opacity-40 p-3 mt-4"
                whileHover={{
                    scale: 1.15,
                    boxShadow: "0 0 10px rgba(184, 61, 186, 0.8)",
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                // animate={isHovered ? { rotate: [0, 5, -5, 5, -5, 0] } : {}}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                <a href={"https://github.com/dgee02/" + ProjectName} target="_blank">
                    <h4 className="text-xl xl:text-2xl no-underline m-0 p-0">
                        LEARN MORE
                    </h4>
                </a>
            </motion.div>
        </motion.div>
    );
}
