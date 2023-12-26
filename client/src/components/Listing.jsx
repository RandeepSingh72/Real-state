import React from 'react'
import drhWebp from '../assets/images/drh.webp';
import drhWebp1 from '../assets/images/drh-1.webp';
import drhWebp2 from '../assets/images/drh-2.webp';
import { Link } from 'react-router-dom';
 
const Listing = () => {
  return (
    <div>
       <section className="artists-section section-padding" id="section_3" style={{background: '#ebebeb'}}>
            <div className="container">
                <div className="row justify-content-center">
                    <h2 className="text-dark text-center mb-5">Listing </h2>
                    <div className="col-lg-4 col-12 m-2">
                        <div className="shad p-3" style={{backgroundColor: 'white'}}>

                            <div className="artists-image-wrap">
                                <img src={drhWebp} className="artists-image img-fluid" />
                            </div>
                            <div className="py-3">
                            <button type="button" class="btn btn-primary btn-sm my-2">For Sale</button>
                                <h4>1995 Houston HomeStay</h4>
                                <p><i className="bi bi-pin-map-fill"></i> 777 Walker Street, Houston, Texas</p>
                                
                                <ul className="p-0 list-point">
                                    <li><i className="bi bi-segmented-nav"></i> <strong>3 Bed</strong> </li>
                                    <li><i className="bi bi-arrows-angle-expand"></i> <strong>3429 SQ.Ft</strong></li>
                                </ul>
                                
                            </div>
                            <Link className="btn custom-btn w-100 smoothscroll" to={'/listing-page/:id'}>View Listing</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
  )
}

export default Listing