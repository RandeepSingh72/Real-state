import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

const GeoListing = ({params}) => {

  const [properties, setProperties] = useState([]);
  
  const [searchInput, setSearchInput] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [minBathrooms, setMinBathrooms] = useState('1+ Bathrooms');
  const [minBedrooms, setMinBedrooms] = useState('1+ Bedrooms');

  const segments = params.split('/');
  const lastSegment = segments[segments.length - 1];

  console.log(lastSegment);

  useEffect(() => {
    const fetchPropertiesByLocation = async () => {
      try {
        const response = await fetch(`https://real-state-2969.onrender.com/api/admin/properties/by-location/${lastSegment}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        console.error('Error fetching properties by location:', error.message);
      }
    };

    fetchPropertiesByLocation();
  }, [lastSegment]);


  const filteredProperties = properties.filter((property) => {
    const addressMatch = searchInput === '' || property.address.toLowerCase().includes(searchInput.toLowerCase());
    const typeMatch = propertyType === '' || property.propertyType === propertyType;
    const bathroomsMatch = minBathrooms === '1+ Bathrooms' || parseInt(property.bathroom, 10) >= parseInt(minBathrooms, 10);
    const bedroomsMatch = minBedrooms === '1+ Bedrooms' || parseInt(property.beds, 10) >= parseInt(minBedrooms, 10);
  
    return addressMatch && typeMatch && bathroomsMatch && bedroomsMatch;
  });
  
  console.log(filteredProperties);
  return (
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
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>

        <div className="col-md-4">
          <select
           className=" w-100 serachbtn"
           value={propertyType}
           onChange={(e) => setPropertyType(e.target.value)}
           >
            <option value=''>Select property type</option>
            <option value='residentail'>Residential</option>
            <option value='townhouse'>Townhouse</option>
            <option value='condo'>Condo</option>
            <option value='commercial'>Commercial</option>
            <option value='multifamily'>Multi-Family</option>
          </select>
        </div>
        <div className="col-md-4">
          <select 
          className="w-100 serachbtn"
          value={minBathrooms}
          onChange={(e) => setMinBathrooms(e.target.value)}
          >
            <option>1+ Bathrooms</option>
            <option>2+ Bathrooms</option>
            <option>3+ Bathrooms</option>
            <option>4+ Bathrooms</option>
            <option>5+ Bathrooms</option>
            <option>6+ Bathrooms</option>
          </select>
        </div>
        <div className="col-md-4">
          <select 
          className="w-100 serachbtn"
          value={minBedrooms}
          onChange={(e) => setMinBedrooms(e.target.value)}
          >
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

    <section>
    <div className="container">
          <div className="row justify-content-center">
            <h2 className="text-dark text-center mb-5">Listing </h2>
          </div>
          <div className="container">
            <div className="row">
              {(searchInput || propertyType !== 'Select property type' || minBathrooms !== '1+ Bathrooms' || minBedrooms !== '1+ Bedrooms') ? (
                // Filtered Properties
                filteredProperties.map((property, index) => (
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
                ))
              ) : (
                // All Properties
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
                ))
              )}
              </div>
          </div>
          </div>
    </section>
    
  </section>
  )
}

export default GeoListing