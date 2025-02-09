import { useEffect, useState } from "react";
import axios from "axios";
import ProjectContainer from "../Components/ProjectContainer.jsx";
import { motion } from "framer-motion";

const baseUrl =
    "https://api.github.com/repos/dgee02/portfolio-content/contents/projects/";

const httpClient = axios.create({
    baseURL: baseUrl,
    timeout: 10000,
});

export default function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const result = await httpClient.get("/");
            const data = result.data.filter((file) => file.name.endsWith(".txt"));
            setProjects(data);
        }
        fetchData();
    }, []);

    return (
        <div className="min-h-screen w-full flex justify-center items-center">
            <div className="py-7 z-30">
                <motion.h4
                    className="text-6xl xl:text-8xl font-bold my-14"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 1, ease: "backInOut" },
                    }}
                    viewport={{ once: true }}
                >
                    Featured Projects
                </motion.h4>
                <div className="grid grid-cols-1 xl:grid-cols-2 pb-14 px-7 md:px-20 lg:px-28 xl:px-40 2xl:px-72">
                    {projects.map((res, idx) => (
                        <ProjectContainer key={idx} Name={res.name} />
                    ))}
                </div>
            </div>
        </div>
    );
}
