// src/pages/proceduresPage.tsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ServicesPage: React.FC = () => {
    const procedures = [
        {
            id: 1,
            title: "Перманент бровей",
            description: "Создание идеальной формы бровей с помощью перманентного макияжа. Техника позволяет скорректировать асимметрию, добавить объем и четкость. Результат сохраняется от 1 до 3 лет.",
            details: [
                "Индивидуальный подбор формы и цвета",
                "Учет особенностей лица и пожеланий",
                "Использование гипоаллергенных пигментов",
                "Поэтапное нанесение для естественного результата"
            ],
            duration: "2-3 часа",
            category: "Перманентный макияж"
        },
        {
            id: 2,
            title: "Перманент губ",
            description: "Коррекция контура губ и насыщение цветом. Помогает визуально увеличить объем, скорректировать асимметрию и получить стойкий естественный тон.",
            details: [
                "Коррекция формы и контура",
                "Насыщение естественным цветом",
                "Эффект увлажненных губ",
                "Маскировка шрамов и неровностей"
            ],
            duration: "2-3 часа",
            category: "Перманентный макияж"
        },
        {
            id: 3,
            title: "Перманент межреснички",
            description: "Создание эффекта подводки без ежедневного макияжа. Идеально для тех, кто хочет подчеркнуть взгляд естественным образом.",
            details: [
                "Естественное подчеркивание глаз",
                "Визуальное увеличение объема ресниц",
                "Коррекция формы глаз",
                "Незаметный дневной макияж"
            ],
            duration: "1.5-2 часа",
            category: "Перманентный макияж"
        },
        {
            id: 4,
            title: "Долговременная укладка бровей",
            description: "Процедура, которая фиксирует идеальную форму бровей на 6-8 недель. Волоски укладываются в нужном направлении и сохраняют ухоженный вид.",
            details: [
                "Фиксация формы на 6-8 недель",
                "Уход за волосками и кожей",
                "Ламинирование и питание",
                "Эффект густых ухоженных бровей"
            ],
            duration: "45-60 минут",
            category: "Брови"
        },
        {
            id: 5,
            title: "Окрашивание бровей",
            description: "Придание бровям насыщенного цвета, визуальное увеличение густоты. Подбор идеального оттенка под цвет волос и тип внешности.",
            details: [
                "Натуральные краски премиум-класса",
                "Подбор индивидуального оттенка",
                "Стойкость до 4 недель",
                "Уход за кожей и волосками"
            ],
            duration: "30-40 минут",
            category: "Брови"
        },
        {
            id: 6,
            title: "Коррекция бровей",
            description: "Создание четкой формы бровей с учетом анатомических особенностей. Удаление лишних волосков и оформление идеального изгиба.",
            details: [
                "Анализ формы лица",
                "Подбор идеального изгиба",
                "Аккуратное удаление волосков",
                "Рекомендации по уходу"
            ],
            duration: "30 минут",
            category: "Брови"
        },
        {
            id: 7,
            title: "Депиляция над губой",
            description: "Быстрое и безболезненное удаление нежелательных волосков над верхней губой. Чистая и гладкая кожа на несколько недель.",
            details: [
                "Быстрая процедура",
                "Минимальные болевые ощущения",
                "Долговременный результат",
                "Профилактика вросших волосков"
            ],
            duration: "15-20 минут",
            category: "Депиляция"
        },
        {
            id: 8,
            title: "Ламинирование ресниц",
            description: "Процедура, которая придает ресницам идеальный изгиб, объем и длину на 6-8 недель. Проснуться с идеальными ресницами каждое утро.",
            details: [
                "Изгиб и фиксация на 6-8 недель",
                "Визуальное удлинение и уплотнение",
                "Питание и укрепление ресниц",
                "Безопасный состав для чувствительных глаз"
            ],
            duration: "1-1.5 часа",
            category: "Ресницы"
        },
        {
            id: 10,
            title: "Окрашивание ресниц",
            description: "Придание ресницам насыщенного темного цвета. Визуальное увеличение объема и выраженности взгляда без туши.",
            details: [
                "Стойкое окрашивание до 4 недель",
                "Безопасная формула для глаз",
                "Укрепление и питание ресниц",
                "Эффект накрашенных ресниц"
            ],
            duration: "30 минут",
            category: "Ресницы"
        },
        {
            id: 11,
            title: "Татуировка",
            description: "Художественная татуировка любой сложности. Индивидуальный эскиз, консультация и профессиональное исполнение.",
            details: [
                "Разработка индивидуального эскиза",
                "Качественные пигменты",
                "Стерильные условия",
                "Консультация по уходу"
            ],
            duration: "зависит от сложности",
            category: "Татуировки"
        }
    ];

    const categories = [
        "Все процедуры",
        "Перманентный макияж",
        "Брови",
        "Ресницы",
        "Депиляция",
        "Татуировки"
    ];

    const [selectedCategory, setSelectedCategory] = React.useState("Все процедуры");

    const filteredprocedures = selectedCategory === "Все процедуры"
        ? procedures
        : procedures.filter(procedure => procedure.category === selectedCategory);

    return (
        <div className="procedures-page">
            {/* Структурированные данные для SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "procedure",
                        "procedureType": "Beauty procedures",
                        "provider": {
                            "@type": "BeautySalon",
                            "name": "XOXO Brows",
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "Светлогорск",
                                "streetAddress": "ул. Спортивная, 11"
                            }
                        },
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Услуги студии красоты",
                            "itemListElement": procedures.map(procedure => ({
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "procedure",
                                    "name": procedure.title,
                                    "description": procedure.description
                                }
                            }))
                        }
                    })
                }}
            />

            <Header />

            {/* Hero секция */}
                     <section className="about-hero-section">
                <div className="hero-parallax">
                    <div className="parallax-bg"></div>
                    <div className="about-hero-content">
                        <h1 className="hero-title">Мои услуги</h1>
                        <p className="hero-subtitle">Профессиональный подход к вашей красоте</p>
                        <div className="scroll-indicator">
                            <div className="scroll-arrow"></div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Фильтр по категориям */}
            <section className="procedures-filter-section">
                <div className="container">
                    <div className="categories-filter">
                        {categories.map(category => (
                            <button
                                key={category}
                                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Сетка услуг */}
            <section className="procedures-grid-section">
                <div className="container">
                    <div className="procedures-grid">
                        {filteredprocedures.map(procedure => (
                            <div key={procedure.id} className="procedure-card">
                                <div className="procedure-header">
                                    <h3>{procedure.title}</h3>
                                    <span className="procedure-category">{procedure.category}</span>
                                </div>

                                <div className="procedure-content">
                                    <p className="procedure-description">{procedure.description}</p>

                                    <div className="procedure-details">
                                        <h4>Что включает процедура:</h4>
                                        <ul>
                                            {procedure.details.map((detail, index) => (
                                                <li key={index}>{detail}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="procedure-meta">
                                        <div className="duration">
                                            <span className="meta-label">⏱️ Время:</span>
                                            <span>{procedure.duration}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="procedure-footer">
                                    <a
                                        href="https://instagram.com/xoxo___brows"
                                        className="booking-button"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        📅 Записаться
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA секция */}
            <section className="procedures-cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Готовы к преображению?</h2>
                        <p>Выберите процедуру и запишитесь на консультацию. Я помогу подобрать оптимальный вариант для вашего образа</p>
                        <div className="cta-buttons">
                            <button
                                className="cta-button primary"
                                onClick={() => {
                                    // Открываем попап из Header
                                    const contactButton = document.querySelector('.contact-button') as HTMLButtonElement;
                                    if (contactButton) {
                                        contactButton.click();
                                    } else {
                                        // Fallback - открываем Instagram
                                        window.open('https://instagram.com/xoxo___brows', '_blank');
                                    }
                                }}
                            >
                                📱 Оставить заявку
                            </button>
                            <a
                                href="https://instagram.com/xoxo___brows"
                                className="cta-button secondary"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                💬 Написать в Instagram
                            </a>
                            <a
                                href="/contacts"
                                className="cta-button tertiary"
                            >
                                📍 Контакты студии
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ServicesPage;