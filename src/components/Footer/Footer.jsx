// Footer.js
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <p>&copy; 2024 My App Footer</p>
            <div>
                <a
                    href="https://www.facebook.com/tu-facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaFacebook />
                </a>
                {" | "}
                <a
                    href="https://twitter.com/tu-twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaTwitter />
                </a>
                {" | "}
                <a
                    href="https://www.instagram.com/tu-instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaInstagram />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
