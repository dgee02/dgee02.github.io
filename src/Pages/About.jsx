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
        <div className="grid grid-cols-1 xl:grid-cols-2">
          <AboutItem className="mb-8 xl:mb-0">
            <iframe
              src="https://open.spotify.com/embed/playlist/37i9dQZF1Eput9KrsT6BSQ?utm_source=generator"
              width="100%"
              height="152px"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </AboutItem>

          <AboutItem>
            <img
              src="https://streak-stats.demolab.com?user=dgee02&theme=midnight-purple&hide_border=true&background=0D111700&stroke=6D28D9&ring=9333EA&currStreakNum=FFFFFF&sideNums=FFFFFF&currStreakLabel=A78BFA&fire=A78BFA"
              alt="GitHub Contributions"
              className="w-full rounded-xl"
              style={{
                height: "152px",
              }}
            />
          </AboutItem>
        </div>
        <p
          className="flex flex-wrap justify-center items-center pt-8"
          dangerouslySetInnerHTML={{ __html: cleanTechStackData }}
        ></p>
      </div>
    </div>
  );
}
