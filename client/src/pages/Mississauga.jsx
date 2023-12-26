import React from 'react'
import video from "../assets/video/bronte.mp4";
import city7 from "../assets/images/cities/7.jpg";
import CommonCarousel from "../components/CommonCarousel";
import Listing from '../components/Listing'
import Footer from '../components/Footer'

const Mississauga = () => {
  return (
    <div>
    <section className="hero-section" id="section_1">
      <div className="section-overlay"></div>

      <div className="container d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col-12 mt-auto mb-5 text-center">
            <h1 className="text-white mb-5">MISSISSAUGA</h1>
            <p className="text-white">
            Mississauga, a thriving city in Ontario, Canada, combines urban sophistication with suburban charm, featuring a diverse cultural scene, modern infrastructure, and a bustling economy.
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
            <img src={city7} className="img-fluid" />
          </div>

          <div className="col-lg-6 col-12 mb-4 mb-lg-0 d-flex align-items-center">
            <div className="services-info ">
              <h2 className="text-dark mb-4">WELCOME TO MISSISSAUGA </h2>

              <p className="text-dark text-justify">
              The growth of Mississauga was attributed to its proximity to Toronto.[7] During the latter half of the 20th century, the city attracted a multicultural population and built up a thriving central business district.[8][9] Malton, a neighbourhood of the city located in its northeast end, is home to Toronto Pearson International Airport, Canada's busiest airport, as well as the headquarters of many Canadian and multinational corporations. Mississauga is not a traditional city, but is instead an amalgamation of three former villages, two townships, and a number of rural hamlets (a general pattern common to several suburban GTA cities) that were significant population centres, with none being clearly dominant, prior to the city's incorporation that later coalesced into a single urban area.
              </p>
              <h5 className="text-dark">Features</h5>

                        <p className="mb-0 text-dark text-justify">Indigenous people have lived in the area for thousands of years and Mississauga is situated on the traditional territory of the Huron-Wendat, Haudenosaunee and Anishinaabeg people, including the namesake Mississaugas.[11] Most of present-day Mississauga was founded in 1805 as Toronto Township within York County, and became part of Peel County when new counties were formed by splitting off parts of the original county in 1851. Mississauga itself was established in 1968 as a town, and was reincorporated as a city in 1974, when Peel was restructured into a regional municipality.</p>

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

    <section className="testimonial py-5" style={{background: "#ebebeb"}}>
      <div className="container py-5">
        <div className="row">
          <h3 className="text-center ">PROPERTY LISTINGS</h3>

          <div className="search">
            <input
              type="text"
              className="serachbtn lp-input--dark"
              placeholder="Search by address, city, state, zip..."
              id="search-input"
              name="search-input"
            />
          </div>

          <div className="col-md-4">
            <select className=" w-100 serachbtn">
              <option>Select property type</option>
              <option>Residential</option>
              <option>Townhouse</option>
              <option>Condo</option>
              <option>Commercial</option>
              <option>Multi-Family</option>
            </select>
          </div>
          <div className="col-md-4">
            <select className=" w-100 serachbtn">
              <option>1+ Bathrooms</option>
              <option>2+ Bathrooms</option>
              <option>3+ Bathrooms</option>
              <option>4+ Bathrooms</option>
              <option>5+ Bathrooms</option>
              <option>6+ Bathrooms</option>
            </select>
          </div>
          <div className="col-md-4">
            <select className=" w-100 serachbtn">
              <option>1+ Bedrooms</option>
              <option>2+ Bedrooms</option>
              <option>3+ Bedrooms</option>
              <option>4+ Bedrooms</option>
              <option>5+ Bedrooms</option>
              <option>6+ Bedrooms</option>
            </select>
          </div>
        </div>
      </div>
      <Listing/>
    </section>

    <Footer />
  </div>
  )
}

export default Mississauga