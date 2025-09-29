import React from 'react';

import AboutPh from '/src/assets/about.jpg'


const About: React.FC = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-content">
                <div className="about-text">
                    <h2>О мастере</h2>
                    <p className="about-description">
                        Меня зовут Яна и я профессиональный мастер с более чем 5-летним опытом в индустрии красоты.
                        Специализируюсь на перманентном макияже, ламинировании и художественных татуировках.
                        Каждая процедура — это искусство, которое помогает раскрыть вашу естественную красоту.
                    </p>

                    <div className="about-stats">
                        <div className="stat-item">
                            <div className="stat-number">5+</div>
                            <div className="stat-label">Лет опыта</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">1000+</div>
                            <div className="stat-label">Довольных клиентов</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">50+</div>
                            <div className="stat-label">Сертификатов</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">100%</div>
                            <div className="stat-label">Положительных отзывов</div>
                        </div>
                    </div>

                    <div className="about-features">
                        <div className="feature-item">
                            <div className="feature-icon">✓</div>
                            <div className="feature-text">Индивидуальный подход к каждому клиенту</div>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">✓</div>
                            <div className="feature-text">Использование премиальных материалов</div>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">✓</div>
                            <div className="feature-text">Стерильные условия и безопасность</div>
                        </div>
                    </div>
                </div>

                <div className="about-visual">
                    <div className="master-photo-container">
                        <div className="master-photo">
                            <img src={AboutPh}/>
                        </div>
                        <div className="photo-decoration"></div>
                        <div className="experience-badge">
                            <div className="experience-years">5 лет</div>
                            <div className="experience-text">профессионального опыта</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;