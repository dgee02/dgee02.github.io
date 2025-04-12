import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import ExperienceItem from "../Components/ExperienceItem.jsx";
import { motion } from "framer-motion";

const baseUrl =
    "https://api.github.com/repos/dgee02/portfolio-content/contents/experience/";

const httpClient = axios.create({
    baseURL: baseUrl,
    timeout: 10000,
});

export default function Experience() {
    const [experiences, setExperiences] = useState([]);
    const [experienceDates, setExperienceDates] = useState({});

    useEffect(() => {
        async function fetchData() {
            const result = await httpClient.get("/");
            const data = result.data.filter((file) => file.name.endsWith(".txt"));
            setExperiences(data);
        }
        fetchData();
    }, []);

    // This callback will be passed to each ExperienceItem
    const handleDateExtracted = useCallback((filename, date) => {
        setExperienceDates((prev) => ({
            ...prev,
            [filename]: date,
        }));
    }, []);

    // Sort experiences by date when we have all dates
    const sortedExperiences = [...experiences].sort((a, b) => {
        const dateA = experienceDates[a.name] || new Date(0);
        const dateB = experienceDates[b.name] || new Date(0);
        return dateB - dateA;
    });

    // Shared timeline node component to reduce repetition
    const TimelineNode = ({ index, delay }) => (
        <motion.div
            className="bg-purple-600 rounded-full z-10 flex justify-center items-center"
            initial={{ scale: 0 }}
            whileInView={{
                scale: 1,
                boxShadow: "0px 0px 15px 2px rgba(168, 85, 247, 0.8)",
            }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            animate={{
                boxShadow: [
                    "0px 0px 15px 2px rgba(168, 85, 247, 0.3)",
                    "0px 0px 15px 8px rgba(168, 85, 247, 0.8)",
                    "0px 0px 15px 2px rgba(168, 85, 247, 0.3)",
                ],
            }}
            style={{
                width: "1.25rem", // w-5
                height: "1.25rem", // h-5
                transitionTimingFunction: "ease-in-out",
                transitionDuration: "1s",
                transitionIterationCount: "infinite",
            }}
        >
            <motion.div
                className="w-2 h-2 bg-white rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                }}
            />
        </motion.div>
    );

    return (
        <div className="min-h-screen w-full flex justify-center items-center">
            <div className="py-7 z-30 w-full">
                <motion.h4
                    className="text-5xl xl:text-7xl font-bold my-10 text-center"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 1, ease: "backInOut" },
                    }}
                    viewport={{ once: true }}
                >
                    Experience
                </motion.h4>

                <div className="pt-4 px-7 md:px-20 lg:px-28 xl:px-40 2xl:px-72">
                    {/* Mobile timeline (visible on small screens) */}
                    <div className="xl:hidden relative">
                        <motion.div
                            className="absolute h-full w-1 left-0 z-0"
                            initial={{ height: "0%" }}
                            whileInView={{ height: "100%" }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            viewport={{ once: true }}
                            style={{
                                background:
                                    "linear-gradient(to bottom, transparent, rgba(147, 51, 234, 1), transparent)",
                            }}
                        ></motion.div>
                        <div className="ml-14">
                            {sortedExperiences.map((res, idx) => (
                                <div key={idx} className="relative mb-12">
                                    {/* Timeline node - positioned for mobile */}
                                    <div className="absolute -left-16 top-16">
                                        <TimelineNode index={idx} delay={0.2 * idx} />
                                    </div>

                                    {/* Experience item */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.2 * idx }}
                                        viewport={{ once: true }}
                                    >
                                        <ExperienceItem
                                            Name={res.name}
                                            onDateExtracted={handleDateExtracted}
                                        />
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Desktop timeline (visible on medium+ screens) */}
                    <div className="hidden xl:block relative">
                        <motion.div
                            className="absolute h-full w-1 left-1/2 transform -translate-x-1/2 z-0"
                            initial={{ height: "0%" }}
                            whileInView={{ height: "100%" }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            viewport={{ once: true }}
                            style={{
                                background:
                                    "linear-gradient(to bottom, transparent, rgba(147, 51, 234, 1), transparent)",
                            }}
                        ></motion.div>

                        <div>
                            {sortedExperiences.map((res, idx) => (
                                <div key={idx} className="relative">
                                    {/* Timeline node - positioned for desktop */}
                                    <div className="absolute top-24 -mt-2 left-1/2 transform -translate-x-1/2">
                                        <TimelineNode index={idx} delay={0.2 * idx} />
                                    </div>

                                    {/* Experience item */}
                                    <motion.div
                                        initial={{ opacity: 0, x: idx % 2 === 0 ? -25 : 25 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.7, delay: 0.2 * idx }}
                                        viewport={{ once: true }}
                                    >
                                        <ExperienceItem
                                            Name={res.name}
                                            isRight={idx % 2 !== 0}
                                            onDateExtracted={handleDateExtracted}
                                        />
                                    </motion.div>

                                    {/* Connector line from node to experience item */}
                                    <motion.div
                                        className={`absolute top-24 ${idx % 2 === 0
                                                ? "right-1/2 from-purple-600 to-transparent"
                                                : "left-1/2 from-transparent to-purple-600"
                                            } h-0.5 bg-gradient-to-r z-5`}
                                        style={{ width: "8%" }}
                                        initial={{ width: "0%" }}
                                        whileInView={{ width: "8%" }}
                                        transition={{ duration: 0.4, delay: 0.2 * idx + 0.2 }}
                                        viewport={{ once: true }}
                                    ></motion.div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
