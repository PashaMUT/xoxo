import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

import Services from "./sections/Services";
import Footer from "./components/Footer";

const App: React.FC = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Services/>
            <Footer/>
        </div>
    );
};

export default App;
