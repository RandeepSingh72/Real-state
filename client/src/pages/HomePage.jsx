import React from 'react'

//components
import Header from '../components/Header';
import About from '../components/About';
import CardToPage from '../components/CardToPage';
import PropertySpotlight from '../components/PropertySpotlight';
import MarketCoverage from '../components/MarketCoverage';
import PressMedia from '../components/PressMedia';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FeaturedListing from '../components/FeaturedListing';

const HomePage = () => {
  return (
    <div>
        <Header/>
        <About/>
        <CardToPage/>
        <FeaturedListing/>
        <PropertySpotlight/>
        <MarketCoverage/>
        <PressMedia/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default HomePage;