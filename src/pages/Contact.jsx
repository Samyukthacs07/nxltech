import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
    HiOutlinePhone,
    HiOutlineMail,
    HiOutlineLocationMarker,
    HiArrowRight,
} from 'react-icons/hi';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import Tilt3DCard from '../components/Tilt3DCard';
import '../components/Tilt3DCard.css';
import './Contact.css';

const offices = [
    {
        city: 'Goa (HQ)',
        address: '#809, 8th Floor, Gera Imperium, Patto, Panjim, Goa 403001',
        color: '#9333ea',
    },
    {
        city: 'Kochi',
        address: '4A, Bagheeratha Square, Kacheripadi, Kochi',
        color: '#e91e8c',
    },
    {
        city: 'San Francisco',
        address: '938 Key Avenues, San Francisco, CA 94124',
        color: '#7c3aed',
    },
];

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });
    const [focused, setFocused] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for reaching out! We will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    };

    // Scroll & Parallax Logic
    const { scrollY } = useScroll();
    const heroY = useTransform(scrollY, [0, 500], [0, 150]);
    const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.5]);

    // Orb parallax - moves faster than scroll
    const orbY = useTransform(scrollY, [0, 1000], [0, 400]);
    const orbScale = useTransform(scrollY, [0, 500], [1, 1.2]);
    const springOrbY = useSpring(orbY, { stiffness: 50, damping: 20 });

    return (
        <main className="contact-page">
            {/* HERO */}
            <section className="page-hero">
                <div className="container">
                    <motion.div style={{ y: heroY, opacity: heroOpacity }}>
                        <h1>Contact Us</h1>
                        <div className="breadcrumb">
                            <Link to="/">Home</Link>
                            <span>/</span>
                            <span>Contact</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CONTACT INFO */}
            <section className="section contact-info-section">
                <div className="container">
                    <AnimatedSection>
                        <span className="section-label">Get In Touch</span>
                        <h2 className="section-title">Have Any Project Plan In Your Mind?</h2>
                        <p className="section-subtitle">
                            We believe that collaboration is the key to success. If you're ready
                            to take the next step in your project, we'd love to discuss how we can assist you.
                        </p>
                    </AnimatedSection>

                    <div className="contact-cards">
                        <AnimatedSection variant="fadeUp" delay={0.1}>
                            <Tilt3DCard className="contact-card glass-card" maxTilt={15} glare={true}>
                                <div className="contact-card__icon-wrap">
                                    <HiOutlinePhone />
                                </div>
                                <h3>Phone</h3>
                                <p>+91 7736960069</p>
                            </Tilt3DCard>
                        </AnimatedSection>
                        <AnimatedSection variant="fadeUp" delay={0.2}>
                            <Tilt3DCard className="contact-card glass-card" maxTilt={15} glare={true}>
                                <div className="contact-card__icon-wrap">
                                    <HiOutlineMail />
                                </div>
                                <h3>Email</h3>
                                <p>info@nxltechnologies.com</p>
                            </Tilt3DCard>
                        </AnimatedSection>
                        <AnimatedSection variant="fadeUp" delay={0.3}>
                            <Tilt3DCard className="contact-card glass-card" maxTilt={15} glare={true}>
                                <div className="contact-card__icon-wrap">
                                    <HiOutlineLocationMarker />
                                </div>
                                <h3>Offices</h3>
                                <p>Goa · Kochi · San Francisco</p>
                            </Tilt3DCard>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* FORM + MAP */}
            <section className="section contact-form-section">
                <motion.div
                    className="gradient-orb gradient-orb-blue contact-orb"
                    style={{ y: springOrbY, scale: orbScale }}
                />
                <div className="container contact-form-grid">
                    <AnimatedSection variant="fadeLeft">
                        <form className="contact-form glass-card" onSubmit={handleSubmit}>
                            <h3 className="contact-form__heading">Send Us a Message</h3>
                            <div className="contact-form__row">
                                <div className={`form-group ${focused === 'name' ? 'focused' : ''} ${formData.name ? 'filled' : ''}`}>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        onFocus={() => setFocused('name')}
                                        onBlur={() => setFocused('')}
                                        required
                                    />
                                    <label>Your Name</label>
                                    <span className="form-line" />
                                </div>
                                <div className={`form-group ${focused === 'email' ? 'focused' : ''} ${formData.email ? 'filled' : ''}`}>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        onFocus={() => setFocused('email')}
                                        onBlur={() => setFocused('')}
                                        required
                                    />
                                    <label>Email Address</label>
                                    <span className="form-line" />
                                </div>
                            </div>
                            <div className="contact-form__row">
                                <div className={`form-group ${focused === 'phone' ? 'focused' : ''} ${formData.phone ? 'filled' : ''}`}>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        onFocus={() => setFocused('phone')}
                                        onBlur={() => setFocused('')}
                                    />
                                    <label>Phone Number</label>
                                    <span className="form-line" />
                                </div>
                                <div className={`form-group ${focused === 'subject' ? 'focused' : ''} ${formData.subject ? 'filled' : ''}`}>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        onFocus={() => setFocused('subject')}
                                        onBlur={() => setFocused('')}
                                        required
                                    />
                                    <label>Subject</label>
                                    <span className="form-line" />
                                </div>
                            </div>
                            <div className={`form-group ${focused === 'message' ? 'focused' : ''} ${formData.message ? 'filled' : ''}`}>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    onFocus={() => setFocused('message')}
                                    onBlur={() => setFocused('')}
                                    rows="5"
                                    required
                                />
                                <label>Your Message</label>
                                <span className="form-line" />
                            </div>
                            <motion.button
                                type="submit"
                                className="btn btn-primary contact-form__submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span>Send Message</span>
                                <HiArrowRight />
                            </motion.button>
                        </form>
                    </AnimatedSection>

                    <AnimatedSection variant="fadeRight" delay={0.2}>
                        <div className="contact-offices">
                            <h3 className="contact-offices__heading">Our Offices</h3>
                            {offices.map((office, i) => (
                                <Tilt3DCard key={i} className="office-card glass-card" maxTilt={10}>
                                    <div
                                        className="office-card__dot"
                                        style={{ background: office.color }}
                                    />
                                    <div>
                                        <h4 className="office-card__city">{office.city}</h4>
                                        <p className="office-card__address">{office.address}</p>
                                    </div>
                                </Tilt3DCard>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </main>
    );
}
