export default function NxlLogo({ className }) {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 820 200"
            aria-label="NXL Technologies"
        >
            <defs>
                <linearGradient id="nxl-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#9333ea" />
                    <stop offset="100%" stopColor="#e91e8c" />
                </linearGradient>
            </defs>
            {/* Circle ring */}
            <circle cx="100" cy="100" r="78" fill="none" stroke="url(#nxl-grad)" strokeWidth="16" />
            {/* Lightning bolt */}
            <polygon
                points="118,18 68,108 104,108 76,188 138,88 104,88 118,18"
                fill="url(#nxl-grad)"
            />
            {/* NXL text */}
            <text
                x="210"
                y="120"
                fontFamily="Outfit, Inter, sans-serif"
                fontWeight="800"
                fontSize="78"
                fill="currentColor"
                letterSpacing="3"
            >
                NXL
            </text>
            {/* TECHNOLOGIES text */}
            <text
                x="440"
                y="120"
                fontFamily="Outfit, Inter, sans-serif"
                fontWeight="500"
                fontSize="62"
                fill="currentColor"
                letterSpacing="3"
            >
                TECHNOLOGIES
            </text>
        </svg>
    );
}
