// src/pages/PortfolioPage.tsx
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Замените эти импорты на ваши реальные фото
import Photo1 from '../assets/portfolio/L1.jpg';
import Photo2 from '../assets/portfolio/L2.jpg';
import Photo3 from '../assets/portfolio/PB1.jpg';
import Photo4 from '../assets/portfolio/PB2.jpg';
import Photo5 from '../assets/portfolio/PG1.jpg';
import Photo6 from '../assets/portfolio/PG2.jpg';
import Photo7 from '../assets/portfolio/T1.jpg';
import Photo8 from '../assets/portfolio/T2.jpg';
import Photo9 from '../assets/portfolio/T3.jpg';
import Photo10 from '../assets/portfolio/T4.jpg';
import Photo11 from '../assets/portfolio/PB3.jpg';
import {FaInstagram} from "react-icons/fa";


const PortfolioPage: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState('Все работы');
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // Массив работ (замените на ваши фото и описания)
    const portfolioItems = [
        { id: 1, image: Photo3, category: 'Брови', title: 'Перманентный макияж бровей', description: 'Естественная коррекция формы' },
        { id: 2, image: Photo4, category: 'Брови', title: 'Перманент бровей', description: 'Эффект ухоженных бровей' },
        { id: 3, image: Photo1, category: 'Ресницы', title: 'Ламинирование ресниц', description: 'Идеальный изгиб на 6 недель' },
        { id: 4, image: Photo11, category: 'Брови', title: 'Перманент бровей', description: 'Идеальная форма' },
        { id: 5, image: Photo2, category: 'Ресницы', title: 'Ламинирование ресниц', description: 'Насыщенный цвет' },
        { id: 6, image: Photo7, category: 'Татуировка', title: 'Татуировка', description: 'Создание идеальной формы' },
        { id: 7, image: Photo5, category: 'Перманент', title: 'Перманент губ', description: 'Естественный контур' },
        { id: 8, image: Photo8, category: 'Татуировка', title: 'Татуировка', description: 'Стойкий результат' },
        { id: 9, image: Photo9, category: 'Татуировка', title: 'Татуировка', description: 'Техника микроблейдинга' },
        { id: 10, image: Photo6, category: 'Перманент', title: 'Перманент губ', description: 'Естественная подводка' },
        { id: 11, image: Photo10, category: 'Татуировка', title: 'Татуировка', description: 'Естественная подводка' },
        ];

    const categories = ['Все работы', 'Брови', 'Ресницы', 'Перманент'];

    const filteredItems = selectedCategory === 'Все работы'
        ? portfolioItems
        : portfolioItems.filter(item => item.category === selectedCategory);

    const openInstagram = () => {
        window.open('https://instagram.com/xoxo___brows', '_blank');
    };

    return (
        <div className="portfolio-page">
            {/* Структурированные данные для SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "CollectionPage",
                        "name": "Портфолио - XOXO Brows",
                        "description": "Фотографии работ мастера по перманентному макияжу, ламинированию бровей и ресниц в Светлогорске",
                        "url": "https://xoxo.by/portfolio",
                        "mainEntity": {
                            "@type": "ItemList",
                            "itemListElement": portfolioItems.map((item, index) => ({
                                "@type": "ListItem",
                                "position": index + 1,
                                "item": {
                                    "@type": "CreativeWork",
                                    "name": item.title,
                                    "description": item.description,
                                    "genre": item.category
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
                        <h1 className="hero-title">Мои работы</h1>
                        <p className="hero-subtitle">Реальные результаты и довольные клиенты. Каждая работа - это искусство и индивидуальный подход</p>
                        <div className="scroll-indicator">
                            <div className="scroll-arrow"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Фильтр по категориям */}
            <section className="portfolio-filter-section">
                <div className="container">
                    <div className="portfolio-categories">
                        {categories.map(category => (
                            <button
                                key={category}
                                className={`portfolio-category-btn ${selectedCategory === category ? 'active' : ''}`}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Сетка работ */}
            <section className="portfolio-grid-section">
                <div className="container">
                    <div className="portfolio-grid">
                        {filteredItems.map(item => (
                            <div
                                key={item.id}
                                className="portfolio-item"
                                onClick={() => setSelectedImage(item.image)}
                            >
                                <div className="portfolio-image-container">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="portfolio-image"
                                    />
                                    <div className="portfolio-overlay">
                                        <div className="portfolio-category-tag">{item.category}</div>
                                        <div className="portfolio-info">
                                            <h3>{item.title}</h3>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Кнопка Instagram */}
                    <div className="portfolio-instagram-cta">
                        <div className="instagram-content">
                            <div className="instagram-icon"><FaInstagram /></div>
                            <div className="instagram-text">
                                <h3>Ещё больше работ в моём Instagram</h3>
                                <p>Следите за обновлениями, смотрите видео-процессы и читайте отзывы реальных клиентов</p>
                            </div>
                            <button
                                className="instagram-button"
                                onClick={openInstagram}
                            >
                                💫 Подписаться в Instagram
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Попап для просмотра фото */}
            {selectedImage && (
                <div className="portfolio-popup-overlay" onClick={() => setSelectedImage(null)}>
                    <div className="portfolio-popup" onClick={(e) => e.stopPropagation()}>
                        <button
                            className="popup-close"
                            onClick={() => setSelectedImage(null)}
                        >
                            ×
                        </button>
                        <img
                            src={selectedImage}
                            alt="Увеличенное фото работы"
                            className="popup-image"
                        />
                    </div>
                </div>
            )}

            {/* CTA секция */}
            <section className="portfolio-cta-section">
                <div className="container">
                    <div className="portfolio-cta-content">
                        <h2>Хотите такой же результат?</h2>
                        <p>Запишитесь на консультацию и я помогу подобрать идеальную процедуру именно для вас</p>
                        <div className="portfolio-cta-buttons">
                            <button
                                className="cta-button primary"
                                onClick={() => {
                                    const contactButton = document.querySelector('.contact-button') as HTMLButtonElement;
                                    if (contactButton) contactButton.click();
                                }}
                            >
                                📱 Записаться на процедуру
                            </button>
                            <a
                                href="/services"
                                className="cta-button secondary"
                            >
                                💫 Посмотреть все услуги
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default PortfolioPage;