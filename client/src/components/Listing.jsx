import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Listing = () => {
  const [properties, setProperties] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://real-state-a2po.vercel.app/api/admin/properties"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setProperties(data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    console.log("yoo");
  }, [properties]);
  return (
    <div>
      <section
        className="artists-section section-padding"
        id="section_3"
        style={{ background: "#ebebeb" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <h2 className="text-dark text-center mb-5">Listing </h2>
          </div>
          <div className="container">
            <div className="row">
            {properties &&
              properties.map((property, index) => (
                <div key={`index-${index + 1}`} className="col-lg-4 col-md-6 col-12 mb-3">
                  <div className="shad p-3">
                    <div className="artists-image-wrap">
                      <img
                        src={property.photoLink[0]}
                        className="artists-image img-fluid"
                        style={{ height: '200px', objectFit: 'cover' }}
                      />
                    </div>
                    <div className="py-3">
                      <button type="button" className="btn btn-primary btn-sm my-2">
                        {property.saleType}
                      </button>
                      <h4>{property.propertyName}</h4>
                      <p>
                        <i className="bi bi-pin-map-fill"></i>{" "}
                        {property.address}
                      </p>

                      <ul className="p-0 list-point">
                        <li>
                          <i className="bi bi-segmented-nav"></i>{" "}
                          <strong>{property.beds} Bed</strong>{" "}
                        </li>
                        <li>
                          <i className="bi bi-arrows-angle-expand"></i>{" "}
                          <strong>{property.areaSq} SQ.Ft</strong>
                        </li>
                      </ul>
                    </div>
                    <Link className="btn custom-btn w-100 smoothscroll" to={`/listing-page/${property._id}`}>View Listing</Link>
                  </div>
                </div>
              ))}
              </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Listing;
