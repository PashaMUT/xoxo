import React from 'react';
import logo from '../assets/logo.png';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header-container">
                {/* Лого */}
                <img src={logo} alt="Логотип" className="header-logo" />

                {/* Навигация */}
                <nav className="header-nav">
                    <a href="#about">О нас</a>
                    <a href="#services">Услуги</a>
                    <a href="#contacts">Контакты</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
