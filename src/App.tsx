// src/App.tsx
import React, {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from "./sections/Services";
import Footer from "./components/Footer";
import Advantages from "./sections/Advantages";
import Reviews from "./sections/Reviews";
import Intro from "./components/Intro";
import AboutPage from "./pages/AboutPage";
import ContactsPage from './pages/ContactsPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import SEO from './components/SEO';

const HomePage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <SEO
                title="XOXO Brows - Перманентный макияж в Светлогорске | Татуаж бровей"
                description="💫 Перманентный макияж в Светлогорске от опытного мастера. Татуаж бровей, губ, стрелок. Ламинирование ресниц. Запись онлайн. Гарантия качества."
                keywords="перманентный макияж Светлогорск, перманент Светлогорск, татуаж бровей Светлогорск, перманент губ, ламинирование ресниц, мастер перманента Светлогорск"
            />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BeautySalon",
                        "name": "XOXO Brows",
                        "description": "Студия перманентного макияжа в Светлогорске",
                        "url": "https://xoxo.by/",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Светлогорск",
                            "addressCountry": "BY"
                        },
                        "openingHours": [
                            "Mo-Fr 10:00-22:00",
                            "Sa-Su 10:00-22:00"
                        ],
                        "priceRange": "$$",
                        "serviceType": "Перманентный макияж, Ламинирование ресниц",
                        "areaServed": "Светлогорск, Калинковичи, Жлобин, Речица",
                        "sameAs": [
                            "https://instagram.com/xoxo___brows"
                        ]
                    })
                }}
            />

            <Intro/>
            <Header />
            <Hero />
            <Services/>
            <Advantages/>
            <Reviews/>
            <Footer/>
        </div>
    );
};

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contacts" element={<ContactsPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
            </Routes>
        </Router>
    );
};

export default App;