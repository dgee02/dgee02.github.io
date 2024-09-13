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

        const centerCursor = () => {
            const cursorWidth = cursor.offsetWidth;
            const cursorHeight = cursor.offsetHeight;
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            cursor.style.left = `${centerX - cursorWidth / 2}px`;
            cursor.style.top = `${centerY - cursorHeight / 2}px`;
        };

        centerCursor();

        window.addEventListener("mousemove", moveCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, []);

    return <div className="custom-cursor"></div>;
};

export default CustomCursor;
