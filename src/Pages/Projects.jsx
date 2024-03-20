import { useEffect, useState } from "react";
import axios from "axios";
import ProjectContainer from "../Components/ProjectContainer.jsx";

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
            <div className="grid grid-cols-1 xl:grid-cols-2 py-7 px-7 md:px-20 lg:px-28 xl:px-40 2xl:px-72">
                {projects.map((res, idx) => (
                    <ProjectContainer key={idx} Name={res.name} />
                ))}
            </div>
        </div>
    );
}
