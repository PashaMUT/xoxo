import React, { useState, useEffect } from 'react';

// Импортируйте ваши скриншоты отзывов
import review1 from '../assets/reviews/review1.jpg';
import review2 from '../assets/reviews/review2.jpg';
import review3 from '../assets/reviews/review3.jpg';
import review4 from '../assets/reviews/review4.jpg';
import review5 from '../assets/reviews/review5.jpg';
import review6 from '../assets/reviews/review6.jpg';
import review7 from '../assets/reviews/review7.jpg';

const Reviews: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const reviews = [
        { id: 1, image: review1, alt: "Отзыв 1" },
        { id: 2, image: review2, alt: "Отзыв 2" },
        { id: 3, image: review3, alt: "Отзыв 3" },
        { id: 4, image: review4, alt: "Отзыв 4" },
        { id: 5, image: review5, alt: "Отзыв 5" },
        { id: 6, image: review6, alt: "Отзыв 6" },
        { id: 7, image: review7, alt: "Отзыв 7" }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % reviews.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    // Автопрокрутка
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, currentSlide]);

    return (
        <section id="reviews" className="reviews-section">
            <div className="container">
                <h2 className="reviews-title">Отзывы клиентов</h2>
                <p className="reviews-subtitle">Реальные отзывы из социальных сетей</p>

                <div
                    className="reviews-carousel"
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                >
                    {/* Кнопки навигации */}
                    <button className="carousel-btn prev" onClick={prevSlide}>
                        ‹
                    </button>

                    <button className="carousel-btn next" onClick={nextSlide}>
                        ›
                    </button>

                    {/* Карусель */}
                    <div className="carousel-container">
                        <div
                            className="carousel-track"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {reviews.map((review, index) => (
                                <div key={review.id} className="carousel-slide">
                                    <div className="review-image-container">
                                        <img
                                            src={review.image}
                                            alt={review.alt}
                                            className="review-image"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Индикаторы */}
                    <div className="carousel-indicators">
                        {reviews.map((_, index) => (
                            <button
                                key={index}
                                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                                onClick={() => goToSlide(index)}
                            />
                        ))}
                    </div>

                    {/* Счетчик */}
                    <div className="carousel-counter">
                        {currentSlide + 1} / {reviews.length}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;