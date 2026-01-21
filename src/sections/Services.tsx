import React from "react";
import videoG from "../../public/videos/serviceG.mp4";
import videoB from "../../public/videos/serviceB.mp4";
import videoL from "../../public/videos/serviceL.mp4";
import videoT from "../../public/videos/serviceT.mp4";
import imgM from "../assets/services/serviceM.webp"


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
                        <a href="https://ig.me/m/x.o.x.o___brows" className="booking-button">
                            Записаться на процедуру
                        </a>
                    </div>
                    <div className="service-video-container">
                        <video src={videoG} autoPlay loop muted playsInline/>
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
                        <a href="https://ig.me/m/x.o.x.o___brows" className="booking-button">
                            Записаться на процедуру
                        </a>
                    </div>
                    <div className="service-video-container">
                        <video src={videoB} autoPlay loop muted playsInline />
                    </div>
                </div>
            </div>
            <div className="service-card">
                <div className="service-content">
                    <div className="service-text-block">
                        <h3 className="service-title">Перманент межреснички + стрелка</h3>
                        <p className="service-description">
                            Идеальная подводка, которая не смывается. Техника межресничного пространства
                            создает эффект густых ресниц, а изящная стрелка придает взгляду выразительность
                            и лёгкую загадочность. Просыпайтесь с безупречным макияжем каждый день.
                        </p>
                        <a href="https://ig.me/m/x.o.x.o___brows" className="booking-button">
                            Записаться на процедуру
                        </a>
                    </div>
                    <div className="service-video-container">
                        <img src={imgM}/>
                    </div>
                </div>
            </div>


            <div className="service-card">
                <div className="service-content reverse">
                    <div className="service-text-block">
                        <h3 className="service-title">Профессиональная татуировка</h3>
                        <p className="service-description">
                            От тонких минималистичных линий до сложных композиций. Каждая работа —
                            уникальное произведение, отражающее вашу индивидуальность.
                            Вечная эстетика в каждой детали.
                        </p>
                        <a href="https://ig.me/m/x.o.x.o___brows" className="booking-button">
                            Записаться на процедуру
                        </a>
                    </div>
                    <div className="service-video-container">
                        <video src={videoT} autoPlay loop muted playsInline />
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
                        <a href="https://ig.me/m/x.o.x.o___brows" className="booking-button">
                            Записаться на процедуру
                        </a>
                    </div>
                    <div className="service-video-container">
                        <video  src={videoL} autoPlay loop muted playsInline/>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Services;