import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    HiOutlineHeart,
    HiOutlineUserGroup,
    HiOutlineAcademicCap,
    HiOutlineShieldCheck,
    HiOutlineLightningBolt,
    HiOutlineGlobe,
    HiArrowRight,
    HiOutlineCode,
    HiOutlineSpeakerphone,
    HiOutlineDesktopComputer,
    HiOutlineDeviceMobile,
    HiOutlineStar,
    HiOutlineTrendingUp,
} from 'react-icons/hi';
import AnimatedSection from '../components/AnimatedSection';
import Tilt3DCard from '../components/Tilt3DCard';
import '../components/Tilt3DCard.css';
import './About.css';

const stats = [
    { value: '50+', label: 'Projects Delivered', icon: <HiOutlineCode /> },
    { value: '3', label: 'Global Offices', icon: <HiOutlineGlobe /> },
    { value: '99%', label: 'Client Satisfaction', icon: <HiOutlineStar /> },
    { value: '7+', label: 'Service Verticals', icon: <HiOutlineTrendingUp /> },
];

const values = [
    {
        icon: <HiOutlineHeart />,
        title: 'Client-Centric',
        desc: 'Every solution starts with understanding your business goals, audience, and competitive landscape to deliver maximum impact.',
        gradient: 'linear-gradient(135deg, #e91e8c, #9333ea)',
    },
    {
        icon: <HiOutlineUserGroup />,
        title: 'Collaborative',
        desc: 'Our multidisciplinary team of developers, designers, and strategists collaborates seamlessly to turn complex challenges into elegant solutions.',
        gradient: 'linear-gradient(135deg, #9333ea, #7c3aed)',
    },
    {
        icon: <HiOutlineAcademicCap />,
        title: 'Innovation-First',
        desc: 'We stay ahead of the technology curve — adopting AI, cloud-native architectures, and modern frameworks to future-proof your investments.',
        gradient: 'linear-gradient(135deg, #7c3aed, #3b82f6)',
    },
    {
        icon: <HiOutlineShieldCheck />,
        title: 'Security & Quality',
        desc: 'Enterprise-grade security, code quality, and performance testing are embedded into every project from day one — never an afterthought.',
        gradient: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
    },
    {
        icon: <HiOutlineLightningBolt />,
        title: 'Agile Delivery',
        desc: 'Our agile methodology ensures rapid iteration, transparent communication, and on-time delivery for projects of any scale.',
        gradient: 'linear-gradient(135deg, #06b6d4, #059669)',
    },
    {
        icon: <HiOutlineGlobe />,
        title: 'Global Reach',
        desc: 'With offices across India and the US, we bring global expertise and local understanding to every engagement.',
        gradient: 'linear-gradient(135deg, #059669, #e91e8c)',
    },
];

const capabilities = [
    { icon: <HiOutlineCode />, name: 'Custom Software', desc: 'Web apps, SaaS, APIs & microservices' },
    { icon: <HiOutlineSpeakerphone />, name: 'Digital Marketing', desc: 'SEO, social media, PPC & content strategy' },
    { icon: <HiOutlineDesktopComputer />, name: 'Website Development', desc: 'Corporate sites, e-commerce & landing pages' },
    { icon: <HiOutlineDeviceMobile />, name: 'Mobile Apps', desc: 'iOS, Android & cross-platform with Flutter' },
];

const techStack = {
    'Frontend': ['React', 'Next.js', 'Vue.js', 'Angular', 'Flutter'],
    'Backend': ['Node.js', 'Python', 'Java', 'PHP', 'Go'],
    'Cloud & DevOps': ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes'],
    'Databases': ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Firebase'],
};

const timeline = [
    { year: '2024', title: 'Founded in Goa', desc: 'NXL Technologies was established with a mission to deliver world-class software development and IT consulting services.', color: '#9333ea' },
    { year: '2024', title: 'Expanded to Kochi', desc: 'Rapid growth and client demand drove expansion to Kochi, strengthening our presence in South India\'s thriving tech corridor.', color: '#e91e8c' },
    { year: '2025', title: 'San Francisco Office', desc: 'Opened our US headquarters in San Francisco, enabling direct partnership with Silicon Valley enterprises and startups.', color: '#7c3aed' },
    { year: '2025', title: '50+ Projects Delivered', desc: 'Crossed 50+ successfully delivered projects across web development, mobile apps, cloud solutions, and digital marketing.', color: '#3b82f6' },
];

