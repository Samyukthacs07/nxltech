import { Link } from 'react-router-dom';
import {
    HiOutlineGlobeAlt,
    HiOutlineDeviceMobile,
    HiOutlineCube,
    HiOutlineCloud,
    HiOutlinePuzzle,
    HiOutlineLightBulb,
    HiOutlineSpeakerphone,
    HiOutlineCode,
    HiArrowRight,
    HiCheck,
    HiStar,
    HiOutlineChartBar,
    HiOutlineShieldCheck,
    HiOutlineDesktopComputer,
} from 'react-icons/hi';
import AnimatedSection from '../components/AnimatedSection';
import Tilt3DCard from '../components/Tilt3DCard';
import '../components/Tilt3DCard.css';
import './Services.css';

/* ── All services with full detail ── */
const allServices = [
    {
        id: 'software-development',
        icon: <HiOutlineCode />,
        title: 'Custom Software Development',
        tagline: 'End-to-End Development Solutions',
        flagship: true,
        gradient: 'linear-gradient(135deg, #9333ea 0%, #7c3aed 100%)',
        summary: 'Scalable, secure, and high-performance applications tailored to your needs.',
        description: [
            'We build enterprise-grade software from scratch — whether it\'s a customer-facing platform, an internal tool, or a complex SaaS product.',
            'Our team works across the full technology stack, combining frontend frameworks like React and Next.js with powerful backends in Node.js, Python, and Java.',
            'From MVP prototyping to large-scale enterprise migrations, we engineer for performance, security, and maintainability.',
        ],
        features: [
            { name: 'Custom Web Applications', detail: 'Responsive, scalable web apps with React, Next.js, Vue, or Angular' },
            { name: 'SaaS Product Engineering', detail: 'Multi-tenant platforms with subscription billing, user management, and analytics' },
            { name: 'API & Microservices', detail: 'RESTful and GraphQL APIs with microservice architecture for maximum scalability' },
            { name: 'Legacy System Modernization', detail: 'Migrate outdated monoliths to modern cloud-native architectures' },
            { name: 'Progressive Web Apps', detail: 'Offline-capable, installable web apps that rival native mobile performance' },
            { name: 'Full-Stack Development', detail: 'End-to-end from database design to deployment and monitoring' },
        ],
        technologies: ['React', 'Node.js', 'Python', 'Next.js', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS'],
        stats: [
            { value: '50+', label: 'Projects Delivered' },
            { value: '99.9%', label: 'Uptime SLA' },
            { value: '3x', label: 'Faster Time-to-Market' },
        ],
    },
    {
        id: 'digital-marketing',
        icon: <HiOutlineSpeakerphone />,
        title: 'Digital Marketing Services (AI Based)',
        tagline: 'Data-Driven Growth Strategies',
        flagship: true,
        gradient: 'linear-gradient(135deg, #e91e8c 0%, #9333ea 100%)',
        summary: 'Expert strategies to build your brand, drive traffic, and maximize ROI.',
        description: [
            'We build comprehensive, data-driven marketing strategies that connect your brand with the right audience at the right time.',
            'Our SEO specialists conduct deep keyword research and technical audits to boost your organic search rankings.',
            'From startups to established businesses, we maximize growth and lead generation.',
        ],
        features: [
            { name: 'Search Engine Optimization (SEO)', detail: 'Technical SEO, on-page optimization, link building, and local SEO strategies' },
            { name: 'Social Media Marketing', detail: 'Platform-specific strategies for Instagram, LinkedIn, Facebook, and X (Twitter)' },
            { name: 'Google Ads & PPC', detail: 'Search, display, and shopping campaigns with conversion tracking and bid optimization' },
            { name: 'Content Marketing', detail: 'Blog posts, whitepapers, case studies, and video content that drive organic growth' },
            { name: 'Email Marketing Automation', detail: 'Drip campaigns, segmentation, A/B testing, and personalized outreach flows' },
            { name: 'Analytics & Reporting', detail: 'Google Analytics, heatmaps, funnel tracking, and monthly performance dashboards' },
        ],
        technologies: ['Google Ads', 'Meta Ads', 'SEMrush', 'Ahrefs', 'HubSpot', 'Mailchimp', 'GA4', 'Hotjar'],
        stats: [
            { value: '300%', label: 'Avg. Traffic Growth' },
            { value: '5x', label: 'ROAS on Paid Ads' },
            { value: '40+', label: 'Brands Served' },
        ],
    },
    {
        id: 'ai-development',
        icon: <HiOutlineLightBulb />,
        title: 'AI Development & Integration',
        tagline: 'Intelligent Automation & Machine Learning',
        flagship: true,
        gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
        summary: 'Harness the power of Artificial Intelligence to transform your business operations and insights.',
        description: [
            'Our AI development services help you integrate cutting-edge artificial intelligence, machine learning, and deep learning into your workflows.',
            'We build custom AI models, implement generative AI solutions, and deploy intelligent agents that understand natural language and complex data.',
            'Whether you need predictive analytics, computer vision, or automated decision-making, we engineer AI systems that provide a competitive edge.',
        ],
        features: [
            { name: 'Generative AI Solutions', detail: 'Custom LLM integration, chatbots, and automated content generation' },
            { name: 'Predictive Analytics', detail: 'Forecast trends, customer behavior, and inventory needs using historical data' },
            { name: 'Computer Vision', detail: 'Image recognition, object detection, and video analysis for spatial intelligence' },
            { name: 'Natural Language Processing', detail: 'Sentiment analysis, text summarization, and conversational UI' },
            { name: 'Process Automation', detail: 'RPA combined with cognitive AI to automate complex, repetitive tasks' },
            { name: 'Custom ML Models', detail: 'Tailored algorithm development, training, tuning, and deployment' },
        ],
        technologies: ['OpenAI API', 'TensorFlow', 'PyTorch', 'Hugging Face', 'LangChain', 'Python', 'AWS SageMaker', 'CUDA'],
        stats: [
            { value: '10x', label: 'Process Efficiency' },
            { value: '40%', label: 'Cost Reduction' },
            { value: '24/7', label: 'Automated Operations' },
        ],
    },
    {
        id: 'mobile-development',
        icon: <HiOutlineDeviceMobile />,
        title: 'Mobile App Development (AI Based)',
        tagline: 'Native & Cross-Platform Mobile Solutions',
        flagship: false,
        gradient: 'linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)',
        summary: 'High-performance iOS and Android apps for exceptional user experiences.',
        description: [
            'Mobile is where your users are. We design and develop intuitive, feature-rich mobile apps that users love.',
            'Our mobile development process starts with deep UX research to understand your users\' behavior, pain points, and expectations.',
            'Post-launch, we provide App Store Optimization (ASO), crash monitoring, and iterative updates.',
        ],
        features: [
            { name: 'iOS App Development', detail: 'Native Swift/SwiftUI apps following Apple\'s Human Interface Guidelines' },
            { name: 'Android App Development', detail: 'Kotlin/Jetpack Compose apps optimized for the Android ecosystem' },
            { name: 'Cross-Platform Apps', detail: 'Single codebase for iOS & Android using Flutter or React Native' },
            { name: 'UI/UX Mobile Design', detail: 'Platform-specific design patterns with focus on usability and delight' },
            { name: 'App Store Optimization', detail: 'ASO strategies to boost downloads and visibility on App Store & Play Store' },
            { name: 'App Maintenance & Support', detail: 'Bug fixes, OS updates, feature additions, and performance optimization' },
        ],
        technologies: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase', 'Supabase', 'Expo', 'Fastlane'],
        stats: [
            { value: '30+', label: 'Apps Published' },
            { value: '4.8★', label: 'Avg. Store Rating' },
            { value: '1M+', label: 'User Downloads' },
        ],
    },
    {
        id: 'erp-solutions',
        icon: <HiOutlineCube />,
        title: 'ERP Solutions',
        tagline: 'Streamline Operations & Boost Efficiency',
        flagship: false,
        gradient: 'linear-gradient(135deg, #059669 0%, #0d9488 100%)',
        summary: 'Custom ERP software to automate workflows and centralize data.',
        description: [
            'Our custom ERP solutions bring all your operations — finance, inventory, HR, procurement, sales — into a single, unified platform.',
            'We design and build ERP systems around your specific business processes for better adoption and faster ROI.',
            'We integrate seamlessly with tools you already use so you get a complete, connected view of your entire operation.',
        ],
        features: [
            { name: 'Process Automation', detail: 'Automate repetitive tasks like invoicing, approval flows, and report generation' },
            { name: 'Inventory Management', detail: 'Real-time stock tracking, reorder alerts, and multi-warehouse support' },
            { name: 'Financial Analytics', detail: 'Profit/loss dashboards, cash flow forecasting, and automated tax compliance' },
            { name: 'HR & Payroll', detail: 'Employee management, leave tracking, payroll processing, and performance reviews' },
            { name: 'Supply Chain Optimization', detail: 'Vendor management, purchase order tracking, and demand forecasting' },
            { name: 'Custom Reporting', detail: 'Build custom dashboards and automated reports for data-driven decisions' },
        ],
        technologies: ['Python', 'Node.js', 'React', 'PostgreSQL', 'Power BI', 'SAP Integration', 'REST APIs', 'Redis'],
        stats: [
            { value: '40%', label: 'Efficiency Increase' },
            { value: '60%', label: 'Less Manual Work' },
            { value: '24/7', label: 'Real-Time Access' },
        ],
    },
    {
        id: 'cloud-devops',
        icon: <HiOutlineCloud />,
        title: 'Cloud Solutions & DevOps (AI Based)',
        tagline: 'Scalable Infrastructure, Automated Pipelines',
        flagship: false,
        gradient: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
        summary: 'Expert cloud architecture and DevOps consulting for faster shipping and optimized costs.',
        description: [
            'We help you design, migrate, and manage cloud environments on AWS, Azure, and GCP with best-in-class security and performance.',
            'Our DevOps engineers set up CI/CD pipelines, container orchestration, and comprehensive monitoring for faster deployments.',
            'Whether moving from on-premises to cloud or optimizing existing cloud spend, we have the expertise to deliver.',
        ],
        features: [
            { name: 'Cloud Migration', detail: 'Lift-and-shift, re-platforming, or re-architecting your workloads for the cloud' },
            { name: 'AWS / Azure / GCP', detail: 'Multi-cloud or single-provider strategies tailored to your requirements and budget' },
            { name: 'CI/CD Pipelines', detail: 'Automated build, test, and deployment workflows using GitHub Actions, Jenkins, or GitLab CI' },
            { name: 'Container Orchestration', detail: 'Docker containerization with Kubernetes for scalable, self-healing deployments' },
            { name: 'Infrastructure as Code', detail: 'Terraform and CloudFormation for reproducible, version-controlled infrastructure' },
            { name: 'Monitoring & Alerting', detail: 'Prometheus, Grafana, CloudWatch, and PagerDuty for 24/7 observability' },
        ],
        technologies: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Grafana'],
        stats: [
            { value: '99.99%', label: 'Uptime Achieved' },
            { value: '50%', label: 'Cost Reduction' },
            { value: '10x', label: 'Faster Deployments' },
        ],
    },
    {
        id: 'game-development',
        icon: <HiOutlinePuzzle />,
        title: 'Game Development',
        tagline: 'Immersive Gaming Experiences',
        flagship: false,
        gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
        summary: 'Immersive 2D/3D games and AR/VR experiences with cutting-edge engines.',
        description: [
            'Our game development team specializes in creating engaging, high-performance games using Unity and Unreal Engine.',
            'We handle every aspect: concept design, art, mechanics, multiplayer networking, and monetization strategies.',
            'We also build AR/VR experiences for education, training, and brand engagement.',
        ],
        features: [
            { name: 'Unity Development', detail: 'Cross-platform 2D/3D games for mobile, PC, console, and WebGL' },
            { name: 'Unreal Engine', detail: 'AAA-quality graphics and physics for high-fidelity gaming experiences' },
            { name: 'Multiplayer Systems', detail: 'Real-time multiplayer with matchmaking, leaderboards, and anti-cheat systems' },
            { name: 'AR/VR Experiences', detail: 'Augmented and virtual reality apps for Oculus, HoloLens, and mobile AR' },
            { name: 'Game Art & Design', detail: 'Character modeling, environment design, UI/UX, and in-game asset creation' },
            { name: 'Monetization Strategy', detail: 'In-app purchases, ads integration, battle passes, and subscription models' },
        ],
        technologies: ['Unity', 'Unreal Engine', 'C#', 'C++', 'Blender', 'Photon', 'PlayFab', 'ARKit'],
        stats: [
            { value: '15+', label: 'Games Shipped' },
            { value: '500K+', label: 'Player Downloads' },
            { value: '4.5★', label: 'Avg. Rating' },
        ],
    },
    {
        id: 'it-consulting',
        icon: <HiOutlineLightBulb />,
        title: 'IT Consulting & Strategy',
        tagline: 'Expert Technology Guidance',
        flagship: false,
        gradient: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
        summary: 'Expert guidance on digital strategy, architecture, and modernization.',
        description: [
            'Our IT consulting team helps you make informed technology decisions — whether you\'re planning a digital transformation or auditing security.',
            'We conduct in-depth assessments, create architecture blueprints, and help you build high-performing engineering teams.',
            'We provide honest, vendor-agnostic advice that\'s focused entirely on what\'s right for your business.',
        ],
        features: [
            { name: 'Digital Strategy', detail: 'Technology roadmaps aligned with business goals, timelines, and budgets' },
            { name: 'Technology Assessment', detail: 'Comprehensive audits of your existing systems, code quality, and architecture' },
            { name: 'Architecture Design', detail: 'Scalable system design patterns, data modeling, and integration planning' },
            { name: 'Security Audits', detail: 'Penetration testing, vulnerability assessments, and compliance readiness (SOC 2, GDPR)' },
            { name: 'Team Augmentation', detail: 'Embed skilled developers, architects, or project managers into your team' },
            { name: 'Fractional CTO', detail: 'Executive-level technology leadership for startups and growing businesses' },
        ],
        technologies: ['TOGAF', 'AWS Well-Architected', 'OWASP', 'Jira', 'Confluence', 'Miro', 'Notion', 'Slack'],
        stats: [
            { value: '25+', label: 'Clients Advised' },
            { value: '95%', label: 'Repeat Engagement' },
            { value: '$2M+', label: 'Costs Saved' },
        ],
    },
];

const process = [
    {
        step: '01',
        title: 'Discovery & Research',
        desc: 'We start by understanding your business, target users, competitive landscape, and technical requirements through workshops, interviews, and market analysis.',
        icon: <HiOutlineChartBar />,
    },
    {
        step: '02',
        title: 'Strategy & Design',
        desc: 'Our designers create wireframes, prototypes, and pixel-perfect UI designs. We define the system architecture, tech stack, and project roadmap.',
        icon: <HiOutlineLightBulb />,
    },
    {
        step: '03',
        title: 'Agile Development',
        desc: 'We build in 2-week sprints with daily progress updates. Each sprint delivers working, tested features you can review and provide feedback on.',
        icon: <HiOutlineCode />,
    },
    {
        step: '04',
        title: 'Testing & QA',
        desc: 'Rigorous automated and manual testing — unit tests, integration tests, cross-browser testing, performance testing, and security scanning.',
        icon: <HiOutlineShieldCheck />,
    },
    {
        step: '05',
        title: 'Launch & Growth',
        desc: 'We deploy to production, set up monitoring and alerting, and provide ongoing support, maintenance, and iterative improvements post-launch.',
        icon: <HiArrowRight />,
    },
];

export default function Services() {
    const flagships = allServices.filter((s) => s.flagship);
    const others = allServices.filter((s) => !s.flagship);

    return (
        <main className="services-page">
            {/* HERO */}
            <section className="page-hero svc-hero">
                <div className="container">
                    <h1>Our IT Services & Solutions</h1>
                    <p className="svc-hero__sub">
                        Comprehensive technology services engineered for your growth.
                    </p>
                    <div className="breadcrumb">
                        <Link to="/">Home</Link>
                        <span>/</span>
                        <span>Services</span>
                    </div>
                </div>
            </section>

            {/* QUICK NAV */}
            <section className="svc-quicknav">
                <div className="container">
                    <div className="svc-quicknav__inner">
                        {allServices.map((s) => (
                            <a key={s.id} href={`#${s.id}`} className="svc-quicknav__link">
                                <span className="svc-quicknav__icon">{s.icon}</span>
                                <span className="svc-quicknav__label">{s.title}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* FLAGSHIP SERVICES — full-width detailed sections */}
            {flagships.map((s, i) => (
                <section key={s.id} id={s.id} className="section svc-full">
                    {i === 0 && <div className="gradient-orb gradient-orb-blue svc-full__orb svc-full__orb--left" />}
                    {i === 1 && <div className="gradient-orb gradient-orb-cyan svc-full__orb svc-full__orb--right" />}
                    <div className="container">
                        <AnimatedSection>
                            <div className="svc-full__badge" style={{ background: s.gradient }}>
                                <HiStar /> Flagship Service
                            </div>
                        </AnimatedSection>

                        <div className={`svc-full__hero ${i % 2 !== 0 ? 'svc-full__hero--reverse' : ''}`}>
                            <AnimatedSection variant={i % 2 === 0 ? 'fadeLeft' : 'fadeRight'} className="svc-full__intro">
                                <span className="section-label">{s.tagline}</span>
                                <h2 className="svc-full__title">{s.title}</h2>
                                <p className="svc-full__summary">{s.summary}</p>
                                <div className="svc-full__stats">
                                    {s.stats.map((st, j) => (
                                        <div key={j} className="svc-full__stat">
                                            <span className="svc-full__stat-value">{st.value}</span>
                                            <span className="svc-full__stat-label">{st.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </AnimatedSection>

                            <AnimatedSection variant={i % 2 === 0 ? 'fadeRight' : 'fadeLeft'} delay={0.2} className="svc-full__icon-wrap">
                                <Tilt3DCard className="svc-full__icon-card" maxTilt={12}>
                                    <div className="svc-full__icon-inner" style={{ background: s.gradient }}>
                                        {s.icon}
                                    </div>
                                </Tilt3DCard>
                            </AnimatedSection>
                        </div>

                        {/* Detailed description paragraphs */}
                        <AnimatedSection variant="fadeUp" delay={0.1}>
                            <div className="svc-full__body">
                                {s.description.map((p, j) => (
                                    <p key={j} className="svc-full__para">{p}</p>
                                ))}
                            </div>
                        </AnimatedSection>

                        {/* Detailed features grid */}
                        <div className="svc-full__features">
                            {s.features.map((f, j) => (
                                <AnimatedSection key={j} variant="fadeUp" delay={j * 0.08}>
                                    <Tilt3DCard className="svc-feature-card glass-card" maxTilt={10}>
                                        <div className="svc-feature-card__check">
                                            <HiCheck />
                                        </div>
                                        <h4 className="svc-feature-card__name">{f.name}</h4>
                                        <p className="svc-feature-card__detail">{f.detail}</p>
                                    </Tilt3DCard>
                                </AnimatedSection>
                            ))}
                        </div>

                        {/* Tech stack */}
                        <AnimatedSection variant="fadeUp" delay={0.1}>
                            <div className="svc-full__tech">
                                <h4 className="svc-full__tech-title">Technologies We Use</h4>
                                <div className="svc-full__tech-list">
                                    {s.technologies.map((t, j) => (
                                        <span key={j} className="svc-tech-badge">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection variant="fadeUp" delay={0.15}>
                            <div className="svc-full__cta-row">
                                <Link to="/contact" className="btn btn-primary">
                                    <span>Get Started with {s.title.split(' ')[0]} {s.title.split(' ')[1]}</span>
                                    <HiArrowRight />
                                </Link>
                                <Link to="/about" className="btn btn-outline">
                                    <span>Learn About Us</span>
                                    <HiArrowRight />
                                </Link>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>
            ))}

            {/* ALL OTHER SERVICES — each gets its own detailed section */}
            {others.map((s, i) => (
                <section key={s.id} id={s.id} className={`section svc-full svc-full--alt ${i % 2 !== 0 ? 'svc-full--shaded' : ''}`}>
                    <div className="container">
                        <div className={`svc-full__hero ${i % 2 !== 0 ? 'svc-full__hero--reverse' : ''}`}>
                            <AnimatedSection variant={i % 2 === 0 ? 'fadeLeft' : 'fadeRight'} className="svc-full__intro">
                                <span className="section-label">{s.tagline}</span>
                                <h2 className="svc-full__title">{s.title}</h2>
                                <p className="svc-full__summary">{s.summary}</p>
                                <div className="svc-full__stats">
                                    {s.stats.map((st, j) => (
                                        <div key={j} className="svc-full__stat">
                                            <span className="svc-full__stat-value">{st.value}</span>
                                            <span className="svc-full__stat-label">{st.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </AnimatedSection>

                            <AnimatedSection variant={i % 2 === 0 ? 'fadeRight' : 'fadeLeft'} delay={0.2} className="svc-full__icon-wrap">
                                <Tilt3DCard className="svc-full__icon-card" maxTilt={12}>
                                    <div className="svc-full__icon-inner" style={{ background: s.gradient }}>
                                        {s.icon}
                                    </div>
                                </Tilt3DCard>
                            </AnimatedSection>
                        </div>

                        <AnimatedSection variant="fadeUp" delay={0.1}>
                            <div className="svc-full__body">
                                {s.description.map((p, j) => (
                                    <p key={j} className="svc-full__para">{p}</p>
                                ))}
                            </div>
                        </AnimatedSection>

                        <div className="svc-full__features">
                            {s.features.map((f, j) => (
                                <AnimatedSection key={j} variant="fadeUp" delay={j * 0.08}>
                                    <Tilt3DCard className="svc-feature-card glass-card" maxTilt={10}>
                                        <div className="svc-feature-card__check">
                                            <HiCheck />
                                        </div>
                                        <h4 className="svc-feature-card__name">{f.name}</h4>
                                        <p className="svc-feature-card__detail">{f.detail}</p>
                                    </Tilt3DCard>
                                </AnimatedSection>
                            ))}
                        </div>

                        <AnimatedSection variant="fadeUp" delay={0.1}>
                            <div className="svc-full__tech">
                                <h4 className="svc-full__tech-title">Technologies We Use</h4>
                                <div className="svc-full__tech-list">
                                    {s.technologies.map((t, j) => (
                                        <span key={j} className="svc-tech-badge">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection variant="fadeUp" delay={0.15}>
                            <div className="svc-full__cta-row">
                                <Link to="/contact" className="btn btn-primary">
                                    <span>Discuss {s.title}</span>
                                    <HiArrowRight />
                                </Link>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>
            ))}

            {/* PROCESS */}
            <section className="section services-process">
                <div className="gradient-orb gradient-orb-purple svc-process__orb" />
                <div className="container">
                    <AnimatedSection>
                        <span className="section-label">How We Work</span>
                        <h2 className="section-title">Our Proven Development Process</h2>
                        <p className="section-subtitle">
                            Data-driven, transparent, and collaborative methodology.
                        </p>
                    </AnimatedSection>
                    <div className="process-timeline">
                        <div className="process-timeline__line" />
                        {process.map((p, i) => (
                            <AnimatedSection key={i} variant={i % 2 === 0 ? 'fadeLeft' : 'fadeRight'} delay={i * 0.12}>
                                <div className={`process-timeline__item ${i % 2 !== 0 ? 'process-timeline__item--right' : ''}`}>
                                    <div className="process-timeline__dot">
                                        <span>{p.step}</span>
                                    </div>
                                    <Tilt3DCard className="process-timeline__card glass-card" maxTilt={8}>
                                        <div className="process-timeline__card-icon">{p.icon}</div>
                                        <h3 className="process-timeline__card-title">{p.title}</h3>
                                        <p className="process-timeline__card-desc">{p.desc}</p>
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
                                Ready to Build Something Extraordinary?
                            </h2>
                            <p className="cta-box__desc">
                                Tell us about your project and get a free consultation with our
                                technology experts. No obligation, no pressure — just honest advice.
                            </p>
                            <div className="cta-box__buttons">
                                <Link to="/contact" className="btn btn-primary">
                                    <span>Request a Free Quote</span>
                                    <HiArrowRight />
                                </Link>
                                <Link to="/about" className="btn btn-outline">
                                    <span>Learn About Us</span>
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
