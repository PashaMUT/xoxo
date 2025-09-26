import React from "react";
import { FaInstagram, FaVk, FaTelegram } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <a href="https://instagram.com/xoxo___brows" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
            </a>
            <a href="https://vk.com" target="_blank" rel="noopener noreferrer">
                <FaVk />
            </a>
            <a href="https://t.me/username" target="_blank" rel="noopener noreferrer">
                <FaTelegram />
            </a>
        </footer>
    );
};

export default Footer;
