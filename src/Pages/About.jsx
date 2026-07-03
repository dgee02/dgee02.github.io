import { useEffect, useState } from "react";
import axios from "axios";
import DOMPurify from "dompurify";
import ProfileImage from "../Components/ProfileImage.jsx";
import Typewriter from "../Components/Typewriter.jsx";
import AboutItem from "../Components/AboutItem.jsx";

export default function About() {
  const [techStackData, setTechStackData] = useState("");
  const cleanTechStackData = DOMPurify.sanitize(techStackData);
  const profileImage = `https://raw.githubusercontent.com/dgee02/portfolio-content/main/about/profile.png`;

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        `https://raw.githubusercontent.com/dgee02/portfolio-content/main/about/tech-stack.txt`
      );
      setTechStackData(result.data);
    }
    fetchData();
  }, []);

  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <div className="py-7 px-7 md:px-20 lg:px-28 xl:px-40 2xl:px-72 z-30">
        <ProfileImage Image={profileImage} />
        <Typewriter />
        <p
          className="flex flex-wrap justify-center items-center"
          dangerouslySetInnerHTML={{ __html: cleanTechStackData }}
        ></p>
      </div>
    </div>
  );
}
