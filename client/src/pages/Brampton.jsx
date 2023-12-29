import React from 'react'
import video from "../assets/video/bronte.mp4";
import city8 from "../assets/images/cities/8.jpg";
import CommonCarousel from "../components/CommonCarousel";
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom';
import GeoListing from '../components/GeoListing';

const Brampton = () => {
  const {pathname} = useLocation()
  return (
    <div>
    <section className="hero-section" id="section_1">
      <div className="section-overlay"></div>

      <div className="container d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col-12 mt-auto mb-5 text-center">
            <h1 className="text-white mb-5">BRAMPTON</h1>
            <p className="text-white">
            Brampton, a vibrant city in Ontario, Canada, is characterized by its cultural diversity, family-friendly neighborhoods, and a growing urban landscape that reflects both tradition and innovation.
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
            <img src={city8} className="img-fluid" />
          </div>

          <div className="col-lg-6 col-12 mb-4 mb-lg-0 d-flex align-items-center">
            <div className="services-info ">
              <h2 className="text-dark mb-4">WELCOME TO BRAMPTON </h2>

              <p className="text-dark text-justify">
              In 1853, a small agricultural fair was set up by the newly initiated County Agricultural Society of the County of Peel and was held at the corner of Main and Queen streets. Grains, produce, roots, and dairy products were up for sale. Horses and cattle, along with other lesser livestock, were also sold at the market. This agricultural fair eventually became the modern Brampton Fall Fair.
              </p>
              <p className="text-dark text-justify">In that same year Brampton was incorporated as a village.[9] In 1866, the town became the county seat and the location of the Peel County Courthouse which was built in 1865–66; a three-storey County jail was added at the rear in 1867.</p>

              <p className="mb-0 text-dark text-justify">Edward Dale, an immigrant from Dorking, England, established a flower nursery in Brampton[10] shortly after his arrival in 1863.[11] Dale's Nursery became the town's largest[10] and most prominent employer, developed a flower grading system,[11] and established a global export market for its products.[10] The company chimney was a town landmark,[11] until Brampton Town Council allowed it to be torn down in 1977.[11] At its height, the company had 140 greenhouses,[12] and was the largest cut flower business in North America,[13] producing 20 million blooms and introducing numerous rose and orchid varietals and species to the market.[13] It also spurred the development of other nurseries in the town. Forty-eight hothouse flower nurseries once did business in the town</p>
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

export default Brampton