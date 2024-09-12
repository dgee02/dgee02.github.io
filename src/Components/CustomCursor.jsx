import React, { useEffect } from "react";
import "../index.css";

const CustomCursor = () => {
    useEffect(() => {
        const cursor = document.querySelector(".custom-cursor");

        const moveCursor = (e) => {
            const cursorWidth = cursor.offsetWidth;
            const cursorHeight = cursor.offsetHeight;
            cursor.style.left = `${e.clientX - cursorWidth / 2}px`;
            cursor.style.top = `${e.clientY - cursorHeight / 2}px`;
        };

        window.addEventListener("mousemove", moveCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, []);

    return <div className="custom-cursor"></div>;
};

export default CustomCursor;
