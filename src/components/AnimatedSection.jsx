import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const variants = {
    fadeUp: {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0 },
    },
    fadeDown: {
        hidden: { opacity: 0, y: -60 },
        visible: { opacity: 1, y: 0 },
    },
    fadeLeft: {
        hidden: { opacity: 0, x: -60 },
        visible: { opacity: 1, x: 0 },
    },
    fadeRight: {
        hidden: { opacity: 0, x: 60 },
        visible: { opacity: 1, x: 0 },
    },
    scaleIn: {
        hidden: { opacity: 0, scale: 0.85 },
        visible: { opacity: 1, scale: 1 },
    },
    fadeIn: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },
};

export default function AnimatedSection({
    children,
    variant = 'fadeUp',
    delay = 0,
    duration = 0.7,
    className = '',
    style = {},
    once = true,
    threshold = 0.15,
}) {
    const [ref, inView] = useInView({ triggerOnce: once, threshold });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={variants[variant] || variants.fadeUp}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className={className}
            style={style}
        >
            {children}
        </motion.div>
    );
}
