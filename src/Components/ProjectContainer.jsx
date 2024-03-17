import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function ProjectContainer({ Name }) {
    const ProjectName = Name.split(".md")[0];
    const ProjectTitle = ProjectName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    const gifLink = `https://raw.githubusercontent.com/dgee02/personal-website-project-content/main/${ProjectName}.gif`;
    const [projectData, setProjectData] = useState("");

    useEffect(() => {
        async function fetchData() {
            const result = await axios.get(
                `https://raw.githubusercontent.com/dgee02/personal-website-project-content/main/${Name}`
            );
            setProjectData(result.data);
        }
        fetchData();
    }, []);

    return (
        <motion.div
            className="project-container-frosted-effect p-6 md:p-10 rounded-xl my-8 xl:mx-8 z-10"
            transition={{ duration: 0.5, ease: "linear" }}
            whileHover={{ scale: 1.01 }}
            style={{ boxShadow: "0px 10px 40px -5px rgba(0, 0, 0, 0.7)" }}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 1.5, ease: "backInOut" },
            }}
        >
            <h3 className="m-0 p-0 text-2xl xl:text-3xl font-bold">
                Featured Project: {ProjectTitle}
            </h3>
            <div className="my-8 flex justify-center">
                <img className="rounded-xl" src={gifLink} alt={ProjectTitle + ' Image'} />
            </div>
            <p className="m-0 py-2 text-lg xl:text-xl">{projectData}</p>
            <a href={'https://github.com/dgee02/' + ProjectName} target="_blank">
                <motion.div
                    className="b1 rounded-xl cursor-pointer text-white bg-purple-950 border-2 border-purple-600 border-opacity-40 p-3 mt-8"
                    whileHover={{
                        scale: 1.1,
                        boxShadow: "0 0 10px rgba(184, 61, 186, 0.8)",
                    }}
                    transition={{ duration: 0.3, ease: "linear" }}
                >
                    <h4 className="text-xl xl:text-2xl no-underline m-0 p-0">
                        LEARN MORE
                    </h4>
                </motion.div>
            </a>
        </motion.div>
    );
}

export default ProjectContainer;
