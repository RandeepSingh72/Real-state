import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import adminLogo from '../assets/admin.svg';
import { isLoggedIn } from '../auth';

const Navbar = () => {
    const [isSticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const offset = window.scrollY;
          if (offset > 50) {
            setSticky(true);
          } else {
            setSticky(false);
          }
    }
     window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
     };
    }, []);

  return (
    <div className='sticky-wrapper' id='sticky-wrapper'>
        <nav className={`navbar navbar-expand-lg ${isSticky ? 'fixed-top bg-black' : ''}`}>
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={logo} className="img-fluid w130 d-inline" />
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav align-items-lg-center text-uppercase ms-auto me-lg-5">
                        <li className="nav-item">
                            <Link className="nav-link " to={'/'}>Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link " to={'/about-page'}>About</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link " to={'/team-page'}>Team</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link " to={'/neighbourhoods'}>Neighbourhoods</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link " to={'/listing-page'}>Listing</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to={'/contact'}>Contact</Link>
                        </li>

                        <li className="nav-item">
                            <Link className='admin' to={isLoggedIn ? '/admin/admin-dashboard' : '/admin-login'}>
                                <img src={adminLogo} alt="admin" />
                            </Link>
                        </li>
                    </ul>

               </div>
               
            </div>
        </nav>
        </div>
  )
}

export default Navbar;