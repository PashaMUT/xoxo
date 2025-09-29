import React from "react";
import video1 from "../../public/videos/service1.mp4";
import video2 from "../../public/videos/service.mp4";
import video3 from "../../public/videos/service3.mp4";

const Services: React.FC = () => {
    return (
        <section id="services" className="services-section">
            <div className="service-card">
                <div className="service-content">
                    <div className="service-text-block">
                        <h3 className="service-title">Перманент губ</h3>
                        <p className="service-description">
                            Профессиональный перманентный макияж губ с естественным результатом.
                            Долговечность и ухоженный вид каждый день.
                        </p>
                    </div>
                    <div className="service-video-container">
                        <video src={video2} autoPlay loop muted playsInline />
                    </div>
                </div>
            </div>

            <div className="service-card">
                <div className="service-content reverse">
                    <div className="service-text-block">
                        <h3 className="service-title">Перманент бровей</h3>
                        <p className="service-description">
                            Идеальная форма бровей на долгое время.
                            Коррекция формы, насыщение цветом, создание естественного контура.
                        </p>
                    </div>
                    <div className="service-video-container">
                        <video src={video3} autoPlay loop muted playsInline />
                    </div>
                </div>
            </div>

            <div className="service-card">
                <div className="service-content">
                    <div className="service-text-block">
                        <h3 className="service-title">Ламинирование ресниц</h3>
                        <p className="service-description">
                            Пробуждение естественной красоты ваших ресниц. Технология ламинирования создает
                            идеальный изгиб, придает объем и эффект "открытого взгляда" на 6-8 недель.
                            Ваши ресницы всегда уложены безупречно, даже после умывания.
                        </p>
                    </div>
                    <div className="service-video-container">
                        <video src={video1} autoPlay loop muted playsInline />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;