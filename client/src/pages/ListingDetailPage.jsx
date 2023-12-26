import React from "react";
import PropertySpotlight from "../components/PropertySpotlight";

import img1 from "../assets/images/Fateh_burj_Minar_in_chapparchiri.jpg";
import img2 from "../assets/images/-1173169478.jpg";
import img3 from "../assets/images/-1246815963.jpg";
import bathtub from "../assets/bath-tub.png";
import bed from "../assets/double-bed.png";
import fullSize from "../assets/full-size.png";
import Footer from "../components/Footer";


const ListingDetailPage = () => {
  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide listing-carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active h-25 w-25"
            aria-current="true"
            aria-label="Slide 1"
          >
            <img src={img1} alt="img" className="d-block w-100" />
          </button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            className="h-25 w-25"
          >
            <img src={img2} alt="img" className="d-block w-100" />
          </button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            className="h-25 w-25"
          >
            <img src={img3} alt="img-2" className="d-block w-100" />
          </button>
        </div>
        <div className="carousel-inner listing-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100 h-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100 h-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100 h-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <button type="button" className="btn btn-primary">
                For Sale
              </button>
              <div className="titlepro">
                <h3>255 NYLA COURT</h3>
                <p>255 NYLA COURT, OAKVILLE, ON L6L 0G8</p>
              </div>

              <div className="prodesc">
                <p>
                  Best of everything!! Fernbrook Showstopper in West Oakville!
                  Stunning executive residence with 4 + 1 bedrooms, 5.5
                  bathrooms, approx 4193 sq ft plus professionally finished
                  lookout basement by the builder on largest court lot with 218'
                  deep & 177' rear with cedar fencing & large covered terrace in
                  the huge backyard.Exclusive quiet court with only 14 homes
                  surrounding the recently created Hixon Park. Extensive
                  upgrades including, wide-plank engineered hardwood flooring,
                  elevator with access to the attached garage, plaster crown
                  mouldings, 10’ & 9’ ceilings, 3 gas fireplaces, numerous pot
                  lights, upgraded light fixtures, Hunter Douglas window
                  coverings & shutters, upgraded tiles, Cat 6A wiring, ethernet
                  in all rooms, cabinetry, stone counters, enlarged basement
                  windows & whole home water purification system. Grand dining
                  room with a coffered ceiling & French door to a servery.
                  Impressive great room with a vaulted ceiling, gas fireplace &
                  huge windows. Spectacular Downsview kitchen with
                  floor-to-ceiling cabinetry, under-cabinet lighting, island
                  with breakfast bar, quartz counters, Wolf & SubZero
                  appliances, & breakfast room with walkout to terrace. Main
                  floor sunroom/office, powder room, mudroom & 2nd floor laundry
                  room. All upstairs bedrooms have ensuite bathrooms & the
                  primary bedroom features a gas fireplace & luxe 5-piece
                  ensuite bath with soaker tub & glass shower. Downstairs offers
                  a recreation/theatre room with gas fireplace & built-in
                  speakers, a games room, wet bar, gym, bedroom 5 & 3-piece
                  bathroom. Close to lake, Bronte Village, highways & GO Train.
                  10+!
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="ullipoints">
                <ul className="list-group w-75 mx-auto">
                  <div className="list-group-item">
                    <span
                      className="d-inline-flex align-items-center justify-content-center text-white rounded m-1 me-2"
                      style={{ width: "40px", height: "40px" }}
                    >
                      <img src={bathtub} className="img-fluid" />
                    </span>
                    6 bath
                  </div>
                  <div className="list-group-item">
                    <div
                      className="d-inline-flex align-items-center justify-content-center text-white rounded m-1 me-2"
                      style={{ width: "40px", height: "40px" }}
                    >
                      <img src={bed} className="img-fluid" />
                    </div>
                    3 Bed
                  </div>
                  <div className="list-group-item">
                    <div
                      className="d-inline-flex align-items-center justify-content-center text-white rounded m-1 me-2"
                      style={{ width: "40px", height: "40px" }}
                    >
                      <img src={fullSize} className="img-fluid" />
                    </div>
                    4,193 SQ.FT. LIVING AREA
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container">
          <div className="row">
            <div className="d-flex flex-wrap">
             
               

              <div className="agent-detail d-flex flex-column justify-content-center">
                <div>
                  <h3 className="p-3 text-uppercase lato">Janet Shiwram</h3>

                  <ul
                    className="d-flex flex-wrap "
                    style={{ listStyle: "none" }}
                  >
                    <li className="list-group-item pe-4 mb-2">
                      <strong className="agendetail d-block fs-4 text-uppercase">
                        Title
                      </strong>
                      <span className="agendetail  fs-5 d-block">
                        Sales Representative
                      </span>
                    </li>
                    <li className="list-group-item pe-4 mb-2">
                      <strong className="d-block agendetail fs-4 text-uppercase">
                        PHONE
                      </strong>
                      <span className="agendetail fs-5 d-block">
                        365-338-7653
                      </span>
                    </li>
                    <li className="list-group-item pe-4 mb-2">
                      <strong className="d-block agendetail fs-4 text-uppercase">
                        EMAIL
                      </strong>
                      <span className="agendetail fs-5 d-block">
                        janetshiwramrealty@gmail.com
                      </span>
                    </li>
                    <li className="list-group-item pe-4 mb-2">
                      <button
                        data-type="CONTACT_US"
                        className="btn btn-outline-primary agendetail"
                        style={{ padding: "20px 46px", lineHeight: "1" }}
                      >
                        CONTACT AGENT
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    <PropertySpotlight/>
    <Footer/>
    </div>
  );
};

export default ListingDetailPage;
