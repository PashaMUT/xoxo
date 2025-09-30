import React from 'react';
import logo from '../assets/logo.png';

const Header: React.FC = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <>
            <header className="header">
                <div className="header-container">
                    <img src={logo} alt="Логотип" className="header-logo" onClick={(e) => { e.preventDefault(); scrollToSection('hero');}} />

                    <nav className="header-nav">
                        <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
                            Обо мне
                        </a>
                        <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>
                            Услуги
                        </a>
                        <a href="#advantages" onClick={(e) => { e.preventDefault(); scrollToSection('advantages'); }}>
                            Преимущества
                        </a>
                        <a href="#reviews" onClick={(e) => { e.preventDefault(); scrollToSection('reviews'); }}>
                            Отзывы
                        </a>

                        {/* Кнопка только для десктопа */}
                        <a
                            href="https://instagram.com/xoxo___brows"
                            className="contact-button desktop-only"
                            target="_blank" rel="noopener noreferrer"
                        >
                            Связаться со мной
                        </a>
                    </nav>
                </div>
            </header>

            {/* Плавающая кнопка для мобильных */}
            <a
                href="https://instagram.com/xoxo___brows"
                className="contact-button floating-contact-button"
                target="_blank" rel="noopener noreferrer"
            >
                Связаться
            </a>
        </>
    );
};

export default Header;