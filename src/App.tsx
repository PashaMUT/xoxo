import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from "./sections/Services";
import Footer from "./components/Footer";
import About from "./sections/About"
import Advantages from "./sections/Advantages";
import Reviews from "./sections/Reviews";
import Intro from "./components/Intro";

const App: React.FC = () => {
    return (
        <div>
            <Intro/>
            <Header />
            <Hero />
            <About />
            <Services/>
            <Advantages/>
            <Reviews/>
            <Footer/>
        </div>
    );
};

export default App;
