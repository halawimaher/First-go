import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Projects from '../Projects'
import Footer from '../Footer'
import HeroSection from '../HeroSection';
import Experience from '../Experience'
import About from '../About';

function Home () {
    return(
        <>
            <HeroSection />
            <About />
            <Cards />
            <Projects />
            <Experience />
            <Footer />
        </>
    )
}
export default Home;