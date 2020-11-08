import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Projects from '../Projects'
import Footer from '../Footer'
import HeroSection from '../HeroSection';

function Home () {
    return(
        <>
            <HeroSection />
            <Cards />
            <Projects />
            <Footer />
        </>
    )
}
export default Home;