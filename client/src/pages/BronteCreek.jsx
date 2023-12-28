import React from 'react';
import bronteVid from '../assets/video/bronte.mp4';
import img2 from '../assets/images/cities/2.jpg'
import Footer from '../components/Footer';
import CommonCarousel from '../components/CommonCarousel';
import GeoListing from '../components/GeoListing';

import { useLocation} from 'react-router-dom';

const BronteCreek = () => {
  const {pathname} = useLocation()
  return (
    <div>
         <section className="hero-section" id="section_1">
            <div className="section-overlay"></div>

            <div className="container d-flex justify-content-center align-items-center">
                <div className="row">

                    <div className="col-12 mt-auto mb-5 text-center">
                        <h1 className="text-white mb-5">BRONTE CREEK </h1>
                        <p className="text-white">Bronte Creek is a waterway in the Lake Ontario watershed of Ontario Canada.</p>
                    </div>

                </div>
            </div>

            <div className="video-wrap">
                <video autoPlay loop muted className="custom-video" >
                    <source src={bronteVid} type="video/mp4" />

                    Your browser does not support the video tag.
                </video>
            </div>
        </section>

        <section className="bg-white about-section section-padding" id="section_2">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <img src={img2} className="img-fluid" />
                </div>

                <div className="col-lg-6 col-12 mb-4 mb-lg-0 d-flex align-items-center">
                    <div className="services-info ">
                        <h2 className="text-dark mb-4">WELCOME TO BRONTE CREEK </h2>

                        <p className="text-dark text-justify">Bronte is the community that makes up much of the west end of Oakville, in Ontario, Canada. Twelve Mile Creek (known informally as Bronte Creek) flows through the middle of town and empties into Lake Ontario. Main roads include Bronte Road (north-south), Lakeshore Road West (east-west, parallel to Lake Ontario) and Rebecca Street (east-west). Streets in the business section include Lakeshore, Jones, Marine, and Ontario Street. Bronte is also accessed via a superhighway (the Queen Elizabeth Way) located to the north of the former village. Other main roads include Third Line, Speers Road and Burloak Drive to the west (the latter was named after the boundary of Burlington and Oakville.)</p>

                        <h6 className="text-dark mt-4 ">Geography and information</h6>

                        <h5 className="text-dark">CATHOLIC</h5>

                        <p className="mb-0 text-dark">Population: about 10,000</p>
                        <p className="mb-0 text-dark">Median age: 50</p>
                        <p className="mb-0 text-dark">Population Density: Medium</p>
                        <p className="mb-0 text-dark">Name of inhabitants - Brontonian sing., -s pl.</p>
                        <p className="mb-0 text-dark">ET – English Track, FI – French Immersion</p>
                        </div>
                </div>

               

            </div>
            <div className="row py-5">
                <h2>Culture and neighbourhood</h2>
                <p className="mb-0 text-dark text-justify">Bronte's neighbourhood stretches from Burloak Drive in the west to Third Line, and from Lake Ontario in the south to Rebecca Street. Coronation Park, in the adjacent neighbourhood of Southwest Oakville, has a large playground, plentiful parking space, a field room, and sandy beaches. It hosts the annual Waterfront Festival. Its greatest attraction is an outdoor stage fronting an area 256 feet deep and 152 feet wide, with a hillock at the side. During the Waterfront Festival, the east field has carnival rides such as 1001 Niches and Polar Express, and features game kiosks. The parking lot is turned into a string of kiosks offering food and product information. The stage has extra lighting installed with a projector screen, an autograph booth at the side, and a DJ booth in the middle.</p>
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
      <Footer/>
    </div>
  )
}

export default BronteCreek