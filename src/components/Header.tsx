// src/components/Header.tsx
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import {FaInstagram, FaTelegram} from "react-icons/fa";

const Header: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);
    const [telegramData, setTelegramData] = useState({
        name: '',
        phone: ''
    });
    const [isLoading, setIsLoading] = useState(false);

    // 🔐 ЗАМЕНИТЕ ЭТИ ДАННЫЕ НА СВОИ!
    const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

    const scrollToSection = (sectionId: string) => {
        if (!isHomePage) {
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }, 100);
            return;
        }

        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    // Функция для форматирования номера телефона
    const formatPhoneNumber = (value: string) => {
        // Удаляем все нецифровые символы
        const numbers = value.replace(/\D/g, '');

        // Если номер начинается не с 375, добавляем префикс
        let formattedNumber = numbers;
        if (numbers.startsWith('375')) {
            formattedNumber = numbers;
        } else if (numbers.startsWith('80')) {
            // Конвертируем 80 в 375
            formattedNumber = '375' + numbers.slice(2);
        } else if (numbers.length > 0) {
            formattedNumber = '375' + numbers;
        }

        // Ограничиваем длину (375 + 9 цифр = 12 цифр)
        const limitedNumber = formattedNumber.slice(0, 12);

        // Форматируем в красивый вид
        let result = '';
        if (limitedNumber.length > 0) {
            result = '+375';
            if (limitedNumber.length > 3) {
                result += ` (${limitedNumber.slice(3, 5)}`;
            }
            if (limitedNumber.length > 5) {
                result += `) ${limitedNumber.slice(5, 8)}`;
            }
            if (limitedNumber.length > 8) {
                result += `-${limitedNumber.slice(8, 10)}`;
            }
            if (limitedNumber.length > 10) {
                result += `-${limitedNumber.slice(10, 12)}`;
            }
        }

        setTelegramData({...telegramData, phone: result});
    };

    // Функция проверки корректности номера
    const isValidPhone = (phone: string): boolean => {
        const numbers = phone.replace(/\D/g, '');
        // Должно быть ровно 12 цифр (375 + 9 цифр)
        return numbers.length === 12 && numbers.startsWith('375');
    };

    // Функция для получения чистого номера (без форматирования)
    const getCleanPhone = (phone: string): string => {
        return phone.replace(/\D/g, '');
    };

    const sendToTelegram = async (name: string, phone: string) => {
        const cleanPhone = getCleanPhone(phone);
        const formattedPhone = `+${cleanPhone.slice(0, 3)} ${cleanPhone.slice(3, 5)} ${cleanPhone.slice(5, 8)}-${cleanPhone.slice(8, 10)}-${cleanPhone.slice(10, 12)}`;

        const text = `
🎯 НОВАЯ ЗАЯВКА С САЙТА!

👤 Имя: ${name}
📞 Телефон: ${formattedPhone}
🌐 Страница: ${location.pathname}
⏰ Время: ${new Date().toLocaleString('ru-RU')}

💫 XOXO Brows - Светлогорск
        `;

        try {
            const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: text,
                    parse_mode: 'HTML'
                })
            });

            if (!response.ok) {
                throw new Error('Ошибка отправки');
            }

            return true;
        } catch (error) {
            console.error('Ошибка отправки в Telegram:', error);
            return false;
        }
    };

    const handleTelegramSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const success = await sendToTelegram(telegramData.name, telegramData.phone);

            if (success) {
                // Успешная отправка
                setIsContactPopupOpen(false);
                setTelegramData({ name: '', phone: '' });
                alert('✅ Спасибо! Ваша заявка отправлена. Я свяжусь с вами в ближайшее время!');
            } else {
                // Если отправка не удалась - предлагаем альтернативу
                const confirmAlternative = window.confirm(
                    'Не удалось отправить заявку автоматически. Хотите написать мне напрямую в Telegram?'
                );

                if (confirmAlternative) {
                    const message = `Здравствуйте! Хочу записаться на процедуру.%0AИмя: ${telegramData.name}%0AТелефон: ${telegramData.phone}`;
                    window.open(`https://t.me/xoxo___brows?text=${message}`, '_blank');
                }
            }
        } catch (error) {
            alert('❌ Ошибка отправки. Пожалуйста, напишите мне напрямую в Instagram или Telegram.');
        } finally {
            setIsLoading(false);
        }
    };

    const openInstagram = () => {
        window.open('https://instagram.com/xoxo___brows', '_blank');
        setIsContactPopupOpen(false);
    };

    return (
        <>
            <header className="header">
                <div className="header-container">
                    {/* Логотип */}
                    <img
                        src={logo}
                        alt="XOXO Brows"
                        className="header-logo"
                        onClick={() => navigate('/')}
                        style={{ cursor: 'pointer' }}
                    />

                    <nav className="header-nav">
                        {/* ОСНОВНАЯ НАВИГАЦИЯ - всегда видна */}
                        <div className="nav-group main-nav">
                            <a
                                href="/about"
                                onClick={(e) => {
                                    e.preventDefault();
                                    navigate('/about');
                                }}
                                className={location.pathname === '/about' ? 'nav-link active' : 'nav-link'}
                            >
                                О мастере
                            </a>
                            <a
                                href="/contacts"
                                onClick={(e) => {
                                    e.preventDefault();
                                    navigate('/contacts');
                                }}
                                className={location.pathname === '/contacts' ? 'nav-link active' : 'nav-link'}
                            >
                                Контакты
                            </a>
                            <a
                                href="/services"
                                onClick={(e) => {
                                    e.preventDefault();
                                    navigate('/services');
                                }}
                                className={location.pathname === '/services' ? 'nav-link active' : 'nav-link'}
                            >
                                Процедуры
                            </a>
                            <a
                                href="/portfolio"
                                onClick={(e) => {
                                    e.preventDefault();
                                    navigate('/portfolio');
                                }}
                                className={location.pathname === '/portfolio'? 'nav-link active' : 'nav-link'}
                            >
                                Портфолио
                            </a>
                        </div>
                        <div style={{display: 'none'}}>
                            Перманентный макияж Светлогорск, татуаж бровей Светлогорск, перманент губ Светлогорск
                        </div>

                        {/* ДОПОЛНИТЕЛЬНАЯ НАВИГАЦИЯ - якорные ссылки на главной */}
                        {isHomePage && (
                            <div className="nav-group anchor-nav">
                                <a
                                    href="#services"
                                    className="nav-link"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection('services');
                                    }}
                                >
                                    Услуги
                                </a>
                                <a
                                    href="#advantages"
                                    className="nav-link"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection('advantages');
                                    }}
                                >
                                    Преимущества
                                </a>
                                <a
                                    href="#reviews"
                                    className="nav-link"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection('reviews');
                                    }}
                                >
                                    Отзывы
                                </a>
                            </div>
                        )}

                        {/* Кнопка записи - всегда справа */}
                        <div className="nav-group contact-nav">
                            <button
                                className="contact-button desktop-only"
                                onClick={() => setIsContactPopupOpen(true)}
                            >
                                Связаться со мной
                            </button>
                        </div>
                    </nav>
                </div>
            </header>

            {/* Плавающая кнопка для мобильных */}
            <button
                className="contact-button floating-contact-button mobile-only"
                onClick={() => setIsContactPopupOpen(true)}
            >
                Запись
            </button>

            {/* Попап выбора способа связи */}
            {isContactPopupOpen && (
                <div className="contact-popup-overlay" onClick={() => setIsContactPopupOpen(false)}>
                    <div className="contact-popup" onClick={(e) => e.stopPropagation()}>
                        <button
                            className="popup-close"
                            onClick={() => setIsContactPopupOpen(false)}
                        >
                            ×
                        </button>

                        <h3>Выберите способ связи</h3>

                        {/* Карточка Instagram */}
                        <div className="contact-card">
                            <div className="contact-card-icon"><FaInstagram /></div>
                            <div className="contact-card-content">
                                <h4>Написать в Instagram</h4>
                                <p>Быстрая связь, отвечаю в течение часа. Можете посмотреть мои работы и сразу написать</p>
                                <button
                                    className="contact-card-button instagram"
                                    onClick={openInstagram}
                                >
                                    💬 Перейти в Instagram
                                </button>
                            </div>
                        </div>

                        {/* Карточка Telegram */}
                        <div className="contact-card">
                            <div className="contact-card-icon"><FaTelegram /></div>
                            <div className="contact-card-content">
                                <h4>Оставить заявку</h4>
                                <p>Заполните форму и я получу ваши данные в Telegram. Свяжусь с вами в ближайшее время</p>

                                <form onSubmit={handleTelegramSubmit} className="telegram-form">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            placeholder="Ваше имя *"
                                            value={telegramData.name}
                                            onChange={(e) => setTelegramData({...telegramData, name: e.target.value})}
                                            required
                                            disabled={isLoading}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="tel"
                                            placeholder="+375 (XX) XXX-XX-XX *"
                                            value={telegramData.phone}
                                            onChange={(e) => formatPhoneNumber(e.target.value)}
                                            required
                                            disabled={isLoading}
                                            maxLength={19}
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="contact-card-button telegram"
                                        disabled={isLoading || !isValidPhone(telegramData.phone)}
                                    >
                                        {isLoading ? (
                                            <>⏳ Отправляем...</>
                                        ) : (
                                            <>📱 Отправить заявку</>
                                        )}
                                    </button>

                                    {telegramData.phone && !isValidPhone(telegramData.phone) && (
                                        <p className="phone-error">⚠️ Введите корректный номер телефона</p>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;