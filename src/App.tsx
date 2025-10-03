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

const HomePage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
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