export default function About() {
    return (
        <main className="about">
            {/* HERO */}
            <section className="page-hero about-hero">
                <div className="container">
                    <h1>About NXL Technologies</h1>
                    <p className="about-hero__sub">
                        Building next-generation digital solutions for businesses worldwide.
                    </p>
                    <div className="breadcrumb">
                        <Link to="/">Home</Link>
                        <span>/</span>
                        <span>About Us</span>
                    </div>
                </div>
            </section>

            {/* STATS BAR */}
            <section className="about-stats-bar">
                <div className="container">
                    <div className="about-stats-bar__inner">
                        {stats.map((s, i) => (
                            <AnimatedSection key={i} variant="scaleIn" delay={i * 0.1}>
                                <div className="about-stat-item">
                                    <div className="about-stat-item__icon">{s.icon}</div>
                                    <span className="about-stat-item__value">{s.value}</span>
                                    <span className="about-stat-item__label">{s.label}</span>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* STORY */}
            <section className="section about-story">
                <div className="gradient-orb gradient-orb-blue about-story__orb" />
                <div className="container">
                    <div className="about-story__grid">
                        <AnimatedSection variant="fadeLeft" className="about-story__content">
                            <span className="section-label">Who We Are</span>
                            <h2 className="section-title">
                                Leading Software Development Company Building Next-Gen Digital Solutions
                            </h2>
                            <p className="about-story__text">
                                NXL Technologies is a full-service <strong>software development and digital marketing company</strong> headquartered
                                in Goa, India, with offices in Kochi and San Francisco. We specialize in building custom web applications,
                                mobile apps, enterprise software, cloud solutions, and data-driven digital marketing strategies that help
                                businesses scale and thrive in the digital economy.
                            </p>
                            <p className="about-story__text">
                                Founded in 2024 by a team of seasoned <strong>IT professionals and technology consultants</strong>, we've rapidly grown
                                into a trusted partner for startups, SMEs, and enterprises looking to innovate. Our expertise spans
                                across <strong>React, Node.js, Python, AWS, Flutter</strong>, and modern tech stacks — enabling us to deliver
                                high-performance solutions with rapid time-to-market.
                            </p>
                            <p className="about-story__text">
                                What sets us apart is our commitment to understanding each client's unique business challenges.
                                We don't just write code — we co-create digital experiences that drive <strong>engagement,
                                    efficiency, and revenue growth</strong>.
                            </p>
                        </AnimatedSection>

                        <AnimatedSection variant="fadeRight" delay={0.2} className="about-story__capabilities">
                            {capabilities.map((c, i) => (
                                <Tilt3DCard key={i} className="about-cap-card glass-card" maxTilt={10}>
                                    <div className="about-cap-card__icon">{c.icon}</div>
                                    <div className="about-cap-card__text">
                                        <h4 className="about-cap-card__name">{c.name}</h4>
                                        <p className="about-cap-card__desc">{c.desc}</p>
                                    </div>
                                </Tilt3DCard>
                            ))}
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className="section about-why">
                <div className="container">
                    <AnimatedSection>
                        <span className="section-label">Why Businesses Choose NXL</span>
                        <h2 className="section-title">
                            Trusted IT Services Partner for Digital Transformation
                        </h2>
                        <p className="section-subtitle">
                            From early-stage startups to established enterprises, we deliver technology solutions
                            that create measurable business impact.
                        </p>
                    </AnimatedSection>
                    <div className="about-why__grid">
                        {values.map((v, i) => (
                            <AnimatedSection key={i} variant="fadeUp" delay={i * 0.08}>
                                <Tilt3DCard className="why-card glass-card" maxTilt={10}>
                                    <div className="why-card__icon" style={{ background: v.gradient }}>
                                        {v.icon}
                                    </div>
                                    <h3 className="why-card__title">{v.title}</h3>
                                    <p className="why-card__desc">{v.desc}</p>
                                </Tilt3DCard>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* TECHNOLOGY STACK */}
            <section className="section about-tech">
                <div className="gradient-orb gradient-orb-cyan about-tech__orb" />
                <div className="container">
                    <AnimatedSection>
                        <span className="section-label">Our Technology Stack</span>
                        <h2 className="section-title">Technologies We Work With</h2>
                        <p className="section-subtitle">
                            We leverage modern, battle-tested technologies to build robust,
                            scalable, and future-proof solutions.
                        </p>
                    </AnimatedSection>

                    <div className="about-tech__groups">
                        {Object.entries(techStack).map(([category, techs], i) => (
                            <AnimatedSection key={i} variant="fadeUp" delay={i * 0.1}>
                                <div className="about-tech__group">
                                    <h4 className="about-tech__group-title">{category}</h4>
                                    <div className="about-tech__group-badges">
                                        {techs.map((tech, j) => (
                                            <span key={j} className="tech-badge">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* TIMELINE */}
            <section className="section about-timeline">
                <div className="container">
                    <AnimatedSection>
                        <span className="section-label">Our Journey</span>
                        <h2 className="section-title">Key Milestones in NXL's Growth Story</h2>
                    </AnimatedSection>
                    <div className="timeline">
                        <div className="timeline__line" />
                        {timeline.map((item, i) => (
                            <AnimatedSection
                                key={i}
                                variant={i % 2 === 0 ? 'fadeLeft' : 'fadeRight'}
                                delay={i * 0.15}
                            >
                                <div className={`timeline__item ${i % 2 === 0 ? 'left' : 'right'}`}>
                                    <div className="timeline__dot" style={{ background: item.color, boxShadow: `0 0 16px ${item.color}55` }} />
                                    <Tilt3DCard className="timeline__card glass-card" maxTilt={8}>
                                        <span className="timeline__year" style={{ color: item.color }}>{item.year}</span>
                                        <h3 className="timeline__title">{item.title}</h3>
                                        <p className="timeline__desc">{item.desc}</p>
                                    </Tilt3DCard>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section">
                <div className="container">
                    <AnimatedSection variant="scaleIn">
                        <div className="cta-box">
                            <div className="cta-box__glow" />
                            <h2 className="cta-box__title">
                                Ready to Partner with NXL Technologies?
                            </h2>
                            <p className="cta-box__desc">
                                Let's discuss how our software development and digital marketing expertise
                                can accelerate your business growth.
                            </p>
                            <div className="cta-box__buttons">
                                <Link to="/contact" className="btn btn-primary">
                                    <span>Get a Free Consultation</span>
                                    <HiArrowRight />
                                </Link>
                                <Link to="/services" className="btn btn-outline">
                                    <span>Explore Our Services</span>
                                    <HiArrowRight />
                                </Link>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </main>
    );
}
