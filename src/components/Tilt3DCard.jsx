import { useRef, useState } from 'react';

/**
 * Tilt3DCard — wraps children in a 3D perspective-tilt container.
 * On mouse move the card rotates in X and Y.
 * On mouse leave it springs back to flat.
 */
export default function Tilt3DCard({ children, className = '', maxTilt = 12, glare = true }) {
    const cardRef = useRef(null);
    const [style, setStyle] = useState({});
    const [glareStyle, setGlareStyle] = useState({});

    const handleMove = (e) => {
        const el = cardRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        const rotateY = ((x - cx) / cx) * maxTilt;
        const rotateX = ((cy - y) / cy) * maxTilt;

        setStyle({
            transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`,
            transition: 'transform 0.1s ease-out',
        });

        if (glare) {
            const gx = (x / rect.width) * 100;
            const gy = (y / rect.height) * 100;
            setGlareStyle({
                background: `radial-gradient(circle at ${gx}% ${gy}%, rgba(255,255,255,0.12) 0%, transparent 60%)`,
                opacity: 1,
            });
        }
    };

    const handleLeave = () => {
        setStyle({
            transform: 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
            transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        });
        if (glare) {
            setGlareStyle({ opacity: 0 });
        }
    };

    return (
        <div
            ref={cardRef}
            className={`tilt3d ${className}`}
            style={style}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
        >
            {children}
            {glare && <div className="tilt3d__glare" style={glareStyle} />}
        </div>
    );
}
