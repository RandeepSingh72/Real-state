import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="site-footer pt-5">
    <div className="container">
        <div className="row">

            <div className="col-lg-6 col-12 mb-4 pb-2">
                <h5 className="site-footer-title mb-3">Links</h5>

                <ul className="site-footer-links">
                    <li className="site-footer-link-item">
                        <Link to={'/'} className="site-footer-link">Home</Link>
                    </li>

                    <li className="site-footer-link-item">
                        <Link to={'/about-page'} className="site-footer-link">About</Link>
                    </li>

                    <li className="site-footer-link-item">
                        <Link to={'/team-page'} className="site-footer-link">Team</Link>
                    </li>

                    <li className="site-footer-link-item">
                        <Link to={'/neighbourhoods'} className="site-footer-link">Neighbourhoods</Link>
                    </li>

                    <li className="site-footer-link-item">
                        <Link to={'/listing-page'} className="site-footer-link">Listing</Link>
                    </li>
                    <li className="site-footer-link-item">
                        <Link to={'/services'} className="site-footer-link">Services</Link>
                    </li>

                    <li className="site-footer-link-item">
                        <Link to={'/contact'} className="site-footer-link">Contact</Link>
                    </li>
                </ul>
            </div>

            <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                <h5 className="site-footer-title mb-3">Have a question?</h5>

                <p className="text-white d-flex mb-1">
                    <Link to={"tel: 090-080-0760"} className="site-footer-link">
                        365-338-7653 
                    </Link>
                </p>

                <p className="text-white d-flex">
                    <Link to={"mailto:hello@company.com"} className="site-footer-link" >
                        janetshiwramrealty@gmail.com 
                    </Link>
                </p>
            </div>

            <div className="col-lg-3 col-md-6 col-11 mb-4 mb-lg-0 mb-md-0">
                <h5 className="site-footer-title mb-3">Location</h5>

                <p className="text-white d-flex mt-3 mb-2">
                    1339 Matheson Blvd. E., Mississauga, ON  L4W 1R1 </p>

                <Link className="link-fx-1 color-contrast-higher mt-3" to={'/'}>
                    <span>Our Maps</span>
                    <svg className="icon" viewBox="0 0 32 32" aria-hidden="true">
                        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="16" cy="16" r="15.5"></circle>
                            <line x1="10" y1="18" x2="16" y2="12"></line>
                            <line x1="16" y1="12" x2="22" y2="18"></line>
                        </g>
                    </svg>
                </Link>
            </div>
        </div>
    </div>

    <div className="site-footer-bottom">
        <div className="container">
            <div className="row">

                <div className="col-lg-3 col-12 mt-2">
                    <p className="copyright-text">Copyright © 2024| Design and Developed by JD Web Services</p>
                </div>

                <div className="col-lg-8 col-12 mt-lg-5">
                    
                </div>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer