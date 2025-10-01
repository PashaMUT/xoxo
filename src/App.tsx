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

<script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
        __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "XOXO.BY",
            "url": "https://xoxo.by/",
            "potentialAction": {
                "@type": "SearchAction",
                "target": "https://xoxo.by/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
            }
        })
    }}
/>

export default App;
