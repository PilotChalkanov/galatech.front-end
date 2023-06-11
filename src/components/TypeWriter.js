import React, { useState, useEffect } from "react";
import "../typewriter.css"; // Import CSS file with animation styles

function Typewriter() {
    const [text, setText] = useState("");
    const [textRow, setTextRow] = useState([]);
    const messages = ["Hello! Welcome to GalaTech Web Shop. We offer the best turbo charger ",
    "service in the town. If you want to fly you are the right place! You can find us at +"];
    const delay = 60; // Delay between each character in milliseconds
    const pause = 600; // Pause between each message in milliseconds

    useEffect(() => {
        let messageIndex = 0;
        let charIndex = 0;
        let timeoutId;

        function typeNextChar() {
            setText(messages[messageIndex].substring(0, charIndex + 1));
            charIndex++;
            if (charIndex === messages[messageIndex].length) {
                messageIndex++;
                charIndex = 0;
                clearTimeout(timeoutId);
                timeoutId = setTimeout(() => {
                    typeNextChar();
                }, pause);
                return;
            }
            timeoutId = setTimeout(() => {
                typeNextChar();
            }, delay);
        }
        typeNextChar();


        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    return <h3 className="typewriter">{text}</h3>;
}

export default Typewriter;