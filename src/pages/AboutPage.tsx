// src/pages/AboutPage.tsx
import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutPh from '../assets/about.jpg';
import SEO from '../components/SEO';

const AboutPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);
    const statsRef = useRef<HTMLDivElement>(null);
    const [animatedStats, setAnimatedStats] = useState({
        experience: 0,
        clients: 0,
        certificates: 0,
        quality: 0
    });

    // Анимация появления при загрузке
    useEffect(() => {
        setIsVisible(true);

        // Анимация счетчиков
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    animateNumbers();
                }
            },
            { threshold: 0.5 }
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const animateNumbers = () => {
        const duration = 2000;
        const steps = 60;
        const stepDuration = duration / steps;

        const targetValues = {
            experience: 5,
            clients: 1000,
            certificates: 50,
            quality: 100
        };

        let step = 0;
        const timer = setInterval(() => {
            step++;
            const progress = step / steps;

            setAnimatedStats({
                experience: Math.floor(targetValues.experience * progress),
                clients: Math.floor(targetValues.clients * progress),
                certificates: Math.floor(targetValues.certificates * progress),
                quality: Math.floor(targetValues.quality * progress)
            });

            if (step >= steps) {
                clearInterval(timer);
                setAnimatedStats(targetValues);
            }
        }, stepDuration);
    };

    return (
        <div className={`about-page ${isVisible ? 'page-visible' : ''}`}>

            <SEO
                title="О мастере перманентного макияжа в Светлогорске | XOXO Brows"
                description="👩‍🎨 Профессиональный мастер Яна с 5-летним опытом. Перманентный макияж бровей, губ, стрелок. Сертифицированные материалы, индивидуальный подход."
                keywords="мастер перманента Светлогорск, о мастере татуажа, сертификаты перманентного макияжа, опыт работы, Яна мастер"
                canonical="https://xoxo.by/about"
            />

            {/* Структурированные данные для SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "AboutPage",
                        "name": "О мастере - XOXO Brows",
                        "description": "Профессиональный мастер перманентного макияжа Яна с 5-летним опытом в Светлогорске. Специализация: перманентный макияж бровей, губ, стрелок, ламинирование ресниц.",
                        "url": "https://xoxo.by/about",
                        "mainEntity": {
                            "@type": "Person",
                            "name": "Яна",
                            "jobTitle": "Мастер перманентного макияжа",
                            "description": "Профессиональный мастер с более чем 5-летним опытом в индустрии красоты",
                            "knowsAbout": ["Перманентный макияж", "Микроблейдинг", "Ламинирование ресниц", "Татуаж губ"],
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "Светлогорск",
                                "addressCountry": "BY"
                            }
                        }
                    })
                }}
            />

            <Header />

            {/* Hero секция с параллакс эффектом */}
            <section className="about-hero-section">
                <div className="hero-parallax">
                    <div className="parallax-bg"></div>
                    <div className="about-hero-content">
                        <h1 className="hero-title">О мастере</h1>
                        <p className="hero-subtitle">Профессионал с любовью к искусству красоты</p>
                        <div className="scroll-indicator">
                            <div className="scroll-arrow"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Основной контент страницы */}
            <section className="about-page-content" ref={sectionRef}>
                <div className="about-page-container">
                    <div className="about-text-content">
                        <h2 className="fade-in-up">Меня зовут Яна</h2>
                        <p className="about-intro fade-in-up delay-1">
                            Я профессиональный мастер с более чем 5-летним опытом в индустрии красоты.
                            Специализируюсь на перманентном макияже, ламинировании и художественных татуировках.
                            Каждая процедура — это искусство, которое помогает раскрыть вашу естественную красоту.
                        </p>

                        <div className="about-achievements">
                            <div className="achievement-item slide-in-left">
                                <div className="achievement-icon">🎓</div>
                                <div className="achievement-text">
                                    <h3>Образование и сертификаты</h3>
                                    <p>Более 50 пройденных курсов и мастер-классов от ведущих специалистов индустрии красоты</p>
                                </div>
                            </div>

                            <div className="achievement-item slide-in-right">
                                <div className="achievement-icon">💫</div>
                                <div className="achievement-text">
                                    <h3>Подход к работе</h3>
                                    <p>Индивидуальный подбор формы и цвета с учетом анатомических особенностей и пожеланий клиента</p>
                                </div>
                            </div>

                            <div className="achievement-item slide-in-left">
                                <div className="achievement-icon">🔬</div>
                                <div className="achievement-text">
                                    <h3>Технологии и материалы</h3>
                                    <p>Использую только сертифицированные пигменты европейского качества и современное оборудование</p>
                                </div>
                            </div>
                        </div>

                        <div className="about-stats-grid" ref={statsRef}>
                            <div className="stat-card count-up">
                                <div className="stat-number">{animatedStats.experience}+</div>
                                <div className="stat-label">Лет опыта</div>
                            </div>
                            <div className="stat-card count-up">
                                <div className="stat-number">{animatedStats.clients}+</div>
                                <div className="stat-label">Довольных клиентов</div>
                            </div>
                            <div className="stat-card count-up">
                                <div className="stat-number">{animatedStats.certificates}+</div>
                                <div className="stat-label">Сертификатов</div>
                            </div>
                            <div className="stat-card count-up">
                                <div className="stat-number">{animatedStats.quality}%</div>
                                <div className="stat-label">Гарантия качества</div>
                            </div>
                        </div>

                        <div className="about-principles">
                            <h3 className="fade-in-up">Мои принципы работы</h3>
                            <div className="principles-list">
                                {[
                                    "Индивидуальный подход к каждому клиенту",
                                    "Использование премиальных материалов",
                                    "Стерильные условия и безопасность",
                                    "Консультация перед процедурой",
                                    "Поддержка после процедуры"
                                ].map((principle, index) => (
                                    <div
                                        key={index}
                                        className="principle-item fade-in-up"
                                        style={{ animationDelay: `${1.5 + index * 0.1}s` }}
                                    >
                                        <div className="principle-icon">✓</div>
                                        <div className="principle-text">{principle}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="about-visual-content">
                        <div className="master-photo-wrapper float-animation">
                            <div className="master-main-photo">
                                <img
                                    src={AboutPh}
                                    alt="Мастер Яна - специалист по перманентному макияжу в Светлогорске"
                                    className="photo-zoom"
                                />
                            </div>
                            <div className="photo-frame rotate-animation"></div>
                            <div className="experience-badge-large pulse-animation">
                                <div className="experience-value">5 лет</div>
                                <div className="experience-description">профессионального опыта</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AboutPage;