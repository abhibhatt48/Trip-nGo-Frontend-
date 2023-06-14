import React from 'react';
import image1 from './images/image1.jpeg';
import './ContactUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';



function ContactUs() {
  return (
    <div className="contact-us" style={{ backgroundImage: `url(${image1})` }}>
      <h1>Contact Us</h1>
      <form>
        <label>
          <span>Name</span>
          <input type="text" name="name" placeholder="Your Name" />
        </label>
        <label>
          <span>Email</span>
          <input type="email" name="email" placeholder="Your Email" />
        </label>
        <label>
          <span>Message</span>
          <textarea name="message" placeholder="Your Message"></textarea>
        </label>
        <button type="submit">Send Message</button>
      </form>

      <div className="footer">
        <p>&copy; 2023 - Our Travel Packages App. All rights reserved.</p>
        <div className="footer-icons">
          <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#"><FontAwesomeIcon icon={faEnvelope} /></a>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
