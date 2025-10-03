import React from "react";
import { FaInstagram, FaTelegram } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <>
            {/* Schema.org разметка для SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BeautySalon",
                        "name": "XOXO Brows",
                        "description": "Студия перманентного макияжа в Светлогорске",
                        "url": "https://xoxo.by",
                        "telephone": "+375291234567",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "ул. Спортивная, 11",
                            "addressLocality": "Светлогорск",
                            "postalCode": "247433",
                            "addressCountry": "BY"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": "52.6295",
                            "longitude": "29.7490"
                        },
                        "openingHours": [
                            "Mo-Fr 09:00-20:00",
                            "Sa 10:00-18:00"
                        ],
                        "priceRange": "$$"
                    })
                }}
            />

            <footer className="footer">
                <div className="footer-container">
                    {/* Основной контент в одну строку */}
                    <div className="footer-main">
                        <div className="footer-brand">
                            <h3>XOXO Brows</h3>
                            <p>Перманентный макияж в Светлогорске</p>
                        </div>

                        <div className="footer-contacts">
                            <div className="contact-item">
                                <span className="contact-icon">📍</span>
                                <span>ул. Спортивная, 11</span>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon"><FaInstagram /></span>
                                <span>xoxo___brows</span>
                            </div>
                        </div>

                        <div className="footer-social">
                            <div className="social-links">
                                <a
                                    href="https://instagram.com/xoxo___brows"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link instagram"
                                    aria-label="Instagram"
                                >
                                    <FaInstagram />
                                </a>
                                <a
                                    href="https://t.me/xbrows"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link telegram"
                                    aria-label="Telegram"
                                >
                                    <FaTelegram />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Нижняя часть с навигацией */}
                    <div className="footer-bottom">
                        <div className="footer-copyright">
                            <p>&copy; 2025 XOXO Brows</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;