import React from 'react';
import Hero from './Hero';
import Projects from './Projects';
import Testimonials from './Testimonials';
import CTA from './CTA';
import Services from './Services';
import AboutSnippet from './AboutSnippet';
// import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <Services />
            <Projects />
            <Testimonials />
            <AboutSnippet />
            <CTA />
        </div>
    );
};

export default Home;
