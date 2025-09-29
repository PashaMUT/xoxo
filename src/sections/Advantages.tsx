import React from 'react';

const Advantages: React.FC = () => {
    const advantages = [
        {
            icon: "🛡️",
            title: "Безопасность",
            text: "Стерильные условия, одноразовые инструменты и сертифицированные материалы"
        },
        {
            icon: "👑",
            title: "Индивидуальный подход",
            text: "Каждому клиенту подбираем идеальную форму и цвет"
        },

        {
            icon: "💎",
            title: "Премиум качество",
            text: "Используем только оригинальные пигменты европейского производства"
        },
        {
            icon: "⚡",
            title: "Экономия времени",
            text: "Долговременный результат избавляет от ежедневного макияжа"
        }

    ];

    return (
        <section id="advantages" className="advantages-section">
            <div className="container">
                <h2 className="advantages-title">Почему выбирают меня</h2>
                <div className="advantages-grid">
                    {advantages.map((advantage, index) => (
                        <div key={index} className="advantage-card">
                            <div className="advantage-icon">{advantage.icon}</div>
                            <h3 className="advantage-title">{advantage.title}</h3>
                            <p className="advantage-text">{advantage.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Advantages;