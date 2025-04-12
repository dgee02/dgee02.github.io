import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import DOMPurify from "dompurify";

export default function ExperienceItem({ Name, isRight, onDateExtracted }) {
    const ExperienceTitle = Name.split(".txt")[0];
    const [experienceData, setExperienceData] = useState("");
    const cleanExperienceData = DOMPurify.sanitize(experienceData);

    useEffect(() => {
        async function fetchData() {
            const result = await axios.get(
                `https://raw.githubusercontent.com/dgee02/portfolio-content/main/experience/${Name}`
            );
            setExperienceData(result.data);

            // Extract date information and pass it to parent component
            if (onDateExtracted && result.data) {
                // Look for date pattern like MM/YYYY - MM/YYYY or MM/YYYY
                const dateRegex = /(\d{2}\/\d{4})(?:\s*-\s*(\d{2}\/\d{4}))?/;
                const match = result.data.match(dateRegex);

                if (match) {
                    // Use end date if available, otherwise use start date
                    const dateStr = match[2] || match[1];
                    const [month, year] = dateStr.split("/");
                    // Create a date object (day is set to 1)
                    const date = new Date(parseInt(year), parseInt(month) - 1, 1);
                    onDateExtracted(Name, date);
                }
            }
        }
        fetchData();
    }, [Name, onDateExtracted]);

    return (
        <motion.div
            className={`
                relative project-container-frosted-effect p-4 md:p-6 rounded-xl border-2 border-purple-600 border-opacity-40
                w-full xl:w-5/12 z-50
                ${isRight ? "xl:ml-auto xl:mr-8" : "xl:mr-auto xl:ml-8"}
            `}
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
            initial={{
                opacity: 0,
                y: 25,
                x: 0,
                "@media (minWidth: 1280px)": {
                    y: 0,
                    x: isRight ? 25 : -25,
                },
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                x: 0,
                transition: { duration: 1, ease: "backInOut" },
            }}
            viewport={{ once: true }}
        >
            <h3 className="m-0 p-0 text-2xl xl:text-3xl mb-3 font-bold">
                {ExperienceTitle}
            </h3>
            <p
                className="m-0 text-lg xl:text-xl"
                dangerouslySetInnerHTML={{ __html: cleanExperienceData }}
            ></p>
        </motion.div>
    );
}
