import React from 'react'
import video from "../assets/video/bronte.mp4";
import city9 from "../assets/images/cities/9.jpg";
import CommonCarousel from "../components/CommonCarousel";
import Listing from '../components/Listing'
import Footer from '../components/Footer'

const Gta = () => {
  return (
    <div>
    <section className="hero-section" id="section_1">
      <div className="section-overlay"></div>

      <div className="container d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col-12 mt-auto mb-5 text-center">
            <h1 className="text-white mb-5">GTA</h1>
            <p className="text-white">
            The Greater Toronto Area, which is an economic area defined by the Government of Ontario
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
            <img src={city9} className="img-fluid" />
          </div>

          <div className="col-lg-6 col-12 mb-4 mb-lg-0 d-flex align-items-center">
            <div className="services-info ">
              <h2 className="text-dark mb-4">WELCOME TO GTA </h2>

              <p className="text-dark text-justify">
              The Greater Toronto Area, commonly referred to as the GTA, includes the City of Toronto and the regional municipalities of Durham, Halton, Peel, and York. In total, the region contains 25 urban, suburban, and rural municipalities.[2][3] The Greater Toronto Area begins in Burlington in Halton Region to the west, and extends along Lake Ontario past downtown Toronto eastward to Clarington in Durham Region. According to the 2021 census, the Census Metropolitan Area (CMA) of Toronto has a total population of 6.202 million residents, making it the nation's largest, and the 6th-largest in North America.[4] However, the Greater Toronto Area, which is an economic area defined by the Government of Ontario, includes communities which are not included in the CMA as defined by Statistics Canada. Extrapolating the data for all 25 communities in the Greater Toronto Area from the 2021 Census, the total population for the economic region included 6,711,985 people.
              </p>
              <h6 className="text-dark mt-4">Etymology</h6>
                        <p className="text-dark text-justify">The term "Greater Toronto" was first used in writing as early as the 1900s, although at the time, the term only referred to the old city of Toronto and its immediate townships and villages, which became Metropolitan Toronto in 1954 and became the current city of Toronto in 1998.[7] The use of the term involving the four surrounding regional municipalities came into formal use in the mid-1980s, after it was used in a widely discussed report on municipal governance restructuring in the region and was later made official as a provincial planning area. However, it did not come into everyday usage until the mid- to late 1990s.</p>


              
            </div>
          </div>
        </div>
        <div className="row py-5">
        <h2>Census metropolitan area</h2>
                <p className="text-dark text-justify">Some municipalities considered part of the GTA are not within the Toronto Census Metropolitan Area (CMA) which is smaller than the land area and population of the GTA planning area. For example, Oshawa is the centre of its own CMA, yet deemed part of the Greater Toronto Area, while other municipalities, such as New Tecumseth in southern Simcoe County and Mono Township in Dufferin County are included in the Toronto CMA but not in the GTA.[10] These different border configurations result in the GTA's population being higher than the Toronto CMA by nearly one-half million people, often leading to confusion amongst people when trying to sort out Toronto's urban population.</p>
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

export default Gta