import React from 'react'
import video from "../assets/video/bronte.mp4";
import city4 from "../assets/images/cities/4.jpg";
import CommonCarousel from "../components/CommonCarousel";
import Listing from '../components/Listing'
import Footer from '../components/Footer'

const Oakville = () => {
  return (
    <div>
    <section className="hero-section" id="section_1">
      <div className="section-overlay"></div>

      <div className="container d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col-12 mt-auto mb-5 text-center">
            <h1 className="text-white mb-5">OAKVILLE</h1>
            <p className="text-white">
            Oakville, a picturesque town in Ontario, Canada, boasts a perfect blend of natural beauty, upscale neighborhoods, and a thriving arts and culture scene on the shores of Lake Ontario.
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
            <img src={city4} className="img-fluid" />
          </div>

          <div className="col-lg-6 col-12 mb-4 mb-lg-0 d-flex align-items-center">
            <div className="services-info ">
              <h2 className="text-dark mb-4">WELCOME TO OAKVILLE </h2>

              <p className="text-dark text-justify">
              In 1793, Dundas Street was surveyed for a military road. In 1805, the Legislative Assembly of Upper Canada bought the lands between Etobicoke and Hamilton from the indigenous Mississaugas people, except for the land at the mouths of Twelve Mile Creek (Bronte Creek), Sixteen Mile Creek, and along the Credit River. In 1807, British immigrants settled the area surrounding Dundas Street as well as on the shore of Lake Ontario.
              </p>

              <h5 className="text-dark">Features</h5>

              <p class="mb-0 text-dark text-justify">Over 1 kilometre (0.62 mi; 3,300 ft) in length, and with over 60 miles (97 km) of roads, the site was designed to accommodate the Prime Minister, the entire Cabinet Office, other civil servants, and domestic support staff.</p>
                        <p class="mb-0 text-dark text-justify">Blast-proof and self-sufficient, the complex could accommodate up to 4,000 people in complete isolation from the outside world for up to three months. The underground city was equipped with all the facilities needed to survive: from hospitals, canteens, kitchens and laundries to storerooms for supplies, accommodation areas and offices. An underground lake and treatment plant could provide drinking water, and twelve tanks could store the fuel required to keep the four generators in the underground power station running for up to three months. The air within the complex could be kept at a constant humidity and heated to around 20 °C (68 °F). It was also equipped with the second-largest telephone exchange in Britain, a BBC studio from which the PM could address the nation, and an internal Lamson Tube system that could relay messages throughout the complex, using compressed air.</p>
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

export default Oakville