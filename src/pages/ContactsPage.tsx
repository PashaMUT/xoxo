import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactsPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="contacts-page">
            {/* Структурированные данные для SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BeautySalon",
                        "name": "XOXO Brows - Студия красоты",
                        "description": "Студия перманентного макияжа и ламинирования в Светлогорске",
                        "url": "https://xoxo.by/contacts",
                        "telephone": "+375291234567",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "ул. Спортивная, 11",
                            "addressLocality": "Светлогорск",
                            "addressCountry": "BY"
                        },
                        "openingHours": [
                            "Mo-Fr 09:00-20:00",
                            "Sa 10:00-18:00"
                        ],
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 52.6333,
                            "longitude": 29.7333
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
                        <h1 className="hero-title">Моя студия в Светлогорске</h1>
                        <p className="hero-subtitle">Уютное пространство, где рождается ваша красота</p>
                        <div className="scroll-indicator">
                            <div className="scroll-arrow"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Основной контент */}
            <section className="contacts-content-section">
                <div className="contacts-container">
                    {/* Левая колонка - карта и адрес */}
                    <div className="contacts-map-section">
                        <h2>Адрес студии</h2>
                        <div className="address-card">
                            <div className="address-icon">📍</div>
                            <div className="address-details">
                                <h3>г. Светлогорск, ул. Спортивная, 11</h3>
                                <p className="address-description">
                                    Студия расположена в центре города, в шаговой доступности от основных
                                    транспортных остановок. Удобный подъезд и парковка делают посещение
                                    комфортным в любое время дня.
                                </p>
                            </div>
                        </div>

                        {/* Карта */}
                        <div className="map-container">
                            <iframe
                                src="https://yandex.ru/map-widget/v1/?ll=29.749400,52.630833&z=16&pt=29.749400,52.630833,pm2rdm&l=map"
                                width="100%"
                                height="400"
                                frameBorder="0"
                                title="Карта расположения студии XOXO Brows в Светлогорске"
                                className="map-iframe"
                            ></iframe>
                            <div className="map-overlay">
                                <div className="map-marker">
                                    <div className="marker-pulse"></div>
                                    <span>XOXO Brows</span>
                                </div>
                            </div>
                        </div>

                        {/* Как добраться */}
                        <div className="transport-info">
                            <h3>Как добраться</h3>
                            <div className="transport-options">
                                <div className="transport-item">
                                    <div className="transport-icon">🚌</div>
                                    <div>
                                        <strong>Автобусы:</strong> № 1, 2, 5, 9, 10, 11, 12, 15 до остановки "Гостиница"
                                    </div>
                                </div>
                                <div className="transport-item">
                                    <div className="transport-icon">🚗</div>
                                    <div>
                                        <strong>На автомобиле:</strong> Удобная парковка рядом со студией
                                    </div>
                                </div>
                                <div className="transport-item">
                                    <div className="transport-icon">🚶‍♀️</div>
                                    <div>
                                        <strong>Пешком:</strong> 5 минут от центральной площади
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Правая колонка - информация */}
                    <div className="contacts-info-section">
                        {/* Что вас ждет */}
                        <div className="info-block">
                            <h2>Что вас ждет в студии</h2>
                            <div className="info-content">
                                <p>
                                    Моя студия — это не просто рабочее пространство, а место, где каждая деталь
                                    создана для вашего комфорта и расслабления. Здесь царит атмосфера уюта и заботы,
                                    где вы можете полностью довериться профессионалу и насладиться процессом преображения.
                                </p>

                                <div className="features-list">
                                    <div className="feature-item">
                                        <div className="feature-icon">✨</div>
                                        <div className="feature-text">
                                            <strong>Уютная атмосфера</strong>
                                            <p>Комфортная обстановка, приятная музыка и внимательное отношение помогут вам расслабиться и получить удовольствие от процедуры</p>
                                        </div>
                                    </div>

                                    <div className="feature-item">
                                        <div className="feature-icon">🔬</div>
                                        <div className="feature-text">
                                            <strong>Профессиональное оборудование</strong>
                                            <p>Работаю только с сертифицированными аппаратами и качественными пигментами европейского производства, что гарантирует безопасность и долговечность результата</p>
                                        </div>
                                    </div>

                                    <div className="feature-item">
                                        <div className="feature-icon">🧼</div>
                                        <div className="feature-text">
                                            <strong>Стерильность и чистота</strong>
                                            <p>Строгое соблюдение всех санитарных норм: использование одноразовых инструментов, стерилизация оборудования и антисептическая обработка поверхностей</p>
                                        </div>
                                    </div>

                                    <div className="feature-item">
                                        <div className="feature-icon">💫</div>
                                        <div className="feature-text">
                                            <strong>Индивидуальный подход</strong>
                                            <p>Для каждого клиента провожу подробную консультацию, учитываю особенности внешности, пожелания и образ жизни при подборе формы и цвета</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Дополнительная информация */}
                        <div className="info-block">
                            <h2>Дополнительная информация</h2>
                            <div className="info-content">
                                <p>
                                    Я создала пространство, где каждая женщина может почувствовать себя особенной.
                                    Здесь нет места спешке и шаблонным решениям — только индивидуальный подход и
                                    внимание к деталям.
                                </p>

                                <div className="additional-details">
                                    <div className="detail-category">
                                        <h4>🅿️ Парковка</h4>
                                        <p>Рядом со студией есть бесплатная парковка, где вы можете оставить автомобиль на время процедуры. Места достаточно даже в часы пик.</p>
                                    </div>

                                    <div className="detail-category">
                                        <h4>📞 Подготовка к визиту</h4>
                                        <p>Перед посещением рекомендую ознакомиться с противопоказаниями на сайте. За 2-3 дня до процедуры избегайте употребления алкоголя и кофеиносодержащих напитков для лучшего результата.</p>
                                    </div>

                                    <div className="detail-category">
                                        <h4>💝 Для вашего комфорта</h4>
                                        <p>В студии есть зона ожидания с комфортными креслами, бесплатный Wi-Fi, возможность попить чай или кофе. Вы можете прийти с сопровождающим, для которого также найдется удобное место.</p>
                                    </div>

                                    <div className="detail-category">
                                        <h4>🎯 После процедуры</h4>
                                        <p>После завершения процедуры вы получите подробные рекомендации по уходу и мою постоянную поддержку. Всегда на связи для ответов на вопросы в процессе заживления.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Кнопка записи */}
                        <div className="contacts-booking">
                            <h3>Готовы к преображению?</h3>
                            <p>Запишитесь на процедуру и приходите в уютную студию на улице Спортивной, 11</p>
                            <a
                                href="https://instagram.com/xoxo___brows"
                                className="booking-button large primary"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                📍 Записаться в студию
                            </a>
                            <button
                                className="booking-button large primary"
                                onClick={() => {
                                    // Открываем попап из Header
                                    const contactButton = document.querySelector('.contact-button') as HTMLButtonElement;
                                    if (contactButton) {
                                        contactButton.click();
                                    }
                                }}
                            >
                                📱 Оставить заявку
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ContactsPage;