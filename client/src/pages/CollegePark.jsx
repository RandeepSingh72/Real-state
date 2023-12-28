import React from 'react'
import video from "../assets/video/bronte.mp4";
import city6 from "../assets/images/cities/6.jpg";
import CommonCarousel from "../components/CommonCarousel";
import Footer from '../components/Footer'
import GeoListing from '../components/GeoListing';
import { useLocation } from 'react-router-dom';

const CollegePark = () => {
  const {pathname} = useLocation();
  return (
    <div>
    <section className="hero-section" id="section_1">
      <div className="section-overlay"></div>

      <div className="container d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col-12 mt-auto mb-5 text-center">
            <h1 className="text-white mb-5">COLLEGE PARK</h1>
            <p className="text-white">
            COLLEGE PARK is a waterway in the Lake Ontario watershed of Ontario Canada.
            </p>
          </div>
        </div>
      </div>

      <div className="video-wrap">
        <video autoPlay loop muted className="custom-video">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>

    <section
      className="bg-white about-section section-padding"
      id="section_2"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img src={city6} className="img-fluid" />
          </div>

          <div className="col-lg-6 col-12 mb-4 mb-lg-0 d-flex align-items-center">
            <div className="services-info ">
              <h2 className="text-dark mb-4">WELCOME TO COLLEGE PARK </h2>

              <p className="text-dark text-justify">
              Eaton's began secretly assembling land at Yonge and College streets in 1910 for a new store. The First World War put the company's development plans on hold, but Eaton's retained the land. During the 1920s, Eaton's planned to shift all their operations from their existing location at Yonge Street and Queen Street West to the College Street site. Eaton's offered to sell part of its landholdings to its main competitor, Simpson's, in an effort to shift the heart of Toronto retailing northward and to preserve the synergy created by having two retail giants next to one another. They did not succeed, and Simpson's chose instead to expand its Queen Street store.
              </p>
              <h5 className="text-dark">College Park – Barbara Ann Scott Ice Trail</h5>
              <p className="mb-0 text-dark text-justify">College Park (the park rather than the building) is a 0.75 hectares (1.9 acres) greenspace located behind the buildings in the block bordered by Yonge, College, Bay and Gerrard streets. It is the second largest park in downtown Toronto after Allan Gardens. It was built in the 1980s over an underground garage. The park was closed for renovations in early 2016 and reopened in 2019. Today, the park contains the Barbara Ann Scott Ice Trail</p>
                        <p className="mb-0 text-dark text-justify">Originally, the park's official name was Barbara Ann Scott Park, named after 1948 Olympic champion figure skater Barbara Ann Scott. But, informally, the greenspace was commonly referred to as College Park,[2] a habit carried over in marketing the newer Aura condominium complex (at Yonge and Gerrard streets, north-west corner) as "Aura at College Park".</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="carousel-sec pt-4 pb-5">
      <h2 className="fw-bold display-4 p-2 text-center my-3">
        What our customers say
      </h2>
      <CommonCarousel />
    </section>

   <GeoListing params={pathname}/>

    <Footer />
  </div>
  )
}

export default CollegePark