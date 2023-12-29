import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';


const AdminDashboard = () => {
  const [properties, setProperties] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://real-state-2969.onrender.com/api/admin/properties');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setProperties(data);
      
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }

  useEffect(()=>{
    fetchData();
  }, [])
  useEffect(() => {
    console.log('yoo');
  }, [properties]);

  const handleDelete = async(propertyId) => {
    const shouldDelete = window.confirm('Are you sure you want to delete this property?');

    if (!shouldDelete) {
      return;
    }
    try {
      const response = await fetch(`https://real-state-2969.onrender.com/api/admin/properties/${propertyId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Refresh the property list after deletion
      fetchData();
    } catch (error) {
      console.error('Error deleting property:', error.message);
    }

  }

  return (
    <div>
      <AdminNavbar/>
      <div>
        <Link to={'/admin/admin-listing'} className='btn btn-primary mt-3 mx-3'>Add New Property</Link>
      </div>
      <div className='container'>
        <div className='row'>
          {properties && (
        properties.map((property, index)=>(
          <div key={`index-${index+1}`} className="col-lg-4 col-md-6 col-12 mb-3">
          <div className="shad p-3" >
 
              <div className="artists-image-wrap">
                  <img src={property.photoLink[0]} className="artists-image img-fluid" style={{ height: '200px', objectFit: 'cover' }} />
              </div>
              <div className="py-3">
              <button type="button" className="btn btn-primary btn-sm my-2">{property.saleType}</button>
                  <h4>{property.propertyName}</h4>
                  <p><i className="bi bi-pin-map-fill"></i> {property.address}</p>
                  
                  <ul className="p-0 list-point">
                      <li><i className="bi bi-segmented-nav"></i> <strong>{property.beds} Bed</strong> </li>
                      <li><i className="bi bi-arrows-angle-expand"></i> <strong>{property.areaSq} SQ.Ft</strong></li>
                  </ul>
                  
              </div>
              <div className='d-flex flex-row gap-2'>
              <Link className="btn custom-btn w-100" to={`/admin/edit-property/${property._id}`}>Edit Property</Link>
              <button onClick={()=>handleDelete(property._id)} className='btn btn-danger w-100 rounded-pill'>Delete</button>
              </div>
          </div>
 
      </div>
        ))
      )
        }
      </div>
      </div>
    </div>
  )
}

export default AdminDashboard