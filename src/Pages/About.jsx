import { useEffect, useState } from "react";
import axios from "axios";
import DOMPurify from "dompurify";
import ProfileImage from "../Components/ProfileImage.jsx";
import Typewriter from "../Components/Typewriter.jsx";

export default function About() {
    const [aboutData, setAboutData] = useState("");
    const cleanAboutData = DOMPurify.sanitize(aboutData);
    const profileImage = `https://raw.githubusercontent.com/dgee02/personal-website-project-content/main/about/profile.png`;

    useEffect(() => {
        async function fetchData() {
            const result = await axios.get(
                `https://raw.githubusercontent.com/dgee02/personal-website-project-content/main/about/about.txt`
            );
            setAboutData(result.data);
        }
        fetchData();
    }, []);

    return (
        <div className="min-h-screen w-full flex justify-center items-center">
            <div className="py-7 px-7 md:px-20 lg:px-28 xl:px-40 2xl:px-80">
                <ProfileImage Image={profileImage} />
                <Typewriter />
                <p
                    className="m-0 py-2 text-lg xl:text-xl"
                    dangerouslySetInnerHTML={{ __html: cleanAboutData }}
                ></p>
            </div>
        </div>
    );
}
