import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart } from '@fortawesome/free-solid-svg-icons';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import FAQs from './components/FAQs';
import Profile from './components/Profile';  
import Wishlist from './components/Wishlist'; 
import SignUp from './components/SignUp'; 
import './App.css';

function App() {
  const [wishlist, setWishlist] = useState([]);

  const removeFromWishlist = (placeName) => {
    setWishlist(wishlist.filter((place) => place !== placeName));
  };

  return (
    <Router>
      <div>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/faqs">FAQs</Link>
            </li>
            <li>
              <Link to="/profile">
                <FontAwesomeIcon icon={faUser} />
              </Link>
            </li>
            <li>
              <Link to="/wishlist">
                <FontAwesomeIcon icon={faHeart} />
              </Link>
            </li>
            <li>
              <Link to="/SignUp" className="nav__button">Sign Up</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
