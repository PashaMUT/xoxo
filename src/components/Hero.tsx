import React from 'react';
import heroBg from '../assets/hero.jpg';

const Hero: React.FC = () => {
    return (
        <section
            className="hero text-white relative"
            style={{ backgroundImage: `url(${heroBg})` }}
        >
            <div className="absolute inset-0 bg-black/50" /> {/* затемнение */}

            <div className="hero-content">
                <h1>Красота начинается здесь</h1>
                <p className="text-xl mt-4 font-medium">
                    Перманентный макияж всех зон и татуировки
                </p>
            </div>
        </section>
    );
};

export default Hero;
