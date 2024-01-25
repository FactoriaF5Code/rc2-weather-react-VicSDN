// Footer.js
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Footer.css"
const Footer = () => {
    return (
        <footer>
            <p className="año">&copy; 2024 My App Footer</p>
            <div className="icons">
                <a
                    href="https://www.facebook.com/tu-facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaFacebook style={{ fontSize: '28px' }} />
                </a>
                <a
                    href="https://twitter.com/tu-twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaTwitter style={{ fontSize: '28px' }} />
                </a>
                <a
                    href="https://www.instagram.com/tu-instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaInstagram style={{ fontSize: '28px' }} />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
