import { useEffect, useState } from "react";
import axios from "axios";
import DOMPurify from "dompurify";
import ContactLink from "../Components/ContactLink.jsx";
import linkedinIcon from "../Imgs/In-Blue-Logo.png.original.png";
import githubIcon from "../Imgs/GitHub-Mark-Light-120px-plus.png";
import emailIcon from "../Imgs/email.png";

export default function Contact() {
    const [contactData, setContactData] = useState("");
    const cleanContactData = DOMPurify.sanitize(contactData);
    const logoImage = `https://raw.githubusercontent.com/dgee02/portfolio-content/main/contact/logo.png`;

    useEffect(() => {
        async function fetchData() {
            const result = await axios.get(
                `https://raw.githubusercontent.com/dgee02/portfolio-content/main/contact/contact.txt`
            );
            setContactData(result.data);
        }
        fetchData();
    }, []);

    return (
        <div className="min-h-screen w-full flex justify-center items-center">
            <div className="py-7 px-7 md:px-20 lg:px-28 xl:px-40 2xl:px-80">
                <div className="flex justify-center items-center">
                    <img
                        src={logoImage}
                        alt="Derek Gee Logo"
                        style={{
                            animation: "pulsate 5s infinite",
                            maxHeight: "15.5em",
                        }}
                    />
                </div>
                <h4 className="text-6xl xl:text-8xl font-bold my-14">Let's Connect</h4>
                <p className="m-0 pt-2 pb-10 text-lg xl:text-xl">{cleanContactData}</p>
                <ContactLink
                    Image={linkedinIcon}
                    href="https://www.linkedin.com/in/derek-gee"
                    alt="LinkedIn Icon"
                />
                <ContactLink
                    Image={githubIcon}
                    href="https://github.com/dgee02"
                    alt="GitHub Icon"
                />
                <ContactLink
                    Image={emailIcon}
                    href="mailto:dag7@sfu.ca"
                    alt="Email Icon"
                />
            </div>
        </div>
    );
}
