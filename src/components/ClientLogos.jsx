import React from 'react';
import './ClientLogos.css';

// Placeholder logos using text for now. calculate real logos later.
const logos = [
    { name: 'TechFlow', id: 1 },
    { name: 'Nebula', id: 2 },
    { name: 'Vortex', id: 3 },
    { name: 'Quantum', id: 4 },
    { name: 'CyberSphere', id: 5 },
    { name: 'DataMind', id: 6 },
    { name: 'BioSync', id: 7 },
    { name: 'EcoSystems', id: 8 },
];

export default function ClientLogos() {
    return (
        <section className="client-logos">
            <div className="client-logos__overlay left" />
            <div className="client-logos__overlay right" />

            <div className="client-logos__track">
                {/* Original set */}
                {logos.map((logo) => (
                    <div key={logo.id} className="client-logo">
                        <span className="client-logo__text">{logo.name}</span>
                    </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {logos.map((logo) => (
                    <div key={`${logo.id}-duplicate`} className="client-logo">
                        <span className="client-logo__text">{logo.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
