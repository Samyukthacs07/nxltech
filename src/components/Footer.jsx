import { Link } from 'react-router-dom';
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from 'react-icons/fa';
import {
    HiOutlinePhone,
    HiOutlineMail,
    HiOutlineLocationMarker,
} from 'react-icons/hi';
import nxlLogo from '../pages/Logo/ChatGPT Image Feb 14, 2026, 10_24_19 PM.png';
import './Footer.css';

const companyLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact Us' },
];

const serviceLinks = [
    { label: 'Software Development' },
    { label: 'Digital Marketing' },

    { label: 'Mobile Apps' },
    { label: 'ERP Solutions' },
    { label: 'Cloud Solutions' },
    { label: 'Game Development' },
    { label: 'IT Consulting' },
];

const socials = [
    { icon: <FaFacebookF />, url: 'https://www.facebook.com/profile.php?id=61567502310449' },
    { icon: <FaTwitter />, url: '#' },
    { icon: <FaInstagram />, url: '#' },
    { icon: <FaLinkedinIn />, url: 'https://www.linkedin.com/company/nxl-technologies/' },
];

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__glow" />
            <div className="container">
                <div className="footer__top">
                    <div className="footer__brand">
                        <Link to="/" className="footer__logo">
                            <img src={nxlLogo} alt="NXL Technologies" className="footer__logo-img" />
                        </Link>
                        <p className="footer__tagline">
                            Innovative Application Development for Seamless User Experiences
                        </p>
                        <div className="footer__socials">
                            {socials.map((s, i) => (
                                <a
                                    key={i}
                                    href={s.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer__social-icon"
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="footer__col">
                        <h4 className="footer__col-title">Company</h4>
                        <ul>
                            {companyLinks.map(({ path, label }) => (
                                <li key={path}>
                                    <Link to={path} className="footer__link">{label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer__col">
                        <h4 className="footer__col-title">Services</h4>
                        <ul>
                            {serviceLinks.map(({ label }) => (
                                <li key={label}>
                                    <Link to="/services" className="footer__link">{label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer__col">
                        <h4 className="footer__col-title">Contact</h4>
                        <ul className="footer__contact-list">
                            <li>
                                <HiOutlinePhone className="footer__contact-icon" />
                                <span>+91 7736960069</span>
                            </li>
                            <li>
                                <HiOutlineMail className="footer__contact-icon" />
                                <span>info@nxltechnologies.com</span>
                            </li>
                            <li>
                                <HiOutlineLocationMarker className="footer__contact-icon" />
                                <span>Goa · Kochi · San Francisco</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p>&copy; {new Date().getFullYear()} NXL Technologies. All Rights Reserved.</p>
                    <div className="footer__bottom-links">
                        <a href="#">Terms of Service</a>
                        <a href="#">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
