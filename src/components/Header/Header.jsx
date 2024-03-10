import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useLocation } from 'react-router-dom'; // Import useLocation hook
import Nav from '../Nav/Nav';
import Searchbar from '../Searchbar/Searchbar';
import Showbooks from '../ShowBooks/Showbooks';
import './Header.css';

const Header = () => {

  const location = useLocation();
  const { pathname } = location;

  const renderShowbooks = pathname !== '/about';

  return (
    <div className='header-holder'>
      <header className='header'>
        <Nav />
        <div className="header-content flex flex-content-center">
          <h2 className='header-title text-capitalize'>Explore New Books!</h2>
          <p className='header-text fs-18 fw-3'>
            Embark on a literary journey and explore a world of captivating stories. Whether you're
            drawn to thrilling adventures, heartwarming tales, or thought-provoking narratives,
            our vast collection has something for every reader. 
          </p>

          <div className="social-icons">
            <FaTwitter className="icon" />
            <FaFacebook className="icon" />
            <FaInstagram className="icon" />
            <FaLinkedin className="icon" />
          </div>
          
          <Searchbar/>
        </div>
        {renderShowbooks && <Showbooks />} 
      </header>
    </div>
  );
}

export default Header;
