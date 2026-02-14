import { useEffect, useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import AnimatedSection from './AnimatedSection';
import './StatsCounter.css';

const stats = [
    { value: 99, suffix: '%', label: 'Reduction in Infrastructure Downtime' },
    { value: 70, suffix: '%', label: 'Increase in Operational Efficiency' },
    { value: 50, suffix: '%', label: 'Faster Deployment of Cloud Solutions' },
    { value: 60, suffix: '%', label: 'Cost Savings on IT Infrastructure' },
];

function CountUp({ target, suffix, inView }) {
    const [count, setCount] = useState(0);
    const frameRef = useRef(null);

    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const duration = 2000;
        const startTime = performance.now();

        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) {
                frameRef.current = requestAnimationFrame(animate);
            }
        };

        frameRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frameRef.current);
    }, [inView, target]);

    return (
        <span className="stat-number">
            {count}
            {suffix}
        </span>
    );
}

export default function StatsCounter() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
        <section className="stats-section section" ref={ref}>
            <div className="gradient-orb gradient-orb-blue stats-orb-1" />
            <div className="gradient-orb gradient-orb-purple stats-orb-2" />
            <div className="container">
                <AnimatedSection variant="fadeUp">
                    <div className="stats-quote">
                        <p>
                            "At NXL Technologies, we don't just deliver IT services; we craft
                            solutions that drive transformation, efficiency, and growth."
                        </p>
                        <span className="stats-quote-author">— James Alexander</span>
                    </div>
                </AnimatedSection>
                <div className="stats-grid">
                    {stats.map((stat, i) => (
                        <AnimatedSection key={i} variant="scaleIn" delay={i * 0.15}>
                            <div className="stat-card glass-card">
                                <CountUp target={stat.value} suffix={stat.suffix} inView={inView} />
                                <span className="stat-label">{stat.label}</span>
                                <div className="stat-glow" />
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
