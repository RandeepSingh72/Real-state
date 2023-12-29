import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import PropertySpotlight from "../components/PropertySpotlight";

import bathtub from "../assets/bath-tub.png";
import bed from "../assets/double-bed.png";
import fullSize from "../assets/full-size.png";

import Footer from "../components/Footer";


const ListingDetailPage = () => {
  const { propertyId } = useParams();
  const [property, setProperty] = useState({
    photoLink: [],
    saleType: "",
    propertyName: "",
    address: "",
    description: "",
    bathroom: "",
    beds: "",
    areaSq: "",
  });

  useEffect(() => {
    const fetchPropertyDetails = async () => {
      try {
        const response = await fetch(`https://real-state-a2po.vercel.app/api/admin/properties/${propertyId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setProperty(data);
        console.log(property);
      } catch (error) {
        console.error('Error fetching property details:', error.message);
      }
    };

    fetchPropertyDetails();
  }, [propertyId]);

  return (
    <div>
       <section className="ticket-section section-padding">
            <div className="container">
            </div>
        </section>
    {property && (
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
         <img src={property.photoLink[0]} alt="img" className="d-block w-100" />
        </button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
          className="h-25 w-25"
        >
          <img src={property.photoLink[1]} alt="img" className="d-block w-100" />
        </button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
          className="h-25 w-25"
        >
          <img src={property.photoLink[2]} alt="img-2" className="d-block w-100" />
        </button>
      </div>
      <div className="carousel-inner listing-inner">
        <div className="carousel-item active">
          <img src={property.photoLink[0]} className="d-block w-100 h-100" alt="property-pic" />
        </div>
        <div className="carousel-item">
          <img src={property.photoLink[1]} className="d-block w-100 h-100" alt="property-pic" />
        </div>
        <div className="carousel-item">
          <img src={property.photoLink[2]} className="d-block w-100 h-100 img-fluid" alt="property-pic" />
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
    )}  
      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <button type="button" className="btn btn-primary">
                {property.saleType}
              </button>
              <div className="titlepro">
                <h3>{property.propertyName}</h3>
                <p>{property.address}</p>
              </div>

              <div className="prodesc">
                <p>
                 {property.description}
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
                    {property.bathroom} bathrooms
                  </div>
                  <div className="list-group-item">
                    <div
                      className="d-inline-flex align-items-center justify-content-center text-white rounded m-1 me-2"
                      style={{ width: "40px", height: "40px" }}
                    >
                      <img src={bed} className="img-fluid" />
                    </div>
                    {property.beds} Beds
                  </div>
                  <div className="list-group-item">
                    <div
                      className="d-inline-flex align-items-center justify-content-center text-white rounded m-1 me-2"
                      style={{ width: "40px", height: "40px" }}
                    >
                      <img src={fullSize} className="img-fluid" />
                    </div>
                    {property.areaSq} SQ.FT. LIVING AREA
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
