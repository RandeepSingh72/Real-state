import React from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Components
import Navbar from './components/Navbar';

// import Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Team from './pages/Team';
import MarketPage from './pages/MarketPage';
import MarketDetailPage from './pages/MarketDetailPage';
import ListingPage from './pages/ListingPage';
import ListingDetailPage from './pages/ListingDetailPage';
import ServicePage from './pages/ServicePage';
import ContactPage from './pages/ContactPage';
import AdminLogin from './admin/AdminLogin';
import AdminDashboard from './admin/AdminDashboard';
import Admin from './admin/Admin';
import AdminListing from './admin/AdminListing';

function App() {
  const location = useLocation();

  const shouldShowNavbar = () => {
    return !location.pathname.includes('/admin');
  };


  return (
    <div>
      {shouldShowNavbar() && <Navbar />}
    <Routes>
      {/** Public Routes */}
      <Route index path='/' element={<HomePage/>}/>
      <Route path='/about-page' element={<AboutPage/>}/>
      <Route path='/team-page' element={<Team/>}/>
      <Route path='/neighbourhoods' element={<MarketPage/>}/>
      <Route path='/neighbourhoods/:id' element={<MarketDetailPage/>}/>
      <Route path='/listing-page' element={<ListingPage/>}/>
      <Route path='/listing-page/:id' element={<ListingDetailPage/>}/>
      <Route path='/services' element={<ServicePage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/admin-login' element={<AdminLogin/>} />
      
      {/** Admin Routes */}
      <Route path='/admin' element={<Admin/>}>
      <Route path='admin-dashboard' element={<AdminDashboard/>}/>
      <Route path='admin-listing' element={<AdminListing/>}/>
      </Route>

    </Routes>
    </div>
  )
}

export default App
