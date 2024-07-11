import React from 'react';
import NavBar from './NavBar';
import Hero from './Hero';
import Skills from './Skills';
import Projects from './Projects';
import Testimonials from './Testimonials';
import CTA from './CTA';
import Footer from './Footer';
// import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <Skills />
            <Projects />
            <Testimonials />
            <CTA />
        </div>
    );
};

export default Home;
